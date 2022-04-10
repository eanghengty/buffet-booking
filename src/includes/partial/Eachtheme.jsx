import theme from './../../images/theme1.jpg'
import './../../style/eachtheme.scss'
function Eachtheme(){
    return(
        <div className='eachtheme1'>
                <div className="eachtheme2">
                <img src={theme} alt="theme1" />
                </div>
                
                <div className="eachtheme3">
                <p>Blind dinner date</p>
                </div>
                <div className="eachtheme4">
                <p>10 restuarants</p>
                </div>
                
                
            </div>
    )
}
export default Eachtheme;