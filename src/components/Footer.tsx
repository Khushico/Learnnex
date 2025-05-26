import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002018] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Marketing</h3>
            <ul className="space-y-2 text-gray-300">
              <li>SEO</li>
              <li>Digital Marketing</li>
              <li>Performance Marketing</li>
              <li>Digital Marketing Kickstarter</li>
              <li>Generative AI for Marketers</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Design</h3>
            <ul className="space-y-2 text-gray-300">
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Product Management</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Business</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Management Consulting</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-sm text-gray-400">© 2025 Learnnex. All rights reserved.</div>
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;