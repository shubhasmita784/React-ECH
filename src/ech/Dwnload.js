import React, { Component } from 'react';
import './css/layout.css';
import google from './img/google-play.png';
import appstore from './img/app-store.png';
import big from './img/big.png';

class Dwnlod extends Component {
    render()
    { 
        return(
            <div>
               <div class="app" id="download">
            <div class="container">
            <h2>Available for <br/> all your devices</h2>
            <p>All the power of niche in your pocket. Schedule, publish and monitir <br/> your accounts with ease.</p>
            <div class="btns">
            <a href="#"><img src={ google} alt={" google"}></img></a>
            <a href="#"><img src={appstore} alt={"appstore"}></img></a>
            </div>
            <div class="down">
            <img src={big} alt={"big"}></img>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Dwnlod;