import React from "react";
import { NavLink } from "react-router-dom";
const Signup = () =>{
    return(
        <div>
            <h1>Sign up</h1>
            <div className="image_side">
                <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" alt="img_side" style={{width:300, height:300}} />
            </div>
            <div>
                <form action="">
                    <h2>Sign up</h2>
                    <button>close</button>
                    <label htmlFor="">Information</label>
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>

                    
                    <button type="submit">SIGN UP</button>
                    <label>Or</label>
                    <button>GOOGLE</button>
                    <p>Already become our customer?</p>
                   <a href="./Login">SIGN IN</a>
                </form>
            </div>
        </div>
    )
}

export default Signup;