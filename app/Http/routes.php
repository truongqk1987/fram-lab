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

Route::get('/dashboard', ["as"=>"dashboardRoute", 'uses' => 'DashboardController@loadDashboard']);

Route::group(['prefix'=>'orders'], function() {
    Route::get('/totalOrdersMonthly', 'OrderController@getTotalOrdersMonthly');
    Route::get('/totalOrdersByPerson', 'OrderController@getTotalOrdersByPerson');
    Route::get('/totalOrdersByCurrency', 'OrderController@getTotalOrdersByCurrency');
});