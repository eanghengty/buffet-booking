import Eachtheme from "./partial/Eachtheme";
import './../style/theme.scss'
const Theme = ()=>{
    return(
        <div className="themediv1">
            <div className="themediv2">
            <div className="themediv3">
                <div className="line"></div>
            <h2>Themes</h2>
            </div>
            <div className="themediv4">
            <a href="#">
            <p>40 resturants</p>
            </a>
            </div>
            </div>
            <div className="themediv5">
                <Eachtheme></Eachtheme>
                <Eachtheme></Eachtheme>
                <Eachtheme></Eachtheme>
                <Eachtheme></Eachtheme>
                <Eachtheme></Eachtheme>
            </div>
        </div>
    )
}
export default Theme;