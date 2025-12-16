'use client';

interface DimensionRangeFilterProps {
  label: string;
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
  unit?: string;
}

export default function DimensionRangeFilter({
  label,
  min,
  max,
  currentMin,
  currentMax,
  onChange,
  unit = 'cm',
}: DimensionRangeFilterProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="flex items-center space-x-2 mb-2">
        <input
          type="number"
          value={currentMin}
          onChange={(e) => onChange(Number(e.target.value), currentMax)}
          className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          min={min}
          max={currentMax}
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">to</span>
        <input
          type="number"
          value={currentMax}
          onChange={(e) => onChange(currentMin, Number(e.target.value))}
          className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          min={currentMin}
          max={max}
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">{unit}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={currentMin}
          onChange={(e) => onChange(Number(e.target.value), currentMax)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 absolute"
          style={{ zIndex: currentMin > max - (max - min) / 4 ? 2 : 1 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={currentMax}
          onChange={(e) => onChange(currentMin, Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </div>
  );
}
