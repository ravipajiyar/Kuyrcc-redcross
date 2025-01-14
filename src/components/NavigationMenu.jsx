// NavigationMenu.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavigationMenu = () => {
  const menuItems = [
    { title: 'HAPPENING NOW', path: '/happening-now' },
    { title: 'OUR WORK', path: '/our-work' },
    { title: 'WHO WE ARE', path: '/whoweare' },
    { title: 'GET INVOLVED', path: '/get-involved' },
    { title: 'OUR PROMISE', path: '/our-promise' },
    { title: 'RESOURCES', path: '/resources' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

  return (
    <div className="w-full bg-white border-b border-gray-200 mt-16 md:mt-20 relative">
      <div className="container mx-auto px-4 md:px-8 py-2 flex justify-between items-center md:justify-start">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-800 focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Full Screen Overlay Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-30 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 flex justify-end border-b border-gray-300">
            <button onClick={closeMenu}>
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className="p-4 flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block text-gray-900 hover:text-red-600 px-4 py-2 text-sm font-bold uppercase tracking-wide"
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 md:space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="relative group text-gray-900 hover:text-red-600 px-2 md:px-3 py-2 text-sm font-bold uppercase tracking-wide flex items-center"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavigationMenu;