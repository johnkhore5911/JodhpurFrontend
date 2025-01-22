import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Patient from './Patient'
import Doctor from './Doctor'
import Hospital from './Hospital'

import { toast } from 'react-hot-toast'
import "./SignUp.css";

const SignUp = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    designation: "",
    name: "",
    license: "",
    regNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (userType === "patient") {
      if (!formData.email.includes("@")) errors.email = "Invalid email format.";
      if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone must be 10 digits.";
      if (formData.address.length < 5) errors.address = "Address must be at least 5 characters.";
    } else if (userType === "doctor") {
      if (formData.designation.length < 3) errors.designation = "Designation must be valid.";
      if (formData.name.length < 3) errors.name = "Name must be at least 3 characters.";
      if (formData.license.length < 6) errors.license = "License must be at least 6 characters.";
    } else if (userType === "hospital") {
      if (!/^\d{6}$/.test(formData.regNumber)) errors.regNumber = "Registration number must be 6 digits.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success("Form submitted successfully!");

        // Redirect based on userType
        if (userType === "patient") {
          navigate("/Patient");
        } else if (userType === "doctor") {
          navigate("/Doctor");
        } else if (userType === "hospital") {
          navigate("/Hospital");
        }
      }, 1000);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="title">HealthBook</h1>

      <div className="user-selection">
        <p>SignUp As:</p>
        <select onChange={(e) => setUserType(e.target.value)} value={userType}>
          <option value="">Select</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="hospital">Hospital</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        {userType === "patient" && (
          <div className="form-section fade-in">
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email} />
            {errors.email && <span className="error-msg">{errors.email}</span>}
            
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleInputChange} value={formData.phone} />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}

            <input type="text" name="address" placeholder="Address" onChange={handleInputChange} value={formData.address} />
            {errors.address && <span className="error-msg">{errors.address}</span>}
          </div>
        )}

        {userType === "doctor" && (
          <div className="form-section fade-in">
            <input type="text" name="designation" placeholder="Designation" onChange={handleInputChange} value={formData.designation} />
            {errors.designation && <span className="error-msg">{errors.designation}</span>}

            <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} value={formData.name} />
            {errors.name && <span className="error-msg">{errors.name}</span>}

            <input type="text" name="license" placeholder="License Number" onChange={handleInputChange} value={formData.license} />
            {errors.license && <span className="error-msg">{errors.license}</span>}
          </div>
        )}

        {userType === "hospital" && (
          <div className="form-section fade-in">
            <input type="text" name="regNumber" placeholder="Registration Number" onChange={handleInputChange} value={formData.regNumber} />
            {errors.regNumber && <span className="error-msg">{errors.regNumber}</span>}
          </div>
        )}

        {userType && (
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Sign Up"}
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
