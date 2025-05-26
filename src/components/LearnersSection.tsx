// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'framer-motion';

// const companies = [
//   'Flipkart', 'Phonepay', 'Vivo', 'ShareChat', 'Google', 'Apna', 'CoinDCX', 'Blinkit'
// ];

// const LearnersSection: React.FC = () => {
//   const controls = useAnimation();
//   const ref = React.useRef(null);
//   const isInView = useInView(ref);
  
//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [controls, isInView]);

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <motion.div 
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={containerVariants}
//       className="flex-1 bg-gray-100 rounded-lg p-6"
//     >
//       <motion.h2 
//         variants={itemVariants} 
//         className="text-2xl font-bold mb-2"
//       >
//         5.4M+ Learners
//       </motion.h2>
//       <motion.p 
//         variants={itemVariants}
//         className="text-sm text-black-500 mb-6"
//       >
//         have reaped benefits from our programs
//       </motion.p>
      
//       <motion.div 
//         variants={containerVariants}
//         className="grid grid-cols-4 gap-4"
//       >
//         {companies.map((company, index) => (
//           <motion.div
//             key={company}
//             variants={itemVariants}
//             className="bg-white rounded p-2 flex items-center justify-center h-12"
//           >
//             <span className="text-xs text-gray-500">{company}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default LearnersSection;
import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  'Flipkart', 'Phonepay', 'Vivo', 'ShareChat', 'Google', 'Apna', 'CoinDCX', 'Blinkit'
];

const LearnersSection: React.FC = () => {
  return (
    <div className="bg-[#FCFAF6] rounded-2xl p-6 overflow-hidden">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        5.4M+ Learners
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        have reaped benefits from our programs
      </p>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: '-100%' }}
          animate={{ x: ['0%' , '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear'
          }}
        >
          {[...companies,...companies].map((company, idx) => (
            <div
              key={company + idx}
              className="bg-white rounded-lg px-4 py-2 flex items-center justify-center min-w-[100px] shadow-sm border"
            >
              <span className="text-sm font-medium text-gray-600">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LearnersSection;
