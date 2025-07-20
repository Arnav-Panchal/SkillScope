import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-300 hover:to-purple-500 transition duration-300">
            SkillScope
        </Link>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
          </li>
           <li>
            <Link href="/get-started" className="hover:text-blue-400 transition duration-300">
              Get Started
            </Link>
          </li>
           <li>
            <Link href="/about" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/results" className="hover:text-blue-400 transition duration-300">
              Results
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;