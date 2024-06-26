import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
