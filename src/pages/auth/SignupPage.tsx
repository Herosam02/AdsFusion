import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useAuth } from '../../hooks/useAuth';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();
  
  const validateForm = () => {
    let isValid = true;
    
    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }
    
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
    
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }
    
    return isValid;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await signup(name, email, password);
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
              Create an Account
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Join AdsFusion and explore our AI services
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="name"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              icon={<User className="w-5 h-5 text-gray-500" />}
            />
            
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
            
            <Input
              id="confirm-password"
              type="password"
              label="Confirm Password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError}
              icon={<Lock className="w-5 h-5 text-gray-500" />}
            />
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-400">
                I agree to the{' '}
                <Link to="/terms-of-service" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
                  Privacy Policy
                </Link>
              </label>
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
              Create Account
            </Button>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link to="/auth/login" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SignupPage;