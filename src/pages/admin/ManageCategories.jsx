import React, { useState } from "react";

const ManageCategories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "AC Repair",
      description: "Air conditioner repair and servicing",
      services: 18,
      status: "Active",
    },
    {
      id: 2,
      name: "Plumbing",
      description: "Home plumbing and pipe related services",
      services: 12,
      status: "Active",
    },
    {
      id: 3,
      name: "Electrical",
      description: "Electrical repair and installation",
      services: 15,
      status: "Active",
    },
    {
      id: 4,
      name: "Cleaning",
      description: "Home and office cleaning services",
      services: 20,
      status: "Active",
    },
    {
      id: 5,
      name: "Painting",
      description: "Interior and exterior painting",
      services: 8,
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openAddModal = () => {
    setEditingId(null);

    setFormData({
      name: "",
      description: "",
    });

    setShowModal(true);
  };

  const openEditModal = (category) => {
    setEditingId(category.id);

    setFormData({
      name: category.name,
      description: category.description,
    });

    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter category name");
      return;
    }

    if (editingId) {
      setCategories(
        categories.map((category) =>
          category.id === editingId
            ? {
                ...category,
                name: formData.name,
                description: formData.description,
              }
            : category
        )
      );
    } else {
      const newCategory = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        services: 0,
        status: "Active",
      };

      setCategories([...categories, newCategory]);
    }

    setShowModal(false);
  };

  const deleteCategory = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (confirmDelete) {
      setCategories(
        categories.filter((category) => category.id !== id)
      );
    }
  };

  const toggleStatus = (id) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? {
              ...category,
              status:
                category.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : category
      )
    );
  };

  return (
    <div className="admin-page">

      <div className="page-header">
        <div>
          <h1>Manage Categories</h1>
          <p>
            Create and manage service categories.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={openAddModal}
        >
          + Add Category
        </button>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            className="category-card"
            key={category.id}
          >
            <div className="category-card-header">
              <div className="category-icon">
                🛠️
              </div>

              <span
                className={
                  category.status === "Active"
                    ? "status-badge active"
                    : "status-badge inactive"
                }
              >
                {category.status}
              </span>
            </div>

            <h2>{category.name}</h2>

            <p>{category.description}</p>

            <div className="category-services">
              <strong>{category.services}</strong>
              <span>Services</span>
            </div>

            <div className="category-actions">
              <button
                className="edit-btn"
                onClick={() =>
                  openEditModal(category)
                }
              >
                Edit
              </button>

              <button
                className="status-btn"
                onClick={() =>
                  toggleStatus(category.id)
                }
              >
                {category.status === "Active"
                  ? "Disable"
                  : "Enable"}
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteCategory(category.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">

            <div className="modal-header">
              <h2>
                {editingId
                  ? "Edit Category"
                  : "Add Category"}
              </h2>

              <button
                className="close-btn"
                onClick={() =>
                  setShowModal(false)
                }
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Category Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter category name"
                />
              </div>

              <div className="form-group">
                <label>Description</label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter category description"
                  rows="4"
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  {editingId
                    ? "Update Category"
                    : "Add Category"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCategories;