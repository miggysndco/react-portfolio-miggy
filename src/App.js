import './App.css';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
