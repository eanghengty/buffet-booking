import Menudetail from "./partial/Menudetail";
import './../style/tabdetail.scss'
import Aboutdetail from "./partial/Aboutdetail";
import Reviewdetail from "./partial/Reviewdetail";
const Tabdetail = () =>{
    return(
        <div className="tabdetaildiv1">
            <div className="tabdetaildiv2">
            <div><a href="#">Menu</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Review</a></div>
            </div>
            <div className="tabdetaildiv3">
                <Reviewdetail/>
            </div>
        </div>
    )
}
export default Tabdetail;