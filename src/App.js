import React from 'react';
import Main from './components/Hero';
import Contact from './components/Contact'
import HamburgerMenu from './components/HamburgerMenu'
import './App.css';


function App() {
  return (
    <div className="App">
      <HamburgerMenu/>
      <Main/>
      <Contact/>
    </div>
  );
}

export default App;
