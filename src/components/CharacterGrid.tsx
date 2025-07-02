
import React from 'react';
import { Character } from './RickAndMortyExplorer';
import CharacterCard from './CharacterCard';

interface CharacterGridProps {
  characters: Character[];
  isLoading: boolean;
  isEmpty: boolean;
}

const LoadingSkeleton = () => (
  <div className="bg-slate-900/50 rounded-xl overflow-hidden animate-pulse">
    <div className="h-64 bg-slate-700/50"></div>
    <div className="p-5 space-y-3">
      <div className="h-6 bg-slate-700/50 rounded w-3/4"></div>
      <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
      <div className="h-4 bg-slate-700/50 rounded w-2/3"></div>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-20">
    <div className="text-center">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rick-green-500 to-portal-blue-500 flex items-center justify-center opacity-50">
        <span className="text-4xl">👽</span>
      </div>
      <h3 className="font-exo font-bold text-2xl text-white mb-2">No Characters Found</h3>
      <p className="text-slate-400 font-exo">
        Try adjusting your search filters to find more characters from the multiverse!
      </p>
    </div>
  </div>
);

const CharacterGrid = ({ characters, isLoading, isEmpty }: CharacterGridProps) => {
  return (
    <div className="px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Results count */}
        {!isLoading && !isEmpty && (
          <div className="mb-6">
            <p className="text-rick-green-500 font-exo font-semibold text-lg">
              Found {characters.length} character{characters.length !== 1 ? 's' : ''} in the multiverse
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 8 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : isEmpty ? (
            // Empty state
            <EmptyState />
          ) : (
            // Character cards
            characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterGrid;
