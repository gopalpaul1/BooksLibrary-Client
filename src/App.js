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
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


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
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
