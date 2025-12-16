'use client';

import { FilterState, FurnitureCategory, Material, Color, Style } from '@/types/furniture';
import DimensionRangeFilter from './DimensionRangeFilter';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const categories: FurnitureCategory[] = ['sofa', 'chair', 'table', 'bed', 'desk', 'storage', 'shelving', 'dining', 'outdoor'];
  const materials: Material[] = ['wood', 'metal', 'fabric', 'leather', 'glass', 'plastic', 'marble', 'rattan', 'velvet', 'mixed'];
  const colors: Color[] = ['black', 'white', 'grey', 'brown', 'beige', 'blue', 'green', 'red', 'yellow', 'natural', 'multicolor'];
  const styles: Style[] = ['modern', 'contemporary', 'traditional', 'scandinavian', 'industrial', 'minimalist', 'vintage', 'rustic', 'mid-century'];

  const toggleArrayItem = <T,>(array: T[], item: T): T[] => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  return (
    <div className="card p-4 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Filters</h2>

      {/* Search */}
      <div className="filter-section">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Search
        </label>
        <input
          type="text"
          value={filters.searchQuery}
          onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
          placeholder="Search furniture..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Categories */}
      <div className="filter-section">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.selectedCategories.includes(category)}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    selectedCategories: toggleArrayItem(filters.selectedCategories, category),
                  })
                }
                className="mr-2 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Price Range</h3>
        <DimensionRangeFilter
          label=""
          min={0}
          max={5000}
          currentMin={filters.priceRange.min}
          currentMax={filters.priceRange.max}
          onChange={(min, max) =>
            onFilterChange({ ...filters, priceRange: { min, max } })
          }
          unit="£"
        />
      </div>

      {/* Dimensions */}
      <div className="filter-section">
        <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">Dimensions</h3>
        <DimensionRangeFilter
          label="Width"
          min={0}
          max={500}
          currentMin={filters.dimensionRanges.width.min}
          currentMax={filters.dimensionRanges.width.max}
          onChange={(min, max) =>
            onFilterChange({
              ...filters,
              dimensionRanges: { ...filters.dimensionRanges, width: { min, max } },
            })
          }
        />
        <DimensionRangeFilter
          label="Depth"
          min={0}
          max={300}
          currentMin={filters.dimensionRanges.depth.min}
          currentMax={filters.dimensionRanges.depth.max}
          onChange={(min, max) =>
            onFilterChange({
              ...filters,
              dimensionRanges: { ...filters.dimensionRanges, depth: { min, max } },
            })
          }
        />
        <DimensionRangeFilter
          label="Height"
          min={0}
          max={300}
          currentMin={filters.dimensionRanges.height.min}
          currentMax={filters.dimensionRanges.height.max}
          onChange={(min, max) =>
            onFilterChange({
              ...filters,
              dimensionRanges: { ...filters.dimensionRanges, height: { min, max } },
            })
          }
        />
      </div>

      {/* Materials */}
      <div className="filter-section">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Material</h3>
        <div className="space-y-2">
          {materials.map((material) => (
            <label key={material} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.selectedMaterials.includes(material)}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    selectedMaterials: toggleArrayItem(filters.selectedMaterials, material),
                  })
                }
                className="mr-2 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="filter-section">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Color</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <label key={color} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.selectedColors.includes(color)}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    selectedColors: toggleArrayItem(filters.selectedColors, color),
                  })
                }
                className="mr-2 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Styles */}
      <div className="filter-section">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Style</h3>
        <div className="space-y-2">
          {styles.map((style) => (
            <label key={style} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.selectedStyles.includes(style)}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    selectedStyles: toggleArrayItem(filters.selectedStyles, style),
                  })
                }
                className="mr-2 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Stock Filter */}
      <div className="filter-section">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={() =>
              onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly })
            }
            className="mr-2 rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">In Stock Only</span>
        </label>
      </div>

      {/* Reset Button */}
      <button
        onClick={() =>
          onFilterChange({
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
        className="w-full btn-secondary mt-4"
      >
        Reset Filters
      </button>
    </div>
  );
}
