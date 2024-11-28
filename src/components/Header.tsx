import { MapIcon } from '@heroicons/react/24/outline';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-3">
          <MapIcon className="h-8 w-8 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Campus Floor Guide</h1>
            <p className="text-sm text-gray-500">Navigate your way around campus buildings</p>
          </div>
        </div>
      </div>
    </header>
  );
}