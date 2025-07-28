import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-secondary-900">Safegreen Engineering</h1>
              <p className="text-xs text-secondary-600">Ltd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button & Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+254723691123"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">0723 691 123</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Get Quote
            </Link>
            <div className="flex items-center space-x-2 ml-4">
              <Link to="/login" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
                Login
              </Link>
              <span className="text-secondary-400">|</span>
              <Link to="/register" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-secondary-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-secondary-200">
                <a
                  href="tel:+254723691123"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors mb-4"
                >
                  <Phone size={18} />
                  <span className="font-medium">0723 691 123</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center mb-4"
                >
                  Get Quote
                </Link>
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-secondary-200">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <span className="text-secondary-400">|</span>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 