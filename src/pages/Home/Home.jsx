import React from "react";
import "../../assets/css/home.css";
import { NavLink } from "react-router-dom";
import General from "../../assets/images/General2.jpeg";
import Op from "../../assets/images/Operation-Theoter.jpeg";
import opd from "../../assets/images/opd.jpeg";
import Consulting from "../../assets/images/Consulting.jpeg";
import patient from "../../assets/images/patient-room.jpeg";
import Lab from "../../assets/images/Lab.jpeg";
import waiting from "../../assets/images/waiting.jpeg";
import Hospital from "../../assets/images/Building.jpeg";

export default function Home() {
  const data = [
    "27+ Years of Trusted Service",
    "Modern Operation Theatre",
    "In-House Laboratory",
    "Comfortable Patient Rooms",
    "Experienced Medical Staff",
    "Affordable Healthcare"
  ];
  const marathi = [
    "27+ वर्षांची विश्वासार्ह सेवा",
    "आधुनिक ऑपरेशन थिएटर सुविधा",
    "अत्याधुनिक इन-हाऊस प्रयोगशाळा",
    "आरामदायी रुग्ण कक्ष",
    "अनुभवी वैद्यकीय कर्मचारी",
    "परवडणाऱ्या आरोग्य सेवा"
  ];

  const facilities = [
    {
      name: "General Wards(सामान्य वॉर्ड सुविधा)",
      img: General
    },
    {
      name: "Operation Theatre(ऑपरेशन थिएटर सुविधा)",
      img:  Op
    },
    {
      name: "OPD Services(बाह्यरुग्ण विभाग सेवा)",
      img: opd
    },
    {
      name: "Consulting Rooms(सल्ला व तपासणी कक्ष)",
      img: Consulting
    },
    {
      name: "Special Rooms(विशेष रुग्ण कक्ष)",
      img: patient
    },
    {
      name: "Laboratory(प्रयोगशाळा सुविधा)",
      img: Lab
    },
    {
      name: "Waiting Area & Reception(प्रतीक्षा कक्ष व स्वागत विभाग)",
      img: waiting
    }
  ];
  return (
    <>
      <section className="hero">

        {/* Left Content */}
        <div className="hero-content">
          <h4>
            Welcome to <span>Nishigandh Clinic and Hospital Shevgaon</span>
          </h4>

          <p>
            Serving with care, trust, and excellence since 1999, Nishigandh Clinic and Hospital Shevgaon is dedicated to providing quality healthcare services to the community.
          </p>

          <p>
            With modern medical facilities, experienced doctors, and a patient-first approach, we ensure the best treatment in a safe and comfortable environment.
          </p>
<p>1999 पासून काळजी, विश्वास आणि उत्कृष्ट सेवेसह कार्यरत, Nishigandh Clinic and Hospital हे रुग्णांना दर्जेदार आरोग्य सेवा प्रदान करण्यासाठी समर्पित आहे.

आधुनिक वैद्यकीय सुविधा, अनुभवी डॉक्टर आणि रुग्ण-केंद्रित सेवेमुळे आम्ही सुरक्षित व आरामदायी वातावरणात उत्तम उपचार देण्याचा प्रयत्न करतो.
</p>
          <h3>Your health is our priority.</h3>

          <div className="hero-buttons">
            <button className="primary-btn">Get Consultation</button>

<NavLink
  to="/about"
  style={{
    textDecoration: "none",
    display: "inline-block",
    padding: "12px 28px",
    borderRadius: "30px",
    background: "linear-gradient(135deg, #11a81e, #6366f1)",
    color: "#fff",
    fontWeight: "500",
    transition: "0.3s"
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
  }}
>
  Learn More →
</NavLink>

          </div>
        </div>

        {/* Right Design */}
        <div className="hero-image">
          <div className="circle">
            <img src={Hospital} style={{height:"100%" ,width:"100%",borderRadius:"10%"}} alt="" />
          </div>
        
        </div>

      </section>

      <section className="highlights">

        <h2 className="title">Our Highlights</h2>

        <div className="highlight-container">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <span>✔</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

      </section>
            <section className="highlights">

        <h2 className="title">आमची वैशिष्ट्ये</h2>

        <div className="highlight-container">
          {marathi.map((item, index) => (
            <div className="card" key={index}>
              <span>✔</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

      </section>


      <section className="facilities">

        <h2 className="fac-title">Quick Facilities Overview</h2>

        <div className="fac-grid">
          {facilities.map((item, index) => (
            <div className="fac-card" key={index}>

            <img 
  src={item.img} 
  alt={item.name} 
  className="fac-img"
  style={{
    width: "100%",
    height: "200px",
    objectFit: "contain",
    objectPosition: "center",
    background: "#f5f5f5"  // empty space clean dikhega
  }}
/>

              <div className="fac-overlay">
                <p>{item.name}</p>
              </div>

            </div>
          ))}
        </div>

      </section>

      <section className="cta-section">

        <div className="cta-card">

          <h2>Emergency & Appointment Booking</h2>

          <p>
            Book your appointment today for trusted medical care.
          </p>

          <div className="cta-buttons">

            {/* CALL */}
            <a href="tel:+912429222251" className="call-btn">
              📞 Call Now
            </a>

            {/* WHATSAPP */}
            <a href="https://wa.me/+912429222251" className="whatsapp-btn">
              💬 WhatsApp
            </a>

          </div>

        </div>

      </section>



    </>
  )
}