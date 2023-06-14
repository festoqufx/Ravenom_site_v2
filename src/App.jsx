import React from 'react';
import Contact from './components/contact/Contact';
// import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Svg from './components/svg/Svg';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Gallery from './components/gallery/Gallery'
import Timeline1 from './components/timeline1/Timeline1';
import Interest from './components/interest/Interest';
import Intro from './components/intro/Intro';
import PhotoViewer from './components/photoViewer/PhotoViewer';
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
      <Timeline1 />
      <Skills />
      <Gallery />
      <PhotoViewer/>
      <Svg/>
      {/* <Experience /> */}
      <Interest />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </>
  )
}

export default App
