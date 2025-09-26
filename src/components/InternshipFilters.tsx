import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { availableStudentYears, categories, studentYearLabels } from "@/data/internships";
import { Search, Filter, X } from "lucide-react";

interface FilterState {
  studentYear: number | null;
  category: string;
  search: string;
}

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  resultsCount: number;
}

export const InternshipFilters = ({ filters, onFiltersChange, resultsCount }: FiltersProps) => {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      studentYear: null,
      category: 'all',
      search: ''
    });
  };

  const hasActiveFilters = filters.studentYear !== null || 
                          filters.category !== 'all' || 
                          filters.search !== '';

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold">Filter Internships</h3>
            <Badge variant="outline" className="ml-2">
              {resultsCount} {resultsCount === 1 ? 'result' : 'results'}
            </Badge>
          </div>
          {hasActiveFilters && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearFilters}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
          {/* Search */}
          <div className="relative xl:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search companies, titles..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Student Year Filter */}
          <div>
            <Select 
              value={filters.studentYear?.toString() || 'all'} 
              onValueChange={(value) => updateFilter('studentYear', value === 'all' ? null : parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Student Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {availableStudentYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {studentYearLabels[year]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div>
            <Select 
              value={filters.category} 
              onValueChange={(value) => updateFilter('category', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
            <span className="text-sm text-gray-600 self-center">Active filters:</span>
            {filters.studentYear && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {studentYearLabels[filters.studentYear]}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-red-500" 
                  onClick={() => updateFilter('studentYear', null)}
                />
              </Badge>
            )}
            {filters.category !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {categories.find(c => c.id === filters.category)?.label}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-red-500" 
                  onClick={() => updateFilter('category', 'all')}
                />
              </Badge>
            )}
            {filters.search && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: "{filters.search}"
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-red-500" 
                  onClick={() => updateFilter('search', '')}
                />
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};