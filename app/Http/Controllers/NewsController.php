<?php

namespace App\Http\Controllers;
use App\Models\News;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function getAllNews()
    {
        $data = News::all();
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
    public function getHomeNews()
    {
        $data = News::orderBy('created_at','DESC')->take(3)->get();
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
}
