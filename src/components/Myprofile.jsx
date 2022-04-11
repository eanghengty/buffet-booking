import Header from "../includes/Header";
import Profile from "../includes/Profile";
import Footer from "../includes/Footer";
import './../style/myprofile.scss'
import {GiCambodia} from 'react-icons/gi'
const Myprofile=()=>{
    return(
        <div>
            <Header></Header>
            <div className="myprofilediv1">
                <div className="myprofilediv2">
                    <div className="myprofilediv3">
                        <div className="myprofilediv4">
                            <div className="myprofileline"></div>
                            <div className="myprofilediv5"><p>Name</p></div>
                        </div>
                        <div className="myprofilediv6">
                       <div className="myprofilediv7"> <p>First Name</p></div>
                       <div className="myprofilediv8"> <input type="text" /></div>
                        </div>
                        <div className="myprofilediv9">
                        <div className="myprofilediv10"><p>Last Name</p></div>
                        <div className="myprofilediv11"><input type="text" /></div>
                        </div>
                        <div className="myprofilediv12">
                        <button>Save</button>
                        </div>
                    </div>
                    <div className="myprofilediv13">
                       <div className="myprofilediv14">
                           <div className="myprofileline"></div>
                           <div className="myprofilediv16"><p>Gender</p></div>
                       </div>
                       <div className="myprofilediv17">
                       <div className="myprofilediv18"><p>Type</p></div>
                       <div className="myprofilediv19"><select name="format" id="">
                           <option value="">Male</option>
                           <option value="">Female</option>
                           <option value="">Other</option>
                       </select></div>
                       </div>
                       <div className="myprofilediv20"><button>Save</button></div>
                    </div>
                    <div className="myprofilediv21">
                        <div className="myprofilediv22">
                            <div className="myprofileline"></div>
                            <div className="myprofilediv24"><p>Email</p></div>
                        </div>
                        
                        <div className="myprofilediv25">
                            <div className="myprofilediv26"><p>Primary</p></div>
                            <div className="myprofilediv27"><input type="text" placeholder="Email" /></div>
                        </div>
                        <div className="myprofilediv28"><button>Save</button></div>
                    </div>
                    <div className="myprofilediv29">
                        <div className="myprofilediv30">
                            <div className="myprofileline"></div>
                            <div className="myprofilediv32"><p>Mobile Phone</p></div>
                        </div>
                        
                        <div className="myprofilediv33"><small>Add mobile phone to make reservation.</small></div>
                        
                        <div className="myprofilediv34">
                        <div className="myprofilediv35">
                        <GiCambodia></GiCambodia>
                        <div className="myprofilediv36"><p>+855</p></div>
                        
                        </div>
                        <div className="myprofilediv37"><input type="text" /></div>
                        </div>
                        
                        <div className="myprofilediv38"><button>Save</button></div>
                    </div>
                    <div className="myprofilediv39">
                        <div className="myprofilediv40">
                            <div className="myprofileline"></div>
                            <div className="myprofilediv41"><p>Password</p></div>
                        </div>
                        
                        <div className="myprofilediv42">
                        <div className="myprofilediv43"><p>Password</p></div>
                        <div className="myprofilediv44"><input type="password" /></div>
                        </div>
                        <div className="myprofilediv45">
                        <div className="myprofilediv46"><p>Confirm Password</p></div>
                        <div className="myprofilediv47"><input type="Password" /></div>
                        </div>
                        <div className="myprofilediv48"><button>Save</button></div>
                    </div>
                </div>
                <div className="myprofilediv49">
                <Profile></Profile>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Myprofile;