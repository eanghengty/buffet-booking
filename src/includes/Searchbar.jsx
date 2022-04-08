import React from "react";
import './../style/searchbar.scss'
import discount from '../images/discount.png'
const Searchbar =()=>{
    return(
        <div className="searchbar-div-1">

        <div className="searchbar-div-2">

        <input type="text" placeholder="Find Restaurant name, location" />
        <p>Search</p>

        </div>
    
        <div className="searchbar-div-3">

            <div className="searchbar-div-4">

                <div className="searchbar-div-5">

                <p className="searchbar-p-1">Book it now</p>

                </div>

                <div className="searchbar-div-6">

                <p className="searchbar-p-2">The only reservation service you need.</p>

                </div>

            </div>
            
            <div className="searchbar-div-7">

                <img src={discount} alt="sales" />

            </div>

        </div>

    </div>
    )

}

export default Searchbar;