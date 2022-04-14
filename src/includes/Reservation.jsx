import '../style/reservation.scss';
const Reservation = ()=>{
    return(
        <div className="reservationdiv1">
            <div className="reservationdiv2">
                <p>Reservation</p>
            </div>
            <div className="reservationdiv3">
                <div className="reservationdiv4">
                    <input type="date" />
                </div>
                <div className="reservationdiv5">
                    <input type="number" />
                </div>
            </div>
            <div>
                <p>Discount</p>
            </div>
            <div className="reservationdiv6">
                <button>10%</button>
                <button>20%</button>
                <button>30%</button>
                <button>40%</button>
            </div>
            <div className="reservationdiv7">
                <button>Review Reservation</button>
            </div>
        </div>
    )
}
export default Reservation;