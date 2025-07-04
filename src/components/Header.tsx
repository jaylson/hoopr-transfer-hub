
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-hoopr-dark to-black py-4 px-6 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/hoopr-logo1.png" alt="Hoopr Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/solutions" className="text-white hover:text-hoopr-blue-light transition-colors">
            Solutions
          </Link>
          <Link to="/about" className="text-white hover:text-hoopr-blue-light transition-colors">
            About Us
          </Link>
          <Link to="/how-it-works" className="text-white hover:text-hoopr-blue-light transition-colors">
            How It Works
          </Link>
          <Link to="/contact" className="text-white hover:text-hoopr-blue-light transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-hoopr-blue-light hover:bg-transparent">
            Login
          </Button>
          <Button className="bg-gradient-hoopr hover:bg-hoopr-blue text-white">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden flex flex-col justify-center items-center space-y-6 transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link
          to="/solutions"
          className="text-white text-xl"
          onClick={toggleMenu}
        >
          Solutions
        </Link>
        <Link
          to="/about"
          className="text-white text-xl"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          to="/how-it-works"
          className="text-white text-xl"
          onClick={toggleMenu}
        >
          How It Works
        </Link>
        <Link
          to="/contact"
          className="text-white text-xl"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <div className="flex flex-col space-y-4 mt-6">
          <Button
            variant="ghost"
            className="text-white hover:text-hoopr-blue-light hover:bg-transparent"
            onClick={toggleMenu}
          >
            Login
          </Button>
          <Button
            className="bg-gradient-hoopr hover:bg-hoopr-blue text-white"
            onClick={toggleMenu}
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
