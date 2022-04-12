import {FaCameraRetro, FaUser, FaCalendarCheck, FaRegHeart} from 'react-icons/fa'
import './../style/profile.scss'
const Profile =()=>{
    return(
        <div className='profilediv0'>
            <div className="profilediv1">
            <div className="profilediv2">
                
            </div>
            
            <div className="profilediv3">
            <div className="profilediv4">
                
                <FaCameraRetro className="profileicon"/>
                </div>
                
            </div>
            <div className="profilediv6"></div>
            <div className='profilediv5'><p>Hunger Man</p></div>
            
            <div className='profilediv7'>
                
                <div className="profilediv8">
                <FaUser  className="profileicon"/>
                <div className='profilediv9'><p>My Profile</p></div>
                </div>
                <div className="profilediv10">
                    <FaCalendarCheck  className="profileicon"></FaCalendarCheck>
                    <div className="profilediv11"><p>My Reservation</p></div>
                </div>
                <div className="profilediv12">
                    <FaRegHeart  className="profileicon"/>
                    <div className="profilediv13"><p>My Favourite</p></div>
                </div>
            </div>
            </div>

        </div>
    )
}
export default Profile;