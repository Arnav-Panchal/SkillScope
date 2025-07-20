import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">About SkillScope</h1>
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 text-lg leading-relaxed">
        <p className="mb-6">SkillScope is an AI-powered tool designed to help you analyze and understand your technical skill set. By analyzing data from sources like your GitHub repositories and resumes, SkillScope provides insights into your strengths and areas for growth.</p>
        <p className="mb-6">Our goal is to empower developers and tech enthusiasts to gain a clearer picture of their expertise and make informed decisions about their career development.</p>
        <p>Whether you're looking to identify key skills, showcase your abilities, or explore new technologies, SkillScope is here to assist you on your journey.</p>
      </div>
    </div>
  );
};

export default AboutPage;