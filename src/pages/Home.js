import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Home.css';
import { ArrowRight, Share2, Plus, Minus } from 'lucide-react';
import Decent from './decent.png';
import Access from './cent.webp';
import Intero from './intero.webp';
import Contri from './Contr1.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className='block1'>
        <h2 id='hw'>HealthBook</h2>
        <p id='pw'>Your Health, Your Data – Secure & Decentralized</p>
        <div className='btns'>
          <div className='btn1'>
            <a href="#" id='btn1'>Get Started</a>
            <ArrowRight size={18} />
          </div>
          <div className='btn2'>
            <Link to="/login" id='btn2'>Login</Link>
            <Share2 size={18} />
          </div>
        </div>
      </div>

      <div className='block2' id='block2'>
        <div className='cont1'>
          <div className='set1'>
            <h3 id='hcont1'>Secure & Decentralized Storage</h3>
            <p id='pc1'>Your health records, safely stored on blockchain—tamper-proof & accessible only to you.</p>
          </div>
          <div className='set2'>
            <img src={Decent} id='img1' alt="Decentralized Storage" />
          </div>
        </div>
        <div className='cont2'>
          <div className='set3'>
            <h3 id='hcont2'>Patient-Centric Access Control</h3>
            <p id='pc2'>You control who accesses your medical data—doctors, hospitals, and insurers only when you allow it.</p>
          </div>
          <div className='set4'>
            <img src={Access} id='img2' alt="Access Control" />
          </div>
        </div>
        <div className='cont3'>
          <div className='set5'>
            <h3 id='hcont3'>Interoperability with Healthcare Systems</h3>
            <p id='pc3'>Seamless integration with hospitals, labs, and insurance companies.</p>
          </div>
          <div className='set6'>
            <img src={Intero} id='img3' alt="Healthcare Interoperability" />
          </div>
        </div>
        <div className='cont4'>
          <div className='set7'>
            <h3 id='hcont4'>Medical Data Sharing with Smart Contracts</h3>
            <p id='pc4'>Grant or revoke data access to healthcare providers instantly using smart contracts.</p>
          </div>
          <div className='set8'>
            <img src={Contri} id='img4' alt="Smart Contracts" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='faq-section' id='faq-section'>
        <h2>Frequently Asked Questions</h2>
        {[
          { question: "What is HealthBook?", answer: "HealthBook is a platform that empowers patients to securely store and manage their health data using blockchain technology." },
          { question: "How does HealthBook ensure data security?", answer: "We utilize blockchain technology to provide a tamper-proof and decentralized storage solution, ensuring that only you have access to your data." },
          { question: "Can I share my health data with providers?", answer: "Yes, you have full control to grant or revoke access to your health data to healthcare providers as needed." },
          { question: "Is HealthBook compliant with healthcare regulations?", answer: "Absolutely, HealthBook adheres to all relevant healthcare regulations to ensure the privacy and security of your data." }
        ].map((item, index) => (
          <div key={index} className='faq-item' onClick={() => toggleFAQ(index)}>
            <h3>{item.question} 
              {activeIndex === index ? <Minus size={18} className="faq-icon" /> : <Plus size={18} className="faq-icon" />}
            </h3>
            <p className={activeIndex === index ? 'faq-answer show' : 'faq-answer'}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>


<div className='footer'>
    <div className='foot1'>
        <h5 id='quick'>Quick Links</h5>
        <a href='' id='ho'>Home</a>
        <a href='' id='Fea'>Features</a>
        <a href='' id='fa'>FAQ</a>
        <a href='' id='con'>Contact</a>

        {/* Social Media Icons */}
        <div className="social-icons">
            <a href="#" className="icon twitter" ><FaTwitter /></a>
            <a href="#" className="icon instagram"><FaInstagram /></a>
            <a href="#" className="icon linkedin"><FaLinkedin /></a>
        </div>
    </div>
    
    <div className='foot2' id='foot2'>
        <h5 id='coin'>Contact Info</h5>
        <p id='phone'>Phone:</p>
        <p id='num'>+91 7986529303</p>

        <h5 id='em'>Send Email:</h5>
        <p id='enum'>sales@healthbook.com</p>

        <h5 id='addr'>Address:</h5>
        <p id='adnum'>25/16 Housing Board, UP, India 203844</p>
    </div>
</div>

<div className='rese'>
    <p id='cop'>&copy; 2025 - HealthBook - All Rights Reserved.</p>
</div>


    </div>
  );
};

export default Home;
