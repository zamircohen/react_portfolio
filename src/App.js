import React from 'react';
import classNames from 'classnames';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import styles from './App.css';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<StartPage/>} />
      </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;