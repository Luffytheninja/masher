import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Moon, ChevronDown, Instagram } from 'lucide-react';
import './App.css';

import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Detail } from './components/Detail';
import { MotionSection } from './components/Motion';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState('dark');
  const [followers, setFollowers] = useState<string>("7,9k");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.instagram.com/omonigho.xx/')}`)
      .then(res => res.json())
      .then(data => {
        const html = data.contents;
        const match = html.match(/meta property="og:description" content="([0-9,KM.]+)\s*Followers/i);
        if(match && match[1]) {
          setFollowers(match[1]);
        }
      })
      .catch(err => console.log("Follower fetch fail", err));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", isMobile ? "0vw" : "-620vw"]);

  return (
    <>
      <nav className={isMobile ? 'nav-mobile' : ''}>
        <div className="nav-location">{isMobile ? 'MOYIN' : 'Lagos, NG'}</div>
        
        {!isMobile && (
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        )}

        {isMobile ? (
          <div className="nav-mobile-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className={`burger-menu ${menuOpen ? 'open' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        ) : (
          <div className="nav-social">
            <a href="https://www.instagram.com/omonigho.xx/" target="_blank" rel="noopener noreferrer" className="nav-instagram">
              <Instagram size={18} />
              <span className="nav-handle">omonigho.xx</span>
              <span className="nav-count">{followers}</span>
            </a>
          </div>
        )}

        {isMobile && menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-menu-overlay"
          >
            <div className="mobile-menu-links">
              <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#vision" onClick={() => setMenuOpen(false)}>Vision</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
            <div className="mobile-menu-footer">
              <div className="nav-location">Lagos, NG</div>
              <a href="https://www.instagram.com/omonigho.xx/" className="nav-instagram">
                <Instagram size={18} />
                <span>omonigho.xx</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <main ref={targetRef} className="editorial-scroll-container">
        <div className="editorial-sticky">
          <motion.div style={{ x }} className="editorial-track">
            
            <Hero />
            <Vision />
            <Detail />
            <MotionSection />
            <Portfolio />
            <Contact />

          </motion.div>
        </div>
      </main>

      <div className="scroll-indicator">
        <ChevronDown size={28} strokeWidth={1} className="bounce-arrow" />
      </div>

      <footer className="footer-credits">
        &copy; 2026 Moyinoluwa Omonigho. All rights reserved.
      </footer>
    </>
  );
};

export default App;


