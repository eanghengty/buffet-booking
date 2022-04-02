import React from "react";
import { NavLink } from "react-router-dom";
const Signin = () =>{
    return(
        <div>
            <h1>Login page</h1>
            <div>
                <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=pexels-lisa-fotios-1279330.jpg&fm=jpg" alt="img_side" style={{width:300,height:300}} />
            </div>
            <div>
                <h2>Sign in</h2>
                <button>close</button>
                <form action="">
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password" />
                    <button type="submit">SIGN IN</button>
                </form>
                <p>If you don't have account Please</p>
                <a href="./Signup.jsx">SIGN UP</a>
            </div>

        </div>
    )
}
export default Signin;