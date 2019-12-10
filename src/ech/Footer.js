import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/layout.css';
import axios from 'axios';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      name:'',
      email: '',
      message:''      
    };

     this.handleChange=this.handleChange.bind(this);
     this.handleChange1=this.handleChange1.bind(this);
     this.handleChange2=this.handleChange2.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    let res = await axios.get(' https://vision.kazma.co.in/CMSApi/social_media  ');
    this.setState({ data: res.data.data});
    // let res = await axios.get('https://vision.kazma.co.in/CMSApi/contactus_submit');
    // this.setState({ data: res.data.data});

    console.log("my res--->",res);
  }

  // handleChange(e) {
  //   console.log("state2---->",this.state);
  //   console.log('handleChange()',e.target.value);
  //   this.setState({
  //     email: e.target.value,
  //      phnNum:e.target.value,
  //     message:e.target.value
  //   })
  // }
  handleChange(e){
    this.setState({name:e.target.value});
    console.log("state2---->",this.state);
   console.log('handleChange()',e.target.value);
  }
  handleChange1(e) {
      this.setState({email:e.target.value});
      console.log("state2---->",this.state);
      console.log('handleChange1()',e.target.value);
    }
    
     handleChange2 (e) {
      this.setState({message:e.target.value});
      console.log("state2---->",this.state);
      console.log('handleChange2()',e.target.value);
    }
    

    
  
  handleSubmit = event => {
    event.preventDefault();
    //this.props.history.push('/dashboard')
    var bodyFormData = new FormData();
    bodyFormData.set('name',this.state.name );
    bodyFormData.set('email', this.state.email);
    bodyFormData.set('message', this.state.message);


    axios({
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://vision.kazma.co.in/CMSApi/contactus_submit',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
        
          console.log(response);
          alert(response.data.message)
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
  }
    render()
    { 
     
        return(
            <div>
              <footer>
            <div class="footer-top">
            <div class="container">
            <div class="row">
            <div class="col-md-3">
            <img src={logo} alt={""}></img>
            <p>Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer</p>
            </div>
            <div class="col-md-3">
            <ul>
                    <li><h4>Features</h4></li>
                    <li><a href="#">E-learning</a></li>
                    <li><a href="#">Counselling</a></li>
                    <li><a href="#">Test</a></li>
                    <li><a href="#">Study</a></li>
                    
             </ul>
            </div>
            <div class="col-md-6">
            <article id="contact">
            <ul>
            <li><h4>Contact Us</h4></li>
            <form className="contactForm" onSubmit={this.handleSubmit}>
            <div class="form-group">
            <input name="name" type="text" className="form-control" placeholder="Name" 
            onChange={this.handleChange} required/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name ="email" 
            onChange={this.handleChange1} placeholder="Email" required></input>
          </div>
          <div class="form-group">
           <textarea cols="30" rows="4" name = "msg"  class="form-control" placeholder="Message" 
            onChange={this.handleChange2} required></textarea>
          </div>
            <button class="btn" >Submit</button>
            </form>
            </ul>
            </article>
            </div>
            </div>
            </div>
            </div>
            <div class="footer-bottom">
            <div class="container" style={{borderTop: '1px solid #eee'}}>
            <div class="row">
            <div class="col-md-6">
            <p><i class="fa fa-copyright"></i> Copyright 2019 Design by <a href="#">Kazmatechnology</a></p>
            </div>
            <div class="col-md-6">

            <ul>
          {Object.keys(this.state.data).map((key) => (
            <li><a href={this.state.data[key].link}><i class={`fa fa-${this.state.data[key].name}`}></i></a></li>
          /* <li><a href={"https://www.facebook.com/theshineindia"}><i class="fa fa-facebook" style={{background: '#4064AD'}}></i></a></li>
         <li><a href={"https://twitter.com/TheshineIndia1?s=08"}><i class="fa fa-twitter" style={{background: '#1C9DEB'}}></i></a></li>
          <li><a href="#"><i class="fa fa-youtube" style={{background: '#F40007'}}></i></a></li>
          <li><a href={"https://www.linkedin.com/in/the-shine-india-923251197"}><i class="fa fa-linkedin" style={{background: '#0271AE'}}></i></a></li>                     */
          ))}
          </ul>
            </div>
            </div>
            </div>
            </div>
            </footer>
            </div>
        )
    }

}


export default   Footer ;