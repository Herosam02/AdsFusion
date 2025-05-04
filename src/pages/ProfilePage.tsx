import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Save, LogOut } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { useAuth } from '../hooks/useAuth';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSuccess('');
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Profile updated successfully');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }
    
    setIsSubmitting(true);
    setSuccess('');
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Your Profile
          </h1>
          
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200 dark:border-dark-700">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'profile'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 dark:border-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile Information
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'security'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 dark:border-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'profile' ? (
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  {success && (
                    <div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 text-success-600 dark:text-success-400 p-3 rounded-md text-sm">
                      {success}
                    </div>
                  )}
                  
                  {error && (
                    <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 text-error-600 dark:text-error-400 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}
                  
                  <Input
                    id="name"
                    type="text"
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    icon={<User className="w-5 h-5 text-gray-500" />}
                  />
                  
                  <Input
                    id="email"
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={<Mail className="w-5 h-5 text-gray-500" />}
                  />
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      icon={<Save className="w-4 h-4" />}
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleChangePassword} className="space-y-6">
                  {success && (
                    <div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 text-success-600 dark:text-success-400 p-3 rounded-md text-sm">
                      {success}
                    </div>
                  )}
                  
                  {error && (
                    <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 text-error-600 dark:text-error-400 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}
                  
                  <Input
                    id="current-password"
                    type="password"
                    label="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    icon={<Lock className="w-5 h-5 text-gray-500" />}
                  />
                  
                  <Input
                    id="new-password"
                    type="password"
                    label="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    icon={<Lock className="w-5 h-5 text-gray-500" />}
                  />
                  
                  <Input
                    id="confirm-password"
                    type="password"
                    label="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    icon={<Lock className="w-5 h-5 text-gray-500" />}
                  />
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      icon={<Save className="w-4 h-4" />}
                    >
                      Change Password
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          {/* Logout Section */}
          <div className="mt-8 bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Account Actions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sign out from your account or manage your account settings.
            </p>
            <Button
              variant="outline"
              onClick={logout}
              icon={<LogOut className="w-4 h-4" />}
              className="text-error-600 dark:text-error-400 border-error-300 dark:border-error-700 hover:bg-error-50 dark:hover:bg-error-900/20"
            >
              Sign Out
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;