@extends('layouts.welcome')
@section('content')
<div class="signin1">
    
    <div class="signin11">
        <div class="signin2">
            <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=pexels-lisa-fotios-1279330.jpg&fm=jpg" alt="img_side" style="width:300;height:300;" />
        </div>
        <div class="signin3">
            <form action="" class="signin4">
                <h2 class="signin4">Sign in</h2>
                <button class="signin5">close</button>
                <input class="signin6" type="email" placeholder="email"/>
                <input class="signin7" type="password" placeholder="password" />
                <button class="signin8" type="submit">SIGN IN</button>
                <p class="signin9">If you don't have account Please</p>
                <a href="" class="signin10">SIGN UP</a>
            </form>
            
        </div>
    </div>

</div>
@endsection