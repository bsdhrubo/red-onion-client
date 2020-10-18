import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AppMainLayOut from './components/AppMainLayOut/AppMainLayOut';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><AppMainLayOut/></Route>

          <Route path='/admin'> <AdminPanel/> </Route>

          <Route path='*'><h3>404 <br/> Page not found </h3></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
