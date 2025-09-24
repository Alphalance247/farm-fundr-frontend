"use client";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: string;
}

const ProtectedRoute = ({
  children,
  requiredUserType,
}: ProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login");
        return;
      }

      if (requiredUserType && user?.user_type !== requiredUserType) {
        // Redirect to appropriate dashboard based on user type
        if (user?.user_type === "farmer") {
          window.location.href = "/farmer-dashboard";
          // router.push("/farmer-dashboard");
        } else if (user?.user_type === "investor") {
          window.location.href = "/investor-dashboard";
          // router.push("/investor-dashboard"); // Create this route if needed
        }
        return;
      }
    }
  }, [isAuthenticated, isLoading, user, router, requiredUserType]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg font-medium text-gray-600 mb-4">
          Authenticating...
        </p>
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  if (requiredUserType && user?.user_type !== requiredUserType) {
    return null; // Will redirect in useEffect
  }

  return <>{children}</>;
};

export default ProtectedRoute;
