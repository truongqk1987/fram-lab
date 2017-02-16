<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix'=>'orders'], function() {
    Route::get('/months/{month}',
        'OrderController@gerOrderListOfMonth')->where(['month'=>'[0-9]{2}']);
    Route::get('/players/{player}',
        'OrderController@gerOrderListOfPlayer')->where(['player'=>'[a-zA-Z]+']);
});