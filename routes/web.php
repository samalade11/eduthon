<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::get('/our-solution', function () {
    return view('oursolution');
})->name('oursolution');

Route::get('/demo', function () {
    return view('demo');
})->name('demo');

Route::get('/price', function () {
    return view('price');
})->name('price');



