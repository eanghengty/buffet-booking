import React from "react";
import './../../style/eachbrand.scss'
import dori from './../../images/dori.png'
function Eachbrand(){
    return(
        
                <div className="eachbranddiv1">
                <div className="eachbranddiv2"><img src={dori} alt="Brand1" /></div>
                <div className="eachbranddiv3"><p>Dori Dori Buffet</p></div>
                </div>
            
    )
}
export default Eachbrand;