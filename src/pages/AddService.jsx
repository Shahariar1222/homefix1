import { useState } from "react";

function AddService() {

  // Form-এর সব data এখানে রাখা হবে
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    location: ""
  });

  // Input-এর value change হলে data update হবে
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add Service button চাপলে এই function চলবে
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Login-এর সময় পাওয়া JWT token
    const token = localStorage.getItem("token");

    try {

      // Backend-এর service API-তে data পাঠানো
      const response = await fetch(
        "http://localhost:5000/api/services",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            name: formData.name,
            category: formData.category,
            price: Number(formData.price),
            description: formData.description,
            location: formData.location
          })
        }
      );

      const data = await response.json();

      // Successfully service add হলে
      if (response.ok) {

        alert("Service added successfully!");

        // Form clear
        setFormData({
          name: "",
          category: "",
          price: "",
          description: "",
          location: ""
        });

      } else {

        // Backend error দেখাবে
        alert(data.message || data.error || "Failed to add service");
      }

    } catch (error) {

      console.error(error);

      alert("Server error. Please try again.");
    }
  };


  return (
    <div className="add-service-page">

      <div className="add-service-box">

        <div className="add-service-header">

          <p>SERVICE PROVIDER</p>

          <h1>Add New Service</h1>

          <span>
            Create a new service for your customers.
          </span>

        </div>


        {/* Form submit হলে handleSubmit চলবে */}
        <form onSubmit={handleSubmit}>

          {/* Service Name */}
          <div className="form-group">

            <label>Service Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter service name"
              required
            />

          </div>


          {/* Category */}
          <div className="form-group">

            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >

              <option value="">
                Select a category
              </option>

              <option value="Plumbing">
                Plumbing
              </option>

              <option value="Electrical">
                Electrical
              </option>

              <option value="AC Repair">
                AC Repair
              </option>

              <option value="Cleaning">
                Cleaning
              </option>

            </select>

          </div>


          {/* Price */}
          <div className="form-group">

            <label>Service Price</label>

            <div className="price-input">

              <span>৳</span>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />

            </div>

          </div>


          {/* Description */}
          <div className="form-group">

            <label>Service Description</label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your service..."
              required
            ></textarea>

          </div>


          {/* Location */}
          <div className="form-group">

            <label>Service Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter service area"
            />

          </div>


          {/* Buttons */}
          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                setFormData({
                  name: "",
                  category: "",
                  price: "",
                  description: "",
                  location: ""
                })
              }
            >
              Cancel
            </button>


            <button
              type="submit"
              className="save-service-btn"
            >
              Add Service
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddService;