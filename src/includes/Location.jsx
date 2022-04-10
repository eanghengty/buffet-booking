import Eachlocation from "./partial/Eachlocation";
import './../style/location.scss'
const Location =() =>{
    return(
        <div>
            <div className="locationdiv1">

                <div className="locationdiv2">

                <div className="locationdiv3">
                    <div className="line"></div>
                <h2>Locations</h2>
                </div>
                
                <div className="locationdiv4">
                <a href="#">
                <p>View 40 restuarants</p>
                </a>
                </div>

                </div>

                <div className="locationdiv5">

                    <Eachlocation></Eachlocation>
                    <Eachlocation></Eachlocation>
                    <Eachlocation></Eachlocation>
                    <Eachlocation></Eachlocation>

                </div>

                
                
            </div>
        </div>
    )
}
export default Location;