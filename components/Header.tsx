import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold hover:text-blue-100 transition-colors">
              FurniturePicker
            </Link>
            <span className="text-xs bg-blue-500 px-2 py-1 rounded">UK</span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-100 transition-colors">
              Browse
            </Link>
            <Link href="/categories" className="hover:text-blue-100 transition-colors">
              Categories
            </Link>
            <Link href="/guides" className="hover:text-blue-100 transition-colors">
              Guides
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-sm hover:text-blue-100 transition-colors">
              🌍 Region: UK
            </button>
          </div>
        </div>

        {/* Secondary Navigation - PCPartPicker style */}
        <div className="border-t border-blue-500 py-3">
          <div className="flex space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-100 transition-colors flex items-center">
              <span className="mr-1">🛋️</span> All Furniture
            </Link>
            <Link href="/category/sofa" className="hover:text-blue-100 transition-colors">
              Sofas
            </Link>
            <Link href="/category/table" className="hover:text-blue-100 transition-colors">
              Tables
            </Link>
            <Link href="/category/chair" className="hover:text-blue-100 transition-colors">
              Chairs
            </Link>
            <Link href="/category/storage" className="hover:text-blue-100 transition-colors">
              Storage
            </Link>
            <Link href="/category/bed" className="hover:text-blue-100 transition-colors">
              Beds
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
