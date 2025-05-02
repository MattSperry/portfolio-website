import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12 flex justify-center">
          <img 
            src="/assets/profile-photo.jpg" 
            alt="Matthew Sperry" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover object-top border-4 border-blue-500 dark:border-blue-400 shadow-md"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            I am Matthew Sperry, a passionate technologist with a Bachelor of Science in Information Systems from Brigham Young University. My focus lies in leveraging my skills in coding and artificial intelligence to create effective and innovative technology solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With experience spanning Salesforce development, DevOps engineering, and even founding a startup, I thrive on tackling complex challenges and delivering high-quality results. I am proficient in various programming languages and frameworks, including JavaScript, Python, and Salesforce Apex, and I am always eager to learn and apply new technologies to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

