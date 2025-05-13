import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/Books';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

