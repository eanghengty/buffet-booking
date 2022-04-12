import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Promotion from "../includes/Promotion";
import Searchresult from "../includes/SearchResult";
import './../style/searchpage.scss'
const Searchpage = ()=>{
    return(
        <div>
            <Header></Header>
            <div className="searchpagediv1">
            <div className="searchpagediv2">
                <div className="searchpagediv3"><input type="text" placeholder="Search . . ." /></div>
                <div className="searchpagediv4"><p>Search</p></div>
            </div>
            <div className="searchpagediv5">
                
                <div className="searchpagediv6">
                    <div className="searchpagediv7">
                    <div className="searchpageline"><div className="searchpagediv8"></div></div>
                    <div className="searchpagediv9"><p>Filter</p></div>
                    </div>
                    <div className="searchpagediv10">
                        <div className="searchpagediv11"><p>Discount</p></div>
                        <form className="searchpageform1">
                        <button>10%</button>
                        <button>20%</button>
                        <button>30%</button>
                        <button>40%</button>
                        </form>
                    </div>
                
                </div>
                <div className="searchpagediv12">
                    <div className="searchpagediv13">
                        <form className="seachpageform2">
                        <button>Most Booking</button>
                        <button>Lowest Price</button>
                        <button>Highest Price</button>
                        <button>Most Rating</button>
                        <button>Recommended</button>
                        </form>
                    </div>
                    <div className='searchpagediv15'><p>Result: 3 Restuarants</p></div>
                    <div className="searchpagediv14">
                    
                    <Searchresult></Searchresult>
                    <Searchresult></Searchresult>
                    <Searchresult></Searchresult>
                    </div>
                    
                </div>
            </div>
            <div>
            </div>
            <Promotion></Promotion>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Searchpage;