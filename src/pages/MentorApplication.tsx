import React, { useState } from 'react';
import logo from "../assets/logo.jpg";

const domains = [
  'Digital Marketing',
  'Content Marketing',
  'SEO',
  'Social Media Marketing',
  'Product Management',
  'UI/UX Design',
  'Business Strategy'
];

const MentorApplication: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#002018] flex">
      <div className="flex-1 p-8">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2 overflow-hidden">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="text-white">
            <div className="font-bold text-sm">Learnnex</div>
            <div className="text-sm -mt-1"></div>
          </div>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <video
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
            controls
          >
            <source src="/mentor-video.mp4" type="video/mp4" />
          </video>
        </div>

        <h1 className="text-white text-2xl font-bold mb-4">
          Become a part of the elite top 1% mentors and impact 350,000+ Learnnex learners
        </h1>
      </div>

      <div className="flex-1 bg-white p-8">
        <h2 className="text-2xl font-bold mb-8">Let's get you started!</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="px-3 py-2 border border-gray-300 rounded-l-md border-r-0">
                <option>🇮🇳 +91</option>
              </select>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Which of the following domains are you experienced in? <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a domain</option>
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            START APPLICATION
          </button>
        </form>
      </div>
    </div>
  );
};

export default MentorApplication;
