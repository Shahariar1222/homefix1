import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(Array.isArray(data) ? data : []))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Manage Users (Customers & Providers)</h2>
        <Link to="/admin" style={{ textDecoration: 'none', color: '#047857', fontWeight: 'bold' }}>
          ← Back to Dashboard
        </Link>
      </div>

      <table border="1" cellPadding="12" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', borderColor: '#e5e7eb' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id || user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '12px', 
                    fontWeight: 'bold',
                    backgroundColor: user.role === 'admin' ? '#fee2e2' : user.role === 'provider' ? '#dbeafe' : '#dcfce7',
                    color: user.role === 'admin' ? '#991b1b' : user.role === 'provider' ? '#1e40af' : '#166534'
                  }}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center', color: '#6b7280' }}>
                No users found. Ensure Backend Server is running.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;