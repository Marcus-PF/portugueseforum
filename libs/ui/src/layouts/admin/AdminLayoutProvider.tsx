/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @pfsa/ui – Admin Layout Provider              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Context provider for admin layout state management
 * including sidebar state, user preferences, and notifications.
 */

'use client';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import { AdminUser } from '../shared/LayoutTypes';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Notification Types
 * ───────────────────────────────────────────────────────────── */
interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Date;
}

/* ─────────────────────────────────────────────────────────────
 * 🧾 Context Types
 * ───────────────────────────────────────────────────────────── */
interface AdminLayoutContextValue {
  // Sidebar state
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  
  // User state
  user: AdminUser | null;
  setUser: (user: AdminUser | null) => void;
  
  // Notifications
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  
  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

/* ─────────────────────────────────────────────────────────────
 * 🧾 Provider Props
 * ───────────────────────────────────────────────────────────── */
interface AdminLayoutProviderProps {
  children: React.ReactNode;
  initialUser?: AdminUser | null;
  initialTheme?: 'light' | 'dark' | 'system';
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Context Creation
 * ───────────────────────────────────────────────────────────── */
const AdminLayoutContext = React.createContext<AdminLayoutContextValue | null>(null);

/* ─────────────────────────────────────────────────────────────
 * 🧠 Provider Component
 * ───────────────────────────────────────────────────────────── */
export const AdminLayoutProvider: React.FC<AdminLayoutProviderProps> = ({
  children,
  initialUser = null,
  initialTheme = 'system',
}) => {
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  
  // User state
  const [user, setUser] = React.useState<AdminUser | null>(initialUser);
  
  // Notifications state
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
  
  // Theme state
  const [theme, setTheme] = React.useState<'light' | 'dark' | 'system'>(initialTheme);

  // Notification handlers
  const addNotification = React.useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setNotifications(prev => [...prev, newNotification]);
  }, []);

  const removeNotification = React.useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Context value
  const value: AdminLayoutContextValue = React.useMemo(() => ({
    sidebarOpen,
    setSidebarOpen,
    sidebarCollapsed,
    setSidebarCollapsed,
    user,
    setUser,
    notifications,
    addNotification,
    removeNotification,
    theme,
    setTheme,
  }), [
    sidebarOpen,
    sidebarCollapsed,
    user,
    notifications,
    addNotification,
    removeNotification,
    theme,
  ]);

  return (
    <AdminLayoutContext.Provider value={value}>
      {children}
    </AdminLayoutContext.Provider>
  );
};

/* ─────────────────────────────────────────────────────────────
 * 🪝 Hook
 * ───────────────────────────────────────────────────────────── */
export const useAdminLayout = (): AdminLayoutContextValue => {
  const context = React.useContext(AdminLayoutContext);
  if (!context) {
    throw new Error('useAdminLayout must be used within an AdminLayoutProvider');
  }
  return context;
};