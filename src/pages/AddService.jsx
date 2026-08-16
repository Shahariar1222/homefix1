function AddService() {
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

        <form>

          {/* Service Name */}
          <div className="form-group">
            <label>Service Name</label>

            <input
              type="text"
              placeholder="Enter service name"
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select>
              <option value="">
                Select a category
              </option>

              <option value="plumbing">
                Plumbing
              </option>

              <option value="electrical">
                Electrical
              </option>

              <option value="ac-repair">
                AC Repair
              </option>

              <option value="cleaning">
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
                placeholder="Enter price"
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Service Description</label>

            <textarea
              rows="5"
              placeholder="Describe your service..."
            ></textarea>
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Service Location</label>

            <input
              type="text"
              placeholder="Enter service area"
            />
          </div>

          {/* Buttons */}
          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
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