<?php

namespace App\Http\Controllers;
use App\Models\Slider;


class BaseController extends Controller
{
    public function getHomeSlider()
    {
        $slider = Slider::orderBy('created_at','DESC')->get();
        $slider->map(function($item){
            if($item->media != null)
            {
                
                $item->media = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->media))
                );
            }

        });
        return response()->json($slider);
    }
}
