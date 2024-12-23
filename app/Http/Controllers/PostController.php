<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;



class PostController extends Controller implements HasMiddleware
{
    public static function middleware(){
       return[
        new Middleware('auth:sanctum',except:['index','show'])
       ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return post::with('user')->latest()->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {






        $fields=$request->validate(
            [
            'title' => 'required|max:222',
            'body' => 'required',

        ]
    );


       $post= $request->user()->post()->create($fields);


        return ['post'=>$post,'user'=>$post->user];
        // return $post;

    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return [ 'post'=>$post, 'user'=>$post->user];
    }

    /**
     * Show the form for editing the specified resource.
     */


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
       Gate::authorize('modify',$post);

        $request->validate([
            'title' => 'required|max:222',
            'body' => 'required'
        ]);
       $post-> update([
            'title' => $request->title,
            'body' => $request->body,
        ]);

        return $post;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        Gate::authorize('modify',$post);
    $post->delete();
    return ['message'=>'post deleted successfully'];
    }
}
