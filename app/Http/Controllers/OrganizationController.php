<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    public function index()
    {
        $organizations = Organization::with('owner')->latest()->paginate(10);

        return Inertia::render('organizations/Index', [
            'organizations' => $organizations,
        ]);
    }

    public function create()
    {
        $users = User::all();

        return Inertia::render('organizations/Form', [
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'owner_id' => ['required', 'exists:users,id'],
        ]);

        Organization::create([
            'name' => $validated['name'],
            'owner_id' => $validated['owner_id'],
            'slug' => Str::slug($validated['name']),
            'uuid' => (string) Str::uuid(),
        ]);

        return redirect()->route('organization.index')->with('success', 'Organização criada com sucesso.');
    }

    public function edit(Organization $organization)
    {
        $users = User::all();

        return Inertia::render('organizations/Form', [
            'organization' => $organization,
            'users' => $users,
        ]);
    }

    public function update(Request $request, Organization $organization)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'owner_id' => ['required', 'exists:users,id'],
        ]);

        $organization->update([
            'name' => $validated['name'],
            'owner_id' => $validated['owner_id'],
            'slug' => Str::slug($validated['name']),
        ]);

        return redirect()->route('organization.index')->with('success', 'Organização atualizada com sucesso.');
    }

    public function destroy(Organization $organization)
    {
        $organization->delete();

        return redirect()->route('organization.index')->with('success', 'Organização removida com sucesso.');
    }
}
