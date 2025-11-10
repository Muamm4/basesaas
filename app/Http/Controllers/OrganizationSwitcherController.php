<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrganizationSwitcherController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'organization_id' => 'required|exists:organizations,id',
        ]);
        /** @var \App\Models\User $user */
        $user = Auth::user();

        // Check if user belongs to this organization
        if (!$user->organizations()->where('organization_id', $validated['organization_id'])->exists()) {
            return back()->with('error', 'You do not belong to this organization.');
        }

        $user->update([
            'organization_id' => $validated['organization_id'],
        ]);

        return back()->with('success', 'Organization switched successfully.');
    }
}
