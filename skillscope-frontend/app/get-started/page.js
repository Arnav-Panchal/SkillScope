'use client';
import React from 'react';
import SkillInput from '../components/SkillInput';
import ResumeUpload from '../components/ResumeUpload';

const GetStartedPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">Get Started with SkillScope</h1>
      <div className="w-full max-w-xl flex flex-col space-y-8">
        <SkillInput />
        <ResumeUpload />
      </div>
    </div>
  );
};

export default GetStartedPage;