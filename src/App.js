import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/about" component={<About/>} />
        {/* <Route path="*" componen={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;