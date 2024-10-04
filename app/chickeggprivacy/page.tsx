"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<any>(null);

  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect personal information such as your name, email address, phone number, physical address, and location data when you use the ChickEgg app.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use your information to provide and improve our services, communicate with you, and comply with legal obligations.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, delete, or restrict the processing of your personal information. You may also withdraw your consent at any time.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions or concerns about our privacy practices, please contact us at privacy@chickegg.com.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        ChickEgg App Privacy Policy
      </motion.h1>
      
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-6"
        >
          <motion.h2
            className="text-2xl font-semibold mb-2 cursor-pointer"
            onClick={() => setActiveSection(activeSection === index ? null : index)}
          >
            {section.title}
          </motion.h2>
          <motion.div
            initial={false}
            animate={{ height: activeSection === index ? 'auto' : 0, opacity: activeSection === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600">{section.content}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;