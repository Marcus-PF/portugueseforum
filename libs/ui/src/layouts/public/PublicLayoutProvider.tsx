/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @pfsa/ui – Public Layout Provider            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Context provider for public layout state management
 * including user state, theme, and notifications.
 */

'use client';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import { PublicUser, Theme, Notification } from '../shared/LayoutTypes';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Context Types
 * ───────────────────────────────────────────────────────────── */
interface PublicLayoutContextValue {
  // User state
  user: PublicUser | null;
  setUser: (user: PublicUser | null) => void;
  isAuthenticated: boolean;
  
  // Mobile navigation
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  
  // User menu
  userMenuOpen: boolean;
  setUserMenuOpen: (open: boolean) => void;
  
  // Notifications
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  
  // Theme
  theme: Theme;
  setTheme: (theme: Theme) => void;
  
  // Language
  locale: string;
  setLocale: (locale: string) => void;
  
  // Search
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

/* ─────────────────────────────────────────────────────────────
 * 🧾 Provider Props
 * ───────────────────────────────────────────────────────────── */
interface PublicLayoutProviderProps {
  children: React.ReactNode;
  initialUser?: PublicUser | null;
  initialTheme?: Theme;
  initialLocale?: string;
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Context Creation
 * ───────────────────────────────────────────────────────────── */
const PublicLayoutContext = React.createContext<PublicLayoutContextValue | null>(null);

/* ─────────────────────────────────────────────────────────────
 * 🧠 Provider Component
 * ───────────────────────────────────────────────────────────── */
export const PublicLayoutProvider: React.FC<PublicLayoutProviderProps> = ({
  children,
  initialUser = null,
  initialTheme = 'system',
  initialLocale = 'en',
}) => {
  // User state
  const [user, setUser] = React.useState<PublicUser | null>(initialUser);
  const isAuthenticated = user !== null;
  
  // Navigation state
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  
  // Notifications state
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
  
  // Theme state
  const [theme, setTheme] = React.useState<Theme>(initialTheme);
  
  // Language state
  const [locale, setLocale] = React.useState<string>(initialLocale);

  // Notification handlers
  const addNotification = React.useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
    };
    setNotifications(prev => [...prev, newNotification]);
  }, []);

  const removeNotification = React.useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const markAsRead = React.useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }, []);

  // Close mobile nav when user changes
  React.useEffect(() => {
    setMobileNavOpen(false);
  }, [user]);

  // Context value
  const value: PublicLayoutContextValue = React.useMemo(() => ({
    user,
    setUser,
    isAuthenticated,
    mobileNavOpen,
    setMobileNavOpen,
    userMenuOpen,
    setUserMenuOpen,
    notifications,
    addNotification,
    removeNotification,
    markAsRead,
    theme,
    setTheme,
    locale,
    setLocale,
    searchOpen,
    setSearchOpen,
  }), [
    user,
    isAuthenticated,
    mobileNavOpen,
    userMenuOpen,
    notifications,
    addNotification,
    removeNotification,
    markAsRead,
    theme,
    locale,
    searchOpen,
  ]);

  return (
    <PublicLayoutContext.Provider value={value}>
      {children}
    </PublicLayoutContext.Provider>
  );
};

/* ─────────────────────────────────────────────────────────────
 * 🪝 Hook
 * ───────────────────────────────────────────────────────────── */
export const usePublicLayout = (): PublicLayoutContextValue => {
  const context = React.useContext(PublicLayoutContext);
  if (!context) {
    throw new Error('usePublicLayout must be used within a PublicLayoutProvider');
  }
  return context;
};