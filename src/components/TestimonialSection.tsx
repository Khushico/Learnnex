import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8fafc] to-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Left: Heading */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="text-sm font-semibold text-cyan-600 mb-3 tracking-widest uppercase">
            Globally Acclaimed
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Recommended by your<br />
            Favourite Influencers and<br />
            Creators
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mt-4" />
        </motion.div>

        {/* Right: Testimonial Card */}
        <motion.div
          initial={{ x: 40, opacity: 0, scale: 0.97 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative bg-[#11332d] rounded-2xl p-8 md:p-10 text-white w-full max-w-md shadow-2xl overflow-hidden group">
            {/* Glowing Accent */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 via-green-400 to-blue-500 opacity-30 rounded-full blur-2xl pointer-events-none"></div>

            {/* Quote Icon with subtle animation */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.25 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="absolute top-6 left-6"
            >
              <FaQuoteLeft className="text-4xl text-cyan-300" />
            </motion.div>

            {/* Testimonial Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-lg font-medium leading-relaxed mb-7 relative z-10"
            >
              I know Vaibhav as the guy who is killing it on LinkedIn, because of everything he is doing and he understands the platform so well.
            </motion.p>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="font-bold text-base">Ankur Warikoo</div>
              <div className="text-sm text-cyan-100/80 mb-4">
                Entrepreneur, Content Creator & Author
              </div>
              {/* Avatars */}
              <div className="flex items-center space-x-2 mt-2">
                {avatars.map((src, idx) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Avatar ${idx + 1}`}
                    className="w-9 h-9 rounded-full border-2 border-white shadow-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1, duration: 0.4, type: "spring" }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
