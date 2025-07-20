import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white py-12 px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse drop-shadow-lg">SkillScope</h1>
      <p className="text-xl md:text-2xl mb-10 text-center max-w-3xl leading-relaxed">Unlock your potential and visualize your technical expertise with SkillScope, the AI-powered skill analysis tool.</p>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <Link href="/get-started" className="px-10 py-4 bg-blue-600 rounded-lg text-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75 transform transition duration-300 hover:scale-105 shadow-lg">
          Get Started
        </Link>
        <Link href="/about" className="px-10 py-4 border border-gray-600 rounded-lg text-xl font-semibold hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 transform transition duration-300 hover:scale-105 shadow-lg">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;