import React,{ createRef } from "react";
import '.././App.css';
import little from "./Productcomponents/image/little.png";
import kodo from "./Productcomponents/image/kodo.png";
import proso2 from "./Productcomponents/image/proso2.png";
import sorgum from "./Productcomponents/image/sorgum.png";
import browntop2 from "./Productcomponents/image/browntop2.png";
import foxtailmillet from "./Productcomponents/image/foxtailmillet.png";
import barnyard2 from "./Productcomponents/image/barnyard2.png";

class Product extends React.Component{
    
    constructor(props) {
	  super(props);
        this.scrollReffoxtail=React.createRef();
        this.scrollRefbarnyard=React.createRef();
        this.scrollReflittle = React.createRef();
        this.scrollRefkodo = React.createRef();
        this.scrollRefproso = React.createRef();
        this.scrollRefsorgum = React.createRef();
        this.scrollRefbrowntop = React.createRef();
    }
    

    componentDidMount() {
        
        const iteam =this.props.location.hash.replace(/#/g, "");
        if(this[`scrollRef${iteam}`]) this[`scrollRef${iteam}`].current.scrollIntoView();
    }
     componentDidUpdate(){
       
        const iteam =this.props.location.hash.replace(/#/g, "");
        if(this[`scrollRef${iteam}`])this[`scrollRef${iteam}`].current.scrollIntoView();
  
    }


render(){
  return (
    <main className="product">
        <h1>Our Products</h1> 
        <section className="productlist" id="foxtail" ref={this.scrollReffoxtail}>
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
        
        <section className="productlist" id={"barnyard"} ref={this.scrollRefbarnyard}>
            <div className="productimg">
                 <img src={barnyard2} alt="Barnyard millet" /> 
            </div>	
            <div className="productdesc">
                <h4>BARNYARD MILLET</h4>
                    <ul>
                        <li>Controls Blood sugar and cholesterol</li>
                        <li>Increases disease resistance capacity</li>
                        <li>Ideal food for gastricproblem and diabetes</li>
                        <li>Considered as good digestiable and no-allergic grains</li>
                </ul>
            </div>
        </section>
          
            <section className="productlist" id={"little"} ref={this.scrollReflittle}>
                    <div className="productimg" >
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
               
                <section className="productlist" id={"kodo"} ref={this.scrollRefkodo}>
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
                    
                    <section className="productlist" id={"proso"} ref={this.scrollRefproso}>
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
                       
                        <section className="productlist" id={"sorgum"} ref={this.scrollRefsorgum}>
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
                           
                        <section className="productlist" id={"browntop"} ref={this.scrollRefbrowntop}>
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
};
export default Product;