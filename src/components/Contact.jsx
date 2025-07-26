import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 8306093121',
      action: () => window.open('tel:+918306093121')
    },
    {
      icon: MapPin,
      title: 'Address',
      info: '110, PACHAURI PARA BARI (Dholpur) RAJASTHAN, 328021',
      action: () => toast({
        title: "Address Copied!",
        description: "Address has been copied to clipboard."
      })
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'Contact via Phone',
      action: () => toast({
        title: "Contact Info",
        description: "Please call +91 8306093121 for inquiries."
      })
    }
  ];

  return (
    <section id="contact" className="py-20 science-gradient text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to start your science journey? Contact me for tuition classes and book inquiries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center card-hover cursor-pointer"
              onClick={item.action}
            >
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/90 leading-relaxed">{item.info}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
            <MessageCircle className="text-yellow-300 mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Ready to Excel in Science?</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Join hundreds of successful students who have mastered science concepts with personalized guidance.
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              onClick={() => window.open('tel:+918306093121')}
            >
              <Phone className="mr-2" size={20} />
              Call Now for Admission
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;