@extends('layouts.welcome')
@section('content')
<div>
<div class="myprofilediv1">
    <div class="myprofilediv2">
        <div class="myprofilediv3">
            <div class="myprofilediv4">
                <div class="myprofileline"></div>
                <div class="myprofilediv5"><p>Name</p></div>
            </div>
            <div class="myprofilediv6">
           <div class="myprofilediv7"> <p>First Name</p></div>
           <div class="myprofilediv8"> <input type="text" /></div>
            </div>
            <div class="myprofilediv9">
            <div class="myprofilediv10"><p>Last Name</p></div>
            <div class="myprofilediv11"><input type="text" /></div>
            </div>
            <div class="myprofilediv12">
            <button>Save</button>
            </div>
        </div>
        <div class="myprofilediv13">
           <div class="myprofilediv14">
               <div class="myprofileline"></div>
               <div class="myprofilediv16"><p>Gender</p></div>
           </div>
           <div class="myprofilediv17">
           <div class="myprofilediv18"><p>Type</p></div>
           <div class="myprofilediv19"><select name="format" id="">
               <option value="">Male</option>
               <option value="">Female</option>
               <option value="">Other</option>
           </select></div>
           </div>
           <div class="myprofilediv20"><button>Save</button></div>
        </div>
        <div class="myprofilediv21">
            <div class="myprofilediv22">
                <div class="myprofileline"></div>
                <div class="myprofilediv24"><p>Email</p></div>
            </div>
            
            <div class="myprofilediv25">
                <div class="myprofilediv26"><p>Primary</p></div>
                <div class="myprofilediv27"><input type="text" placeholder="Email" /></div>
            </div>
            <div class="myprofilediv28"><button>Save</button></div>
        </div>
        <div class="myprofilediv29">
            <div class="myprofilediv30">
                <div class="myprofileline"></div>
                <div class="myprofilediv32"><p>Mobile Phone</p></div>
            </div>
            
            <div class="myprofilediv33"><small>Add mobile phone to make reservation.</small></div>
            
            <div class="myprofilediv34">
            <div class="myprofilediv35">
            <GiCambodia></GiCambodia>
            <div class="myprofilediv36"><p>+855</p></div>
            
            </div>
            <div class="myprofilediv37"><input type="text" /></div>
            </div>
            
            <div class="myprofilediv38"><button>Save</button></div>
        </div>
        <div class="myprofilediv39">
            <div class="myprofilediv40">
                <div class="myprofileline"></div>
                <div class="myprofilediv41"><p>Password</p></div>
            </div>
            
            <div class="myprofilediv42">
            <div class="myprofilediv43"><p>Password</p></div>
            <div class="myprofilediv44"><input type="password" /></div>
            </div>
            <div class="myprofilediv45">
            <div class="myprofilediv46"><p>Confirm Password</p></div>
            <div class="myprofilediv47"><input type="Password" /></div>
            </div>
            <div class="myprofilediv48"><button>Save</button></div>
        </div>
    </div>
    <div class="myprofilediv49">
        <div class='profilediv0'>
            <div class="profilediv1">
            <div class="profilediv2">
                
            </div>
            
            <div class="profilediv3">
            <div class="profilediv4">
                
                <i class="fa fa-camera profileicon" aria-hidden="true"></i>
                </div>
                
            </div>
            <div class="profilediv6"></div>
            <div class='profilediv5'><p>Hunger Man</p></div>
            
            <div class='profilediv7'>
                
                <div class="profilediv8">
                
                <i class="fa fa-user profileicon" aria-hidden="true"></i>
                <div class='profilediv9'><p>My Profile</p></div>
                </div>
                <div class="profilediv10">
                    
                    <i class="fa fa-calendar profileicon" aria-hidden="true"></i>
                    <div class="profilediv11"><p>My Reservation</p></div>
                </div>
                <div class="profilediv12">
                    <i class="fa fa-heart profileicon" aria-hidden="true"></i>
                    <div class="profilediv13"><p>My Favourite</p></div>
                </div>
            </div>
            </div>

        </div>
    </div>

</div>
</div>
@endsection