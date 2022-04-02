import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Promotion from "../includes/Promotion";
import Searchresult from "../includes/SearchResult";

const Searchpage = ()=>{
    return(
        <div>
            <Header></Header>
            <div>
                <input type="text" placeholder="Search . . ." />
                <p>Search</p>
            </div>
            <div>
                <div>
                    <div></div>
                    <p>Filter</p>
                    <div>
                        <p>discount</p>
                        <button>10%</button>
                        <button>20%</button>
                        <button>30%</button>
                        <button>40%</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button>Most Booking</button>
                        <button>Lowest Price</button>
                        <button>Highest Price</button>
                        <button>Most Rating</button>
                        <button>Recommended</button>
                    </div>
                    <Searchresult></Searchresult>
                    
                </div>
            </div>
            <Promotion></Promotion>
            <Footer></Footer>
        </div>
    )
}
export default Searchpage;