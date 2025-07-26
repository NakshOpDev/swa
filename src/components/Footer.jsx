import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Facebook, Twitter, Instagram, BookOpen, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@sciencewithakhil?si=8QypoNn4aSMpcCJj', color: 'text-red-500', name: 'YouTube' },
    { icon: Facebook, href: 'https://www.facebook.com/KaushikAkhi', color: 'text-blue-600', name: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/KaushikAkhi', color: 'text-blue-400', name: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/science.with.akhil?igsh=amJ5azd6Z2NrcG04', color: 'text-pink-500', name: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'YouTube', href: 'https://youtube.com/@sciencewithakhil?si=8QypoNn4aSMpcCJj' },
    { name: 'Facebook', href: 'https://www.facebook.com/KaushikAkhi' },
    { name: 'Twitter', href: 'https://twitter.com/KaushikAkhi' },
    { name: 'Instagram', href: 'https://www.instagram.com/science.with.akhil?igsh=amJ5azd6Z2NrcG04' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b800cf2-8250-4858-a088-3e6255b35792/caae36257cab7b084fc8cdea9a90bee6.png" 
                alt="Science with Akhil Logo" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <span className="text-xl font-bold text-gradient">Science with Akhil</span>
                <p className="text-sm text-gray-400">Dr. Akhil Kaushik</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering students to excel in science through personalized teaching and comprehensive study materials.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:scale-110 transition-transform p-2 bg-gray-800 rounded-lg`}
                  title={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Contact Info</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400">+91 8306093121</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="text-purple-400 mt-1 flex-shrink-0" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    110, PACHAURI PARA BARI<br />
                    (Dholpur) RAJASTHAN, 328021
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <a 
                  href="https://www.amazon.in/gp/aw/d/B0DS18SDQG/ref=tmm_pap_swatch_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <BookOpen size={16} />
                  <span className="text-sm">Buy Book</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Science with Akhil. All rights reserved. | Dr. Akhil Kaushik - Science Educator
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;