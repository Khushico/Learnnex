import React from "react";
import { motion } from "framer-motion";

const investors = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
  "https://randomuser.me/api/portraits/men/16.jpg",
  "https://randomuser.me/api/portraits/men/17.jpg",
  "https://randomuser.me/api/portraits/men/18.jpg",
  "https://randomuser.me/api/portraits/men/19.jpg",
  "https://randomuser.me/api/portraits/men/20.jpg",
];

const partners = [
  {
    name: "Owl Ventures",
    logo: "https://owlvc.com/wp-content/themes/owlvc/assets/img/logo.svg",
  },
  {
    name: "Peak XV Partners",
    logo: "https://seekvectorlogo.com/wp-content/uploads/2023/06/peak-xv-partners-vector-logo.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const BackedByTheBestSection: React.FC = () => {
  return (
    <motion.section
      className="bg-[#fcfaf6] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div variants={itemVariants} className="mb-10">
          <div className="text-sm font-semibold text-gray-600 mb-2 tracking-wider uppercase">
            BEHIND OUR GROWTH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Backed by the best
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            With the trust of <span className="font-bold text-gray-800">80+ Angel Investors</span>, we're building futures together
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-10 items-center"
          variants={itemVariants}
        >
          {/* Partners */}
          <motion.div
            className="flex flex-col gap-6 w-full md:w-1/3"
            variants={containerVariants}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="bg-white rounded-xl border border-gray-200 px-6 py-4 flex items-center justify-center shadow-sm"
                variants={itemVariants}
                whileHover="hover"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 object-contain"
                  style={{ maxWidth: 180 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-36 mx-8" />

          {/* Investors Grid */}
          <motion.div className="flex-1 w-full" variants={containerVariants}>
            <motion.div className="grid grid-cols-5 gap-5" variants={containerVariants}>
              {investors.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`Angel Investor ${idx + 1}`}
                  className="rounded-xl w-16 h-16 object-cover border border-gray-200 shadow-sm bg-white"
                  variants={itemVariants}
                  whileHover="hover"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BackedByTheBestSection;
