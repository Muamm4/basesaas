<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Organization;
use Spatie\Permission\Models\Role;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    use \App\Traits\HasTruncatableData;

    public function index()
    {
        // 1. Basic Stats
        $stats = [
            ['label' => 'Users', 'value' => User::count(), 'color' => '#4ade80', 'icon' => 'Users'],
            ['label' => 'Organizations', 'value' => Organization::count(), 'color' => '#f472b6', 'icon' => 'Building'],
            ['label' => 'Roles', 'value' => Role::count(), 'color' => '#38bdf8', 'icon' => 'ShieldCheck'],
            ['label' => 'Activity Logs', 'value' => Activity::count(), 'color' => '#fbbf24', 'icon' => 'Activity'],
        ];

        // 2. Monthly Trends (Last 6 Months)
        $trends = [];
        for ($i = 5; $i >= 0; $i--) {
            $month = Carbon::now()->subMonths($i);
            $monthName = $month->format('M');

            $userCount = User::whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->count();

            $activityCount = Activity::whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->count();

            $trends[] = [
                'name' => $monthName,
                'Users' => $userCount,
                'Activity' => $activityCount
            ];
        }

        // 3. Role Distribution
        $roles = Role::withCount('users')->get();
        $distribution = $roles->map(function ($role) {
            return [
                'name' => ucfirst($role->name),
                'value' => $role->users_count,
            ];
        })->values()->toArray();

        // 4. Recent Activity
        $recentActivity = Activity::with('causer')
            ->latest()
            ->limit(5)
            ->get()
            ->map(function ($log) {
                return [
                    'id' => $log->id,
                    'description' => $this->reduceLargeElements($log->description, 100),
                    'causer' => $log->causer ? $log->causer->name : 'System',
                    'time' => $log->created_at->diffForHumans(),
                ];
            });

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'trends' => $trends,
            'distribution' => $distribution,
            'recentActivity' => $recentActivity,
        ]);
    }
}
