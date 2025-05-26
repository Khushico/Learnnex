// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaMapMarkerAlt } from "react-icons/fa";



// const events = [
//   {
//     title: 'Meet Ups',
//     image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
//     location: 'BENGALURU'
//   },
//   {
//     title: 'Townhalls',
//     image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
//     location: 'HYDERABAD'
//   },
//   {
//     title: 'Convocations',
//     image: 'https://images.pexels.com/photos/7988116/pexels-photo-7988116.jpeg',
//     location: 'BENGALURU'
//   }
// ];

// const CommunitySection: React.FC = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       variants={containerVariants}
//       viewport={{ once: true }}
//       className="my-16"
//     >
//       <motion.div variants={itemVariants} className="text-sm text-gray-500 uppercase tracking-wide mb-2">
//         DIVE INTO OUR COMMUNITY
//       </motion.div>

//       <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">
//         Learn Online, Connect Offline
//       </motion.h2>

//       <motion.p variants={itemVariants} className="text-gray-600 mb-8">
//         Engage with other learners, alumni, and mentors and attend community sessions to learn from each other in our curated community.
//       </motion.p>

//       <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {events.map((event, index) => (
//           <motion.div
//             key={index}
//             variants={itemVariants}
//             className="relative overflow-hidden rounded-lg aspect-video group"
//           >
//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-full object-cover transition-transform group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
//               <h3 className="text-white font-semibold">{event.title}</h3>
//               <p className="text-white/80 text-sm">{event.location}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* <motion.div
//         variants={itemVariants}
//         className="mt-8 bg-[#002018] text-white p-8 rounded-lg text-center"
//       >
//         <div className="text-4xl font-bold mb-2">58+</div>
//         <div className="text-lg">MEET UPS IN 8 CITIES</div>
//       </motion.div> */}
//       <motion.div
//   variants={itemVariants}
//   className="mt-8 relative bg-[#002018] backdrop-blur-md text-white p-8 rounded-2xl text-center shadow-xl overflow-hidden hover:scale-105 transition-transform"
// >
//   {/* Glowing Accent */}
//   <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 via-green-400 to-blue-500 opacity-30 rounded-full blur-2xl pointer-events-none"></div>

//   {/* Animated Number with Icon */}
//   <motion.div
//     initial={{ scale: 0.8, opacity: 0 }}
//     animate={{ scale: 1, opacity: 1 }}
//     transition={{ duration: 0.7, type: "spring" }}
//     className="flex items-center justify-center gap-2 text-5xl font-extrabold mb-2 drop-shadow"
//   >
//     58+
//     <span className="text-cyan-400">
//       <FaMapMarkerAlt className="inline-block text-2xl" />
//     </span>
//   </motion.div>
//   <div className="text-lg tracking-wide font-medium text-cyan-100/90">
//     MEET UPS IN <span className="font-bold text-cyan-400">8 CITIES</span>
//   </div>
// </motion.div>
//     </motion.div>
//   );
// };

// export default CommunitySection;
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    title: 'Meet Ups',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    location: 'BENGALURU'
  },
  {
    title: 'Townhalls',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
    location: 'HYDERABAD'
  },
  {
    title: 'Convocations',
    image: 'https://images.pexels.com/photos/7988116/pexels-photo-7988116.jpeg',
    location: 'BENGALURU'
  }
];

const categories = [
  "Meet Ups",
  "Recreational Brunches",
  "Townhalls",
  "Convocations",
  "Offline Masterclasses",
  "Mixers"
];

const CommunitySection: React.FC = () => {
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
      className="my-16 max-w-6xl mx-auto px-4"
    >
      <motion.div variants={itemVariants} className="text-sm text-gray-500 uppercase tracking-wide mb-2">
        DIVE INTO OUR COMMUNITY
      </motion.div>

      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
        Learn Online, Connect Offline
      </motion.h2>

      <motion.p variants={itemVariants} className="text-gray-600 mb-6 md:mb-8 max-w-2xl">
        Engage with other learners, alumni, and mentors and attend community sessions to learn from each other in our curated community.
      </motion.p>

      {/* Category Tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition
              ${cat === "Offline Masterclasses"
                ? "bg-[#002018] text-white border-[#002018]"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}
            `}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Events Grid */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl aspect-video group shadow-md"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{event.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <FaMapMarkerAlt className="text-cyan-400 text-sm" />
                <span className="text-white/80 text-sm">{event.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Stats Banner */}
      <motion.div
        variants={itemVariants}
        className="mt-10 relative bg-[#002018] backdrop-blur-md text-white p-8 rounded-2xl text-center shadow-xl overflow-hidden hover:scale-105 transition-transform"
      >
        {/* Glowing Accent */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 via-green-400 to-blue-500 opacity-30 rounded-full blur-2xl pointer-events-none"></div>

        {/* Animated Number with Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex items-center justify-center gap-2 text-5xl font-extrabold mb-2 drop-shadow"
        >
          58+
          <span className="text-cyan-400">
            <FaMapMarkerAlt className="inline-block text-2xl" />
          </span>
        </motion.div>
        <div className="text-lg tracking-wide font-medium text-cyan-100/90">
          MEET UPS IN <span className="font-bold text-cyan-400">8 CITIES</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CommunitySection;
