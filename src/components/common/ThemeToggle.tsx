import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-light-300 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-light-400 dark:hover:bg-dark-600 transition-colors duration-200"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;