import React from 'react';
import './App.css';
import Posts from './Components/Posts';
import About from './Components/About';
import Links from './Components/Links';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import TicTacToe from './Components/GameComponent/TicTacToe';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route path='/' component={About} exact/>
          <Route path='/posts' component={Posts}/>
          <Route path='/links' component={Links}/>
          <Route path='/game' component={TicTacToe}/>
          <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
