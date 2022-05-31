@extends('layouts.welcome')
@section('content')
<div class="partnershippagediv1">
    <div class="partnershippagediv2">
        <div class="partnershippagediv3">
            
        </div>
        <div class="partnershippagediv4">
            <div class="partnershippagediv5">
                <div>
                    <p>Find out more about</p>
                </div>
                <div>
                    <input type="text" placeholder="Restuarant Name" />
                </div>
                <div class="partnershippagediv6">
                    <select name="" id="">
                        <option value="">Phnom Penh</option>
                        <option value="">Siemreap</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Contact number"/>
                </div>
                <div>
                    <button>Connect</button>
                </div>
            </div>
        </div>
    </div>
    <div class="partnershippagediv10"></div>
    
    <div class="partnershippagediv7">
        <div class="partnershippagediv8">
            <div class="partnershippagediv9">
                <img src="{{asset('/images/service.png')}}" alt="" />
            </div>
            <div>
                <h2>More customer</h2>
            </div>
            <div>
                <p>we will provide up to million 
                    customer from our user base.</p>
            </div>
        </div>
        <div class="partnershippagediv8">
            <div class="partnershippagediv9">
                <img src="{{asset('/images/quality.png')}}" alt="" />
            </div>
            <div>
                <h2>No risk</h2>
            </div>
            <div>
                <p>Only pay when there was a reservation.</p>
            </div>
        </div>
        <div class="partnershippagediv8">
            <div class="partnershippagediv9">
                <img src="{{asset('/images/profit.png')}}" alt="" />
            </div>
            <div>
                <h2>More profit</h2>
            </div>
            <div>
                <p>we will fill the whole seat in your restuarant.</p>
            </div>
        </div>
    </div>
    </div>
@endsection