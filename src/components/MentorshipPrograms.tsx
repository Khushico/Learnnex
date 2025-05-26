import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';

const programs = [
  {
    title: 'SEO',
    description: 'Learn SEO from the Brains Behind the SEO strategies of Myntra, Flipkart, CureFit, Zomato and many more.',
    duration: '5 Weeks',
    status: 'Live And Recorded',
    comingSoon: true,
    instructors: [
      { name: 'Kaushal', role: 'Founder & CTO, IndiHack' }
    ],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Digital Marketing',
    description: 'Master all essential digital marketing skills to drive results and stay ahead in today\'s competitive landscape.',
    duration: '6 Months',
    status: 'Live And Recorded',
    comingSoon: true,
    instructors: [
      { name: 'Multiple mentors from', role: 'Disney, Amazon and 3 more' }
    ],
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Performance Marketing',
    description: 'Become a data-driven marketer in 12 weeks by applying strategies our mentors have used to drive millions of paid ads revenue.',
    duration: '12 Weeks',
    status: 'Live And Recorded',
    date: '25th May 2024',
    instructors: [
      { name: 'Multiple mentors from', role: 'Google and Amazon, Meta' }
    ],
    image: 'https://images.pexels.com/photos/7988116/pexels-photo-7988116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const MentorshipPrograms: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="my-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mentorship Programs</h2>
        <div className="flex items-center">
          <span className="text-sm text-blue-500 mr-4">See All</span>
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-2">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {programs.map((program, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{program.description}</p>
              
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <Clock size={14} className="mr-1" />
                <span className="mr-4">{program.duration}</span>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span>{program.status}</span>
                </div>
              </div>
              
              {program.comingSoon ? (
                <div className="text-xs bg-gray-100 text-gray-600 py-1 px-2 inline-block rounded mb-4">Coming Soon</div>
              ) : program.date ? (
                <div className="flex items-center text-xs text-gray-600 mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{program.date}</span>
                </div>
              ) : null}
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                <div className="text-xs">
                  <div>{program.instructors[0].name}</div>
                  <div className="text-gray-500">{program.instructors[0].role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MentorshipPrograms;