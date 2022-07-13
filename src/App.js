import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import { DarkModeProvider } from './context/DarkModeContext';
import StartPage from './pages/StartPage';
import Container from './pages/Container';

function App() {
  return (
    <div>
      <BrowserRouter>
      <DarkModeProvider>
      <Routes>
        {/* <Route exact path="/" element={<NavBar/>} /> */}
        {/* <Route path="/header" element={<Header/>} /> */}
        <Route exact path="/" element={<StartPage/>} />
        <Route path="/about" element={<Container/>} />
        {/* <Route path="/about" element={<About/>} /> */}
      </Routes>
      </DarkModeProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;