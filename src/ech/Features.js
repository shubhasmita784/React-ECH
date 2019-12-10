import React, { Component } from 'react';
import './css/layout.css';
import dote from './img/dot.png';
import about1 from './img/about_img.png';
import about2 from './img/about_img2.png';
import about3 from './img/about_img3.png';
import axios from 'axios';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1:{},
            data2:{},
            data3:{}
         
        };
     
      }
    
      async componentDidMount(){
        let res = await axios.get('https://vision.kazma.co.in/CMSApi/feature');
        
        
        this.setState({ data1: res.data.data[0]});
        this.setState({ data2: res.data.data[1]});
        this.setState({ data3: res.data.data[2]});
        console.log("my res hey.--->",this.state.data);
        // this.setState({ features2: res.data.features[1]});
        // this.setState({ features3: res.data.features[2]});
        
      }
    render(){
        return(
            <div>
            
            <span class="clearfix"></span>
            <div class="feature" id="feature">
            <div class="container">

            <h2>You care about your brain. <br/>
                        We do, too </h2>
                        <div class="dot-image"><img src={dote} alt={"dote"}></img></div>
                        
                        <div class="row">
                        <div class="col-md-6">
                        <article>
                        <div class="count" data-wow-delay="0.3s">
                        <div class="dot">
                        <div class="round"></div>
                        </div>
                        <h1>{this.state.data1.id}</h1> 
                        </div>
                        <h4>{this.state.data1.title}</h4>
                         <p>{this.state.data1.description}</p>
                        </article>
                        </div> 
                        <div class="col-md-6">
                        <img src={about1} alt={"about1"}></img>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <img src={about2} alt={"about2"}></img>
                        </div>
                        <div class="col-md-6 pl_100">
                        <article>
                        <div class="count" data-wow-delay="0.3s">
                        <div class="dot">
                        <div class="round"></div>
                        </div>
                        <h1>{this.state.data2.id}</h1>   
                        </div>
                        <h4>{this.state.data2.title}</h4>
                         <p>{this.state.data2.description}</p>
                        </article>
                        </div>
                        </div>
                        <div class="row" style={{marginBottom: 0}}>
                        <div class="col-md-6">
                        <article>
                        <div class="count" data-wow-delay="0.3s">
                        <div class="dot">
                        <div class="round"></div>
                        </div>
                        <h1>{this.state.data3.id}</h1>
                        </div>
                        <h4>{this.state.data3.title}</h4>
                         <p>{this.state.data3.description}</p>
                        </article>
                        </div>
                        <div class="col-md-6">
                        <img src={about3} alt={"about3"}></img>
                        </div>
                        </div>
                     </div>
                    </div>
            </div>
        )
    }
}

export default Feature ;