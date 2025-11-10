<?php

use App\Events\QrCodeReceived;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BackupController;
use App\Http\Controllers\AuditLogController;
use App\Http\Controllers\UserFileController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\SettingAppController;
use App\Http\Controllers\MediaFolderController;
use App\Http\Controllers\WebHookWppConnectController;
use App\Http\Controllers\WhatsAppController;
use Illuminate\Support\Facades\Broadcast;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/test-broadcast', function () {
    event(new QrCodeReceived('qrcode_base64_aqui', 'session_name'));
    return 'ok';
});

Route::post('/whatsapp/webhook', [WebHookWppConnectController::class, 'webhook'])->name('whatsapp.webhook');

Route::middleware(['auth', 'menu.permission'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/whatsapp', [WhatsAppController::class, 'showLoginPage'])->name('whatsapp.login');
    Route::get('/whatsapp/qrcode', [WhatsAppController::class, 'getQrCode'])->name('whatsapp.qrcode');
    Route::get('/whatsapp/status', [WhatsAppController::class, 'checkStatus'])->name('whatsapp.status');


    Route::resource('roles', RoleController::class);
    Route::resource('menus', MenuController::class);
    Route::post('menus/reorder', [MenuController::class, 'reorder'])->name('menus.reorder');

    Route::resource('permissions', PermissionController::class);

    Route::resource('users', UserController::class);
    Route::put('/users/{user}/reset-password', [UserController::class, 'resetPassword'])->name('users.reset-password');

    Route::get('/settingsapp', [SettingAppController::class, 'edit'])->name('setting.edit');
    Route::post('/settingsapp', [SettingAppController::class, 'update'])->name('setting.update');

    Route::get('/audit-logs', [AuditLogController::class, 'index'])->name('audit-logs.index');
    Route::get('/backup', [BackupController::class, 'index'])->name('backup.index');
    Route::post('/backup/run', [BackupController::class, 'run'])->name('backup.run');

    Route::get('/backup/download/{file}', [BackupController::class, 'download'])->name('backup.download');

    Route::delete('/backup/delete/{file}', [BackupController::class, 'delete'])->name('backup.delete');

    Route::get('/files', [UserFileController::class, 'index'])->name('files.index');
    Route::post('/files', [UserFileController::class, 'store'])->name('files.store');
    Route::delete('/files/{id}', [UserFileController::class, 'destroy'])->name('files.destroy');
    
    Route::resource('media', MediaFolderController::class);
});

require __DIR__ . '/settings.php';

require __DIR__ . '/auth.php';

require __DIR__.'/wppconnect.php';
