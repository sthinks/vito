<?php

namespace App\Http\Controllers;
use App\Models\SectorSlider;
use Illuminate\Http\Request;

class SectorController extends Controller
{
    public function getSliders()
    {
        $slider = SectorSlider::all();
        $slider->map(function($item){
            if($item->image)
            {
                $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
                );
            }
        });
        return response()->json($slider);
    }
}
