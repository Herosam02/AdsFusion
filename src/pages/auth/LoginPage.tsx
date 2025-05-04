import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useAuth } from '../../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { login, loading, error, isRegistered } = useAuth();
  const navigate = useNavigate();
  
  const validateForm = () => {
    let isValid = true;
    
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    return isValid;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      // Check if user is registered
      const userExists = await isRegistered(email);
      if (!userExists) {
        setEmailError('Account not found. Please sign up first.');
        return;
      }
      
      await login(email, password);
      navigate('/');
    } catch (err) {
      // Error is handled in the auth context
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Log in to your AdsFusion account
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              icon={<Mail className="w-5 h-5 text-gray-500" />}
            />
            
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              icon={<Lock className="w-5 h-5 text-gray-500" />}
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-400">
                  Remember me
                </label>
              </div>
              
              <Link to="/auth/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                Forgot your password?
              </Link>
            </div>
            
            {error && (
              <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 text-error-600 dark:text-error-400 p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              isLoading={loading}
            >
              Sign in
            </Button>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;