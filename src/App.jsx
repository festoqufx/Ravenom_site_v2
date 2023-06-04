import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Gallery from './components/gallery/Gallery';
import Resume from './components/resume/Resume';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Map from './components/map/Map';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Resume />
      <Skills />
      <Gallery />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </>
  )
}

export default App
