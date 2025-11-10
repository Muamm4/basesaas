<?php

use App\Http\Controllers\WppConnectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('wppconnect')->group(function () {
    Route::get('{session}/token', [WppConnectController::class, 'getAuthToken']);
    Route::get('{session}/status', [WppConnectController::class, 'checkStatus']);
    Route::get('{session}/qrcode', [WppConnectController::class, 'getQrCode']);
    Route::post('{session}/start', [WppConnectController::class, 'startSession']);
    Route::post('{session}/close', [WppConnectController::class, 'closeSession']);
    Route::post('/{session}/send-message', [WppConnectController::class, 'sendMessage']);
    Route::get('/{session}/host-device', [WppConnectController::class, 'hostDevice']);
    Route::get('/{session}/profile-pic/{phone}', [WppConnectController::class, 'getProfilePic']);
    Route::get('/{session}/profile-status/{phone}', [WppConnectController::class, 'getProfileStatus']);
    Route::post('/webhook', [WppConnectController::class, 'handleWebhook']);
});
