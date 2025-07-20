'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const skillsParam = searchParams.get('skills');
  const sourceParam = searchParams.get('source'); // Assuming a 'source' parameter is added
  const [skills, setSkills] = useState([]);
  const [source, setSource] = useState(null);

  useEffect(() => {
    if (skillsParam) {
      try {
        const parsedSkills = JSON.parse(decodeURIComponent(skillsParam));
        setSkills(parsedSkills);
      } catch (error) {
        console.error('Error parsing skills data:', error);
        setSkills([]);
      }
    } else {
      setSkills([]); // Set skills to empty if no skills parameter is present
    }

    if (sourceParam) {
        setSource(sourceParam);
    } else {
        setSource(null);
    }

  }, [skillsParam, sourceParam]);

  // A more robust way to determine font size (e.g., based on frequency in a real app)
  // For now, still using length as a basic indicator
  const getSkillFontSize = (skill) => {
    if (skill.length > 15) return 'text-lg';
    if (skill.length > 10) return 'text-xl';
    return 'text-2xl';
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">Analysis Results</h1>
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        {source && (
            <p className="text-center text-gray-400 mb-6 text-lg">Source: {source === 'github' ? 'GitHub Repository' : source === 'resume' ? 'Uploaded Resume' : 'Unknown'}</p>
        )}
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">Extracted Skills:</h2>
        {skills.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold cursor-pointer transition duration-300 transform hover:scale-110 text-shadow-sm ${
                  // More distinct font size variations
                  skill.length > 15 ? 'text-lg' : skill.length > 10 ? 'text-xl' : 'text-2xl md:text-3xl'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg">No skills found. Please analyze some data on the homepage.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;