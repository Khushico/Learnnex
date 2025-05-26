import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, ChevronDown, ChevronRight } from 'lucide-react';
import LearnDropdown from './LearnDropdown';
import logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    // <nav className="bg-white shadow-sm py-4">
    //   <div className="container mx-auto px-4 flex items-center justify-between">
    //     <div className="flex items-center">
    //       <Link to="/" className="flex items-center mr-8">
    //         <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-2">
    //           <Leaf className="text-white" size={20} />
    //         </div>
    //         <div className="text-gray-800">
    //           <div className="font-bold text-sm">Learn</div>
    //           <div className="text-sm -mt-1">X</div>
    //         </div>
    //       </Link>
    <nav className="bg-white shadow-sm py-4">
  <div className="container mx-auto px-4 flex items-center justify-between">
    <div className="flex items-center">
      <Link to="/" className="flex items-center mr-8">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-2 overflow-hidden">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
        </div>
        <div className="text-gray-800">
          <div className="font-bold text-sm">Learn</div>
          <div className="text-sm -mt-1">X</div>
        </div>
      </Link>


          <div className="hidden md:flex items-center space-x-6">
            <div 
              className="relative flex items-center text-gray-700 cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                Learn <ChevronDown size={16} className="ml-1" />
              </button>
              {isDropdownOpen && <LearnDropdown />}
            </div>
            <div className="text-gray-700">Upskill your Team</div>
            <div className="text-gray-700">About</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link 
            to="/login"
            className="text-gray-700 px-4 py-2 border border-gray-200 rounded-md hidden md:block"
          >
            Login
          </Link>
          <Link
            to="/apply-as-mentor"
            className="bg-green-600 text-white px-4 py-2 rounded-md hidden md:block hover:bg-green-700"
          >
            Apply as Mentor
          </Link>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;