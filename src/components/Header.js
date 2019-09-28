import React from "react";
import logo from '.././pages/HomepageImg/logo.jpg';
import '.././App.css';


class Header extends React.Component{
  render() {
    return (
    <header className="container">
    <div className="header">
      <h1>From Oraganic Farmer</h1>
      <p><q>Farm to Consumers</q></p>
    </div>
    <div className="logo">
    <img src={logo} alt="logo"/>
    </div>
  </header> 
  );
   }
};

export default Header;