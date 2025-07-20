'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setError(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file to upload.');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('resume', selectedFile);

    try {
      const response = await fetch('/api/upload-resume', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      const { skills } = data;
      const source = 'resume'; // Indicate the source of the skills

      // Navigate to results page with skills and source as URL parameters
      router.push(`/results?skills=${encodeURIComponent(JSON.stringify(skills))}&source=${source}`);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-white">Upload Resume</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="mb-6 text-gray-400 disabled:opacity-50"
        disabled={loading}
      />
      <button
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        className={`w-full px-6 py-3 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transform transition duration-300 ${selectedFile && !loading ? 'bg-blue-600 hover:bg-blue-700 scale-105' : 'bg-gray-600 cursor-not-allowed'}`}
      >
        {loading ? 'Uploading...' : 'Upload and Analyze'}
      </button>
      {error && <p className="text-red-500 mt-4 text-center text-sm">Error: {error}</p>}
    </div>
  );
};

export default ResumeUpload;
