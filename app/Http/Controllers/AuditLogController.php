<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class AuditLogController extends Controller
{
    use \App\Traits\HasTruncatableData;

    public function index(Request $request)
    {
        $logs = Activity::with('causer')
            ->orderByDesc('created_at')
            ->paginate(20);

        $logs->getCollection()->transform(function ($log) {
            $log->properties = $this->reduceLargeElements($log->properties);
            return $log;
        });

        return Inertia::render('auditlogs/Index', [
            'logs' => $logs,
        ]);
    }
}
