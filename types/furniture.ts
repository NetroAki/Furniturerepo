// Furniture data types and interfaces

export type FurnitureCategory =
  | 'sofa'
  | 'chair'
  | 'table'
  | 'bed'
  | 'desk'
  | 'storage'
  | 'shelving'
  | 'dining'
  | 'outdoor';

export type Material =
  | 'wood'
  | 'metal'
  | 'fabric'
  | 'leather'
  | 'glass'
  | 'plastic'
  | 'marble'
  | 'rattan'
  | 'velvet'
  | 'mixed';

export type Color =
  | 'black'
  | 'white'
  | 'grey'
  | 'brown'
  | 'beige'
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'natural'
  | 'multicolor';

export type Style =
  | 'modern'
  | 'contemporary'
  | 'traditional'
  | 'scandinavian'
  | 'industrial'
  | 'minimalist'
  | 'vintage'
  | 'rustic'
  | 'mid-century';

export interface Dimensions {
  width: number;  // in cm
  depth: number;  // in cm
  height: number; // in cm
}

export interface FurnitureItem {
  id: string;
  name: string;
  category: FurnitureCategory;
  brand: string;
  price: number; // in GBP (or base currency)
  dimensions: Dimensions;
  material: Material;
  color: Color;
  style: Style;
  description: string;
  imageUrl?: string;
  inStock: boolean;
  retailer: string;
  url?: string;
  // Future: add locale-specific pricing and availability
  localeData?: {
    [locale: string]: {
      price: number;
      inStock: boolean;
      url?: string;
    };
  };
}

export interface FilterOptions {
  categories: FurnitureCategory[];
  materials: Material[];
  colors: Color[];
  styles: Style[];
  priceRange: {
    min: number;
    max: number;
  };
  dimensionRanges: {
    width: { min: number; max: number };
    depth: { min: number; max: number };
    height: { min: number; max: number };
  };
  inStockOnly: boolean;
}

export interface FilterState {
  selectedCategories: FurnitureCategory[];
  selectedMaterials: Material[];
  selectedColors: Color[];
  selectedStyles: Style[];
  priceRange: {
    min: number;
    max: number;
  };
  dimensionRanges: {
    width: { min: number; max: number };
    depth: { min: number; max: number };
    height: { min: number; max: number };
  };
  inStockOnly: boolean;
  searchQuery: string;
}
