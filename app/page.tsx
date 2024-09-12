"use client"
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const features = [
    { icon: '💡', title: 'Comprehensive Question Bank', description: 'Thousands of questions covering all major cloud certifications.' },
    { icon: '⏱️', title: 'Timed Practice Tests', description: 'Simulate real exam conditions with our timed tests.' },
    { icon: '📊', title: 'Performance Analytics', description: 'Track your progress and identify areas for improvement.' },
    { icon: '🎓', title: 'Expert-Curated Content', description: 'Questions and explanations crafted by certified cloud professionals.' },
    { icon: '📱', title: 'Mobile-Friendly', description: 'Practice on the go with our responsive design.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center">
          <div className="text-6xl mb-4">☁️</div>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cloud Quiz
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
            Master cloud technologies and ace your certification exams with our comprehensive quiz platform.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="pt-6"
                variants={itemVariants}
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <span className="text-2xl" aria-hidden="true">{feature.icon}</span>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* <motion.div variants={itemVariants} className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start Practicing Now
          </motion.button>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default HomePage;