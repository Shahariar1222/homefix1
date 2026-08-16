import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const fetchCategories = () => {
    fetch('http://localhost:5000/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch((err) => console.error('Fetch error:', err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    })
      .then((res) => res.json())
      .then(() => {
        setName('');
        setDescription('');
        fetchCategories();
      })
      .catch((err) => console.error('Add category error:', err));
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Manage Service Categories</h2>
        <Link to="/admin" style={{ textDecoration: 'none', color: '#047857', fontWeight: 'bold' }}>
          ← Back to Dashboard
        </Link>
      </div>

      <form onSubmit={handleAddCategory} style={{ marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Category Name (e.g. Electrical)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', flex: '1' }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', flex: '2' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#047857', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add Category
        </button>
      </form>

      <h3>Existing Categories</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {categories.length > 0 ? (
          categories.map((cat) => (
            <li key={cat._id || cat.name} style={{ borderBottom: '1px solid #e5e7eb', padding: '12px 0' }}>
              <strong>{cat.name}</strong> — <span style={{ color: '#4b5563' }}>{cat.description || 'No description'}</span>
            </li>
          ))
        ) : (
          <li style={{ color: '#6b7280' }}>No categories added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default ManageCategories;