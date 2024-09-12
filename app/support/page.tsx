"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Support() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
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
  
    const handleSubmit = () => {
    //   e.preventDefault();
      // Handle form submission here
      console.log('Submitted:', { email, message });
      // Reset form fields
      setEmail('');
      setMessage('');
    };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="p-8">
        <motion.h1 
          className="text-4xl font-bold text-center text-gray-900 mb-8"
          variants={itemVariants}
        >
          Support
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-center">
          We`&apos;`re here to help! Please fill out the form below and we`&apos;`ll get back to you as soon as possible.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </motion.div>
        </form>

        <motion.div 
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Need immediate assistance?
          </p>
          <p className="text-gray-800 font-semibold">
            Call us at: +1 (123) 456-7890
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
  )
}
