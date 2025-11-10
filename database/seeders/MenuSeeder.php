<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Menu;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        // MENU: Dashboard
        Menu::create([
            'title' => 'Dashboard',
            'icon' => 'Home',
            'route' => '/dashboard',
            'order' => 1,
            'permission_name' => 'dashboard-view',
        ]);

        // GROUP: Organization (Super-Admin + Manager)
        $org = Menu::create([
            'title' => 'Organization',
            'icon' => 'Building',
            'route' => '#',
            'order' => 2,
            'permission_name' => 'organization-view',
        ]);

        Menu::create([
            'title' => 'Users',
            'icon' => 'Users',
            'route' => '/users',
            'order' => 1,
            'permission_name' => 'users-view',
            'parent_id' => $org->id,
        ]);

        Menu::create([
            'title' => 'Team Settings',
            'icon' => 'Settings2',
            'route' => '/organization',
            'order' => 2,
            'permission_name' => 'team-users-view',
            'parent_id' => $org->id,
        ]);

        // GROUP: Access (Super-Admin only)
        $access = Menu::create([
            'title' => 'Access',
            'icon' => 'Contact',
            'route' => '#',
            'order' => 3,
            'permission_name' => 'access-view', // super-admin only
        ]);

        Menu::create([
            'title' => 'Permissions',
            'icon' => 'AlertOctagon',
            'route' => '/permissions',
            'order' => 2,
            'permission_name' => 'permission-view',
            'parent_id' => $access->id,
        ]);

        Menu::create([
            'title' => 'Roles',
            'icon' => 'AlertTriangle',
            'route' => '/roles',
            'order' => 4,
            'permission_name' => 'roles-view',
            'parent_id' => $access->id,
        ]);

        // GROUP: Settings (Super-Admin only)
        $settings = Menu::create([
            'title' => 'Settings',
            'icon' => 'Settings',
            'route' => '#',
            'order' => 4,
            'permission_name' => 'settings-view',
        ]);

        Menu::create([
            'title' => 'Menu Manager',
            'icon' => 'Menu',
            'route' => '/menus',
            'order' => 1,
            'permission_name' => 'menu-view',
            'parent_id' => $settings->id,
        ]);

        Menu::create([
            'title' => 'App Settings',
            'icon' => 'AtSign',
            'route' => '/settingsapp',
            'order' => 2,
            'permission_name' => 'app-settings-view',
            'parent_id' => $settings->id,
        ]);

        Menu::create([
            'title' => 'Backup',
            'icon' => 'Inbox',
            'route' => '/backup',
            'order' => 3,
            'permission_name' => 'backup-view',
            'parent_id' => $settings->id,
        ]);

        // GROUP: Utilities (Super-Admin only)
        $utilities = Menu::create([
            'title' => 'Utilities',
            'icon' => 'CreditCard',
            'route' => '#',
            'order' => 5,
            'permission_name' => 'utilities-view',
        ]);

        Menu::create([
            'title' => 'Audit Logs',
            'icon' => 'Activity',
            'route' => '/audit-logs',
            'order' => 2,
            'permission_name' => 'log-view',
            'parent_id' => $utilities->id,
        ]);

        Menu::create([
            'title' => 'File Manager',
            'icon' => 'Folder',
            'route' => '/files',
            'order' => 3,
            'permission_name' => 'filemanager-view',
            'parent_id' => $utilities->id,
        ]);
    }
}
