import React from "react";
import './../style/footer.scss'
import logo from './../images/logo.png'
import {FaGithubAlt, FaTelegramPlane} from 'react-icons/fa'

const Footer = () =>{
    return(
        <div className="footerdiv1">
            
        <div className="footerdiv2" >
        <h2>bookitnow</h2>
        <h2>About us</h2>
    </div>
    <div className="footerdiv3">
    <div className="footerdiv4">
    <div className="footerdiv5">
        <FaGithubAlt className="githubicon"></FaGithubAlt>
    </div>
    <div className="footerdiv5">
        <FaTelegramPlane className="telegramicon"></FaTelegramPlane>
    </div>
    </div>
    <div className="footerdiv6">
        <img src={logo} alt="logo" />
    </div>
    <div className="footerdiv7">
        <p>Copyright 2022, all rights reserved.</p>
    </div>

    </div>
    
    <div className="footerdiv8">
        <div className="footerdiv9">
        <p>Support</p>
        </div>
        <div className="footerdiv10">
        <p>Term of use</p>
        </div>
        <div className="footerdiv11">
        <p>Policy</p>
        </div>
    </div>
    </div>
    )
}
export default Footer;