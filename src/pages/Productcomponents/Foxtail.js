import React from "react";
import '../.././App.css';
import foxtailmillet from "./image/foxtailmillet.png";

const Foxtail = () => {
  return (
    <section className="productlist" id="foxtail">
            <div className="productimg">
                <img src={foxtailmillet} alt= "foxtail millet" width={`250px`} height={`250px`} /> 
            </div>	
            <div className="productdesc">
                <h4>FOXTAIL MILLET</h4>
                    <ul>
                         <li>Controls Blood sugar and cholesterol</li>
                         <li>Increases disease resistance capacity</li>
                         <li>Ideal food for gastricproblem and diabetes</li>
                         <li>Considered as good digestiable and no-allergic grains</li>
                 </ul>
            </div>
        </section>
  );
};

export default Foxtail;