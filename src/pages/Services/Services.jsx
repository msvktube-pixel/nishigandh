import React from "react";
import "../../assets/css/services.css";

export default function Services(){
    return(
        <>
       <section className="services-section">

  <h2 className="services-title">Our Medical Services</h2>

  <div className="services-grid">

    <div className="service-card">
      <div className="service-icon">🩺</div>
      <h3>General Medical Care</h3>
      <p>Complete diagnosis and treatment for common health conditions.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🏥</div>
      <h3>Surgical Services</h3>
      <p>Safe and advanced surgical procedures in modern operation theatre.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🚑</div>
      <h3>Emergency Care</h3>
      <p>Immediate attention and treatment for urgent medical needs.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🧪</div>
      <h3>Diagnostic Services</h3>
      <p>Accurate testing through in-house laboratory for fast results.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">👨‍⚕️</div>
      <h3>OPD Consultation</h3>
      <p>Daily outpatient services for checkups and expert consultation.</p>
    </div>

  </div>

</section>
<section className="services-section">

  <h2 className="services-title">आमच्या वैद्यकीय सेवा</h2>

  <div className="services-grid">

    <div className="service-card">
      <div className="service-icon">🩺</div>
      <h3>सामान्य वैद्यकीय सेवा</h3>
      <p>सामान्य आरोग्य समस्यांसाठी संपूर्ण तपासणी व उपचार सेवा.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🏥</div>
      <h3>शस्त्रक्रिया सेवा</h3>
      <p>आधुनिक ऑपरेशन थिएटरमध्ये सुरक्षित व प्रगत शस्त्रक्रिया सुविधा.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🚑</div>
      <h3>आपत्कालीन सेवा</h3>
      <p>तातडीच्या वैद्यकीय गरजांसाठी त्वरित उपचार व सेवा उपलब्ध.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🧪</div>
      <h3>निदान सेवा</h3>
      <p>जलद आणि अचूक अहवालांसाठी अत्याधुनिक प्रयोगशाळा सुविधा.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">👨‍⚕️</div>
      <h3>ओपीडी सल्ला सेवा</h3>
      <p>दैनंदिन तपासणी व तज्ज्ञ डॉक्टरांचा सल्ला उपलब्ध.</p>
    </div>

  </div>

</section>
<section className="facilities-section">

  <h2 className="facilities-title">Hospital Facilities</h2>

  <div className="facilities-grid">

    {/* ===== NEW ADDED FACILITIES (STARTING) ===== */}

    <div className="facility-card">
      <h3>ECG (Electrocardiogram)</h3>
      <p>Accurate heart monitoring for detecting cardiac conditions.</p>
    </div>

    <div className="facility-card">
      <h3>Pharmacy (Medicines Available)</h3>
      <p>All essential medicines available for quick and easy access.</p>
    </div>

    <div className="facility-card">
      <h3>Electronic Traction</h3>
      <p>Advanced therapy equipment for spine and muscle treatment.</p>
    </div>

    <div className="facility-card">
      <h3>Nebulization</h3>
      <p>Effective respiratory treatment for asthma and breathing issues.</p>
    </div>

    <div className="facility-card">
      <h3>Oxygen (O₂) Availability</h3>
      <p>24/7 oxygen support for emergency and critical care patients.</p>
    </div>

    <div className="facility-card">
      <h3>Tumor / Lump Treatment & Surgeries</h3>
      <p>Major surgeries like appendix and hernia</p>
    </div>

    {/* ===== EXISTING FACILITIES ===== */}

    <div className="facility-card">
      <h3>General Wards (2 Wards)</h3>
      <p>Clean and spacious wards for patient care.</p>
    </div>

    <div className="facility-card">
      <h3>Special Rooms (2 Rooms)</h3>
      <p>Private rooms with attached bathrooms for comfort and privacy.</p>
    </div>

    <div className="facility-card">
      <h3>Laboratory</h3>
      <p>Modern diagnostic lab for quick and reliable reports.</p>
    </div>

    <div className="facility-card">
      <h3>Waiting Area</h3>
      <p>Comfortable seating arrangement for patients and visitors.</p>
    </div>

    <div className="facility-card">
      <h3>Reception (2 Counters)</h3>
      <p>Efficient patient handling and support.</p>
    </div>

    <div className="facility-card">
      <h3>Consulting Rooms</h3>
      <p>Private consultation spaces for better doctor-patient interaction.</p>
    </div>

  </div>

</section>
<section className="facilities-section">

  <h2 className="facilities-title">रुग्णालयातील सुविधा</h2>

  <div className="facilities-grid">

    {/* ===== नवीन सुविधा ===== */}

    <div className="facility-card">
      <h3>ईसीजी (ECG)</h3>
      <p>हृदयाच्या आजारांचे निदान करण्यासाठी अचूक हृदय तपासणी सुविधा.</p>
    </div>

    <div className="facility-card">
      <h3>मेडिकल स्टोअर (औषधे उपलब्ध)</h3>
      <p>आवश्यक सर्व औषधे सहज आणि त्वरित उपलब्ध.</p>
    </div>

    <div className="facility-card">
      <h3>इलेक्ट्रॉनिक ट्रॅक्शन</h3>
      <p>मणका व स्नायू उपचारांसाठी आधुनिक थेरपी सुविधा.</p>
    </div>

    <div className="facility-card">
      <h3>नेब्युलायझेशन</h3>
      <p>दमा व श्वसन समस्यांसाठी प्रभावी उपचार सुविधा.</p>
    </div>

    <div className="facility-card">
      <h3>ऑक्सिजन (O₂) सुविधा</h3>
      <p>आपत्कालीन व गंभीर रुग्णांसाठी २४x७ ऑक्सिजन सेवा उपलब्ध.</p>
    </div>

    <div className="facility-card">
      <h3>गाठी / ट्युमर उपचार व शस्त्रक्रिया</h3>
      <p>अपेंडिक्स व हर्निया सारख्या मोठ्या शस्त्रक्रिया सुविधा.</p>
    </div>

    {/* ===== विद्यमान सुविधा ===== */}

    <div className="facility-card">
      <h3>सामान्य वॉर्ड (२ वॉर्ड)</h3>
      <p>रुग्ण सेवेसाठी स्वच्छ व प्रशस्त वॉर्ड सुविधा.</p>
    </div>

    <div className="facility-card">
      <h3>विशेष कक्ष (२ रूम)</h3>
      <p>आराम व गोपनीयतेसाठी अटॅच बाथरूमसह खासगी रूम सुविधा.</p>
    </div>

    <div className="facility-card">
      <h3>प्रयोगशाळा</h3>
      <p>जलद व विश्वासार्ह अहवालांसाठी आधुनिक निदान प्रयोगशाळा.</p>
    </div>

    <div className="facility-card">
      <h3>प्रतीक्षा कक्ष</h3>
      <p>रुग्ण व नातेवाईकांसाठी आरामदायी बसण्याची व्यवस्था.</p>
    </div>

    <div className="facility-card">
      <h3>रिसेप्शन (२ काउंटर)</h3>
      <p>रुग्ण मार्गदर्शन व सेवा व्यवस्थापनासाठी कार्यक्षम सुविधा.</p>
    </div>

    <div className="facility-card">
      <h3>सल्ला कक्ष</h3>
      <p>डॉक्टर व रुग्ण संवादासाठी स्वतंत्र व शांत सल्ला सुविधा.</p>
    </div>

  </div>

</section>
<section className="about-flow-section">

  <div className="about-flow">

    <div className="about-flow-left">
      <h2>Healing With Trust Since 1999</h2>

      <p>
        Nishigandh Clinic & Hospital has grown from a small clinic into a trusted healthcare center.
        Our journey is built on compassion, care, and commitment towards every patient.
      </p>

      <p>
        We believe in modern treatment with a human touch, ensuring every patient receives the best medical attention.
      </p>
<p>Nishigandh Clinic and Hospital ने एका छोट्या क्लिनिकपासून सुरुवात करून आज एक विश्वासार्ह आरोग्यसेवा केंद्र म्हणून आपली ओळख निर्माण केली आहे. आमचा प्रवास प्रत्येक रुग्णाप्रती असलेल्या आपुलकी, सेवा आणि समर्पणावर आधारित आहे.

आधुनिक उपचारपद्धतीसोबत मानवी स्पर्श जपत प्रत्येक रुग्णाला सर्वोत्तम वैद्यकीय सेवा मिळावी, यासाठी आम्ही सदैव प्रयत्नशील आहोत.
</p>
     <a href="tel:+912429222251">
  <button className="call-btn2">📞 Call for Appointment</button>
</a>
    </div>

    <div className="about-flow-right">
      <div className="glass-overlay">
        <img src="https://images.stockcake.com/public/d/9/e/d9e0f1cb-6bb7-406a-aa30-c72cf629d5ac_large/hospital-emergency-room-stockcake.jpg" alt="" />
      </div>
    </div>

  </div>

</section>
        
        </>
    )
}