<?php

namespace App\Http\Controllers;
use App\Models\AboutusStat;
use Illuminate\Http\Request;

class AboutusController extends Controller
{
    public function getAboutStat()
    {
        $data = AboutusStat::orderBy('order','ASC')->get();
        return response()->json($data);
    }
}
