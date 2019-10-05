import React from "react";
import '.././App.css';
import Subnav from './Subnav';
import {Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="nav">
    <ul>
	   		<li><Link to="/">Home</Link></li>
			<li><Link to="/aboutus">About us</Link></li>
			<li><Link to="/products">Our product<span className="arrow">&#x25BC;</span></Link>
			<Subnav />
			</li>
			<li><Link to="/contact">Contact us</Link></li>	
		</ul>
    </nav>
  );
};

export default Navbar;