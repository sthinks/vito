<?php

namespace App\Http\Controllers;
use App\Models\VitoGlobal;
use Illuminate\Http\Request;

class GlobalController extends Controller
{
    public function getGlobalVito(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $global = VitoGlobal::orderBy('created_at','ASC')->withTranslations($languageCode)->get();
        $global = $global->translate($languageCode);
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
