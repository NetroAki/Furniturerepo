import { FurnitureItem } from '@/types/furniture';

// Sample UK furniture data
// In production, this would come from a database or API
export const furnitureData: FurnitureItem[] = [
  {
    id: '1',
    name: 'Nordic Oak Dining Table',
    category: 'dining',
    brand: 'Scandinavian Living',
    price: 649.99,
    dimensions: { width: 180, depth: 90, height: 75 },
    material: 'wood',
    color: 'natural',
    style: 'scandinavian',
    description: 'Beautiful solid oak dining table with clean lines',
    inStock: true,
    retailer: 'FurnitureVillage',
    url: 'https://example.com',
  },
  {
    id: '2',
    name: 'Velvet Chesterfield Sofa',
    category: 'sofa',
    brand: 'Classic Comfort',
    price: 1299.99,
    dimensions: { width: 220, depth: 90, height: 78 },
    material: 'velvet',
    color: 'blue',
    style: 'traditional',
    description: 'Luxurious velvet sofa with button tufting',
    inStock: true,
    retailer: 'John Lewis',
  },
  {
    id: '3',
    name: 'Industrial Metal Bookshelf',
    category: 'shelving',
    brand: 'Urban Factory',
    price: 299.99,
    dimensions: { width: 120, depth: 35, height: 180 },
    material: 'metal',
    color: 'black',
    style: 'industrial',
    description: 'Sturdy metal frame with wood shelves',
    inStock: true,
    retailer: 'Made.com',
  },
  {
    id: '4',
    name: 'Mid-Century Walnut Desk',
    category: 'desk',
    brand: 'Retro Office',
    price: 549.99,
    dimensions: { width: 140, depth: 70, height: 75 },
    material: 'wood',
    color: 'brown',
    style: 'mid-century',
    description: 'Elegant walnut desk with tapered legs',
    inStock: false,
    retailer: 'West Elm',
  },
  {
    id: '5',
    name: 'Minimalist White Wardrobe',
    category: 'storage',
    brand: 'Pure Design',
    price: 899.99,
    dimensions: { width: 200, depth: 60, height: 220 },
    material: 'wood',
    color: 'white',
    style: 'minimalist',
    description: 'Spacious wardrobe with sliding doors',
    inStock: true,
    retailer: 'IKEA',
  },
  {
    id: '6',
    name: 'Leather Executive Chair',
    category: 'chair',
    brand: 'ErgoComfort',
    price: 449.99,
    dimensions: { width: 70, depth: 70, height: 120 },
    material: 'leather',
    color: 'black',
    style: 'modern',
    description: 'Ergonomic office chair with lumbar support',
    inStock: true,
    retailer: 'Staples',
  },
  {
    id: '7',
    name: 'Rustic Farmhouse Table',
    category: 'table',
    brand: 'Countryside',
    price: 599.99,
    dimensions: { width: 200, depth: 100, height: 76 },
    material: 'wood',
    color: 'brown',
    style: 'rustic',
    description: 'Reclaimed wood table with character',
    inStock: true,
    retailer: 'Wayfair',
  },
  {
    id: '8',
    name: 'Contemporary Glass Coffee Table',
    category: 'table',
    brand: 'Modern Living',
    price: 349.99,
    dimensions: { width: 120, depth: 60, height: 45 },
    material: 'glass',
    color: 'grey',
    style: 'contemporary',
    description: 'Tempered glass top with chrome base',
    inStock: true,
    retailer: 'Argos',
  },
  {
    id: '9',
    name: 'Fabric Corner Sofa',
    category: 'sofa',
    brand: 'Cozy Home',
    price: 1499.99,
    dimensions: { width: 280, depth: 220, height: 85 },
    material: 'fabric',
    color: 'grey',
    style: 'contemporary',
    description: 'Large corner sofa perfect for families',
    inStock: true,
    retailer: 'DFS',
  },
  {
    id: '10',
    name: 'Rattan Garden Chair',
    category: 'outdoor',
    brand: 'Garden Bliss',
    price: 199.99,
    dimensions: { width: 70, depth: 75, height: 90 },
    material: 'rattan',
    color: 'natural',
    style: 'contemporary',
    description: 'Weather-resistant outdoor seating',
    inStock: true,
    retailer: 'B&Q',
  },
  {
    id: '11',
    name: 'King Size Upholstered Bed',
    category: 'bed',
    brand: 'Dreams',
    price: 899.99,
    dimensions: { width: 180, depth: 210, height: 120 },
    material: 'fabric',
    color: 'grey',
    style: 'modern',
    description: 'Comfortable upholstered bed frame',
    inStock: true,
    retailer: 'Dreams',
  },
  {
    id: '12',
    name: 'Scandinavian Dining Chairs (Set of 4)',
    category: 'dining',
    brand: 'Nordic Home',
    price: 399.99,
    dimensions: { width: 50, depth: 55, height: 82 },
    material: 'wood',
    color: 'white',
    style: 'scandinavian',
    description: 'Set of four elegant dining chairs',
    inStock: true,
    retailer: 'Made.com',
  },
];

export function filterFurniture(
  items: FurnitureItem[],
  filters: {
    selectedCategories: string[];
    selectedMaterials: string[];
    selectedColors: string[];
    selectedStyles: string[];
    priceRange: { min: number; max: number };
    dimensionRanges: {
      width: { min: number; max: number };
      depth: { min: number; max: number };
      height: { min: number; max: number };
    };
    inStockOnly: boolean;
    searchQuery: string;
  }
): FurnitureItem[] {
  return items.filter((item) => {
    // Category filter
    if (
      filters.selectedCategories.length > 0 &&
      !filters.selectedCategories.includes(item.category)
    ) {
      return false;
    }

    // Material filter
    if (
      filters.selectedMaterials.length > 0 &&
      !filters.selectedMaterials.includes(item.material)
    ) {
      return false;
    }

    // Color filter
    if (
      filters.selectedColors.length > 0 &&
      !filters.selectedColors.includes(item.color)
    ) {
      return false;
    }

    // Style filter
    if (
      filters.selectedStyles.length > 0 &&
      !filters.selectedStyles.includes(item.style)
    ) {
      return false;
    }

    // Price filter
    if (item.price < filters.priceRange.min || item.price > filters.priceRange.max) {
      return false;
    }

    // Dimension filters
    if (
      item.dimensions.width < filters.dimensionRanges.width.min ||
      item.dimensions.width > filters.dimensionRanges.width.max ||
      item.dimensions.depth < filters.dimensionRanges.depth.min ||
      item.dimensions.depth > filters.dimensionRanges.depth.max ||
      item.dimensions.height < filters.dimensionRanges.height.min ||
      item.dimensions.height > filters.dimensionRanges.height.max
    ) {
      return false;
    }

    // Stock filter
    if (filters.inStockOnly && !item.inStock) {
      return false;
    }

    // Search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const searchableText = `${item.name} ${item.brand} ${item.category} ${item.material} ${item.style} ${item.description}`.toLowerCase();
      if (!searchableText.includes(query)) {
        return false;
      }
    }

    return true;
  });
}
