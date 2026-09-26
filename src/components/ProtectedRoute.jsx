import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;

  // ইউজার লগইন না থাকলে লগইন পেজে পাঠাবে
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ইউজারের রোল allowedRoles এর মধ্যে না থাকলে হোম পেজে পাঠাবে
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; 
  }

  return <Outlet />; 
};

export default ProtectedRoute;