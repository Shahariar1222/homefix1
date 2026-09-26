import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Admin.css'; 

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h3>HomeFix Admin</h3>
        <nav className="admin-nav">
          <NavLink to="/admin" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/customers" className={({ isActive }) => (isActive ? 'active' : '')}>
            Customers
          </NavLink>
          <NavLink to="/admin/providers" className={({ isActive }) => (isActive ? 'active' : '')}>
            Providers
          </NavLink>
          <NavLink to="/admin/bookings" className={({ isActive }) => (isActive ? 'active' : '')}>
            Bookings
          </NavLink>
          <NavLink to="/admin/reviews" className={({ isActive }) => (isActive ? 'active' : '')}>
            Reviews
          </NavLink>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;