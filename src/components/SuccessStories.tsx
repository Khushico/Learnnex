import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

const learners = [
  {
    name: 'Abhiram',
    company: 'Ogilvy',
    position: 'Senior Social Media Manager',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    name: 'Teja Varama',
    company: 'NDCC Limited',
    position: 'Deputy Manager (Geology)',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
  },
  {
    name: 'Sujay Putta',
    company: 'The Hatch',
    position: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg'
  }
];

const companies = [
  'Google', 'Microsoft', 'Swiggy', 'Philips', 'Zomato', 'Paytm',
  'Snapdeal', 'Apna', 'Walmart', 'Disney', 'Uber', 'Adobe'
];

const SuccessStories: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      viewport={{ once: true }}
      className="my-16"
    >
      <motion.div variants={itemVariants} className="text-sm text-gray-500 uppercase tracking-wide mb-2">
        SUCCESS STORIES
      </motion.div>

      <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8">
        Our Learners at Leading Companies
      </motion.h2>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {learners.map((learner, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <img
                src={learner.image}
                alt={learner.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="font-semibold">{learner.name}</h3>
                <p className="text-sm text-gray-600">{learner.position}</p>
                <p className="text-sm text-gray-500">{learner.company}</p>
              </div>
              <Linkedin className="ml-auto text-blue-600" size={20} />
            </div>
          </motion.div>
        ))}
      </motion.div>
{/* 
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h3 className="text-lg font-semibold mb-6">Our alumni work at top brands like</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <span className="text-gray-500 text-sm">{company}</span>
            </div>
          ))}
        </div>
      </motion.div> */}
    <motion.div variants={itemVariants} className="text-center mb-8 bg-black text-white py-6">
  <h3 className="text-lg font-semibold mb-6">Our alumni work at top brands like</h3>
  <div className="overflow-hidden w-full">
    <motion.div
      className="flex gap-8 w-max"
      style={{ whiteSpace: 'nowrap' }}
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear'
      }}
    >
      {[...companies, ...companies].map((company, index) => (
        <div
          key={index}
          className="flex items-center justify-center grayscale hover:grayscale-0 transition-all min-w-[120px]"
        >
          <span className="text-white text-sm">{company}</span>
        </div>
      ))}
    </motion.div>
  </div>
</motion.div>


    </motion.div>
  );
};

export default SuccessStories;