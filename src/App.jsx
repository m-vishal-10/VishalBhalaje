import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './sections/Experience/Experience'

function App() {
  return (
    <Router>
      <>
        <Hero />
        <Projects />
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
      </>
    </Router>
  )
}

export default App
