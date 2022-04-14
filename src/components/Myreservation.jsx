import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Profile from "../includes/Profile";
import './../style/myreservation.scss'
const Myreservation =()=>{
    return(
        <div>
        <Header></Header>
        <div className="myreservationdiv">
        <div className="myreservationdiv1">
            <div className="myreservationdiv2">
            <div className="myreservationdiv3">
                <div className="myreservationdiv4">
                    <div className="myreservationline"></div>
                    <div className="myreservationdiv5"><p>Upcoming Booking</p></div>
                </div>
                
                    <div className="myreservationbox"><p>Upcoming Reservation will appear after booking.</p></div>
                
            </div>
            <div className="myreservationdiv7">
                <div className="myreservationdiv8">
                    <div className="myreservationline"></div>
                    <div className="myreservationdiv9"><p>History Booking</p></div>
                </div>
                <div className="myreservationbox">
                    <p>History Reservation will appear  after booking expired.</p>
                </div>
            </div>
            </div>
            <div className="myreservationdiv10">
            <Profile></Profile>
            </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
    )
}
export default Myreservation;