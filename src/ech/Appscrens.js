import React, { Component } from 'react';
import './css/layout.css';
import screen1 from './img/scr1.png';
import OwlCarousel from 'react-owl-carousel2/lib/OwlCarousel.js';
import 'react-owl-carousel2/lib/styles.css';
import axios from 'axios';


class Appscren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appscreens:[]
       
    };
 
  }
  async componentDidMount(){
    let res = await axios.get('https://vision.kazma.co.in/CMSApi/app_screen');
    console.log("my res hey.--->",res);
    this.setState({appscreens: res.data.app_screen});
    
    
  }
  
    render()
    { 
        const options = {
            items: 4,
            nav: true,
            rewind: true,
            navText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            margin: 10,
            responsive:{
              0: {
                  items: 4,
              },
              450: {
                  items: 1,
              },
              350:
              {
                items:1,
              },
              250:
              {
                items:1,
              },
              600: {
                  items: 2,
              },
              1000: {
                  items: 4,
              },
          },
          };
            
      return(
          <div>
            <div class="screen" id="screen">
           
                    <div class="container">
                    <h2 style={{marginBottom: '50px'}}>App Screens</h2>
                     <div>
                           {this.state.appscreens.length && (
                    <OwlCarousel ref="car" options={options}  >
                    {Object.keys(this.state.appscreens).map((key) => { 
                      return (
                       <div><img src={this.state.appscreens[key].image} alt={screen1}/></div>
                       );
                       })}
           </OwlCarousel>
                           )}
           </div>
            </div>
          
            </div>
          
          </div>
      )
    }
} 



export default  Appscren;