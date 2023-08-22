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
Route::get('/home-news', [
    \App\Http\Controllers\NewsController::class,
    'getHomeNews',
]);
Route::get('/news-detail/{slug}', [
    \App\Http\Controllers\NewsController::class,
    'getByNews',
]);
Route::get('get-sector-slider',[\App\Http\Controllers\SectorController::class,'getSliders',]);
Route::get('get-vito-global',[\App\Http\Controllers\GlobalController::class,'getGlobalVito',]);
Route::get('get-about-stats',[\App\Http\Controllers\AboutusController::class,'getAboutStat',]);
Route::get('get-about-services',[\App\Http\Controllers\AboutusController::class,'getAboutServices',]);
Route::get('get-projects',[\App\Http\Controllers\ProjectController::class,'getProjects',]);
Route::get('get-home-sliders',[\App\Http\Controllers\BaseController::class,'getHomeSlider',]);
Route::get('get-project-detail/{slug}',[\App\Http\Controllers\ProjectController::class,'getByProject',]);
Route::get('get-home-slider',[\App\Http\Controllers\BaseController::class,'getHomeSlider',]);


