<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with(['roles', 'organization'])->latest()->paginate(10);

        return Inertia::render('users/Index', [
            'users' => $users,
        ]);
    }

    public function create()
    {
        $roles = Role::all();
        $organizations = \App\Models\Organization::all();

        return Inertia::render('users/Form', [
            'roles' => $roles,
            'organizations' => $organizations,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:6'],
            'role' => ['required', Rule::exists('roles', 'name')],
            'organization_id' => ['nullable', 'exists:organizations,id'],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'organization_id' => $validated['organization_id'],
        ]);

        $user->assignRole($validated['role']);
        if ($validated['organization_id']) {
            $user->organizations()->attach($validated['organization_id']);
        }

        return redirect()->route('users.index')->with('success', 'Usuário criado com sucesso.');
    }

    public function edit(User $user)
    {
        $roles = Role::all();
        $organizations = \App\Models\Organization::all();

        return Inertia::render('users/Form', [
            'user' => $user->only(['id', 'name', 'email', 'organization_id']),
            'roles' => $roles,
            'organizations' => $organizations,
            'currentRole' => $user->roles->pluck('name')->first(),
        ]);
    }

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id)],
            'password' => ['nullable', 'string', 'min:6'],
            'role' => ['required', Rule::exists('roles', 'name')],
            'organization_id' => ['nullable', 'exists:organizations,id'],
        ]);

        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password']
                ? Hash::make($validated['password'])
                : $user->password,
            'organization_id' => $validated['organization_id'],
        ]);

        $user->syncRoles([$validated['role']]);

        // Sync organizations (pivot) - for now just the active one
        if ($validated['organization_id']) {
            $user->organizations()->sync([$validated['organization_id']]);
        }

        return redirect()->route('users.index')->with('success', 'Usuário atualizado com sucesso.');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index')->with('success', 'Usuário removido com sucesso.');
    }

    public function resetPassword(User $user)
    {
        $user->update([
            'password' => Hash::make('ResetSenhaPadrao'),
        ]);

        return redirect()->back()->with('success', 'Senha resetada para o padrão com sucesso.');
    }
}
