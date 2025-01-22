import React, { useState } from "react";
import "./Doctor.css";

const Doctor = () => {
  const [newPatients, setNewPatients] = useState([
    {
      id: 1,
      name: "Shubham",
      symptom: "Fever, Cough",
      date: "2025-01-18",
    },
    {
      id: 2,
      name: "Gaurav",
      symptom: "Headache, Nausea",
      date: "2025-01-18",
    },
  ]);

  const [oldPatients, setOldPatients] = useState([
    {
      id: 3,
      name: "John Khore",
      symptom: "Back Pain",
      date: "2025-01-15",
    },
    {
      id: 4,
      name: "Aadhar",
      symptom: "Allergy, Itching",
      date: "2025-01-12",
    },
    {
      id: 5,
      name: "Ganesh",
      symptom: "Fever, Weakness",
      date: "2025-01-10",
    },
  ]);

  const handleAccept = (patient) => {
    setNewPatients(newPatients.filter((p) => p.id !== patient.id));
    setOldPatients([...oldPatients, patient]);
  };

  return (
    <div className="doctor-dashboard">
      <h1 id='webn'>HealthBook</h1>

      <h1 id='docd'>Doctor Dashboard</h1>

      <div className="section">
        <h2>New Patients</h2>
        <div className="patient-cards">
          {newPatients.map((patient) => (
            <div className="patient-card fade-in" key={patient.id}>
              <h3>{patient.name}</h3>
              <p>Symptom: {patient.symptom}</p>
              <p>Date: {patient.date}</p>
              <button
                className="accept-button"
                onClick={() => handleAccept(patient)}
              >
                Accept
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Old Patients</h2>
        <div className="patient-cards">
          {oldPatients.map((patient) => (
            <div className="patient-card fade-in" key={patient.id}>
              <h3>{patient.name}</h3>
              <p>Symptom: {patient.symptom}</p>
              <p>Date: {patient.date}</p>
              <p>Prescription: TBD</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;