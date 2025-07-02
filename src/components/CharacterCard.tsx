
import React from 'react';
import { Character } from './RickAndMortyExplorer';

interface CharacterCardProps {
  character: Character;
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'bg-green-500';
    case 'dead':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return '●';
    case 'dead':
      return '☠️';
    default:
      return '?';
  }
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="group relative bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-rick-green-500/50 hover:shadow-2xl hover:shadow-rick-green-500/10 hover:-translate-y-2">
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-rick-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      
      {/* Character Image */}
      <div className="relative overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${
            character.status === 'Alive' ? 'bg-green-500/80' :
            character.status === 'Dead' ? 'bg-red-500/80' : 'bg-gray-500/80'
          }`}>
            <span className="text-white font-bold">
              {getStatusIcon(character.status)}
            </span>
            {character.status}
          </div>
        </div>
      </div>

      {/* Character Info */}
      <div className="p-5">
        {/* Name */}
        <h3 className="font-exo font-bold text-xl text-white mb-3 group-hover:text-rick-green-500 transition-colors duration-300 line-clamp-2">
          {character.name}
        </h3>

        {/* Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-rick-green-500/80 font-exo text-sm font-semibold">Species:</span>
            <span className="text-slate-300 font-exo text-sm">{character.species}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-rick-green-500/80 font-exo text-sm font-semibold">Gender:</span>
            <span className="text-slate-300 font-exo text-sm">{character.gender}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-rick-green-500/80 font-exo text-sm font-semibold">Origin:</span>
            <span className="text-slate-300 font-exo text-sm truncate">{character.origin.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-rick-green-500/80 font-exo text-sm font-semibold">Location:</span>
            <span className="text-slate-300 font-exo text-sm truncate">{character.location.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-rick-green-500/80 font-exo text-sm font-semibold">Episodes:</span>
            <span className="text-slate-300 font-exo text-sm">{character.episode.length}</span>
          </div>
        </div>

        {/* Decorative border */}
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-rick-green-500/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default CharacterCard;
