<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sale;
class saleController extends Controller
{
     public function index(Request $request)
    {
         $posts = Sale::where('user_id', $request->id)->get();
         return response()->json($posts);
    }
}
