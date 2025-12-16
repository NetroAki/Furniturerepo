import { FurnitureItem } from '@/types/furniture';
import { formatPrice } from '@/lib/i18n';

interface FurnitureCardProps {
  item: FurnitureItem;
}

export default function FurnitureCard({ item }: FurnitureCardProps) {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image placeholder */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 h-48 flex items-center justify-center">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl">🛋️</span>
        )}
      </div>

      <div className="p-4">
        {/* Header */}
        <div className="mb-2">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{item.brand}</p>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(item.price)}
          </span>
          {!item.inStock && (
            <span className="ml-2 text-xs text-red-600 dark:text-red-400">Out of Stock</span>
          )}
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Dimensions:</span>
            <span className="font-medium">
              {item.dimensions.width} × {item.dimensions.depth} × {item.dimensions.height} cm
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Material:</span>
            <span className="font-medium capitalize">{item.material}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Style:</span>
            <span className="font-medium capitalize">{item.style}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Color:</span>
            <span className="font-medium capitalize">{item.color}</span>
          </div>
        </div>

        {/* Retailer */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Sold by {item.retailer}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 btn-primary text-sm">
            View Details
          </button>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-sm text-center"
            >
              Visit Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
