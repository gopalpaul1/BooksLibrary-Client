import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import Header from './Component/Header/Header';
import Order from './Component/Orders/Order';
import Checkout from './Component/Checkout/Checkout'
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import MangeProducts from './Component/MangeProducts/MangeProducts';


export const UserContext = createContext(); 

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/manageProducts">
            <MangeProducts />
          </PrivateRoute>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
