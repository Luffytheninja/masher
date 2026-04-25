import React from 'react';

export const Detail: React.FC = () => {
  return (
    <section className="editorial-section detail-editorial">
      <div className="detail-grid">
        <div className="detail-main-wrap">
          <img src="/Mhands.png" alt="Graceful hands" className="detail-main-img" />
        </div>
        <div className="detail-stack">
          <img src="/Mfinger.png" alt="Hand detail" className="detail-stack-img" />
          <img src="/Mcloseup_1.png" alt="Close up texture" className="detail-stack-img" />
        </div>
      </div>
    </section>
  );
};
