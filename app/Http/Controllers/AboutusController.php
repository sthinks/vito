<?php

namespace App\Http\Controllers;
use App\Models\AboutusStat;
use App\Models\AboutUsService;
use Illuminate\Http\Request;

class AboutusController extends Controller
{
    public function getAboutStat()
    {
        $data = AboutusStat::orderBy('order','ASC')->get();
        return response()->json($data);
    }
    public function getAboutServices()
    {
        $data = AboutUsService::orderBy('order','ASC')->get();
        $data->map(function($item) {
            $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($data);
    }
}
