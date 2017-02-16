<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class OrderController extends Controller
{
    public function gerOrderListOfMonth($month) {
        return 'Orders of month: '.$month;
    }

    public function gerOrderListOfPlayer($player) {
        return 'Orders of player: '.$player;
    }
}
