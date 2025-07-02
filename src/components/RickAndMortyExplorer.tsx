
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from './Header';
import FilterBar from './FilterBar';
import CharacterGrid from './CharacterGrid';
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
}

const fetchCharacters = async (filters: Filters): Promise<ApiResponse> => {
  const params = new URLSearchParams();
  
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

const RickAndMortyExplorer = () => {
  const [filters, setFilters] = useState<Filters>({
    name: '',
    status: 'all',
    gender: 'all'
  });

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['characters', filters],
    queryFn: () => fetchCharacters(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
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
  };

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
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        <CharacterGrid 
          characters={data?.results || []} 
          isLoading={isLoading} 
          isEmpty={data?.results?.length === 0}
        />
      </div>
    </div>
  );
};

export default RickAndMortyExplorer;
