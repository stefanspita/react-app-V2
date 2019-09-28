import React from "react";
import footerimg from '.././pages/HomepageImg/pgsindia.png';


const Footer = () => {
  return (
    <footer className="footer">
			<img  src={footerimg} alt="banner" />
			<p> <b>Certified By:PGS-INDIA</b>
			<br/>An Organic Guarantee Programme Reg No:LG0800012669</p>
	</footer>
  );
};

export default Footer;