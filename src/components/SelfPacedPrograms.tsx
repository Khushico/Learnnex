import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const programs = [
  {
    title: 'Digital Marketing Kickstarter',
    duration: '4 Hours',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    mentors: 'Multiple mentors from OYO, Google and 5 more'
  },
  {
    title: 'Generative AI for Marketers',
    duration: '10+ Hours',
    image: 'https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg',
    mentors: 'Multiple mentors from AdWorld and Even'
  }
];

const SelfPacedPrograms: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="my-16"
    >
      <motion.div variants={itemVariants} className="text-sm text-gray-500 uppercase tracking-wide mb-2">
        LEARN AT YOUR OWN PACE
      </motion.div>
      
      <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">
        Self-Paced Programs
      </motion.h2>
      
      <motion.p variants={itemVariants} className="text-gray-600 mb-8 max-w-3xl">
        Enhance your skills at your own pace with our flexible Self-Paced Programs, featuring video tutorials and
        practical exercises. Perfect for busy schedules, these courses offer independent learning without live
        sessions.
      </motion.p>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {programs.map((program, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="relative h-48">
              <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock size={16} className="mr-2" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{program.mentors}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 bg-blue-900 text-white p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Not sure what you're Interested in?</h3>
        <p className="mb-4">Find your next Career Move →</p>
        <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
          Take Quiz
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SelfPacedPrograms;