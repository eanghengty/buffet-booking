@extends('layouts.welcome')
@section('content')
<div class="pagedetaildiv">
    <div class="pagedetaildiv1">
        <div class="titledetaildiv">
            <div class="titledetaildiv1">
            <div class="titledetaildiv2">
                <div class="titledetaildiv3">
                    <h2>Sakura Buffet, Location: 1</h2>
                </div>
                <div class="titledetaildiv4">
                    <p>type: buffet</p>
                    <p>Phnom penh</p>
                    <p>130 reservations</p>
                </div>
                <div class="titledetaildiv5">
                    <i class="fa fa-star titledetailicon" aria-hidden="true"></i>
                    <i class="fa fa-star titledetailicon" aria-hidden="true"></i>
                    <i class="fa fa-star titledetailicon" aria-hidden="true"></i>
                    <i class="fa fa-star titledetailicon" aria-hidden="true"></i>
                    <i class="fa fa-star titledetailicon" aria-hidden="true"></i>
                    <p>(4.0)</p>
                </div>
            </div>
            <div class="titledetaildiv6" >
                <div class="titledetaildiv7"><img src="{{asset('/images/sakurabuffet.png')}}" alt="logo" /></div>
                <div class="titledetaildiv8"><button>Favourite</button></div>
            </div>
        </div>
        </div>
    <div class="pagedetaildiv7">
    <div class="pagedetaildiv2">
    
        <div class="pagedetaildiv3">
            <img src="{{asset('/images/poster1.jpg')}}"></img>
            <p>view image</p>
        </div>
        <div class="pagedetaildiv4">
        <div class="pagedetaildiv5">
            <img src="{{asset('/images/poster1.jpg')}}"></img>
            <p>view image</p>
        </div>
        <div class="pagedetaildiv6">
            <img src="{{asset('/images/poster1.jpg')}}"></img>
            <p>view image</p>
        </div>
        </div>
        
    </div>
    </div>
    <div class="tabdetaildiv1">
        <div class="tabdetaildiv2">
        <div><a href="#">Menu</a></div>
        <div><a href="#">About</a></div>
        <div><a href="#">Review</a></div>
        </div>
        <div class="tabdetaildiv4"></div>
        <div class="tabdetaildiv3">
            <div class="menudetaildiv">
                <div class="menudetaildiv1">
                <div class="menudetaildiv2">
                    <div class="menudetaildiv3"><p>
                    Promotion cannot be applied with any other in-house promotions. 
                    Please refer to the special conditions below for more details.
                    </p></div>
                    <div class="menudetaildiv4">
                    <select name="" id="">
                        <option value="">30% off</option>
                        <option value="">20% off</option>
                    </select>
                    </div>
                </div>
                <div class="menudetaildiv5">
                    <div class="menudetaildiv6">
                        <p>Menu Item</p>
                        <p>Before</p>
                        <p>After</p>
                    </div>
                    <div class="menudetaildiv7">
                        <p>Set 1</p>
                        <p>10.00$</p>
                        <p>9.00$</p>
                    </div>
                    <div class="menudetaildiv7">
                        <p>Set 1</p>
                        <p>10.00$</p>
                        <p>9.00$</p>
                    </div>
                    <div class="menudetaildiv7">
                        <p>Set 1</p>
                        <p>10.00$</p>
                        <p>9.00$</p>
                    </div>
                </div>
                <div>
                    <p>* Menu and pricing subject to change without notice</p>
                    <p>** All price in USD</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="reservationdiv1">
        <div class="reservationdiv2">
            <p>Reservation</p>
        </div>
        <div class="reservationdiv3">
            <div class="reservationdiv4">
                <input type="date" />
            </div>
            <div class="reservationdiv5">
                <input type="number" placeholder="seat number"/>
            </div>
        </div>
        <div>
            <p>Discount</p>
        </div>
        <div class="reservationdiv6">
            <button>10%</button>
            <button>20%</button>
            <button>30%</button>
            <button>40%</button>
        </div>
        <div class="reservationdiv7">
            <button>Review Reservation</button>
        </div>
    </div>
    </div>
    </div>
@endsection