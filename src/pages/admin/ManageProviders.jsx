import React, { useState } from "react";

const ManageProviders = () => {
  const [providers, setProviders] = useState([
    {
      id: 1,
      name: "Karim Service",
      email: "karim@gmail.com",
      phone: "01711111111",
      category: "AC Repair",
      rating: 4.8,
      status: "Approved",
    },
    {
      id: 2,
      name: "Fast Plumbing",
      email: "fastplumbing@gmail.com",
      phone: "01822222222",
      category: "Plumbing",
      rating: 4.6,
      status: "Approved",
    },
    {
      id: 3,
      name: "PowerFix",
      email: "powerfix@gmail.com",
      phone: "01933333333",
      category: "Electrical",
      rating: 4.7,
      status: "Pending",
    },
    {
      id: 4,
      name: "Clean Home BD",
      email: "cleanhome@gmail.com",
      phone: "01644444444",
      category: "Cleaning",
      rating: 4.9,
      status: "Approved",
    },
  ]);

  const [search, setSearch] = useState("");

  const changeStatus = (id, status) => {
    setProviders(
      providers.map((provider) =>
        provider.id === id
          ? {
              ...provider,
              status,
            }
          : provider
      )
    );
  };

  const deleteProvider = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this provider?"
    );

    if (confirmDelete) {
      setProviders(
        providers.filter(
          (provider) => provider.id !== id
        )
      );
    }
  };

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      provider.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      provider.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">

      <div className="page-header">

        <div>
          <h1>Manage Providers</h1>

          <p>
            Manage service providers and their
            verification status.
          </p>
        </div>

        <div className="provider-stats">
          <span>
            Total: <strong>{providers.length}</strong>
          </span>

          <span>
            Approved:{" "}
            <strong>
              {
                providers.filter(
                  (p) => p.status === "Approved"
                ).length
              }
            </strong>
          </span>

          <span>
            Pending:{" "}
            <strong>
              {
                providers.filter(
                  (p) => p.status === "Pending"
                ).length
              }
            </strong>
          </span>
        </div>

      </div>

      <div className="toolbar">

        <div className="search-box">
          🔍

          <input
            type="text"
            placeholder="Search providers..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

      </div>

      <div className="table-card">

        <table className="admin-table">

          <thead>
            <tr>
              <th>Provider</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredProviders.map((provider) => (
              <tr key={provider.id}>

                <td>
                  <div className="user-info">

                    <div className="avatar provider">
                      {provider.name
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <strong>
                      {provider.name}
                    </strong>

                  </div>
                </td>

                <td>{provider.email}</td>

                <td>{provider.phone}</td>

                <td>
                  <span className="category-tag">
                    {provider.category}
                  </span>
                </td>

                <td>
                  <span className="rating">
                    ⭐ {provider.rating}
                  </span>
                </td>

                <td>

                  <span
                    className={
                      provider.status === "Approved"
                        ? "status-badge active"
                        : "status-badge pending"
                    }
                  >
                    {provider.status}
                  </span>

                </td>

                <td>

                  <div className="action-buttons">

                    {provider.status ===
                      "Pending" && (
                      <button
                        className="approve-btn"
                        onClick={() =>
                          changeStatus(
                            provider.id,
                            "Approved"
                          )
                        }
                      >
                        Approve
                      </button>
                    )}

                    {provider.status ===
                      "Approved" && (
                      <button
                        className="status-btn"
                        onClick={() =>
                          changeStatus(
                            provider.id,
                            "Pending"
                          )
                        }
                      >
                        Suspend
                      </button>
                    )}

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteProvider(provider.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {filteredProviders.length === 0 && (
          <div className="empty-state">
            No providers found.
          </div>
        )}

      </div>

    </div>
  );
};

export default ManageProviders;