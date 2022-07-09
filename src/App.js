import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route exact path="/about" element={<About/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;