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
    return redirect()->route('dashboardRoute');
});

Route::get('/dashboard', ["as"=>"dashboardRoute", function () {
    return view('welcome');
}]);

Route::group(['prefix'=>'orders'], function() {
    Route::get('/{paymentDate}',
        'OrderController@gerOrdersByPaymentDate')->where(['paymentDate'=>'[0-9]{4}-[0-9]{2}-[0-9]{2}']);
    Route::get('/{playerId}',
        'OrderController@gerOrdersByPlayerId')->where(['playerId'=>'[0-9]+']);
});