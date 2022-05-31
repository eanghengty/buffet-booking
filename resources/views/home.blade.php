@extends('layouts.welcome')
@section('content')
<div class="searchbar-div-1">

    <div class="searchbar-div-2">

    <input type="text" placeholder="Find Restaurant name, location" />
    <p>Search</p>

    </div>

    <div class="searchbar-div-3">

        <div class="searchbar-div-4">

            <div class="searchbar-div-5">

           <div class="divaddon">
           <p class="searchbar-p-1">Book it now</p>
           </div>

            </div>

            <div class="searchbar-div-6">

            <p class="searchbar-p-2">The only reservation service you need.</p>

            </div>

        </div>
        
        <div class="searchbar-div-7">

            <img src="{{asset('/images/discount.png')}}" alt="sales" />

        </div>

    </div>

</div>

</div>

<div>
    <div class="branddiv1">

        <div class="branddiv2">
        <div class="line"></div>
        <h2>Brands</h2>

        <div class="branddiv3">
            <a href="#">
                <p>View all brands 42</p>
            </a>
        </div>

        </div>

        

    </div>
    <div class='branddiv4'>
        @for($i=0;$i<8;$i++)
        <div class="eachbranddiv1">
            <div class="eachbranddiv2"><img src="{{asset('/images/dori.png')}}" alt="Brand1" /></div>
            <div class="eachbranddiv3"><p>Dori Dori Buffet</p></div>
            </div>
        @endfor
        </div>
</div>

<div>
    <div class="locationdiv1">

        <div class="locationdiv2">

        <div class="locationdiv3">
            <div class="line"></div>
        <h2>Locations</h2>
        </div>
        
        <div class="locationdiv4">
        <a href="#">
        <p>View 40 restuarants</p>
        </a>
        </div>

        </div>

        <div class="locationdiv5">

            @for($i=0 ;$i<4; $i++)
            <div class="eachlocationdiv1">
                <div class="eachlocationdiv2">
                    <img src="{{asset('/images/pp.png')}}" alt="" />
                </div>

                <div class="eachlocationdiv3">
                <p>Phnom Penh</p>
                </div>

                <div class="eachlocationdiv4">
                <p>40 restuarants</p>
                </div>
        </div>
            @endfor

        </div>

        
        
    </div>

    <div class="themediv1">
        <div class="themediv2">
        <div class="themediv3">
            <div class="line"></div>
        <h2>Themes</h2>
        </div>
        <div class="themediv4">
        <a href="#">
        <p>40 resturants</p>
        </a>
        </div>
        </div>
        <div class="themediv5">
            @for($i=0 ; $i<5 ; $i++)
            <div class='eachtheme1'>
                <div class="eachtheme2">
                <img src="{{asset('/images/theme1.jpg')}}" alt="theme1" />
                </div>
                
                <div class="eachtheme3">
                <p>Blind dinner date</p>
                </div>
                <div class="eachtheme4">
                <p>10 restuarants</p>
                </div>
                
                
            </div>
            @endfor
        </div>
    </div>
    <div class="promotiondiv1">
        <div class="promotiondiv2">
        <div class="line"></div>
        <h2>Promotions</h2>
        </div>
        <div class="promotiondiv3">
            <div class="promotiondiv4">
                
                    <div class="promotiondiv5">
                        <img src="{{asset('/images/promotion1.png')}}"></img>
                    </div>
                    {{-- <div class="promotiondiv6">
                        <img src="{{asset('/images/promotion1.png')}}"></img>
                    </div> --}}
               
            </div>
        </div>
    </div>
    <div class="partnershipdiv1">
        <div class="partnershipdiv2">
        <h2>Partnerships</h2>
        <div class="line5"></div>
        </div>
        <div class="partnershipdiv3">
        <div class="partnershipdiv4">
            <img src="{{asset('/images/partnersection.png')}}" alt="image1" />
        </div>
        <div class="partnershipdiv5">
            <div class="partnershipdiv6">
        <p>Do you want to attract customer to your restuarant?
        Become our partner now, with BookItNow is the best platform that will
            fill the empty seat in your restuarant.
        </p>
        </div>
        <div class="partnershipdiv7">
        <a href="#"><p>Become our partner</p></a>
        </div>
        </div>
        </div>
    </div>
@endsection