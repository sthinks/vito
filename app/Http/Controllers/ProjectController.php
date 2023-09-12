<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use stdClass;

class ProjectController extends Controller
{
    public function getProjects()
    {
        $projects = Project::orderBy('order','ASC')->get();
        $projects->map(function($item){
             if ($item->metatag != null) {
                $metatagArray = explode(",", $item->metatag);
                $metatagObjects = [];

                foreach ($metatagArray as $value) {
                    // Her bir değeri içeren bir obje oluşturun
                    $metatagObject = new stdClass();
                    $metatagObject->value = $value;
                    
                    // Oluşturulan objeyi $metatagObjects dizisine ekleyin
                    $metatagObjects[] = $metatagObject;
                }

                $item->metatag = $metatagObjects;
            }
             if($item->card_gallery != null)
            {
                $item->card_gallery = json_decode($item->card_gallery);
                $card_gallery = $item->card_gallery;
                for ($i=0; $i < count($card_gallery); $i++) {

                    $card_gallery[$i] = [
                        "url" =>  url(
                    sprintf('storage/%s', str_replace('\\', '/', $card_gallery[$i]))),
                        "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                    ];
                $item->card_gallery = $card_gallery;
                }
                $item->card_image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->card_image))
                );
                $item->banner = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->banner))
                );
            }
        });
        return response()->json($projects);
    }
    public function getByProject($slug)
    {
        $projects = Project::where('slug',$slug)->first();

            if($projects->card_gallery != null)
            {
                $projects->card_gallery = json_decode($projects->card_gallery);
                $card_gallery = $projects->card_gallery;
                for ($i=0; $i < count($card_gallery); $i++) {

                    $card_gallery[$i] = [
                        "url" =>  url(
                    sprintf('storage/%s', str_replace('\\', '/', $card_gallery[$i]))),
                        "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                    ];
                $projects->card_gallery = $card_gallery;
                }
            }
            $projects->card_image = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->card_image))
            );
            $projects->banner = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->banner))
            );
            
            if ($projects->metatag != null) {
                $metatagArray = explode(",", $projects->metatag);
                $metatagObjects = [];

                foreach ($metatagArray as $value) {
                    // Her bir değeri içeren bir obje oluşturun
                    $metatagObject = new stdClass();
                    $metatagObject->value = $value;
                    
                    // Oluşturulan objeyi $metatagObjects dizisine ekleyin
                    $metatagObjects[] = $metatagObject;
                }

                $projects->metatag = $metatagObjects;
            }

        return response()->json($projects);
    }
}
