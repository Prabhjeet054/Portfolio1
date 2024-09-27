import React from 'react';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import ScrollNav from './ScrollNav';
import Projects from './Projects';
import Experience from './Experience';
import TechStack from './TechStack';

const App = () => {
  return (
    <div>
      <Header />
      <ScrollNav />
      <About />
      <Experience/>
      <Projects/>
     <TechStack/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
