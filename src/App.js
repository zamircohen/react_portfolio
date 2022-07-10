import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
        {/* <Route exact path="/" element={<NavBar/>} /> */}
        <Route path="/header" element={<Header/>} />
        <Route exact path="/" element={<StartPage/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

      </BrowserRouter>  
    </div>
  );
}

export default App;