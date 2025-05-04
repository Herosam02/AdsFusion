import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/common/Button';
import ThreeDSphere from '../components/ThreeDSphere';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-light-200 dark:bg-dark-800 flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8 relative w-48 h-48 mx-auto">
          <ThreeDSphere size="w-48 h-48" position="relative" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button 
            variant="primary" 
            icon={<Home className="w-5 h-5" />}
            size="lg"
          >
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;