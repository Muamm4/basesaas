<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SettingApp extends Model
{
    protected $table = 'settingapp';

    protected $fillable = [
        'nama_app',
        'description',
        'logo',
        'favicon',
        'color',
        'seo',
    ];

    protected $casts = [
        'seo' => 'array',
    ];
}
