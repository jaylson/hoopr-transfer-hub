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
            <img src="/lovable-uploads/7b2713e6-fcf8-472a-9b66-3ab03f6b3c39.png" alt="Hoopr Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#whyhoopr"
            className="text-white hover:text-hoopr-blue-light transition-colors cursor-pointer"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('whyhoopr');
              if (el) {
                const yOffset = 80;
                const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Why HOOPR
          </a>
          <a
            href="#teams"
            className="text-white hover:text-hoopr-blue-light transition-colors cursor-pointer"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('teams');
              if (el) {
                const yOffset = 80;
                const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            For Teams
          </a>
          <a
            href="#teams"
            className="text-white hover:text-hoopr-blue-light transition-colors cursor-pointer"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('teams');
              if (el) {
                const yOffset = 80;
                const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            For Agents
          </a>
          <a
            href="#howitworks"
            className="text-white hover:text-hoopr-blue-light transition-colors cursor-pointer"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('howitworks');
              if (el) {
                const yOffset = 80;
                const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            How It Works
          </a>
          <a
            href="#contact"
            className="text-white hover:text-hoopr-blue-light transition-colors cursor-pointer"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) {
                const yOffset = 80;
                const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://plataform.hoopr.app">
            <Button variant="ghost" className="text-white hover:text-hoopr-blue-light hover:bg-transparent">
              Login
            </Button>
          </a>
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
        <a
          href="#whyhoopr"
          className="text-white text-xl cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('whyhoopr');
            if (el) {
              const yOffset = 80;
              const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            toggleMenu();
          }}
        >
          Why choose HOOPR
        </a>
        <a
          href="#teams"
          className="text-white text-xl cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('teams');
            if (el) {
              const yOffset = 80;
              const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            toggleMenu();
          }}
        >
          Exclusive Member Benefits for Teams
        </a>
        <a
          href="#agents"
          className="text-white text-xl cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('agents');
            if (el) {
              const yOffset = 80;
              const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            toggleMenu();
          }}
        >
          Exclusive Member Benefits for Agents
        </a>
        <a
          href="#howitworks"
          className="text-white text-xl cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('howitworks');
            if (el) {
              const yOffset = 80;
              const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            toggleMenu();
          }}
        >
          How It Works
        </a>
        <a
          href="#contact"
          className="text-white text-xl cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) {
              const yOffset = 80;
              const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            toggleMenu();
          }}
        >
          Contact
        </a>
        <div className="flex flex-col space-y-4 mt-6">
          <a href="https://plataform.hoopr.app">
            <Button
              variant="ghost"
              className="text-white hover:text-hoopr-blue-light hover:bg-transparent"
              onClick={toggleMenu}
            >
              Login
            </Button>
          </a>
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
