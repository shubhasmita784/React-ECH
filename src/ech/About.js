import React, { Component } from 'react';
import './css/layout.css';
import axios from 'axios';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title:'',
          description:'',
          image:''
          
         
        };
     
      }
    async componentDidMount(){
        let res = await axios.get('https://vision.kazma.co.in/CMSApi/aboutus');
        this.setState({ title: res.data.data.title,description: res.data.data.description,image:res.data.data.image});
        console.log("my res--->",res);
      }
    render(){
        return(
            <div>
            <div class="about" id="about">
            <div class="container">
            <div class="row">
            <div class="col-md-5">
            <article>
            <h2>{this.state.title}</h2>
                        {/* <p>Minim volutpat fermentum lorem proin, sociis laudantium tortor iure! Feugiat voluptatem. Earum, quas commodo? </p>
                        <p>
                            Aptent quo est cumque ullamco lorem, necessitatibus. Erat et cras numquam mus voluptas, praesent a! Ipsam aliquam aliquip? Ridiculus, scelerisque ultricies, ligula laboris quas, numquam mi facilisi? mattis diam.
                        </p> */}
                        <div dangerouslySetInnerHTML={{ __html: this.state.description}} />
            </article>
            </div> 
            <div class="col-md-7">
            <img src={this.state.image} alt={"course"}></img>
            </div>
           </div>
            </div>
            </div>

            </div>
        )
    }
}

export default About;