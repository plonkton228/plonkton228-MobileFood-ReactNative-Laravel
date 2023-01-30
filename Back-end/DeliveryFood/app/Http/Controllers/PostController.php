<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {

         $posts = Post::where('category_id',$request->id)->get();
         return response()->json($posts);
    }
}
