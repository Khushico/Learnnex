// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const roles = ['Startup Founder', 'Growth Marketer', 'Product Manager', 'Designer'];

// const Hero: React.FC = () => {
//   const [currentRole, setCurrentRole] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#002018] text-white py-16 relative overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 z-10">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">
//             Become Top 1% in the AI-<br />First World
//           </h1>
//           <p className="mb-6 text-sm md:text-base">
//             Whether it is Product, Growth, Design, Business, Tech or Data,<br />
//             GrowthSchool is the place to learn from top experts in the field to<br />
//             become the Top 1%.
//           </p>
//           <button className="bg-green-500 text-white px-6 py-3 rounded-md font-medium flex items-center">
//             Explore Programs <span className="ml-2">→</span>
//           </button>
//         </div>
//         <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center z-10">
//           <div className="relative p-8 border border-gray-700 rounded-lg w-72 h-40">
//             <motion.div
//               key={currentRole}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="text-xl font-medium text-center"
//             >
//               {roles[currentRole]}
//             </motion.div>
//           </div>
//         </div>
//       </div>
      
//       Grid background
//       <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 z-0 opacity-20">
//         {Array.from({ length: 12 * 6 }).map((_, i) => (
//           <div key={i} className="border border-gray-700"></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const roles = ["Startup Founder", "Growth Marketer", "Product Manager", "Designer"];

// const Hero: React.FC = () => {
//   const [currentRole, setCurrentRole] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#002018] text-white py-16 relative overflow-hidden min-h-[600px]">
//       {/* Animated SVG Grid Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <svg width="100%" height="100%">
//           <defs>
//             <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
//               <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.09" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#heroGrid)" />
//         </svg>
//         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-900/30 to-transparent"></div>
//       </div>

//       <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
//         {/* Left: Text Content */}
//         <div className="md:w-1/2 z-10">
//           <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
//             Become Top 1% in the AI-<br />First World
//           </h1>
//           <p className="mb-8 text-base md:text-lg text-cyan-100/90">
//             Whether it is Product, Growth, Design, Business, Tech or Data,<br />
//             GrowthSchool is the place to learn from top experts in the field to<br />
//             become the Top 1%.
//           </p>
//           <button className="bg-gradient-to-r from-green-400 to-cyan-500 hover:from-cyan-500 hover:to-green-400 transition-colors text-white px-8 py-3 rounded-xl font-semibold flex items-center shadow-lg">
//             Explore Programs <span className="ml-2 text-2xl">→</span>
//           </button>
//         </div>

//         {/* Right: Animated Role Card */}
//         <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center z-10">
//         <motion.div
//   whileHover={{ scale: 1.04, boxShadow: "0 6px 32px 0 rgba(56,189,248,0.18)" }}
//   className="relative backdrop-blur-lg bg-white/10 border border-cyan-400/30 rounded-2xl shadow-xl w-64 h-36 flex items-center justify-center transition-all duration-300"
// >
//             {/* Animated Accent */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 via-green-400 to-blue-500 opacity-50 rounded-full blur-2xl pointer-events-none"></div>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentRole}
//                 initial={{ opacity: 0, y: 32 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -32 }}
//                 transition={{ duration: 0.5, type: "spring" }}
//                 className="text-2xl md:text-3xl font-semibold text-white text-center drop-shadow-lg"
//               >
//                 {roles[currentRole]}
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Startup Founder", "Growth Marketer", "Product Manager", "Designer"];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-start justify-center pt-16">
      <div className="relative w-full max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch bg-transparent">
        {/* Grid background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="80" height="80" fill="none" />
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2a4d43" strokeWidth="2" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#0A2E23" />
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#F7F6F3] leading-tight text-left">
            Become Top 1% in the AI-<br />First World
          </h1>
          <p className="mb-8 text-base md:text-lg text-[#E6E1D9] text-left">
            Whether it is Product, Growth, Design, Business, Tech or Data,<br />
            GrowthSchool is the place to learn from top experts in the field to<br />
            become the Top 1%
          </p>
          <button className="bg-[#19C37D] hover:bg-[#15a362] text-white px-8 py-3 rounded-lg font-semibold text-base shadow-md border-2 border-[#15a362] transition-all w-fit text-left">
            Explore Programs <span className="ml-2 text-xl">▼</span>
          </button>
        </div>
        {/* Animated Card */}
        <div className="relative z-10 flex items-center justify-center md:w-[400px] w-full px-8 py-12 md:py-20">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="w-full bg-[#16382e] rounded-xl shadow-lg flex items-center justify-center min-h-[120px] border border-[#2a4d43] transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-xl md:text-2xl font-medium text-[#F7F6F3] text-center px-6 py-4"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
