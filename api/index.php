<?php

// Vercel has a read-only filesystem except /tmp
// Create writable directories in /tmp for Laravel storage
$storagePath = '/tmp/laravel/storage';
foreach ([
    "$storagePath/framework/cache/data",
    "$storagePath/framework/sessions",
    "$storagePath/framework/views",
    "$storagePath/logs",
] as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

// Copy view stubs to /tmp so Blade can compile there
$_ENV['VERCEL_STORAGE_PATH'] = $storagePath;

require __DIR__ . '/../public/index.php';
