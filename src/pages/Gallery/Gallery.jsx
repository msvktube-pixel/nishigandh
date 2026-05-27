import React, { useState } from "react";
import "../../assets/css/gallery.css";

import img1 from "../../assets/images/Building.jpeg";
import img2 from "../../assets/images/reception.jpeg";
import img3 from "../../assets/images/Operation-Theoter.jpeg";
import img4 from "../../assets/images/patient-room.jpeg";
import Medical from "../../assets/images/Medical.jpeg";
import img6 from "../../assets/images/Lab.jpeg";
import img7 from "../../assets/images/waiting.jpeg";
import Doctor from "../../assets/images/Doctor.jpeg";
import Cabin from "../../assets/images/Cabin.jpeg";
import Corridor from "../../assets/images/Corridor.jpeg";
import Staff from "../../assets/images/Staff.jpeg";
import Special from "../../assets/images/Special.jpeg";
import Checkup from "../../assets/images/Checkup.jpeg";
import OPD2 from "../../assets/images/OPD2.jpeg";
import Ward from "../../assets/images/Ward.jpeg";
import Reception1 from "../../assets/images/Reception1.jpeg";
import Special2 from "../../assets/images/Special2.jpeg";
import BuildingSide from "../../assets/images/BuildingSide.jpeg";
import { NavLink } from "react-router-dom";

const data = [
  { img: img1, title: "Hospital Building" },            // 1️⃣ Entry view
  { img: BuildingSide, title: "Building Side  View" },            // 1️⃣ Entry view

  { img: Reception1, title: "Reception Area 1" },       // 2️⃣ Reception
  { img: img2, title: "Reception Area 2" },

  { img: Corridor, title: "Patient Waiting Corridor" }, // 3️⃣ Movement area
  { img: img7, title: "Waiting Area" },

  { img: Cabin, title: "Doctor Cabin Entrance" },       // 4️⃣ Consultation
  { img: Checkup, title: "Doctor Checkup Room" },
  { img: OPD2, title: "OPD Consultation Room – 2" },

  { img: img3, title: "Operation Theatre" },            // 5️⃣ Treatment
  { img: img6, title: "Laboratory" },

  { img: img4, title: "Patient Room" },                 // 6️⃣ Stay area
  { img: Special, title: "Special Room No. 1" },
  { img: Special2, title: "Special Room No. 2" },

  { img: Medical, title: "Medical" },         // 7️⃣ Ward
  { img: Ward, title: "General Ward – Additional View" },

  { img: Staff, title: "Staff Room" },                  // 8️⃣ Internal
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
   <>
  {/* ===== GALLERY SECTION ===== */}
  <section className="gallery-section" style={{ padding: "60px 20px" }}>

    <h1 style={{ textAlign: "center", fontSize: "32px", marginBottom: "10px" }}>
      Hospital Gallery
    </h1>

    <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
      Modern infrastructure • Clean environment • Patient care excellence
    </p>

    <div 
      className="gallery-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}
    >

      {data.map((item, i) => (
        <div 
          className="gallery-card" 
          key={i} 
          onClick={() => setActive(item)}
          style={{
            cursor: "pointer",
            background: "#fff",
            padding: "10px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}
        >

          <div 
            className="image-box"
            style={{
              width: "100%",
              height: "220px",
              overflow: "hidden",
              borderRadius: "12px",
              background: "#f5f5f5"
            }}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"   // 👈 FULL IMAGE visible (no cut)
              }}
            />
          </div>

          <div className="info" style={{ marginTop: "10px", textAlign: "center" }}>
            <h3 style={{ fontSize: "18px" }}>{item.title}</h3>
          </div>

        </div>
      ))}

    </div>

    {/* ===== LIGHTBOX ===== */}
    {active && (
      <div 
        className="lightbox" 
        onClick={() => setActive(null)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999
        }}
      >
        <div 
          className="lightbox-inner"
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            maxWidth: "90%",
            textAlign: "center"
          }}
        >
          <img 
            src={active.img} 
            alt="" 
            style={{
              width: "100%",
              maxHeight: "70vh",
              objectFit: "contain",
              borderRadius: "10px"
            }}
          />
          <h2 style={{ marginTop: "15px" }}>{active.title}</h2>
        </div>
      </div>
    )}

  </section>


  {/* ===== OUR DOCTOR SECTION ===== */}
  <section className="doctor-section" style={{ padding: "60px 20px", background: "#f9fbff" }}>

    <div 
      className="doctor-card"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "30px",
        maxWidth: "1000px",
        margin: "auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}
    >

      {/* IMAGE */}
      <div 
        className="doctor-img"
        style={{
          flex: "1 1 300px",
          textAlign: "center"
        }}
      >
        <img 
          src={Doctor}
          alt="Doctor"
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "380px",
            objectFit: "cover",
            borderRadius: "20px"
          }}
        />
      </div>

      {/* DETAILS */}
      <div 
        className="doctor-details"
        style={{
          flex: "1 1 400px"
        }}
      >

        <h3 style={{ fontSize: "26px", marginBottom: "10px" }}>
          डॉ. भारत एम. विरकर
        </h3>

        <p style={{ color: "#0077ff", fontWeight: "600", marginBottom: "10px" }}>
          B.A.M.S. (Pune)
        </p>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          Dedicated and experienced doctor providing quality healthcare 
          with a focus on patient safety, care, and treatment excellence.
        </p>
<p>अनुभवी आणि समर्पित डॉक्टरांकडून रुग्णांच्या सुरक्षितता, उत्तम सेवा आणि उत्कृष्ट उपचारांवर भर देत दर्जेदार आरोग्यसेवा प्रदान केली जाते.</p>
        {/* Expertise */}
        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ marginBottom: "5px" }}>Expertise</h4>
          <p style={{ color: "#555" }}>
            General Medicine and Surgical Care including diagnosis, treatment, 
            and minor surgical procedures with a patient-centered approach.
          </p>
          <p>रुग्णकेंद्रित दृष्टिकोनातून सामान्य वैद्यकीय सेवा, निदान, उपचार तसेच लहान शस्त्रक्रिया सुविधा उपलब्ध आहेत.
</p>
        </div>

        <NavLink 
          to="/contact" 
          style={{
            display: "inline-block",
            padding: "10px 20px",
            width:"40%",
            background: "#0077ff",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Book Appointment
        </NavLink>

      </div>

    </div>

  </section>
</>
    
  );
}