import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle, Star } from 'lucide-react';

const BookSection = () => {
  const features = [
    'Mastering Class 10th Concepts',
    'Notes Format, Easy & Simple Language',
    'Based on Class 10th Science NCERT',
    'Helpful for RBSE & CBSE Both',
    'With Diagrams & Important Questions'
  ];

  return (
    <section id="book" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">The Science Handbook</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your complete guide to mastering Class 10th Science concepts with easy language and comprehensive coverage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://cdn.discordapp.com/attachments/1394596312292392970/1398582703053340782/71JmC0VU-tL._SL1500_.jpg?ex=6885e324&is=688491a4&hm=92f7262c261a9c98d2d7276de49af6c8bedecd62a0251cb53e07a8cb6f45764a&" 
                alt="The Science Handbook by Dr. Akhil Kaushik" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">The Science Handbook</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A comprehensive guide designed specifically for Class 10th students to excel in their science studies. 
                Written in simple language with detailed explanations and practical examples.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <span className="text-gray-600 ml-2">Rated 5/5 by students</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="btn-gradient text-white font-semibold px-8 py-3"
                onClick={() => window.open('https://www.amazon.in/gp/aw/d/B0DS18SDQG/ref=tmm_pap_swatch_0', '_blank')}
              >
                <BookOpen className="mr-2" size={20} />
                Buy Book on Amazon
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2">What Students Say:</h4>
              <p className="text-gray-600 italic">
                "This book made science so easy to understand! The diagrams and simple explanations 
                helped me score 95% in my board exams." - Priya, Class 10th Student
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;