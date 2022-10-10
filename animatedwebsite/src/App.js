import React from 'react';

import './global.css';
import Fotos from './Fotos';
import Navbar from './Navbar';
import Header from './Header';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Fotos />

    </div>

  );
}

