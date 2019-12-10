import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './ech/Home';
import Header from './ech/Header';
import Appscrens from './ech/Appscrens';
import Footer from './ech/Footer';
import About from './ech/About';
import Features from './ech/Features';
import Dwnload from './ech/Dwnload';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Features/>
        <Appscrens/>
        <Dwnload/>
        <Footer/>
      </div>
    );
  }
}

export default App;
