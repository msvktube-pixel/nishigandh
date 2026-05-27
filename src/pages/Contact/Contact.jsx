import React from "react";
import "../../assets/css/contact.css";

export default function Contact(){
    return(
        <>
      <section className="contact-section">

  <div className="contact-header">
    <h2>
      Get in <span>Touch</span>
    </h2>
    <p>We are here to help you 24/7</p>
  </div>

  <div className="contact-card">

    <div className="contact-item">
      <h3>🏥 Clinic Name</h3>
      <p>Nishigandh Clinic and Hospital Shevgaon</p>
    </div>

    <div className="contact-item">
      <h3>📍 Address</h3>
      <p>M.S. E. B. In front of Substation, Mundhe Chowk, Khandobanagar, Shevgaon, D.A. Nagar, Pin. 414502</p>
    </div>

    <div className="contact-item">
      <h3>📞 Phone</h3>
      <p>2429222251</p>
    </div>

    <div className="contact-item">
      <h3>✉️ Email</h3>
      <p>bharat.virkar@yahoo.com</p>
    </div>

    <div className="contact-item">
      <h3>⏰ OPD Timings</h3>
      <p>Morning: 10:00 AM to 4:00 PM </p>
      <p>Evening: 6:00 PM to 10:00 PM</p>
    </div>

  </div>

</section>
<section className="contact-section">

  <div className="contact-header">
    <h2>
      संपर्क <span>करा</span>
    </h2>
    <p>आम्ही आपल्यासाठी २४x७ सेवेसाठी उपलब्ध आहोत</p>
  </div>

  <div className="contact-card">

    <div className="contact-item">
      <h3>🏥 क्लिनिकचे नाव</h3>
      <p>निशिगंध क्लिनिक अँड हॉस्पिटल, शेवगाव</p>
    </div>

    <div className="contact-item">
      <h3>📍 पत्ता</h3>
      <p>M.S.E.B. सबस्टेशन समोर, मुंढे चौक, खंडोबानगर, शेवगाव, डी.ए. नगर, पिन - 414502</p>
    </div>

    <div className="contact-item">
      <h3>📞 फोन</h3>
      <p>2429222251</p>
    </div>

    <div className="contact-item">
      <h3>✉️ ईमेल</h3>
      <p>bharat.virkar@yahoo.com</p>
    </div>

    <div className="contact-item">
      <h3>⏰ ओपीडी वेळ</h3>
      <p>सकाळी : १०:०० ते ४:००</p>
      <p>संध्याकाळी : ६:०० ते १०:००</p>
    </div>

  </div>

</section>
<section className="emergency-section">

  <div className="emergency-header">
    <h2>
      Emergency <span>Services</span>
    </h2>
    <p>24/7 Immediate medical support when you need it most</p>
  </div>

  <div className="emergency-container">

    {/* LEFT CONTENT */}
    <div className="emergency-card">
      <h3>🚑 Emergency Care</h3>
      <p>
        Emergency patients are attended anytime with priority care and 
        immediate medical attention by our expert team.
      </p>

      <a href="tel:+912429222251" className="emergency-btn">
        📞 Call Now
      </a>
    </div>

    {/* RIGHT MAP */}
   <div className="map-card">
  <h3>📍 Location Map</h3>

  <div className="map-box">

    {/* ✅ FIX 1: Accessible Anchor + Directions */}
  <a
  href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=19.3481597,75.2216358&travelmode=driving"
  target="_blank"
  rel="noopener noreferrer"
  className="map-overlay"
  aria-label="Get directions to Nishigandh Hospital"
>
  <span style={{ display: "none" }}>
    Open directions in Google Maps
  </span>
</a>

    {/* ✅ FIX 2: iframe title added */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.484576564119!2d75.2216358!3d19.348159700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb690076161edf%3A0xa4c99742debfe1de!2sNishigandh%20Clinic%20and%20Hospital%2C%20Shevgaon.!5e0!3m2!1sen!2sin!4v1777652802780!5m2!1sen!2sin"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Map showing Nishigandh Clinic and Hospital location"
    ></iframe>

  </div>
</div>

  </div>

</section>
        </>
    )
}