import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
import MenuDrawer from './MenuDrawer';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-semibold">Gaurav Khatri</Link>
          </div>
          <button
            className="text-gray-600 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 sm:mr-4 lg:mr-6"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </nav>
      <MenuDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header; 