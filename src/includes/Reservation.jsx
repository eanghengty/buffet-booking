const Reservation = ()=>{
    return(
        <div>
            <div>
                <p>Reservation</p>
            </div>
            <div>
                <div>
                    <input type="date" />
                </div>
                <div>
                    <input type="number" />
                </div>
            </div>
            <div>
                <p>Discount</p>
            </div>
            <div>
                <button>10%</button>
                <button>20%</button>
                <button>30%</button>
                <button>40%</button>
            </div>
            <div>
                <button>Review Reservation</button>
            </div>
        </div>
    )
}
export default Reservation;