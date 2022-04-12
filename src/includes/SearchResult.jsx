import './../style/searchresult.scss'
import image  from './../images/buffet.png'
import {FaStar} from 'react-icons/fa'
const Searchresult = () =>{
    return(
        <div className='searchresultdiv0'>
            
            <div className="searchresultdiv1">
                        
                        <div className="searchresultdiv3">
                            <div className='searchresultdiv4'>
                            <img src={image} alt="restuarant" />
                            </div>
                            <div className='searchresultdiv5'>
                            <div><h2>Sakura Buffet, Location:1</h2></div>
                            <div className="searchresultdiv6">
                            <div><p>type:buffet</p></div>
                            <div><p>Phnom Penh</p></div>
                            </div>
                            <div className="searchresultdiv7">
                            <div className='searchresultdiv8'>
                                <FaStar className="fastar"></FaStar>
                                <FaStar className="fastar"></FaStar>
                                <FaStar className="fastar"></FaStar>
                                <FaStar className="fastar"></FaStar>
                                <FaStar className="fastar"></FaStar>
                                
                            </div>
                            <div className="searchresultdiv9"><p>(4.0)</p></div>
                            </div>
                            <div className='searchresultdiv10'><p>130 reservations</p></div>
                            </div>
                            <div className='searchresultdiv11'>
                                <div className='searchresultdiv12'>
                                    <p>promotion</p>
                                </div>
                                <div className='searchresultdiv13'>
                                    <p>Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default Searchresult;