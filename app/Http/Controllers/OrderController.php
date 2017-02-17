<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Order;

class OrderController extends Controller
{

    public function gerOrdersByPaymentDate($paymentDate) {

        $orders = Order::where('payment_date', $paymentDate)->get();
        return response()->json(['data'=>$orders]);
    }

    public function gerOrdersByPlayerId($playerId) {
        $orders = Order::where('person_id', $playerId)->get();
        return response()->json(['data'=>$orders]);
    }
}
