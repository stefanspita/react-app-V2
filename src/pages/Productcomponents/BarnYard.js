import React from "react";
import '../.././App.css';
import barnyard2 from "./image/barnyard2.png";


const BarnYard = () => {
  return (
    <section className="productlist" id={"barnyard"}>
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

  );
};

export default BarnYard;