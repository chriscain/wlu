<?php

use App\Services\Yahoo\Requestor;
use App\Services\Yahoo\YahooSDK;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->get('/yahoo/account-status', function (Request $request) {
    $user = $request->user();
    $requestor = new Requestor($user);

    return $requestor->isEnabled($user);
});

Route::middleware(['auth:sanctum'])->get('/yahoo/teams', function (Request $request) {
    $user = $request->user();

    return YahooSDK::factory()
        ->setUser($user)
        ->getLeaguesForLoggedInUser();
});
