import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useAuth } from '../../hooks/useAuth';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { forgotPassword, loading, error } = useAuth();
  
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
    
    return isValid;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
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
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle className="w-16 h-16 text-success-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Recovery Email Sent
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We've sent password recovery instructions to <span className="font-medium">{email}</span>. Please check your email inbox.
              </p>
              <div className="space-y-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setIsSubmitted(false)}
                >
                  Try Another Email
                </Button>
                <Link to="/auth/login">
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    Back to Login
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Forgot Password
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Enter your email and we'll send you instructions to reset your password
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
                  Send Reset Instructions
                </Button>
                
                <div className="text-center mt-4">
                  <Link 
                    to="/auth/login" 
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to sign in
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordPage;