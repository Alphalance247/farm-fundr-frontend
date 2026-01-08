"use client";
import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type User = {
  fullname: string;
  profileImage: string;
  user_type: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoggingOut: boolean;
  login: (userData: User) => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const fullname = localStorage.getItem("fullname");
    const user_type = localStorage.getItem("user_type");
    const profileImage = localStorage.getItem("profileImage") || "";
    if (fullname && user_type) {
      setUser({ fullname, user_type, profileImage: profileImage as string });
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    // Store in localStorage consistently
    localStorage.setItem("fullname", userData?.fullname);
    localStorage.setItem("user_type", userData?.user_type);
    localStorage.setItem("profileImage", userData?.profileImage);
    // Update state
    setUser(userData);
  };

  const logout = async () => {
    try {
      setIsLoggingOut(true);
      // Call the logout API
      const response = await axios.post("/api/logout", {
        withCredentials: true,
      });

      if (response.status !== 200) {
        throw new Error("Logout failed");
      }

      // Clear localStorage
      localStorage.removeItem("fullname");
      localStorage.removeItem("user_type");
      localStorage.removeItem("user");

      // Clear user state
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      // You might want to show a toast error here
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        isLoggingOut,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
