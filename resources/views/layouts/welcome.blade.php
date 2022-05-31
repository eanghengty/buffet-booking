<!DOCTYPE html>
<html>
    <head>
        <link href="{{asset('/css/app.css')}}" rel="stylesheet">
        <link href="{{asset('fa/css/font-awesome.min.css')}}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        
        <title>welcome</title>
    </head>
    <body>
        <div class="header-div-1">

            <div class="header-div-2">
            <img src="{{asset('/images/logo.png')}}" alt="logo" />
        </div>

        <div class="header-div-3">

        <div class="header-div-4">
            <div>
            <p>Cambodia</p>
            <img src="{{asset('/images/cambodia.png')}}"alt="flag" />
            </div>
            

            
        </div>

        <div class="header-div-5">

            <div class="divp">
            <p>Hunger Man</p>
            </div>

            <div class="divdiv">
            <div class="header-div-6"></div>
            </div>
            
            <div class="divimg">
            <img src="{{asset('/images/sampleprofile2.png')}}" alt="profile" />
            </div>

        </div>

        {{-- <div class="header-div-7">
            
            

        </div> --}}
        <div class="dropdown">
            <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Logout
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

        </div>

        

        </div>

        <div>@yield('content')</div>
        <div class="footerdiv1">
            
          <div class="footerdiv2" >
          <h2>bookitnow</h2>
          <h2>About us</h2>
      </div>
      <div class="footerdiv3">
      <div class="footerdiv4">
      <div class="footerdiv5">
        <i class="fa fa-github githubicon" aria-hidden="true"></i>
      </div>
      <div class="footerdiv5">
          
          <i class="fa fa-telegram telegramicon" aria-hidden="true"></i>
      </div>
      </div>
      <div class="footerdiv6">
          <img src="{{asset('/images/logo.png')}}" alt="logo" />
      </div>
      <div class="footerdiv7">
          <p>Copyright 2022, all rights reserved.</p>
      </div>
  
      </div>
      
      <div class="footerdiv8">
          <div class="footerdiv9">
          <p>Support</p>
          </div>
          <div class="footerdiv10">
          <p>Term of use</p>
          </div>
          <div class="footerdiv11">
          <p>Policy</p>
          </div>
      </div>
      </div>



        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
    </body>

    </html>