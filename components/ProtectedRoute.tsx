import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: ('Student' | 'Teacher')[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    // Simple mock protection logic - in a real app, this would check auth state
    const isAuthenticated = true; // Placeholder
    const userRole: 'Student' | 'Teacher' = 'Student'; // Placeholder

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole as any)) {
        return <Navigate to="/home" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
