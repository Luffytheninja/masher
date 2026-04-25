import React from 'react';
import { motion } from 'framer-motion';

export const Vision: React.FC = () => {
  const metrics = [
    { label: "Height", imp: "5'9\"", metric: "175cm" },
    { label: "Bust", imp: "34\"", metric: "86cm" },
    { label: "Waist", imp: "25\"", metric: "64cm" },
    { label: "Hips", imp: "35\"", metric: "89cm" },
    { label: "Shoes", imp: "42/43", metric: "EU" },
    { label: "Eyes", imp: "Dark Brown", metric: "" },
    { label: "Hair", imp: "Natural", metric: "" }
  ];

  return (
    <section id="vision" className="editorial-section vision-editorial">
      <motion.img 
        src="/Meyes.png" 
        alt="Moyinoluwa Omonigho Fashion Model Lagos"
        className="vision-img-large"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.8 }}
      />
      <div className="vision-metrics-container">
        <h2 className="seo-hidden">Model Details & Measurements</h2>
        <ul className="metrics-list">
          {metrics.map((m, i) => (
            <li key={i} className="metric-item">
              <span className="metric-label">{m.label}</span>
              <span className="metric-value">{m.imp} {m.metric && <span className="metric-sub">({m.metric})</span>}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.img 
        src="/Mpose.png" 
        alt="Moyinoluwa Omonigho Editorial Pose"
        className="vision-img-small"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
};
