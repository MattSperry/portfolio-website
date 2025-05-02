import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    frameworks: ['JavaScript (Node.js, React.js)', 'Python (Django, pandas)', 'Swift', 'HTML/CSS', 'VBA', 'ASP.NET'],
    tools: ['Salesforce (Admin, Apex)', 'AWS (Lambda)', 'MySQL', 'PosgreSQL', 'MuleSoft', 'Excel (Advanced)'],
    languages: ['English', 'Portuguese'],
    certifications: [
      'Salesforce Administrator',
      'Salesforce Platform App Builder',
      'Salesforce Platform Developer 1',
      'MuleSoft Developer 1',
      'Salesforce AI Associate'
    ]
  };

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-inner mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Skills & Expertise</h2>
        <p className="text-lg text-center mb-12 text-gray-700 dark:text-gray-300">
          Leveraging a strong foundation in Information Systems and hands-on experience, I specialize in coding, AI implementation, and developing effective technology solutions. Below are some of the key technologies and areas I work with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frameworks & Languages</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {skills.frameworks.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
              <div className="border-t border-gray-500 dark:border-gray-400 my-2"></div>
              {skills.languages.map((lang, index) => (
                <li key={`lang-${index}`}>{lang} (Language)</li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tools & Technologies</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {skills.tools.map((tool, index) => <li key={index}>{tool}</li>)}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {skills.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

