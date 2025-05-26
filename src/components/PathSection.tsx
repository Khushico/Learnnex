import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['Marketing', 'Design', 'Product', 'Business', 'Gen AI'];

const PathSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Marketing');

  return (
    <div className="my-16">
      <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">EXPLORE YOUR POSSIBILITIES</div>
      <h2 className="text-2xl font-bold mb-6">Your Industry, Your Path</h2>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm ${
              activeCategory === category
                ? 'bg-[#002018] text-white'
                : 'border border-gray-300 text-gray-700'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PathSection;