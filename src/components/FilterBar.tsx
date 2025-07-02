
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Filters {
  name: string;
  status: string;
  gender: string;
}

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
}

const FilterBar = ({ filters, onFilterChange }: FilterBarProps) => {
  return (
    <div className="px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-rick-green-500/20 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Search Input */}
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

            {/* Status Filter */}
            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                STATUS
              </label>
              <Select value={filters.status} onValueChange={(value) => onFilterChange({ status: value })}>
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">All Status</SelectItem>
                  <SelectItem value="alive" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Alive
                    </div>
                  </SelectItem>
                  <SelectItem value="dead" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Dead
                    </div>
                  </SelectItem>
                  <SelectItem value="unknown" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      Unknown
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Gender Filter */}
            <div>
              <label className="block text-rick-green-500 font-exo font-semibold text-sm mb-2 tracking-wide">
                GENDER
              </label>
              <Select value={filters.gender} onValueChange={(value) => onFilterChange({ gender: value })}>
                <SelectTrigger className="bg-slate-800/80 border-slate-700 text-white focus:border-rick-green-500 focus:ring-rick-green-500/20 font-exo">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">All Genders</SelectItem>
                  <SelectItem value="male" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">Male</SelectItem>
                  <SelectItem value="female" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">Female</SelectItem>
                  <SelectItem value="genderless" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">Genderless</SelectItem>
                  <SelectItem value="unknown" className="focus:bg-rick-green-500/20 focus:text-rick-green-500">Unknown</SelectItem>
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
