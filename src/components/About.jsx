import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Every student learns differently. I adapt my teaching style to match each student\'s unique learning pace and preferences.',
      color: 'bg-blue-500'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '95% of my students achieve their target grades, with many securing top positions in their respective boards.',
      color: 'bg-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Published Author',
      description: 'I\'ve authored a comprehensive science book that simplifies complex concepts and provides practical examples for better understanding.',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Dr. Akhil Kaushik</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate science educator dedicated to making complex concepts simple and accessible for every student.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-6">My Teaching Philosophy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I believe that science is not just about memorizing facts and formulas, but about understanding 
                the beautiful patterns and principles that govern our universe. My approach focuses on:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Making complex concepts simple and relatable
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Encouraging curiosity and critical thinking
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Providing practical examples and real-world applications
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Building confidence through step-by-step learning
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b800cf2-8250-4858-a088-3e6255b35792/3bc9b5593cc2f6dc0aa61c93c3bc9155.jpg" 
                alt="Dr. Akhil Kaushik Teaching" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;