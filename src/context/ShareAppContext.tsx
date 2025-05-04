import React, { createContext, useContext, useState, useEffect } from 'react';
import { ShareApplication } from '../types/ShareApplication';

interface ShareAppContextType {
  applications: ShareApplication[];
  addApplication: (application: ShareApplication) => void;
  deleteApplication: (id: string) => void;
  updateApplication: (id: string, application: ShareApplication) => void;
  loading: boolean;
}

const ShareAppContext = createContext<ShareAppContextType | undefined>(undefined);

export const ShareAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [applications, setApplications] = useState<ShareApplication[]>([]);
  const [loading, setLoading] = useState(false);

  // Load applications from localStorage on mount
  useEffect(() => {
    try {
      const savedApplications = localStorage.getItem('shareApplications');
      if (savedApplications) {
        setApplications(JSON.parse(savedApplications));
      }
    } catch (error) {
      console.error('Error loading applications from localStorage:', error);
    }
  }, []);

  // Save applications to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('shareApplications', JSON.stringify(applications));
    } catch (error) {
      console.error('Error saving applications to localStorage:', error);
    }
  }, [applications]);

  const addApplication = (application: ShareApplication) => {
    setLoading(true);
    const newApplication = {
      ...application,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    
    // Simulate network delay
    setTimeout(() => {
      setApplications((prev) => [...prev, newApplication]);
      setLoading(false);
    }, 500);
  };

  const deleteApplication = (id: string) => {
    setLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      setApplications((prev) => prev.filter((app) => app.id !== id));
      setLoading(false);
    }, 500);
  };

  const updateApplication = (id: string, application: ShareApplication) => {
    setLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      setApplications((prev) => 
        prev.map((app) => (app.id === id ? { ...application, id } : app))
      );
      setLoading(false);
    }, 500);
  };

  return (
    <ShareAppContext.Provider
      value={{
        applications,
        addApplication,
        deleteApplication,
        updateApplication,
        loading,
      }}
    >
      {children}
    </ShareAppContext.Provider>
  );
};

export const useShareApp = () => {
  const context = useContext(ShareAppContext);
  if (context === undefined) {
    throw new Error('useShareApp must be used within a ShareAppProvider');
  }
  return context;
};