<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $regi = $request->validate([
            'name' => 'required|max:222',
            'email' => 'required|email|unique:users',
            'password' => 'required|max:12|confirmed'

        ]);

        $user = user::create($regi);

        $token = $user->createToken($request->name);
        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required|max:12'

        ]);
        $user=user::where('email',$request->email)->first();

        if(!$user||!Hash::check($request->password,$user->password)){
            // return[
            //     'message'=>'the provided credentials are incorrect!',

            // ];

            return[
                'errors'=>[
                    'email'=>['the provided credentials are incorrect! ']
                ]
            ];
        };
        $token = $user->createToken($user->name);
        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];

    }

    public function logOut(Request $request)
    {
        $request->user()->tokens()->delete();
        return[
            'message'=>'you are log out!'
        ];
    }
}
