import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 science-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Master Science with
                <span className="block text-yellow-300">Dr. Akhil Kaushik</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                Comprehensive Science Handbook for Class 10th students. Easy language, 
                detailed diagrams, and important questions for RBSE & CBSE boards.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
                onClick={() => window.open('https://www.amazon.in/gp/aw/d/B0DS18SDQG/ref=tmm_pap_swatch_0', '_blank')}
              >
                <BookOpen className="mr-2" size={20} />
                Buy Book Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-yellow-300" size={24} />
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="text-yellow-300" size={24} />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-yellow-300" size={24} />
                </div>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b800cf2-8250-4858-a088-3e6255b35792/3a0add97a37f1f1ab180b9c1f08e7914.jpg" 
                alt="Dr. Akhil Kaushik - Science Teacher" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-2xl blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;