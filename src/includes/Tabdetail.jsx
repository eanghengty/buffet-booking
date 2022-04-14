import Menudetail from "./partial/Menudetail";
import './../style/tabdetail.scss'
const Tabdetail = () =>{
    return(
        <div className="tabdetaildiv1">
            <div className="tabdetaildiv2">
            <div><a href="#">Menu</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Review</a></div>
            </div>
            <div>
                <Menudetail></Menudetail>
            </div>
        </div>
    )
}
export default Tabdetail;