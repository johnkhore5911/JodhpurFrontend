import React, { useState } from "react";
import "./Patient.css";

const PatientDashboard = () => {
  const doctors = [
    {
      id: "D101",
      name: "Dr. Manu Sharma",
      age: 45,
      gender: "Male",
      email: "manu@example.com",
      phone: "9876543210",
    },
    {
      id: "D102",
      name: "Dr. JK Goswamy",
      age: 39,
      gender: "Female",
      email: "jk@example.com",
      phone: "9876543222",
    },
    {
      id: "D103",
      name: "Dr. Ganesh Choudhary",
      age: 50,
      gender: "Male",
      email: "ganesh@example.com",
      phone: "9876543233",
    },
  ];

  const reports = [
    {
      patientId: "P1001",
      name: "Shubham",
      gender: "Male",
      testName: "Blood Test",
      result: "Normal",
      summary: "All blood parameters are within the normal range.",
    },
    {
      patientId: "P1002",
      name: "Aadhar",
      gender: "Female",
      testName: "X-ray",
      result: "No Issues Found",
      summary: "No fractures or abnormalities detected in the X-ray.",
    },
  ];

  const [appointment, setAppointment] = useState({
    patientId: "",
    name: "",
    doctorId: "",
    symptoms: "",
  });

  const handleInputChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with Doctor: ${appointment.doctorId}\nSymptoms: ${appointment.symptoms}`);
  };

  return (
    <div className="dashboard-container">
      <h1 className="website-name">HealthBook</h1>

      {/* Connected Doctors Section */}
      <section className="doctors-section">
        <h2>Connected Doctors</h2>
        <div className="doctor-cards">
          {doctors.map((doctor) => (
            <div className="doctor-card fade-in" key={doctor.id}>
              <h3>{doctor.name}</h3>
              <p><strong>Age:</strong> {doctor.age}</p>
              <p><strong>Gender:</strong> {doctor.gender}</p>
              <p><strong>Email:</strong> {doctor.email}</p>
              <p><strong>Phone:</strong> {doctor.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Reports Section */}
      <section className="reports-section">
        <h2>Patient Reports</h2>
        <div className="report-cards">
          {reports.map((report, index) => (
            <div className="report-card slide-in" key={index}>
              <h3>{report.testName}</h3>
              <p><strong>Patient Name:</strong> {report.name}</p>
              <p><strong>Patient ID:</strong> {report.patientId}</p>
              <p><strong>Gender:</strong> {report.gender}</p>
              <p><strong>Result:</strong> {report.result}</p>
              <p className="summary"><strong>Summary:</strong> {report.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="appointment-section">
        <h2>Consult a Doctor</h2>
        <form className="appointment-form fade-in" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            onChange={handleInputChange}
            required
          />
          <textarea
            name="symptoms"
            placeholder="Describe your symptoms"
            onChange={handleInputChange}
            required
          />
          <select
            name="doctorId"
            onChange={handleInputChange}
            value={appointment.doctorId}
            required
          >
            <option value="" disabled>Select a Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
          <button type="submit" className="submit-btn">Consult</button>
        </form>
      </section>
    </div>
  );
};

export default PatientDashboard;
