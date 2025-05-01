import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'SOLVD.cloud',
      location: 'Lehi, UT',
      dates: 'Feb 2024 – Aug 2024',
      description: [
        'Integrated in-house AI code with AWS Lambda to effectively leverage cloud services for front-end interaction.',
        'Developed Python scripts to modify and adapt AI models for specific needs ensuring seamless performance.',
        'Migrated 100+ TB of Slack data between incompatible orgs with Python scripts to edit JSON for compatibility.'
      ]
    },
    {
      title: 'Salesforce Consultant',
      company: 'SOLVD.cloud',
      location: 'Lehi, UT',
      dates: 'Dec 2022 – Jan 2025',
      description: [
        'Developed efficient Apex code and flow automations to improve overall Salesforce solution efficiency.',
        'Led client meetings to tailor and implement the most effective solutions for their business problems.',
        'Managed projects, timelines, budgets, and team performance to deliver top-tier Salesforce products to clients.'
      ]
    },
    {
      title: 'Founder/CEO',
      company: 'Swipe LLC',
      location: 'Lindon, UT',
      dates: 'Aug 2022 – May 2023',
      description: [
        'Founded a startup for a decision app called Sifty managing a small team assigning and monitoring tasks.',
        'Created a financial model and business plan for investors and pivoted our product to be more specialized.',
        'Coded a basic website prototype with HTML, CSS, and JavaScript and made a framework with Figma.'
      ]
    },
     {
      title: 'Project Manager Intern',
      company: 'Seek2work/Seek2hire (On Campus Internship)',
      location: 'Provo, UT',
      dates: 'Jan 2022 – Apr 2022',
      description: [
        'Built an updated financial model through excel in a team and conducted market research for a startup.',
        'Set goals, managed deadlines, and created an effective work plan for the team to achieve their goals.',
        'Created a pitch deck with our updated metrics for the $80,000 seed round investment of the startup.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                <p className="text-md font-medium text-blue-500 dark:text-blue-400">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.dates}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
              </div>
              <div className="md:w-3/4 md:pl-8 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.description.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

