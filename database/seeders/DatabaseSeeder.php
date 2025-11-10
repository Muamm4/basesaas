<?php

namespace Database\Seeders;

use App\Models\Organization;
use App\Models\SettingApp;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RolePermissionSeeder::class,
        ]);

        // Create user first (without organization)
        $user = User::factory()->create([
            'name' => 'Murilo Amaral',
            'email' => 'muriloamaciel@gmail.com',
            'password' => Hash::make('admin123456'),
            'organization_id' => null,
        ]);

        // Create organization linked to user
        $org = Organization::create([
            'name' => 'Basesaas IT Solutions',
            'slug' => 'basesaas-it-solutions',
            'owner_id' => $user->id,
        ]);

        // Link user to organization
        $user->update(['organization_id' => $org->id]);
        $user->organizations()->attach($org->id);

        $user->assignRole('super-admin');

        $this->call([
            MenuSeeder::class,
        ]);

        SettingApp::create([
            'name_app' => 'Basesaas IT',
            'description' => 'Soluções Inteligentes em Tecnologia',
            'logo' => '',
            'favicon' => '',
            'color' => '#6366f1',
            'seo' => [
                'title' => 'Basesaas IT - Gestão e Tecnologia',
                'description' => 'Plataforma completa para gestão e soluções de TI.',
                'keywords' => 'ti, gestão, saas, soluções',
                'author' => 'Basesaas',
            ],
        ]);
    }
}
