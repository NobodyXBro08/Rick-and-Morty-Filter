import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "./Header";
import FilterBar from "./FilterBar";
import CharacterGrid from "./CharacterGrid";
import Pagination from "./Pagination";
import { toast } from "@/hooks/use-toast";

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Filters {
  name: string;
  status: string;
  gender: string;
  location: string;
  episode: string;
  sortBy: string;
}

interface LocationOption {
  name: string;
  url: string;
}

export interface EpisodeOption {
  id: number;
  name: string;
  episode: string;
}

const fetchAllCharacters = async (filters: Filters): Promise<Character[]> => {
  const params = new URLSearchParams();
  if (filters.name) params.append("name", filters.name);
  if (filters.status && filters.status !== "all") params.append("status", filters.status);
  if (filters.gender && filters.gender !== "all") params.append("gender", filters.gender);

  let allResults: Character[] = [];
  let nextUrl: string | null = `https://rickandmortyapi.com/api/character?${params.toString()}`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    if (!response.ok) break;
    const data = await response.json();
    allResults = allResults.concat(data.results);
    nextUrl = data.info.next;
  }

  return allResults;
};

const fetchLocations = async (): Promise<LocationOption[]> => {
  const urls = [
    "https://rickandmortyapi.com/api/location?page=1",
    "https://rickandmortyapi.com/api/location?page=2",
    "https://rickandmortyapi.com/api/location?page=3",
  ];

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const jsons = await Promise.all(responses.map((res) => res.json()));
  const allLocations = jsons.flatMap((data) => data.results);

  return allLocations.map((location: { name: string; url: string }) => ({
    name: location.name,
    url: location.url,
  }));
};

const fetchEpisodes = async (): Promise<EpisodeOption[]> => {
  let results: EpisodeOption[] = [];
  let nextUrl: string | null = "https://rickandmortyapi.com/api/episode";

  while (nextUrl) {
    const response = await fetch(nextUrl);
    if (!response.ok) break;

    const data = await response.json();
    const mapped = data.results.map(
      (episode: { id: number; name: string; episode: string }) => ({
        id: episode.id,
        name: episode.name,
        episode: episode.episode,
      })
    );

    results = results.concat(mapped);
    nextUrl = data.info.next;
  }

  return results;
};

const sortCharacters = (
  characters: Character[],
  sortBy: string
): Character[] => {
  if (sortBy === "alphabetical") {
    return [...characters].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "gender") {
    const genderOrder = { Male: 1, Female: 2, unknown: 3, Genderless: 4 };
    return [...characters].sort((a, b) => {
      return (genderOrder[a.gender] || 5) - (genderOrder[b.gender] || 5);
    });
  }
  return characters;
};

const filterCharacters = (
  characters: Character[],
  filters: Filters
): Character[] => {
  return characters.filter((character) => {
    if (
      filters.location &&
      filters.location !== "all" &&
      character.location.name !== filters.location
    ) {
      return false;
    }

    if (filters.episode && filters.episode !== "all") {
      const hasEpisode = character.episode.some((episodeUrl) => {
        const epId = episodeUrl.split("/").pop();
        return epId === filters.episode;
      });
      if (!hasEpisode) {
        return false;
      }
    }

    return true;
  });
};

const RickAndMortyExplorer = () => {
  const [filters, setFilters] = useState<Filters>({
    name: "",
    status: "all",
    gender: "all",
    location: "all",
    episode: "all",
    sortBy: "none",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { data: allCharacters, isLoading, error, isError } = useQuery({
    queryKey: ["characters", filters],
    queryFn: () => fetchAllCharacters(filters),
    staleTime: 5 * 60 * 1000,
  });

  const { data: locations } = useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    staleTime: 10 * 60 * 1000,
  });

  const { data: episodes } = useQuery({
    queryKey: ["episodes"],
    queryFn: fetchEpisodes,
    staleTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (isError && error) {
      console.error("Query error:", error);
      toast({
        title: "Error fetching characters",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  }, [isError, error]);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let processedCharacters = allCharacters || [];
  processedCharacters = filterCharacters(processedCharacters, filters);
  processedCharacters = sortCharacters(processedCharacters, filters.sortBy);

  const charactersPerPage = 20;
  const totalPages = Math.ceil(processedCharacters.length / charactersPerPage);
  const paginatedCharacters = processedCharacters.slice(
    (currentPage - 1) * charactersPerPage,
    currentPage * charactersPerPage
  );

  return (
    <div className="min-h-screen bg-multiverse-gradient relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* ... background omitted for brevity ... */}
      </div>

      <div className="relative z-10">
        <Header />
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          locations={locations || []}
          episodes={episodes || []}
        />
        <CharacterGrid
          characters={paginatedCharacters}
          isLoading={isLoading}
          isEmpty={processedCharacters.length === 0}
          totalCount={processedCharacters.length}
          episodes={episodes || []}
        />

        <div className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />

            {processedCharacters.length > 0 && (
              <div className="text-center mt-8 p-4 bg-multiverse-dark-800/30 backdrop-blur-sm rounded-lg border border-rick-green-500/20">
                <p className="text-rick-cyan-400 font-orbitron text-sm tracking-wide">
                  <span className="text-rick-green-500 font-semibold">
                    DIMENSION C-137:
                  </span>{" "}
                  Página {currentPage} de {totalPages}
                </p>
                <p className="text-portal-blue-400 font-exo text-xs mt-1 opacity-80">
                  ({processedCharacters.length} personajes descubiertos en el multiverso)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-portal-gradient opacity-3 rounded-full blur-3xl animate-portal-spin pointer-events-none -z-10"></div>
    </div>
  );
};

export default RickAndMortyExplorer;
