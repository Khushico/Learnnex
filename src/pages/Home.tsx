// import React from 'react';
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import LearnersSection from '../components/LearnersSection';
// import PathSection from '../components/PathSection';
// import MentorshipPrograms from '../components/MentorshipPrograms';
// import SelfPacedPrograms from '../components/SelfPacedPrograms';
// import SuccessStories from '../components/SuccessStories';
// import CommunitySection from '../components/CommunitySection';
// import Footer from '../components/Footer';
// import ChatButton from '../components/ChatButton';

// const Home: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Hero />
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="flex flex-col md:flex-row gap-8 my-8">
//           <LearnersSection />
//           <div className="flex-1 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
//             <div className="max-w-sm">
//               <div className="text-sm text-blue-500 mb-2">Twitter</div>
//               <div className="text-xs text-gray-500 mb-2">Growth Hunters</div>
//               <div className="flex items-center">
//                 <img src="https://via.placeholder.com/40" alt="LinkedIn" className="h-6 mr-2" />
//                 <div className="text-sm font-medium">Top Startup India 2023</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <PathSection />
//         <MentorshipPrograms />
//         <SelfPacedPrograms />
//         <SuccessStories />
//         <CommunitySection />
//       </div>
//       <Footer />
//       <ChatButton />
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LearnersSection from '../components/LearnersSection';
import PathSection from '../components/PathSection';
import MentorshipPrograms from '../components/MentorshipPrograms';
import SelfPacedPrograms from '../components/SelfPacedPrograms';
import SuccessStories from '../components/SuccessStories';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import ReviewStack from '../components/ReviewStack';
import TestimonialSection from '../components/TestimonialSection';
import BackedByTheBestSection from '../components/BackedByTheBestSection';
import WallOfLove from '../components/WallOfLove';
import UpskillSection from '../components/UpskillSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
<br></br>
      <div className="container mx-auto px-4 md:px-8">
        {/* Learners Section */}
        <LearnersSection />
      </div>

     {/* <div className="w-full flex justify-center items-center py-12 bg-transparent">
  <div
    className="bg-white rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-2xl flex justify-start border"
    style={{ borderColor: "rgba(0,0,0,0.3)", borderWidth: 1 }}
  >
    <ReviewStack />
  </div>
</div> */}
<div className="w-full flex justify-center items-center py-12">
  <div
    className="bg-white rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-2xl flex flex-col items-center border"
    style={{ borderColor: "rgba(0,0,0,0.3)", borderWidth: 1 }}
  >
    {/* Tagline above the review stack, centered */}
    <div className="mb-6">
      <span className="inline-flex items-start bg-green-50 border border-green-200 text-green-800 rounded-full px-4 py-2 text-base font-medium">
        <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"/>
        </svg>
        Trusted by 350,000+ learners and top companies
      </span>
    </div>
    {/* ReviewStack centered below */}
    <ReviewStack />
  </div>
</div>



      <div className="container mx-auto px-4 md:px-8">
        {/* Rest of the sections */}
        <PathSection />
        <MentorshipPrograms />
        <SelfPacedPrograms />
        <SuccessStories />
        <WallOfLove/>
        <UpskillSection/>
        <CommunitySection />
        <TestimonialSection/>
      </div>
      <BackedByTheBestSection/>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Home;
