<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $superAdmin = Role::firstOrCreate(['name' => 'super-admin']);
        $manager = Role::firstOrCreate(['name' => 'manager']);
        $userRole = Role::firstOrCreate(['name' => 'user']);

        $permissions = [
            'Dashboard' => [
                'dashboard-view',
            ],
            'Access' => [
                'access-view',
                'permission-view',
                'users-view', // Manager can also have this but filtered by policy
                'roles-view',
            ],
            'Organization' => [
                'organization-view',
                'team-users-view',
            ],
            'Settings' => [
                'settings-view',
                'menu-view',
                'app-settings-view',
                'backup-view',
            ],
            'Utilities' => [
                'utilities-view',
                'log-view',
                'filemanager-view',
            ],
        ];

        foreach ($permissions as $group => $perms) {
            foreach ($perms as $name) {
                $permission = Permission::firstOrCreate([
                    'name' => $name,
                    'group' => $group,
                ]);

                // super-admin gets everything
                if (!$superAdmin->hasPermissionTo($permission)) {
                    $superAdmin->givePermissionTo($permission);
                }

                // manager permissions
                if (in_array($name, ['dashboard-view', 'users-view', 'organization-view', 'team-users-view'])) {
                    if (!$manager->hasPermissionTo($permission)) {
                        $manager->givePermissionTo($permission);
                    }
                }

                // user permissions
                if (in_array($name, ['dashboard-view'])) {
                    if (!$userRole->hasPermissionTo($permission)) {
                        $userRole->givePermissionTo($permission);
                    }
                }
            }
        }
    }
}
