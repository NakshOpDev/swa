import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen science-gradient flex flex-col items-center justify-center p-4"
    >
      <div className="text-center space-y-8 max-w-md w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <img 
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b800cf2-8250-4858-a088-3e6255b35792/78785c0b0537488c0a6dad5b0aacdd1f.png" 
            alt="Science with Akhil Logo" 
            className="w-24 h-24 rounded-full shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          🎉 Happy Birthday Sir! 🎉
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-white/90 mb-8"
        >
          Science With Akhil
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm text-white/80 mb-8"
        >
          Unlocking the secrets of the universe...
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm"
        >
          <motion.div
            className="loading-bar h-full rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-white/70 text-sm"
        >
          {progress}% Complete
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingPage;