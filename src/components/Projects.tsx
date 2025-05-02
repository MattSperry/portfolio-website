import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Space Launch Tracker',
      description: 'I am passionate about space technologies and wanted to create a project that tracks upcoming rocket launches. This project demonstrates capabilities in API usage, data aggregation, frontend presentation, and website deployment.',
      link: '#', // Dummy link
      tags: ['React', 'Data Visualization', 'API Integration', 'HTML', 'CSS', 'AI']
    },
    {
      title: 'Sifty Decision App (Prototype)',
      description: 'As Founder/CEO of Swipe LLC, I led the creation of a prototype for the Sifty decision app using a Figma framework.',
      link: 'https://www.youtube.com/watch?v=9J0sQOJhNd8', 
      tags: ['HTML', 'CSS', 'JavaScript', 'UI', 'Figma', 'Startup']
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-inner mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Projects & Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`mt-auto text-blue-600 dark:text-blue-400 hover:underline ${project.link === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={(e) => project.link === '#' && e.preventDefault()}
              >
                {project.link === '#' ? 'Link (Placeholder)' : 'View Project'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

