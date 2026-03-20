import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './styles.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
