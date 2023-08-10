<?php

namespace App\Http\Controllers;
use App\Models\VitoGlobal;
use Illuminate\Http\Request;

class GlobalController extends Controller
{
    public function getGlobalVito()
    {
        $global = VitoGlobal::orderBy('created_at','ASC')->get();
        
        $global->map(function($item){
            if($item->images != null)
            {
                $item->images = json_decode($item->images);
                $images = $item->images;
                for ($i=0; $i < count($images); $i++) { 
                  
                    $images[$i] = [
                        "url" =>  url(
                    sprintf('storage/%s', str_replace('\\', '/', $images[$i]))),
                        "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                    ];
                
                $item->images = $images;
                }
            }
           
        });
        return response()->json($global);
    }
}
