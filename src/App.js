import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>} />
      </Routes>
        {/* <h1> Hello world! </h1>   */}

    </div>
  );
}

export default App;