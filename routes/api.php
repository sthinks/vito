<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/all-news', [
    \App\Http\Controllers\NewsController::class,
    'getAllNews',
]);

Route::get('get-sector-slider',[\App\Http\Controllers\SectorController::class,'getSliders',]);
Route::get('get-vito-global',[\App\Http\Controllers\GlobalController::class,'getGlobalVito',]);
