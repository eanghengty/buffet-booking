import React from "react";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Searchbar from "../includes/Searchbar";
import Brand from "../includes/Brand";
import Location from "../includes/Location";
import Theme from "../includes/Theme";
import Promotion from "../includes/Promotion";
import Partnership from "../includes/Partnership";
const Homepage = () =>{
   return(
    <div>
    <Header/>
    <Searchbar/>
    
    <Brand/>
    
    <Location/>
    
    <Theme/>
    
    <Promotion/>
    
    <Partnership/>
    <Footer/>
</div>
   )
}
export default Homepage;