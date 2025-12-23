// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact /> 
        <Footer />
      </main>
    </div>
  );
}

export default App;