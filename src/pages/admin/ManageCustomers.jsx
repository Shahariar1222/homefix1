import React, { useState } from "react";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@gmail.com",
      phone: "01712345678",
      bookings: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      email: "nusrat@gmail.com",
      phone: "01812345678",
      bookings: 8,
      status: "Active",
    },
    {
      id: 3,
      name: "Sakib Khan",
      email: "sakib@gmail.com",
      phone: "01912345678",
      bookings: 17,
      status: "Blocked",
    },
    {
      id: 4,
      name: "Ayesha Rahman",
      email: "ayesha@gmail.com",
      phone: "01612345678",
      bookings: 5,
      status: "Active",
    },
    {
      id: 5,
      name: "Tanvir Hasan",
      email: "tanvir@gmail.com",
      phone: "01512345678",
      bookings: 21,
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status:
                customer.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : customer
      )
    );
  };

  const deleteCustomer = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (confirmDelete) {
      setCustomers(
        customers.filter(
          (customer) => customer.id !== id
        )
      );
    }
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.phone.includes(search)
  );

  return (
    <div className="admin-page">

      <div className="page-header">
        <div>
          <h1>Manage Customers</h1>
          <p>
            View and manage all registered customers.
          </p>
        </div>

        <div className="customer-count">
          Total Customers:{" "}
          <strong>{customers.length}</strong>
        </div>
      </div>

      <div className="toolbar">

        <div className="search-box">
          🔍

          <input
            type="text"
            placeholder="Search customer..."
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
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Bookings</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>

                <td>
                  <div className="user-info">
                    <div className="avatar">
                      {customer.name
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <strong>
                      {customer.name}
                    </strong>
                  </div>
                </td>

                <td>{customer.email}</td>

                <td>{customer.phone}</td>

                <td>
                  <strong>
                    {customer.bookings}
                  </strong>
                </td>

                <td>
                  <span
                    className={
                      customer.status === "Active"
                        ? "status-badge active"
                        : "status-badge blocked"
                    }
                  >
                    {customer.status}
                  </span>
                </td>

                <td>
                  <div className="action-buttons">

                    <button
                      className="view-btn"
                    >
                      View
                    </button>

                    <button
                      className="status-btn"
                      onClick={() =>
                        toggleStatus(customer.id)
                      }
                    >
                      {customer.status === "Active"
                        ? "Block"
                        : "Unblock"}
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteCustomer(customer.id)
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

        {filteredCustomers.length === 0 && (
          <div className="empty-state">
            No customers found.
          </div>
        )}

      </div>
    </div>
  );
};

export default ManageCustomers;