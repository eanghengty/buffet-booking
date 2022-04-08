import React from "react";
import './../style/header.css'
import logo from './../images/logo.png'
import cambodiaflag from './../images/cambodia.png'
import sampleprofile from './../images/sampleprofile2.png'
import { useState } from "react";
import {AiFillDownCircle} from 'react-icons/ai'
const Header = () =>{
    const [open,setOpen]= useState(false);
    return(

        <div className="header-div-1">

            <div className="header-div-2">
            <img src={logo} alt="logo" />
        </div>

        <div className="header-div-3">

        <div className="header-div-4">
            <div>
            <p>Cambodia</p>
            <img src={cambodiaflag} alt="flag" />
            </div>
        </div>

        <div className="header-div-5">

            <div className="divp">
            <p>Hunger Man</p>
            </div>

            <div className="divdiv">
            <div className="header-div-6"></div>
            </div>
            
            <div className="divimg">
            <img src={sampleprofile} alt="profile" />
            </div>

        </div>

        <div className="header-div-7">
            
            <div className="holder">
                <AiFillDownCircle className="icon" onClick={()=>setOpen(!open)}></AiFillDownCircle>
            </div>
            {open && (
                <div className="holderitem">
                <div className="header-div-8">
                <a href="#">
                <p>My Profile</p>
                </a>
                    
                </div>
    
                <div className="header-div-9">
                <a href="#"><p>My Favourite</p></a>
                </div>
    
                <div className="header-div-10">
                <a href="#"><p>Logout</p></a>
                </div>
                </div>
            )}

        </div>

        </div>

        

        </div>
    )
}

export default Header;