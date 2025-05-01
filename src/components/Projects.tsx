import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Space Launch Tracker',
      description: 'A conceptual project focused on tracking upcoming and past space launches. This project demonstrates capabilities in data aggregation and frontend presentation.',
      link: '#', // Dummy link as requested
      tags: ['React', 'Data Visualization', 'API Integration (Conceptual)']
    },
    {
      title: 'Sifty Decision App (Prototype)',
      description: 'As Founder/CEO of Swipe LLC, I led the creation of a basic website prototype for the Sifty decision app using HTML, CSS, and JavaScript, alongside developing a Figma framework.',
      link: '#', // No live link mentioned in resume
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Startup']
    },
    {
      title: 'AI Model Integration (SOLVD.cloud)',
      description: 'Integrated in-house AI code with AWS Lambda for cloud-based frontend interaction and developed Python scripts to adapt AI models for specific client needs.',
      link: '#', // Internal project
      tags: ['Python', 'AI', 'AWS Lambda', 'DevOps']
    },
    {
      title: 'Salesforce Solutions (SOLVD.cloud)',
      description: 'Developed numerous custom Salesforce solutions using Apex and Flow automations, managing projects from conception to delivery for various clients.',
      link: '#', // Client work
      tags: ['Salesforce', 'Apex', 'Flow', 'Project Management']
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

