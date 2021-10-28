import React, {useState} from 'react';
import ThemeContext from './Context/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  const themeHook = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header />
          <HeroSection />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
