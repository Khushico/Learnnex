import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Marketing', subcategories: ['Digital Marketing', 'SEO', 'Content'] },
  { name: 'Design', subcategories: ['UI/UX', 'Graphic Design', 'Web Design'] },
  { name: 'Product', subcategories: ['Product Management', 'Product Strategy'] },
  { name: 'Business', subcategories: ['Strategy', 'Operations', 'Leadership'] },
  { name: 'Gen AI', subcategories: ['AI Basics', 'Prompt Engineering', 'AI Tools'] }
];

const LearnDropdown: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Marketing');
  const [showSubMenu, setShowSubMenu] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 z-50 bg-white shadow-lg rounded-lg mt-2 w-[800px] flex"
    >
      <div className="w-1/3 border-r border-gray-100">
        {categories.map((category) => (
          <div 
            key={category.name}
            className={`px-4 py-3 cursor-pointer flex items-center justify-between ${activeCategory === category.name ? 'bg-gray-50' : ''}`}
            onMouseEnter={() => setActiveCategory(category.name)}
          >
            <span>{category.name}</span>
            <ChevronRight size={16} />
          </div>
        ))}
        <div className="border-t border-gray-100 px-4 py-3">Free Certification Courses</div>
        <div className="px-4 py-3">Free Topics</div>
      </div>
      <div className="w-2/3 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Self-Paced Programs</h3>
          <p className="text-sm text-gray-600">Programs to give you a perfect overview at your own speed</p>
        </div>

        <div className="space-y-4">
          {['Generative AI Masterclass', 'Generative AI for Marketers', 'AI Automation Mastery'].map((program, index) => (
            <div key={index} className="py-2 border-b border-gray-100">
              <div className="font-medium">{program}</div>
              <div className="text-sm text-gray-600">
                {index % 2 === 0 ? 'by Vaibhav Sisinty Founder, GrowthSchool' : 'Multiple mentors from AdWorld and Even'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LearnDropdown;