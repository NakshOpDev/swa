import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Youtube, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@sciencewithakhil?si=8QypoNn4aSMpcCJj', color: 'text-red-500' },
    { icon: Facebook, href: 'https://www.facebook.com/KaushikAkhi', color: 'text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/KaushikAkhi', color: 'text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/science.with.akhil?igsh=amJ5azd6Z2NrcG04', color: 'text-pink-500' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b800cf2-8250-4858-a088-3e6255b35792/78785c0b0537488c0a6dad5b0aacdd1f.png" 
              alt="Science with Akhil Logo" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">Science with Akhil</h1>
              <p className="text-sm text-gray-600">Dr. Akhil Kaushik</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#book" className="text-gray-700 hover:text-purple-600 transition-colors">Book</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-110 transition-transform`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#book" className="text-gray-700 hover:text-purple-600 transition-colors">Book</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:scale-110 transition-transform`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;