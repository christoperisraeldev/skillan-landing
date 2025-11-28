import React from 'react';
import './Jobs.css';
import { motion } from 'framer-motion';

const Jobs = () => {
  const jobCategories = [
    {
      title: 'Aluminum Fabricators',
      image: '/images/aluminum-fabricator.jpg',
      description: 'Expert aluminum works and fabrication services'
    },
    {
      title: 'Glass and Aluminum Contractors/Specialists',
      image: '/images/glass-contractor.jpg',
      description: 'Professional glass and aluminum installation'
    },
    {
      title: 'Glaziers',
      image: '/images/glazier.jpg',
      description: 'Specialized glass works and installations'
    }
  ];

  return (
    <section id="jobs" className="jobs">
      <div className="jobs-container">
        <motion.h2 
          className="jobs-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="jobs-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Aluminum fabricators, Glass and aluminum contractors/specialists, Glaziers but other services will be available soon
        </motion.p>
        
        <div className="jobs-grid">
          {jobCategories.map((job, index) => (
            <motion.div
              key={job.title}
              className="job-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
            >
              <div className="job-image">
                <img src={job.image} alt={job.title} />
                <div className="job-overlay">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="coming-soon"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="coming-soon-badge"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            More Services Coming Soon!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Jobs;