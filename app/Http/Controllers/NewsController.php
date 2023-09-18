<?php

namespace App\Http\Controllers;
use App\Models\News;

use Illuminate\Http\Request;
use stdClass;

class NewsController extends Controller
{
    public function getAllNews(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = News::withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        $data->map(function ($item) {
            if ($item->media) {
                $item->media = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->media))
                );
            } else {
                $result = null;
                $item->media = $result;
                return $item->media;
            }
             if($item->image_gallery != null){
                $gallery = json_decode($item->image_gallery);
              
              for ($i=0; $i < count($gallery); $i++) { 
                    $gallery[$i] =[

                       "url"=> url(
                            sprintf('storage/%s', str_replace('\\', '/', $gallery[$i]))
                       ),
                       "index"=>  $i +1
                        ] ;
                
                };
                $item->image_gallery = $gallery;
            }
        });

        return response()->json($data);
    }
    public function getHomeNews(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = News::orderBy('created_at','DESC')->take(3)->withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        $data->map(function ($item) {
            if ($item->media) {
                $item->media = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->media))
                );
            } else {
                $result = null;
                $item->media = $result;
                return $item->media;
            }
            
            if($item->image_gallery != null){
                $gallery = json_decode($item->image_gallery);
              
                for ($i=0; $i < count($gallery); $i++) { 
                    $gallery[$i] =[

                       "url"=> url(
                            sprintf('storage/%s', str_replace('\\', '/', $gallery[$i]))
                       ),
                       "index"=>  $i +1
                        ] ;
                
                };
                $item->image_gallery = $gallery;
            }
       
        });

        return response()->json($data);
    }
    public function getByNews(Request $request,$slug)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = News::where('slug',$slug)->withTranslations($languageCode)->first();
        $data = $data->translate($languageCode);
          if ($data->media) {
                $data->media = url(
                    sprintf('storage/%s', str_replace('\\', '/', $data->media))
                );
            } else {
                $result = null;
                $data->media = $result;
                return $data->media;
            };
            if($data->banner)
            {
                     $data->banner = url(
                    sprintf('storage/%s', str_replace('\\', '/', $data->banner))
                );
            }
        if($data->image_gallery != null){
           
              
                $data->image_gallery = json_decode($data->image_gallery);
                $images = $data->image_gallery;
                for ($i=0; $i < count($images); $i++) { 
                  
                    $images[$i] = [
                        "url" =>  url(
                    sprintf('storage/%s', str_replace('\\', '/', $images[$i]))),
                        "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                    ];
                
                $data->image_gallery = $images;
                }
            }
           
            if ($data->metatag != null) {
                $metatagArray = explode(",", $data->metatag);
                $metatagObjects = [];

                foreach ($metatagArray as $value) {
                    // Her bir değeri içeren bir obje oluşturun
                    $metatagObject = new stdClass();
                    $metatagObject->value = $value;
                    
                    // Oluşturulan objeyi $metatagObjects dizisine ekleyin
                    $metatagObjects[] = $metatagObject;
                }

                $data->metatag = $metatagObjects;
            }
            
        return response()->json($data);
    }
}
