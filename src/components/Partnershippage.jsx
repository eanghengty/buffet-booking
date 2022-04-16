import Header from "../includes/Header";
import Footer from "../includes/Footer";
import partner from './../images/partner.png'
import service from './../images/service.png'
import quality from './../images/quality.png'
import profit from './../images/profit.png'
import './../style/partnershippage.scss'
const Partnershippage = ()=>{
    return(
        <div>
        <Header></Header>
        <div className="partnershippagediv1">
        <div className="partnershippagediv2">
            <div className="partnershippagediv3">
                {/* <img src={partner} alt="" /> */}
            </div>
            <div className="partnershippagediv4">
                <div className="partnershippagediv5">
                    <div>
                        <p>Find out more about</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Restuarant Name" />
                    </div>
                    <div className="partnershippagediv6">
                        <select name="" id="">
                            <option value="">Phnom Penh</option>
                            <option value="">Siemreap</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="Contact number"/>
                    </div>
                    <div>
                        <button>Connect</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="partnershippagediv10"></div>
        
        <div className="partnershippagediv7">
            <div className="partnershippagediv8">
                <div className="partnershippagediv9">
                    <img src={service} alt="" />
                </div>
                <div>
                    <h2>More customer</h2>
                </div>
                <div>
                    <p>we will provide up to million 
                        customer from our user base.</p>
                </div>
            </div>
            <div className="partnershippagediv8">
                <div className="partnershippagediv9">
                    <img src={quality} alt="" />
                </div>
                <div>
                    <h2>No risk</h2>
                </div>
                <div>
                    <p>Only pay when there was a reservation.</p>
                </div>
            </div>
            <div className="partnershippagediv8">
                <div className="partnershippagediv9">
                    <img src={profit} alt="" />
                </div>
                <div>
                    <h2>More profit</h2>
                </div>
                <div>
                    <p>we will fill the whole seat in your restuarant.</p>
                </div>
            </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
    )
}
export default Partnershippage;