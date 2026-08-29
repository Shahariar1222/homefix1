import { Link } from "react-router-dom";

function EditService() {
  return (
    <div className="edit-service-page">
      <div className="edit-service-box">

        <div className="edit-service-header">
          <p>SERVICE PROVIDER</p>
          <h1>Edit Service</h1>
          <span>Update your service information.</span>
        </div>

        <form>

          <div className="form-group">
            <label>Service Name</label>
            <input
              type="text"
              defaultValue="AC Repair"
              placeholder="Enter service name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select defaultValue="ac-repair">
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="ac-repair">AC Repair</option>
              <option value="cleaning">Cleaning</option>
            </select>
          </div>

          <div className="form-group">
            <label>Service Price</label>

            <div className="price-input">
              <span>৳</span>

              <input
                type="number"
                defaultValue="800"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Service Description</label>

            <textarea
              rows="5"
              defaultValue="Professional air conditioner repair and maintenance service."
            ></textarea>
          </div>

          <div className="form-group">
            <label>Service Location</label>

            <input
              type="text"
              defaultValue="Dhaka"
              placeholder="Enter service area"
            />
          </div>

          <div className="form-actions">

            <Link
              to="/provider-dashboard"
              className="cancel-btn"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="save-service-btn"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default EditService;