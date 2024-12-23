<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::apiResource('post',PostController::class)->middleware('auth:sanctum');


Route::Post('/register',[AuthController::class,'register']);
Route::Post('/login',[AuthController::class,'login']);
Route::Post('/logOut',[AuthController::class,'logOut'])->middleware('auth:sanctum');


// Route::get('/',function(){
//     return 'API';

// });
