import React from 'react';
import Head from './react/head';
import Hero from './react/hero';
import About from './react/about';
import Experience from './react/experience';
import Projects from './react/projects';
import Footer from './react/footer';

function App() {
  return (
    <React.Fragment>
      <Head />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
