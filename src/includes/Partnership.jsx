import './../style/partnership.scss'
import partner from './../images/partnersection.png'
const Partnership = ()=>{
    return(
        <div className="partnershipdiv1">
            <div className="partnershipdiv2">
            <h2>Partnerships</h2>
            <div className="line5"></div>
            </div>
            <div className="partnershipdiv3">
            <div className="partnershipdiv4">
                <img src={partner} alt="image1" />
            </div>
            <div className="partnershipdiv5">
                <div className="partnershipdiv6">
            <p>Do you want to attract customer to your restuarant?
            Become our partner now, with BookItNow is the best platform that will
                fill the empty seat in your restuarant.
            </p>
            </div>
            <div className="partnershipdiv7">
            <a href="#"><p>Become our partner</p></a>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Partnership;