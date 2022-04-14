import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Profile from "../includes/Profile";
import './../style/myfavourite.scss'
const Myfavourite=()=>{
    return(
        <div>
            <Header>
                </Header>
                <div className="myfavouritediv">
                <div className="myfavouritediv1">
                    <div className="myfavouritediv2">
                        <div className="myfavouritediv3">
                        <div className="myfavouritediv4">
                            <div className="myfavouriteline">
                            </div>
                            <div className="myfavouritediv5"><p>My Favourites</p></div>
                            </div>
                            <div className="myfavouritebox">
                                <p>You have 0 favourites restuarant</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="myfavouritediv6"><Profile></Profile></div>
                </div>
                </div>
                <Footer></Footer>
                        </div>
    )
}
export default Myfavourite;