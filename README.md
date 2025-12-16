# FurniturePicker

A furniture comparison and filtering application inspired by PCPartPicker. Find your perfect furniture by filtering dimensions, materials, styles, and more.

## Features

- **Advanced Filtering**: Filter furniture by:
  - Dimensions (width, depth, height) with range sliders
  - Materials (wood, metal, fabric, leather, etc.)
  - Colors
  - Styles (modern, scandinavian, industrial, etc.)
  - Price range
  - In-stock availability
  - Text search

- **PCPartPicker-Inspired Design**: Clean, professional interface with:
  - Blue gradient header with navigation
  - Collapsible filter sidebar
  - Grid view for furniture items
  - Detailed product cards

- **Localization Ready**: Infrastructure in place for multi-country support:
  - Currently defaults to UK market (GBP, metric measurements)
  - Future support for US, Germany, France
  - Country detection utilities
  - Currency and measurement conversion

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hooks** for state management

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Main furniture browser page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── FilterSidebar.tsx   # Filter controls
│   ├── DimensionRangeFilter.tsx  # Range slider component
│   └── FurnitureCard.tsx   # Furniture item display
├── lib/
│   ├── i18n.ts             # Internationalization utilities
│   ├── locale-detection.ts # Country/region detection
│   └── furnitureData.ts    # Sample data and filtering logic
├── types/
│   └── furniture.ts        # TypeScript type definitions
└── next.config.js          # Next.js configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

## Usage

1. **Browse Furniture**: View all available furniture items on the home page
2. **Apply Filters**: Use the sidebar to filter by:
   - Category (sofa, table, chair, bed, etc.)
   - Dimensions (adjust range sliders)
   - Material and color
   - Style preference
   - Price range
3. **Search**: Use the search box to find specific items
4. **Sort**: Sort results by name or price
5. **View Details**: Click on furniture cards to see more details

## Localization Infrastructure

The application is built with future localization in mind:

### Current Implementation

- **Default Market**: UK (GBP, metric)
- **Locale Configs**: Supports en-GB, en-US, de-DE, fr-FR
- **Utilities**:
  - `formatPrice()`: Currency formatting
  - `formatDimension()`: Metric/imperial conversion
  - `detectCountry()`: Country detection from headers/cookies

### Future Enhancements

To add full localization support:

1. **Add Middleware** (`middleware.ts`):
   ```typescript
   import { NextResponse } from 'next/server';
   import { detectCountry } from '@/lib/locale-detection';

   export function middleware(request) {
     const country = detectCountry(request.headers);
     // Redirect or set locale based on country
   }
   ```

2. **Add Locale-Specific Data**: Update `FurnitureItem` type to include:
   ```typescript
   localeData: {
     'en-GB': { price: 649.99, inStock: true },
     'en-US': { price: 799.99, inStock: true },
   }
   ```

3. **Deploy with Edge Functions**: Use Vercel/Cloudflare for geo-location headers

## Sample Data

The application includes 12 sample furniture items covering various categories:
- Sofas and chairs
- Dining and coffee tables
- Beds and storage
- Desks and shelving
- Outdoor furniture

To add more data, edit `lib/furnitureData.ts`.

## Design Language

Following PCPartPicker's design principles:

- **Color Scheme**: Blue primary color (#3B82F6)
- **Typography**: System fonts for performance
- **Layout**: Sidebar + main content grid
- **Components**: Card-based design with hover effects
- **Responsive**: Mobile-first approach

## Contributing

When adding new features:

1. Update TypeScript types in `types/`
2. Follow the existing component structure
3. Ensure localization compatibility
4. Test with various filter combinations

## Future Roadmap

- [ ] Add user accounts and saved searches
- [ ] Implement comparison tool (side-by-side)
- [ ] Add room visualizer (AR/3D)
- [ ] Integrate with retailer APIs for real-time data
- [ ] Add reviews and ratings
- [ ] Implement full multi-country support
- [ ] Add furniture compatibility recommendations
- [ ] Build mobile app

## License

ISC
