<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PostPolicy
{

    public function modify(User $user, Post $post): Response
    {
        return $user->id=== $post->user_id
        ? response::allow()
        :response::deny('you do not own this post');
    }
}
