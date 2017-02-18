<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Order;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public $tableName = 'orders';

    public function getTotalOrdersMonthly() {
        $rawSQLStatement = 'MONTHNAME(payment_date) as month, COUNT(*) as totalOrders';
        $groupByName = 'month';
        $totalOrdersMonthlyResult = DB::table($this->tableName)
                        ->select(DB::raw($rawSQLStatement))
                        ->groupBy($groupByName)
                        ->get();
        return response()->json(['data'=>$totalOrdersMonthlyResult]);

    }

    public function getTotalOrdersByPerson() {
        $rawSQLStatement = 'person_id as personId, COUNT(*) as totalOrders';
        $groupByName = 'person_id';
        $totalOrdersByPerson = DB::table($this->tableName)
            ->select(DB::raw($rawSQLStatement))
            ->groupBy($groupByName)
            ->get();
        return response()->json(['data'=>$totalOrdersByPerson]);

    }

    public function getTotalOrdersByCurrency() {
        $rawSQLStatement = 'playing_currency as playingCurrency, COUNT(*) as totalOrders';
        $groupByName = 'playingCurrency';
        $totalOrdersByCurrency = DB::table($this->tableName)
            ->select(DB::raw($rawSQLStatement))
            ->groupBy($groupByName)
            ->get();
        return response()->json(['data'=>$totalOrdersByCurrency]);

    }
}
