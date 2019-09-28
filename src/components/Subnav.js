import React from "react";
import '.././App.css';

import {Link } from 'react-router-dom';

const Subnav = () => {
  return (
    		<ul className="subnav">
					<li><Link to="/products/#foxtail">Foxtail Millet</Link></li>
					<li><Link to="/products/#barnyard">Barnyard Millet</Link></li>
					<li><Link to="/products/#little">Little Millet</Link></li>
					<li><Link to="/products/#kodo">Kodo Millet</Link></li>
					<li><Link to="/products/#proso">Proso Millet</Link></li>
					<li><Link to="/products/#sorgum">Sorghum Millet</Link></li>
					<li><Link to="/products/#browntop">Browntop Millet</Link></li>
			</ul>
  );
};

export default Subnav;