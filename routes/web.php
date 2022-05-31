<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/favourite',function(){
    return view('favourite');
});
Route::get('/profile',function(){
    return view('profile');
});
Route::get('/reservation',function(){
    return view('reservation');
});
Route::get('/detail',function(){
    return view('detail');
});
Route::get('/partner',function(){
    return view('partner');
});
Route::get('/search',function(){
    return view('search');
});
Route::get('/signin',function(){
    return view('signin');
});

Route::get('/signup',function(){
    return view('signup');
});

