import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/layout.css';

class Header extends Component {
 render()
 {
     return(
         <div>
           <header>
            <div className="container">
            <div className="row">
            <div className="col-md-3">
            <a href="#" className="logo"><img src={logo} alt={"logo"}></img></a>
            </div>
            <div class="col-md-9">
            <nav>
            <ul>
                <li><a href="#home" className="active scroll">Home</a></li>
                <li><a href="#about"className="scroll" >About</a></li>
                <li><a href="#feature" className="scroll">features</a></li>
                <li><a href="#screen" className="scroll">App Screen</a></li>
                <li><a href="#download" className="scroll">Download</a></li>
                <li><a href="#contact" className="scroll">Contact</a></li>
                </ul>
            </nav>
            </div>
            </div>
            </div>
            </header>
            <section className="responsive" >
                <img className="logo" src={logo} alt={logo}></img>
                <nav>
                        <ul>
                          <li><a href="#home"  className="active scroll">Home</a></li>
                          <li><a href="#about" className="scroll">About</a></li>
                          <li><a href="#feature" className="scroll">Feature</a></li>
                          <li><a href="#screen" className="scroll">Screen</a></li>
                          <li><a href="#download" className="scroll">Download</a></li>
                          <li><a href="#contact" className="scroll">Contact</a></li>
                        </ul>
                </nav>
                <div className="responsive_menu_bars">
                <span></span>
                <span></span>
                <span></span>
                </div>
        </section>
         </div>
     )
 }

}


export default Header;