import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={Shop} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
