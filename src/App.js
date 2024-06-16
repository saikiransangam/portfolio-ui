import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Dashboard />
      <Login />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;

