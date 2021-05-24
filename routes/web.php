<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ContactController;
use App\Http\Controllers\QuotationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contacto', [ContactController::class, 'index']);
Route::post('/contacto', [ContactController::class, 'sendEmail']);

Route::get('/cotiza', [QuotationController::class, 'index']);
Route::get('/cotizar_ajax', [QuotationController::class, 'quotizer']);