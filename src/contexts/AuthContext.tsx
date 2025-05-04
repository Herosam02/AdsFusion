import { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  isRegistered: (email: string) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  forgotPassword: async () => {},
  loading: false,
  error: null,
  isRegistered: async () => false,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Simulated registered users storage
  const [registeredUsers, setRegisteredUsers] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    // Load registered users from localStorage
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      setRegisteredUsers(new Set(JSON.parse(storedUsers)));
    }
    
    setLoading(false);
  }, []);

  const isRegistered = async (email: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return registeredUsers.has(email);
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if user is registered
      const userExists = await isRegistered(email);
      if (!userExists) {
        throw new Error('Account not found. Please sign up first.');
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just check if email contains "@" and password length >= 6
      if (!email.includes('@') || password.length < 6) {
        throw new Error('Invalid credentials');
      }
      
      const mockUser = {
        id: '123',
        name: email.split('@')[0],
        email,
      };
      
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if user already exists
      const userExists = await isRegistered(email);
      if (userExists) {
        throw new Error('Email already registered. Please sign in instead.');
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just check if email contains "@" and password length >= 6
      if (!email.includes('@') || password.length < 6) {
        throw new Error('Invalid credentials');
      }
      
      const mockUser = {
        id: '123',
        name,
        email,
      };
      
      // Store user in registered users
      const newRegisteredUsers = new Set(registeredUsers);
      newRegisteredUsers.add(email);
      setRegisteredUsers(newRegisteredUsers);
      localStorage.setItem('registeredUsers', JSON.stringify([...newRegisteredUsers]));
      
      // Log user in after successful registration
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const forgotPassword = async (email: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if user is registered
      const userExists = await isRegistered(email);
      if (!userExists) {
        throw new Error('Account not found. Please sign up first.');
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just check if email contains "@"
      if (!email.includes('@')) {
        throw new Error('Invalid email');
      }
      
      // Success message will be handled in the component
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated: !!user, 
        user, 
        login, 
        signup, 
        logout, 
        forgotPassword,
        loading,
        error,
        isRegistered
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};