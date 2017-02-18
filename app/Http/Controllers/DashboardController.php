<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Illuminate\Support\Facades\View;

class DashboardController extends Controller
{
    public function loadDashboard() {
        return View::make('dashboard');
    }
}
