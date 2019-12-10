import React, { Component } from 'react';
import './css/layout.css';
import image from './img/3D.png';
import header from './img/header-shape.png';
import mobile from './img/mobile.png';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      description:'',
      image:''
    };
 
  }

  async componentDidMount(){
    document.title = "ECH"
    let res = await axios.get('https://vision.kazma.co.in/CMSApi/banner');
    this.setState({ title: res.data.banner.title,description: res.data.banner.description,image:res.data.banner.image});
    console.log("my res--->",res);
  }
    render() {
      return(           
          <div>
            <div class="hero" id="home">
            <div class="container">
            <div class="row">
            <div class="col-md-7">
            <div class="caption">
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
            <a href="#" class="btn">see how we do it</a>
            </div>
              </div> 
              <div class="col-md-5">
              <img src={mobile} alt={"mobile"}></img>
              </div>
            </div>
            <div class="shape_banners">
            <img src={image} alt={"image"}></img>
            </div>
            </div>
            <div class="shape_banners_left"> <img class="header-btm-shape wow fadeIn" data-wow-delay="1.5s" src={header} alt={"header"} style={{visibility: 'visible', animationDelay: '1.5s', animationName: 'fadeIn'}}></img></div>
            </div>
          </div>
      )

    }
}


export default Home;