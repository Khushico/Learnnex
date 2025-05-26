import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-2 overflow-hidden">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="text-gray-800">
            <div className="font-bold text-sm">Learnnex</div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">Login to Learnnex</h1>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors">
            <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" className="w-5 h-5" />
            Continue with LinkedIn
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Having Issues while Logging in?{' '}
          <Link to="#" className="text-green-600 hover:text-green-700">
            Receive Login Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
