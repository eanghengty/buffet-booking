import './../style/brand.scss'
import Eachbrand from './partial/Eachbrand';
const Brand=()=>{
    return(
        <div>
            <div className="branddiv1">

                <div className="branddiv2">
                <div className="line"></div>
                <h2>Brands</h2>

                <div className="branddiv3">
                    <a href="#">
                        <p>View all brands 42</p>
                    </a>
                </div>

                </div>

                

            </div>
            <div className='branddiv4'>
                <Eachbrand></Eachbrand>
                <Eachbrand></Eachbrand>
                <Eachbrand></Eachbrand>
                <Eachbrand></Eachbrand>
                <Eachbrand></Eachbrand>
                <Eachbrand></Eachbrand>
                <Eachbrand></Eachbrand>
                <Eachbrand></Eachbrand>
                </div>
        </div>
    )
}
export default Brand;