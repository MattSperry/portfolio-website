import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Matthew Sperry</h1>
        <div className="space-x-4">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#hobbies" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Hobbies</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

