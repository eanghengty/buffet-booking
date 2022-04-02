import Header from "../includes/Header";
import Profile from "../includes/Profile";
import Footer from "../includes/Footer";
const Myprofile=()=>{
    return(
        <div>
            <Header></Header>
            <div>
                <div>
                    <div>
                        <div></div>
                        <p>First Name</p>
                        <input type="text" />
                        <p>Last Name</p>
                        <input type="text" />
                        <button>Save</button>
                    </div>
                    <div>
                       <div></div>
                       <p>Type</p>
                       <select name="format" id="">
                           <option value="">Male</option>
                           <option value="">Female</option>
                           <option value="">Other</option>
                       </select>
                       <button>Save</button>
                    </div>
                    <div>
                        <div></div>
                        <p>Email</p>
                        <p>Primary</p>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div>
                        <div></div>
                        <p>Mobile Phone</p>
                        <p>Add mobile phone to make reservation.</p>
                        <img src="" alt="flag" />
                        <p>+855</p>
                        <input type="text" phone number/>
                        <button>Save</button>
                    </div>
                    <div>
                        <div>
                        </div>
                        <p>Password</p>
                        <p>Password</p>
                        <input type="password" />
                        <p>Confirm Password</p>
                        <input type="Password" />
                        <button>Save</button>
                    </div>
                </div>
                <Profile></Profile>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Myprofile;