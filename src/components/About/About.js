import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="about-title"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Skillan Pro
        </motion.h2>
        <motion.p 
          className="about-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skillan Pro is a digital platform that connects skilled artisans (such as plumbers, 
          fashion designers, bricklayers, mechanics, etc.) with customers across Nigeria. 
          We bridge the gap between quality service providers and those in need of their expertise.
        </motion.p>
        
        <div className="about-features">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <div className="feature-icon">🔧</div>
            <h3>Skilled Artisans</h3>
            <p>Verified professionals with proven expertise</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <div className="feature-icon">⚡</div>
            <h3>Quick Service</h3>
            <p>Fast response and efficient service delivery</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <div className="feature-icon">🛡️</div>
            <h3>Quality Guarantee</h3>
            <p>Quality workmanship with satisfaction guarantee</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;