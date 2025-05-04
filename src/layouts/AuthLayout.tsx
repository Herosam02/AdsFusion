import { Outlet, Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '../components/common/ThemeToggle';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light-200 dark:bg-dark-800 transition-colors duration-300">
      <header className="py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <BrainCircuit className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold text-accent-700 dark:text-accent-300">AdsFusion</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      
      <motion.main 
        className="flex-grow flex items-center justify-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </motion.main>
      
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} AdsFusion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;