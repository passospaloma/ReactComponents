import React from 'react';
import C1 from '../src/Img/c1.jpg';
import About from './About';
import Banner from './Banner';
import Form from './Form';
import Footer from './Footer';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Technology from './Technology';
import Client from './Client';
import Services from './Services';

export default function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Services />
      <Technology />
      <Client />
      <Testimonials />
      <Contact />
      <Form />
      <Footer />
    </div>

  );
}

