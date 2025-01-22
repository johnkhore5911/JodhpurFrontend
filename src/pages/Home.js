import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ArrowRight, Share2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import translations from '../pages/translations';

import Decent from './decent.png';
import Access from './cent.webp';
import Intero from './intero.webp';
import Contri from './Contr1.jpg';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const text = translations[language];

  return (
    <div>
      <div className='block1'>
        <h2 id='hw'>{text.title}</h2>
        <p id='pw'>{text.tagline}</p>
        <div className='btns'>
          <div className='btn1'>
            <Link to="/signup" id='btn1'>{text.getStarted}</Link>
            <ArrowRight size={18} />
          </div>
          <div className='btn2'>
            <Link to="/login" id='btn2'>{text.login}</Link>
            <Share2 size={18} />
          </div>
        </div>
      </div>

      <div className='block2' id='block2'>
        <div className='cont1'>
          <div className='set1'>
            <h3>{text.features[0].title}</h3>
            <p>{text.features[0].desc}</p>
          </div>
          <div className='set2'>
            <img src={Decent} id='img1' alt="Decentralized Storage" />
          </div>
        </div>
        <div className='cont2'>
          <div className='set3'>
            <h3>{text.features[1].title}</h3>
            <p>{text.features[1].desc}</p>
          </div>
          <div className='set4'>
            <img src={Access} id='img2' alt="Access Control" />
          </div>
        </div>
        <div className='cont3'>
          <div className='set5'>
            <h3>{text.features[2].title}</h3>
            <p>{text.features[2].desc}</p>
          </div>
          <div className='set6'>
            <img src={Intero} id='img3' alt="Healthcare Interoperability" />
          </div>
        </div>
        <div className='cont4'>
          <div className='set7'>
            <h3>{text.features[3].title}</h3>
            <p>{text.features[3].desc}</p>
          </div>
          <div className='set8'>
            <img src={Contri} id='img4' alt="Smart Contracts" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='faq-section' id='faq-section'>
        <h2>{text.faqTitle}</h2>
        {text.faqs.map((faq, index) => (
          <div key={index} className='faq-item' onClick={() => toggleFAQ(index)}>
            <h3>{faq.question} {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}</h3>
            <p className={activeIndex === index ? 'faq-answer show' : 'faq-answer'}>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className='footer'>
        <div className='foot1'>
          <h5 id='quick'>{text.quickLinks}</h5>
          <a href='#' id='ho'>{text.home}</a>
          <a href='#block2' id='Fea'>{text.featuresTitle}</a>
          <a href='#faq-section' id='fa'>{text.faqTitle}</a>
          <a href='#foot2' id='con'>{text.contact}</a>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="icon twitter"><FaTwitter /></a>
            <a href="#" className="icon instagram"><FaInstagram /></a>
            <a href="#" className="icon linkedin"><FaLinkedin /></a>
          </div>
        </div>

        <div className='foot2' id='foot2'>
          <h5 id='coin'>{text.contactInfo}</h5>
          <p id='phone'>{text.phone}</p>
          <p id='num'>+91 7986529303</p>

          <h5 id='em'>{text.emailLabel}</h5>
          <p id='enum'>sales@healthbook.com</p>

          <h5 id='addr'>{text.addressLabel}</h5>
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
