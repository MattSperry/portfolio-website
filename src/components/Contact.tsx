import React from 'react';
import { Mail } from 'lucide-react'; 

const Contact: React.FC = () => {
  const email = 'matthewjoelsperry@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/matthew-sperry'; 

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">Get In Touch</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-8">
          <a 
            href={`mailto:${email}`}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            <Mail className="w-6 h-6 mr-2" />
            <span>{email}</span>
          </a>
          <a 
            href={linkedinUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
                        <img 
              src="../../public/LI-In-Bug.png" 
              alt="LinkedIn Logo" 
              className="w-6 h-6 mr-2" 
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

