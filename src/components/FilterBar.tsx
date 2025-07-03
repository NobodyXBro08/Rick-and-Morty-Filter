import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
  origins: OriginOption[];
  locations: LocationOption[];
  episodes: EpisodeOption[];
}

const FilterBar = ({
  filters,
  onFilterChange,
  origins,
  locations,
  episodes,
}: FilterBarProps) => {
  return (
    <div className="px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-rick-green-500/20 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            <div className="relative">
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                SEARCH CHARACTER
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rick-green-500/60 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Enter character name..."
                  value={filters.name}
                  onChange={(e) => onFilterChange({ name: e.target.value })}
                  className="pl-10 bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-400 focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo"
                />
              </div>
            </div>

            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                STATUS
              </label>
              <Select
                value={filters.status}
                onValueChange={(value) => onFilterChange({ status: value })}
              >
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white z-50">
                  <SelectItem
                    value="all"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    All Status
                  </SelectItem>
                  <SelectItem
                    value="alive"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Alive
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="dead"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Dead
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="unknown"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Unknown
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                GENDER
              </label>
              <Select
                value={filters.gender}
                onValueChange={(value) => onFilterChange({ gender: value })}
              >
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white z-50">
                  <SelectItem
                    value="all"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    All Genders
                  </SelectItem>
                  <SelectItem
                    value="male"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    Male
                  </SelectItem>
                  <SelectItem
                    value="female"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    Female
                  </SelectItem>
                  <SelectItem
                    value="genderless"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    Genderless
                  </SelectItem>
                  <SelectItem
                    value="unknown"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    Unknown
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                SORT BY
              </label>
              <Select
                value={filters.sortBy}
                onValueChange={(value) => onFilterChange({ sortBy: value })}
              >
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white z-50">
                  <SelectItem
                    value="none"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    Default
                  </SelectItem>
                  <SelectItem
                    value="alphabetical"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    Alphabetical
                  </SelectItem>
                  <SelectItem
                    value="gender"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    By Gender
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                ORIGIN
              </label>
              <Select
                value={filters.origin}
                onValueChange={(value) => onFilterChange({ origin: value })}
              >
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Select origin" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white z-50 max-h-60">
                  <SelectItem
                    value="all"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    All Origins
                  </SelectItem>
                  {origins.map((origin, index) => (
                    <SelectItem
                      key={`${origin.name}-${index}`}
                      value={origin.name}
                      className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                    >
                      {origin.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                LOCATION
              </label>
              <Select
                value={filters.location}
                onValueChange={(value) => onFilterChange({ location: value })}
              >
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white z-50 max-h-60">
                  <SelectItem
                    value="all"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    All Locations
                  </SelectItem>
                  {locations.map((location, index) => (
                    <SelectItem
                      key={`${location.name}-${index}`}
                      value={location.name}
                      className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                    >
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                EPISODE
              </label>
              <Select
                value={filters.episode}
                onValueChange={(value) => onFilterChange({ episode: value })}
              >
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Select episode" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white z-50 max-h-60">
                  <SelectItem
                    value="all"
                    className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                  >
                    All Episodes
                  </SelectItem>
                  {episodes.map((episode) => (
                    <SelectItem
                      key={episode.id}
                      value={episode.id.toString()}
                      className="focus:bg-rick-green-500/20 focus:text-rick-green-500"
                    >
                      {episode.episode} - {episode.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
