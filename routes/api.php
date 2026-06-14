<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/contact', ContactController::class);
Route::post('/chat', ChatController::class);