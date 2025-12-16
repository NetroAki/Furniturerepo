'use client';

import { useState, useMemo } from 'react';
import FilterSidebar from '@/components/FilterSidebar';
import FurnitureCard from '@/components/FurnitureCard';
import { FilterState } from '@/types/furniture';
import { furnitureData, filterFurniture } from '@/lib/furnitureData';

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    selectedCategories: [],
    selectedMaterials: [],
    selectedColors: [],
    selectedStyles: [],
    priceRange: { min: 0, max: 5000 },
    dimensionRanges: {
      width: { min: 0, max: 500 },
      depth: { min: 0, max: 300 },
      height: { min: 0, max: 300 },
    },
    inStockOnly: false,
    searchQuery: '',
  });

  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');

  const filteredItems = useMemo(() => {
    let items = filterFurniture(furnitureData, filters);

    // Sort items
    items.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return items;
  }, [filters, sortBy]);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Perfect Furniture
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Compare furniture from top UK retailers. Filter by size, material, style, and more.
          </p>
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              🇬🇧 Showing UK products and prices
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="card p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
                  </h2>
                  {filters.searchQuery && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Results for "{filters.searchQuery}"
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-700 dark:text-gray-300">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                  >
                    <option value="name">Name</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <FurnitureCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="card p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No furniture found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      selectedCategories: [],
                      selectedMaterials: [],
                      selectedColors: [],
                      selectedStyles: [],
                      priceRange: { min: 0, max: 5000 },
                      dimensionRanges: {
                        width: { min: 0, max: 500 },
                        depth: { min: 0, max: 300 },
                        height: { min: 0, max: 300 },
                      },
                      inStockOnly: false,
                      searchQuery: '',
                    })
                  }
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
