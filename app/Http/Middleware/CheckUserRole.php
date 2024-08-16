<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the authenticated user's role is 3
        if (Auth::user()->role === 1 || Auth::user()->role === 2) {
            return $next($request);
        }

        // If the user is not authorized, redirect or return an error response
        return redirect()->with('error', 'You are not authorized to access role.');
    }
}
