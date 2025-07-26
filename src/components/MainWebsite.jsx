import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BookSection from '@/components/BookSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const MainWebsite = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      <Header />
      <Hero />
      <About />
      <BookSection />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default MainWebsite;