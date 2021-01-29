import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

import HomeScreen from './Home/index'
import CategoriaScreen from './Categoria/index'
import CarrinhoScreen from './Carrinho/index'

function App() {
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <HomeScreen/>
        </Route>
        <Route path="/categorias/:id">
            <CategoriaScreen />
        </Route>
        <Route path="/carrinho">
            <CarrinhoScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
