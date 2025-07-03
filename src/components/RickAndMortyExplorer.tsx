
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from './Header';
import FilterBar from './FilterBar';
import CharacterGrid from './CharacterGrid';
import Pagination from './Pagination';
import { toast } from '@/hooks/use-toast';

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
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

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

interface Filters {
  name: string;
  status: string;
  gender: string;
  origin: string;
  location: string;
  episode: string;
  sortBy: string;
}

interface OriginOption {
  name: string;
  url: string;
}

interface LocationOption {
  name: string;
  url: string;
}

interface EpisodeOption {
  id: number;
  name: string;
  episode: string;
}

const fetchCharacters = async (filters: Filters, page: number = 1): Promise<ApiResponse> => {
  const params = new URLSearchParams();
  
  params.append('page', page.toString());
  if (filters.name) params.append('name', filters.name);
  if (filters.status && filters.status !== 'all') params.append('status', filters.status);
  if (filters.gender && filters.gender !== 'all') params.append('gender', filters.gender);
  
  const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;
  console.log('Fetching from:', url);
  
  const response = await fetch(url);
  
  if (!response.ok) {
    if (response.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
    }
    throw new Error(`Error fetching characters: ${response.status}`);
  }
  
  return response.json();
};

const fetchOrigins = async (): Promise<OriginOption[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/location');
  if (!response.ok) return [];
  const data = await response.json();
  return data.results.map((location: any) => ({
    name: location.name,
    url: location.url
  }));
};

const fetchLocations = async (): Promise<LocationOption[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/location');
  if (!response.ok) return [];
  const data = await response.json();
  return data.results.map((location: any) => ({
    name: location.name,
    url: location.url
  }));
};

const fetchEpisodes = async (): Promise<EpisodeOption[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  if (!response.ok) return [];
  const data = await response.json();
  return data.results.map((episode: any) => ({
    id: episode.id,
    name: episode.name,
    episode: episode.episode
  }));
};

const sortCharacters = (characters: Character[], sortBy: string): Character[] => {
  if (sortBy === 'alphabetical') {
    return [...characters].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'gender') {
    const genderOrder = { 'Male': 1, 'Female': 2, 'unknown': 3, 'Genderless': 4 };
    return [...characters].sort((a, b) => {
      return (genderOrder[a.gender] || 5) - (genderOrder[b.gender] || 5);
    });
  }
  return characters;
};

const filterCharacters = (characters: Character[], filters: Filters): Character[] => {
  return characters.filter(character => {
    // Filter by origin
    if (filters.origin && filters.origin !== 'all' && character.origin.name !== filters.origin) {
      return false;
    }
    
    // Filter by location
    if (filters.location && filters.location !== 'all' && character.location.name !== filters.location) {
      return false;
    }
    
    // Filter by episode
    if (filters.episode && filters.episode !== 'all') {
      const hasEpisode = character.episode.some(episodeUrl => {
        const epId = episodeUrl.split('/').pop();
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
    name: '',
    status: 'all',
    gender: 'all',
    origin: 'all',
    location: 'all',
    episode: 'all',
    sortBy: 'none'
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['characters', filters, currentPage],
    queryFn: () => fetchCharacters(filters, currentPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: origins } = useQuery({
    queryKey: ['origins'],
    queryFn: fetchOrigins,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  const { data: locations } = useQuery({
    queryKey: ['locations'],
    queryFn: fetchLocations,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  const { data: episodes } = useQuery({
    queryKey: ['episodes'],
    queryFn: fetchEpisodes,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  useEffect(() => {
    if (isError && error) {
      console.error('Query error:', error);
      toast({
        title: "Error fetching characters",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  }, [isError, error]);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    console.log('Filter change:', newFilters);
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply client-side filtering and sorting
  let processedCharacters = data?.results || [];
  processedCharacters = filterCharacters(processedCharacters, filters);
  processedCharacters = sortCharacters(processedCharacters, filters.sortBy);

  // Calculate the actual count considering filters
  const hasClientSideFilters = filters.origin !== 'all' || filters.location !== 'all' || filters.episode !== 'all';
  const actualCount = hasClientSideFilters ? processedCharacters.length : (data?.info.count || 0);

  return (
    <div className="min-h-screen bg-space-gradient">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-rick-green-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-portal-blue-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-morty-yellow-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-space-purple-500 rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <FilterBar 
          filters={filters} 
          onFilterChange={handleFilterChange}
          origins={origins || []}
          locations={locations || []}
          episodes={episodes || []}
        />
        <CharacterGrid 
          characters={processedCharacters} 
          isLoading={isLoading} 
          isEmpty={processedCharacters.length === 0}
          totalCount={actualCount}
        />
        
        {/* Pagination */}
        <div className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={data?.info.pages || 1}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />
            
            {/* Results info */}
            {data?.info && (
              <div className="text-center mt-6">
                <p className="text-slate-400 font-exo text-sm">
                  Mostrando página {currentPage} de {data.info.pages} 
                  ({data.info.count} personajes en total)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickAndMortyExplorer;
