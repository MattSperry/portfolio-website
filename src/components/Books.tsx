import React from 'react';

const hobbies: React.FC = () => {
  const hobbies = {
    books: [
      { title: 'The Three-Body Problem (trilogy)', author: 'Cixin Liu' },
      { title: 'Project Hail Mary', author: 'Andy Weir' },
      { title: 'Mistborn (trilogy)', author: 'Brandon Sanderson' },
      { title: 'Ready Player One', author: 'Ernest Cline' },
      { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
      { title: 'He Who Fights With Monsters', author: 'Travis Deverell' }
    ],
    activities: ['Weight lifting', 'Playing Pickleball', 'Playing Football', 'Watching College Sports', 'Camping', 'Travelling']
  };

  return (
    <section id="hobbies" className="py-16 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-inner mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Hobbies</h2>
        <div className="flex justify-between gap-8">
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Favorite Books</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {hobbies.books.map((book, index) => (
                <li key={index}>
                  <span className="font-bold">{book.title}</span> <span className="text-gray-500">by {book.author}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Activities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {hobbies.activities.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hobbies;
