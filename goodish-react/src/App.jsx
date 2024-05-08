import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser/RegisterUser';
import Login from './components/Login';
import styles from './components/styles.module.css'

const App = () => {
  const [loggedInUser,setLoggedInUser] = useState("");
  const [isNewUser, setNewUser] = useState(true);

  const handleUserLogin = (loggedInUser) => {
    setLoggedInUser(loggedInUser);
  } 

  const handleNewUser = (newUser) => {
    setNewUser(newUser);
  }

  console.log('isNewUser:', isNewUser);
  
  return (
    <Router>
          <NavBar />
          <Home />
          <div>
          <Routes>
            <Route path="/register" component={RegisterUser} />
            <Route path="/login" component={Login} />
            <Route path="/" component={<Home />} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;