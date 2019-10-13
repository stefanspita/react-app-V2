import React,{Component} from "react";
import '.././App.css';
import * as emailjs from 'emailjs-com'

class ContactUs extends Component {
  constructor() {
    super()

    this.state = 
    {
      name: '',
      phoneNum: '',
      email: '',
      message: '',
      errors:
      {
        name:'',
        phoneNum:'',
        email:'' 
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState ({ [e.target.name]: e.target.value })
  }

  validateForm () {
    let errors = this.state.errors
    let formisValid = true 
    errors.name =''
    errors.phoneNum =''
    errors.email =''

    if (!this.state.name || this.state.name.trim().length < 3) 
    {
        errors.name = 'Invalid name'
        formisValid = false
    }

    let ValidPhoneNum = (this.state.phoneNum).replace(/\D+/g,"");
    if (ValidPhoneNum.length < 10) 
    {
      errors.phoneNum = 'Invalid Phone num'
      formisValid = false
    }

    let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
     if (!validEmail.test(this.state.email)) 
    {
        errors.email = 'Invalid email'
        formisValid = false
    }

    this.setState({errors :errors})
   
    return formisValid
  }

  handleSubmit(e) {
    
    e.preventDefault()

    if(!this.validateForm())
    {
      return
    }
    
    const{ name, phoneNum, email, message} = this.state
  
    let templateParams = {
      from_name:`${name} ( ${email})`,
      to_name:'fromoraganicfarm1@gmail.com',
      from_phone:phoneNum,
      message_html: message
     }

     emailjs.send(
      'gmail',
      'template_RlKkL0II',
       templateParams,
      'user_VTyRFwdMVxHl1xhuYZRqc'
     ).then (response=> {
      console.log('message successful',response.status,response.text)})
      .catch (err => console.error ('failed',err))
       
      this.resetForm()
 }
  resetForm() {
    this.setState({
      name: '',
      phoneNum: '',
      email: '',
      message: '',
    })
  }

render()  {
 return (

<main className="contact">
    <form className="contact-items" onSubmit={this.handleSubmit}>
        <h2>Contact Us</h2>
        <input  type="text" 
                className="contact-item" 
                placeholder="Name..." 
                name="name"
                value = {this.state.name}
                onChange = {this.handleChange} />
        <div style ={{color:"red"}}>{this.state.errors.name}</div>        

        <input type="tel" 
                className="contact-item" 
                placeholder="Phone number...." 
                name="phoneNum"
                value = {this.state.phoneNum}
                onChange = {this.handleChange}/>
        <div style ={{color:"red"}}>{this.state.errors.phoneNum}</div>
       
        <input type="email" 
                className="contact-item"
                placeholder="Email..." 
                name="email"
                value = {this.state.email}
                onChange = {this.handleChange}/>
        <div style ={{color:"red"}}>{this.state.errors.email}</div>
       
        <textarea cols="30" 
                  rows="10" 
                  className="contact-item"
                  name="message"
                  value = {this.state.message}
                  onChange = {this.handleChange} ></textarea>

        <input type="submit" 
                value="Submit" 
                className="contact-item-btn"/>
    </form>
</main>
  );
};
};

export default ContactUs;