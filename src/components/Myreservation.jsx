import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Profile from "../includes/Profile";

const Myreservation =()=>{
    return(
        <div>
        <Header></Header>
        <div>
            <div>
            <div>
                <div>
                    <div></div>
                    <p>Upcoming Booking</p>
                </div>
                <div>
                    <p>Upcoming Reservation will appear after booking.</p>
                </div>
            </div>
            <div>
                <div>
                    <div></div>
                    <p>History Booking</p>
                </div>
                <div>
                    <p>History Reservation will appear  after booking expired.</p>
                </div>
            </div>
            </div>
            <Profile></Profile>
        </div>
        <Footer></Footer>
        </div>
    )
}
export default Myreservation;