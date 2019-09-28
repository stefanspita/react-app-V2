import React from "react";
import '.././App.css';
import Foxtail from "./Productcomponents/Foxtail";
import BarnYard from "./Productcomponents/BarnYard";
import little from "./Productcomponents/image/little.png";
import kodo from "./Productcomponents/image/kodo.png";
import proso2 from "./Productcomponents/image/proso2.png";
import sorgum from "./Productcomponents/image/sorgum.png";
import browntop2 from "./Productcomponents/image/browntop2.png";



const Product = () => {
  return (
    <main className="product">
        <h1>Our Products</h1> 

        <Foxtail />
        <BarnYard/>     
            <section className="productlist" id={"little"}>
                    <div className="productimg">
                        <img src={little} alt="little millet"/> 
                    </div>	
                    <div className="productdesc">
                        <h4>LITTLE MILLET</h4>
                            <ul>
                                 <li>Controls Blood sugar and cholesterol</li>
                                 <li>Increases disease resistance capacity</li>
                                 <li>Ideal food for gastricproblem and diabetes</li>
                                 <li>Considered as good digestiable and no-allergic grains</li>
                         </ul>
                    </div>
                </section>
               
                <section className="productlist" id={"kodo"}>
                        <div className="productimg">
                            <img src={kodo} alt="kodo millet" /> 
                        </div>	
                        <div className="productdesc">
                            <h4>KODO MILLET</h4>
                                <ul>
                                     <li>Controls Blood sugar and cholesterol</li>
                                     <li>Increases disease resistance capacity</li>
                                     <li>Ideal food for gastricproblem and diabetes</li>
                                     <li>Considered as good digestiable and no-allergic grains</li>
                             </ul>
                        </div>
                    </section>
                    
                    <section className="productlist" id="proso">
                            <div className="productimg">
                                <img src={proso2} alt="proso millet" /> 
                            </div>	
                            <div className="productdesc">
                                <h4>PROCO MILLET</h4>
                                    <ul>
                                         <li>Controls Blood sugar and cholesterol</li>
                                         <li>Increases disease resistance capacity</li>
                                         <li>Ideal food for gastricproblem and diabetes</li>
                                         <li>Considered as good digestiable and no-allergic grains</li>
                                 </ul>
                            </div>
                        </section>
                       
                        <section className="productlist" id="sorgum">
                                <div className="productimg">
                                    <img src={sorgum} alt="Sorghum millet"/> 
                                </div>	
                                <div className="productdesc">
                                    <h4>SORGHUM MILLET</h4>
                                        <ul>
                                             <li>Controls Blood sugar and cholesterol</li>
                                             <li>Increases disease resistance capacity</li>
                                             <li>Ideal food for gastricproblem and diabetes</li>
                                             <li>Considered as good digestiable and no-allergic grains</li>
                                     </ul>
                                </div>
                            </section>
                           
                        <section className="productlist" id="browntop">
                            <div className="productimg">
                                <img src={browntop2} alt="Browntop millet" /> 
                            </div>	
                            <div className="productdesc">
                                <h4>BROWNTOP MILLET</h4>
                                    <ul>
                                         <li>Controls Blood sugar and cholesterol</li>
                                         <li>Increases disease resistance capacity</li>
                                         <li>Ideal food for gastricproblem and diabetes</li>
                                         <li>Considered as good digestiable and no-allergic grains</li>
                                 </ul>
                            </div>
                        </section>
                        
            </main>
           
  );
};

export default Product;