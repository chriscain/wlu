<?php

use App\Http\Controllers\YahooController;
use Illuminate\Support\Facades\Route;

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
    return ['Laravel' => app()->version()];
});

Route::get('/yahoo/redirect', [YahooController::class, 'handleRedirect']);
Route::get('/yahoo/auth', [YahooController::class, 'authWithYahoo']);

require __DIR__ . '/auth.php';
