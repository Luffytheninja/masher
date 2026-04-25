import React from 'react';
import { Mail, ArrowRight, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {


  return (
    <section id="contact" className="editorial-section contact-editorial">
      <div className="contact-wrapper">
        <div className="contact-info-block">
          <h2 className="contact-title">WORK<br/>WITH ME</h2>
          <p className="contact-desc">
            Available for editorial, high-fashion, and commercial bookings worldwide. 
          </p>
          
          <div className="social-icons" style={{ marginTop: '2.5rem' }}>
            <a href="mailto:contact@omonigho.xx" className="social-icon-link"><Mail size={24} /></a>
            <a href="https://www.instagram.com/omonigho.xx/" className="social-icon-link"><Instagram size={24} /></a>
          </div>
          
          <button className="cta-button">
            Business Inquiry <ArrowRight size={18} />
          </button>
        </div>
        <img src="/Mpose_3.png" alt="Contact Portrait" className="contact-portrait" />
      </div>
    </section>
  );
};
