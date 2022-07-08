import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Container } from './layout/Layout';


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <h1> Hello world! </h1>  
      </Container>    
    </div>
  );
}

export default App;