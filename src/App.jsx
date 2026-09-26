import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";

import BookService from "./pages/BookService";
import BookingHistory from "./pages/BookingHistory";
import RatingReview from "./pages/RatingReview";

import ProviderDashboard from "./pages/ProviderDashboard";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import BookingManagement from "./pages/BookingManagement";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageCustomers from "./pages/admin/ManageCustomers";
import ManageProviders from "./pages/admin/ManageProviders";
import ManageCategories from "./pages/admin/ManageCategories";
import AdminBookings from "./pages/admin/AdminBookings";
import ManageReviews from "./pages/admin/ManageReviews";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <Link to="/" style={{ color: "#007bff" }}>
        হোমপেজে ফিরে যান
      </Link>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/book-service" element={<BookService />} />
          <Route path="/book-service/:id" element={<BookService />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/rating-review" element={<RatingReview />} />

          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/add-service" element={<AddService />} />
          <Route path="/edit-service/:id" element={<EditService />} />
          <Route path="/booking-management" element={<BookingManagement />} />

          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="customers" element={<ManageCustomers />} />
              <Route path="providers" element={<ManageProviders />} />
              <Route path="categories" element={<ManageCategories />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="reviews" element={<ManageReviews />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;