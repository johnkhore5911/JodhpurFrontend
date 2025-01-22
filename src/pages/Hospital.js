import React, { useState } from "react";
import "./Hospital.css";

const Hospital = () => {
  const [showDetails, setShowDetails] = useState(null);

  const patients = [
    {
      id: 1,
      name: "John Doe",
      patientId: "P001",
      doctorName: "Dr. Smith",
      doctorId: "D001",
      symptoms: "Fever, Cough",
      date: "2025-01-18",
      prescription: "Paracetamol, Rest",
    },
    {
      id: 2,
      name: "Jane Smith",
      patientId: "P002",
      doctorName: "Dr. Johnson",
      doctorId: "D002",
      symptoms: "Headache, Nausea",
      date: "2025-01-17",
      prescription: "Aspirin, Hydration",
    },
    {
      id: 3,
      name: "Alice Williams",
      patientId: "P003",
      doctorName: "Dr. Brown",
      doctorId: "D003",
      symptoms: "Back Pain",
      date: "2025-01-16",
      prescription: "Painkillers, Rest",
    },
  ];

  const handleToggleDetails = (id) => {
    setShowDetails((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="hospital-dashboard">
      <h1 id='webna'>HealthBook</h1>

      <h1 id='hos'>Hospital Dashboard</h1>
      
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Patient ID</th>
            <th>Doctor Name</th>
            <th>Doctor ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <React.Fragment key={patient.id}>
              <tr>
                <td>{patient.name}</td>
                <td>{patient.patientId}</td>
                <td>{patient.doctorName}</td>
                <td>{patient.doctorId}</td>
                <td>
                  <button
                    className="details-button"
                    onClick={() => handleToggleDetails(patient.id)}
                  >
                    {showDetails === patient.id ? "Hide Details" : "Show Details"}
                  </button>
                </td>
              </tr>
              {showDetails === patient.id && (
                <tr className="patient-details-row">
                  <td colSpan="5">
                    <div className="patient-card">
                      <h3>{patient.name}</h3>
                      <p><strong>Patient ID:</strong> {patient.patientId}</p>
                      <p><strong>Symptoms:</strong> {patient.symptoms}</p>
                      <p><strong>Date of Visit:</strong> {patient.date}</p>
                      <p><strong>Prescription:</strong> {patient.prescription}</p>
                      <p><strong>Doctor:</strong> {patient.doctorName} (ID: {patient.doctorId})</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hospital;