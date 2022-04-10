import location from './../../images/pp.png'
import '../../style/eachlocation.scss'
function Eachlocation (){
    return(
        <div className="eachlocationdiv1">
                <div className="eachlocationdiv2">
                    <img src={location} alt="" />
                </div>

                <div className="eachlocationdiv3">
                <p>Phnom Penh</p>
                </div>

                <div className="eachlocationdiv4">
                <p>40 restuarants</p>
                </div>
        </div>
    )
}
export default Eachlocation;