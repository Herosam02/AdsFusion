import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import ThemeToggle from '../common/ThemeToggle';
import img from './Adsfusion 1 (Black).png';
import img2 from './Adsfusion2(White).png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
            </motion.div>
            <span>
              {/* Black logo for light mode */}
              <img
                src={img}
                alt="Logo"
                height={30}
                width={130}
                className="block dark:hidden"
              />
              {/* White logo for dark mode */}
              <img
                src={img2}  // replace this with your white logo path
                alt="Logo"
                height={30}
                width={130}
                className="hidden dark:block"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      relative text-sm font-medium px-1 py-2
                      ${isActive 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                      }
                      transition-colors duration-200
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400"
                            layoutId="navbar-underline"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                    <span>{user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-dark-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-600">
                      Profile
                    </Link>
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/auth/login"
                    className="px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="px-4 py-2 text-sm font-medium bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-md transition-colors duration-200"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        block py-2 text-base font-medium
                        ${isActive 
                          ? 'text-primary-600 dark:text-primary-400' 
                          : 'text-gray-700 dark:text-gray-300'
                        }
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-600">
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Signed in as <span className="text-primary-600 dark:text-primary-400">{user?.email}</span>
                    </div>
                    <Link
                      to="/profile"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <Link
                      to="/auth/login"
                      className="block py-2 text-center text-base font-medium text-primary-700 dark:text-primary-300 border border-primary-500 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      to="/auth/signup"
                      className="block py-2 text-center text-base font-medium bg-primary-500 hover:bg-primary-600 text-white rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
