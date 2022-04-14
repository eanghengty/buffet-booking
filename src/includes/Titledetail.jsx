import './../style/titledetail.scss'
import {FaStar} from 'react-icons/fa'
import logo from '../images/sakurabuffet.png'
const Titledetail = ()=>{
    return(
        <div className="titledetaildiv">
            <div className="titledetaildiv1">
            <div className="titledetaildiv2">
                <div className="titledetaildiv3">
                    <h2>Sakura Buffet, Location: 1</h2>
                </div>
                <div className="titledetaildiv4">
                    <p>type: buffet</p>
                    <p>Phnom penh</p>
                    <p>130 reservations</p>
                </div>
                <div className="titledetaildiv5">
                    <FaStar className="titledetailicon"></FaStar>
                    <FaStar  className="titledetailicon"></FaStar>
                    <FaStar  className="titledetailicon"></FaStar>
                    <FaStar  className="titledetailicon"></FaStar>
                    <FaStar  className="titledetailicon"></FaStar>
                    <p>(4.0)</p>
                </div>
            </div>
            <div className="titledetaildiv6" >
                <div className="titledetaildiv7"><img src={logo} alt="logo" /></div>
                <div className="titledetaildiv8"><button>Favourite</button></div>
            </div>
        </div>
        </div>
    )
}
export default Titledetail;
