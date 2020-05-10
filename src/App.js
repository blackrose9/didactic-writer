import React from 'react';
import './App.css';
import Posts from './Components/Posts';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p><i>Hi there my portfolio is coming to this page soon. <br/>
      Featuring pieces of literature I write and everything outside my development life, I guess :) <br/>
      Stay Tuned!</i></p>
      </header>
      <Posts/>
      <About/>
      <Links/>
    </div>
  );
}

export default App;
