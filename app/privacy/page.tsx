'use client'
import React from 'react'
import { motion } from 'framer-motion';

function page() {

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="p-8">
        <motion.h1 
          className="text-3xl font-bold text-center text-gray-900 mb-8"
          variants={itemVariants}
        >
          Privacy Policy
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-gray-700 mb-6">
          At Cloud Quiz, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Information We Collect
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-700 mb-6">
          We only collect your email address when you sign up for our service. We do not collect any other personal information.
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How We Use Your Information
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-700 mb-6">
          Your email address is used solely for the purpose of account management and to send you important updates about our service.
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Data Protection
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-700 mb-6">
          We implement industry-standard security measures to protect your email address from unauthorized access or disclosure.
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Your Rights
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-700 mb-6">
          You have the right to request access to, correction of, or deletion of your email address from our records at any time.
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Changes to This Policy
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-700 mb-6">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </motion.p>

        <motion.p variants={itemVariants} className="text-gray-700 mt-8 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </motion.div>
  </div>
  )
}

export default page