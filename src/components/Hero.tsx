import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="editorial-section hero-editorial">
      <div className="hero-content">
         <motion.h1 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="hero-headline"
         >
           MOYINOLUWA
           <span className="hero-headline-sub">OMONIGHO</span>
         </motion.h1>

         <div className="mobile-stats">
            <div className="stat-row">
              <span>5'11"</span>
              <span>81-60-89</span>
              <span>40 EU</span>
            </div>
            <div className="stat-labels">
              <span>HEIGHT</span>
              <span>B/W/H</span>
              <span>SHOES</span>
            </div>
         </div>
      </div>
      <motion.img 
        src="/Mportrait.png" 
        className="hero-editorial-img"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        alt="Moyinoluwa Omonigho Portrait"
      />
    </section>
  );
};
