import React from 'react';
import { motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const images = [
    { src: "/Mextra_1.jpg", alt: "Editorial fashion portrait" },
    { src: "/Mextra_2.jpg", alt: "High fashion pose" },
    { src: "/Mextra_3.jpg", alt: "Detail focus photography" },
    { src: "/Mextra_4.jpg", alt: "Modern aesthetic shot" }
  ];

  return (
    <section id="portfolio" className="editorial-section portfolio-editorial">
      <span className="section-number">04</span>
      <div className="portfolio-content">
        <div className="portfolio-header">
          <span className="portfolio-sub">CURATED</span>
          <h2 className="portfolio-title">EDITORIAL<br/>GALLERY</h2>
        </div>
        <div className="portfolio-grid">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              className={`portfolio-item item-${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={img.src} alt={img.alt} className="portfolio-img" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
