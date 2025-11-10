<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Menu;

class CheckMenuPermission
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (!$user) {
            return redirect()->route('login');
        }

        $currentRoute = $request->route()->uri();

        $menu = Menu::where('route', '/' . ltrim($currentRoute, '/'))->first();

        if ($menu && $menu->permission_name) {
            if (!$user->can($menu->permission_name)) {
                abort(403, 'Restricted Access');
            }
        }

        return $next($request);
    }
}
