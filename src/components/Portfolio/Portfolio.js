import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    {
      type: 'image',
      src: '/images/portfolio1.jpg',
      title: 'Aluminum Installation',
      description: 'Modern aluminum works for residential buildings'
    },
    {
      type: 'image',
      src: '/images/portfolio2.jpg',
      title: 'Glass Partition',
      description: 'Elegant glass partitions for office spaces'
    },
    {
      type: 'video',
      src: '/videos/portfolio1.mp4',
      title: 'Window Installation',
      description: 'Professional window installation process'
    },
    {
      type: 'image',
      src: '/images/portfolio3.jpg',
      title: 'Aluminum Framing',
      description: 'Precision aluminum framing solutions'
    },
    {
      type: 'image',
      src: '/images/portfolio4.jpg',
      title: 'Glass Works',
      description: 'Custom glass works and designs'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <motion.h2 
          className="portfolio-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h2>
        
        <motion.p 
          className="portfolio-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Showcasing our best works and completed projects
        </motion.p>

        <div className="portfolio-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="portfolio-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="portfolio-item">
                {portfolioItems[currentSlide].type === 'image' ? (
                  <img 
                    src={portfolioItems[currentSlide].src} 
                    alt={portfolioItems[currentSlide].title}
                  />
                ) : (
                  <video controls>
                    <source src={portfolioItems[currentSlide].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="portfolio-info">
                  <h3>{portfolioItems[currentSlide].title}</h3>
                  <p>{portfolioItems[currentSlide].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-controls">
            <button 
              className="slider-btn prev"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)}
            >
              ‹
            </button>
            <button 
              className="slider-btn next"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)}
            >
              ›
            </button>
          </div>

          <div className="slide-indicators">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#portfolio"
            className="see-more-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            See More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;