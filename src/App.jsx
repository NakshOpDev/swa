import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingPage from '@/components/LoadingPage';
import MainWebsite from '@/components/MainWebsite';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Science with Akhil - Science Handbook for Class 10th Students</title>
        <meta name="description" content="Master Class 10th Science concepts with Dr. Akhil Kaushik's comprehensive Science Handbook. Easy language, diagrams, and important questions for RBSE & CBSE students." />
      </Helmet>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingPage key="loading" />
        ) : (
          <MainWebsite key="main" />
        )}
      </AnimatePresence>
      
      <Toaster />
    </>
  );
}

export default App;