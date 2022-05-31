@extends('layouts.welcome')
@section('content')
<div class="searchpagediv1">
    <div class="searchpagediv2">
        <div class="searchpagediv3"><input type="text" placeholder="Search . . ." /></div>
        <div class="searchpagediv4"><p>Search</p></div>
    </div>
    
    <div class="searchpagediv5">
        
        <div class="searchpagediv6">
            <div class="searchpagediv7">
            <div class="searchpageline"><div class="searchpagediv8"></div></div>
            <div class="searchpagediv9"><p>Filter</p></div>
            </div>
            <div class="searchpagediv10">
                <div class="searchpagediv11"><p>Discount</p></div>
                <form class="searchpageform1">
                <button>10%</button>
                <button>20%</button>
                <button>30%</button>
                <button>40%</button>
                </form>
            </div>
        
        </div>
        <div class="searchpagediv12">
            <div class="searchpagediv13">
                <form class="seachpageform2">
                <button>Most Booking</button>
                <button>Lowest Price</button>
                <button>Highest Price</button>
                <button>Most Rating</button>
                <button>Recommended</button>
                </form>
            </div>
            <div class='searchpagediv15'><p>Result: 3 Restuarants</p></div>
            <div class="searchpagediv14">
            
            @for($i=0;$i<3;$i++)
            <div class='searchresultdiv0'>
            
                <div class="searchresultdiv1">
                            
                            <div class="searchresultdiv3">
                                <div class='searchresultdiv4'>
                                <img src="{{asset('/images/buffet.png')}}" alt="restuarant" />
                                </div>
                                <div class='searchresultdiv5'>
                                <div><h2>Sakura Buffet, Location:1</h2></div>
                                <div class="searchresultdiv6">
                                <div><p>type:buffet</p></div>
                                <div><p>Phnom Penh</p></div>
                                </div>
                                <div class="searchresultdiv7">
                                <div class='searchresultdiv8'>
                                    <i class="fa fa-star fastar" aria-hidden="true"></i>
                                    <i class="fa fa-star fastar" aria-hidden="true"></i>
                                    <i class="fa fa-star fastar" aria-hidden="true"></i>
                                    <i class="fa fa-star fastar" aria-hidden="true"></i>
                                    <i class="fa fa-star fastar" aria-hidden="true"></i>
                                    
                                </div>
                                <div class="searchresultdiv9"><p>(4.0)</p></div>
                                </div>
                                <div class='searchresultdiv10'><p>130 reservations</p></div>
                                </div>
                                <div class='searchresultdiv11'>
                                    <div class='searchresultdiv12'>
                                        <p>promotion</p>
                                    </div>
                                    <div class='searchresultdiv13'>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            @endfor
            </div>
            
        </div>
    </div>
    <div>
    </div>
@endsection