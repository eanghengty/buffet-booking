import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Reservation from "../includes/Reservation";
import Tabdetail from "../includes/Tabdetail";
import Titledetail from "../includes/Titledetail";
import './../style/pagedetail.scss'
import buffet from './../images/poster1.jpg'
const Pagedetail = () =>{
    return(
        <div>
            <Header></Header>
            <div className="pagedetaildiv">
            <div className="pagedetaildiv1">
            <Titledetail></Titledetail>
            <div className="pagedetaildiv7">
            <div className="pagedetaildiv2">
            
                <div className="pagedetaildiv3">
                    <img src={buffet}></img>
                    <p>view image</p>
                </div>
                <div className="pagedetaildiv4">
                <div className="pagedetaildiv5">
                    <img src={buffet}></img>
                    <p>view image</p>
                </div>
                <div className="pagedetaildiv6">
                    <img src={buffet}></img>
                    <p>view image</p>
                </div>
                </div>
                
            </div>
            </div>
            <Tabdetail></Tabdetail>
            <Reservation></Reservation>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Pagedetail;