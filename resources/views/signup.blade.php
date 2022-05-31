@extends('layouts.welcome')
@section('content')
<div class="signup6">
    <div class="signup8">
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" alt="img_side"/>
    </div>
    <div class="signup10">
        <form action="" class="signup9">
            <h2 class="signup1">Sign up</h2>
            <button type="submit" class="signup2">close</button>
            <label htmlFor="" class="signup3">Information</label>
            <input type="email" placeholder="Email" class="signup4"/>
            <input type="text" placeholder="Username" class="signup4"/>
            <input type="password" placeholder="Password" class="signup4"/>
            <input type="password" placeholder="Confirm Password" class="signup4"/>

            
            <button type="submit" class="signup5">SIGN UP</button>
            <p>Already become our customer?</p>
           <a href="">SIGN IN</a>
        </form>
    </div>
</div>
@endsection