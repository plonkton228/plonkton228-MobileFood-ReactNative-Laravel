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
      public function check(Request $request)
    {
      $check = Sale::where('post_id', $request->post_id)->where('user_id', $request->user_id)->exists();

      return $check;
    }

    public function addSale(Request $request)
    {
     Sale::create([
          'user_id'=> request('user_id'),
          'post_id'=> request('post_id'),
          'counter'=> 1
     ]);

    }

    public function update(Request $request)
    {
     
          $post = Sale::where("post_id", $request->post_id)->where("user_id", $request->user_id)->pluck('counter');
          Sale::where("post_id", $request->post_id)->where("user_id", $request->user_id)->update(['counter'=>  $post[0]+1]);
    }

      public function RootFunc (Request $request)
    {
      
      if($this->check($request))
      {
           $this->update($request);
      }
      else {
           $this->addSale($request);
      }

    }


}
