'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SkillInput = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);

    try {
      // --- Reverted to Backend API Call ---
      const response = await fetch(`/api/github?username=${githubUsername}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Error: ${response.status}`);
      }
      const data = await response.json();
      const skills = data.skills || [];
       // Navigate to results page with skills and source as URL parameters
      router.push(`/results?skills=${encodeURIComponent(JSON.stringify(skills))}&source=github`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-white">Analyze GitHub Skills</h2>
      <input
        type="text"
        value={githubUsername}
        onChange={(e) => setGithubUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="w-full px-4 py-3 mb-6 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-600 disabled:opacity-50"
        disabled={loading}
      />
      <button
        onClick={handleAnalyze}
        disabled={!githubUsername || loading}
        className={`w-full px-6 py-3 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transform transition duration-300 ${githubUsername && !loading ? 'bg-blue-600 hover:bg-blue-700 scale-105' : 'bg-gray-600 cursor-not-allowed'}`}
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
      {error && <p className="text-red-500 mt-4 text-center text-sm">Error: {error}</p>}
    </div>
  );
};

export default SkillInput;
