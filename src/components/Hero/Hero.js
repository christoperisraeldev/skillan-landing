import React, { useState, useEffect } from "react";
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero1.jpg",
      title: "Platform for all Artisans and clients",
      subtitle: "Connecting skilled professionals with those who need them",
    },
    {
      image: "/images/hero2.jpg",
      title: "Quality Service Guaranteed",
      subtitle: "Verified artisans delivering excellence",
    },
    {
      image: "/images/hero3.jpg",
      title: "Across Nigeria",
      subtitle: "Serving clients nationwide with trusted professionals",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div className="hero-overlay">
              <motion.div
                className="hero-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.h1
                  className="hero-title"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="hero-subtitle"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  className="cta-buttons"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <motion.button
                    className="cta-primary"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Find an Artisan
                  </motion.button>
                  <motion.button
                    className="cta-secondary"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join as Artisan
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
