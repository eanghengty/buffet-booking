import ReactElasticCarousel from "react-elastic-carousel"
import promotion from './../images/promotion1.png'
import './../style/promotion.scss'
const Promotion =()=>{
    return(
        <div className="promotiondiv1">
            <div className="promotiondiv2">
            <div className="line"></div>
            <h2>Promotions</h2>
            </div>
            <div className="promotiondiv3">
                <div className="promotiondiv4">
                    <ReactElasticCarousel>
                        <div className="promotiondiv5">
                            <img src={promotion}></img>
                        </div>
                        <div className="promotiondiv6">
                            <img src={promotion}></img>
                        </div>
                    </ReactElasticCarousel>
                </div>
            </div>
        </div>
    )
}
export default Promotion