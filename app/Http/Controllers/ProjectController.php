<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function getProjects()
    {
        $projects = Project::orderBy('order','ASC')->get();
        $projects->map(function($item){

             if($item->image_gallery != null)
            {
                $item->image_gallery = json_decode($item->image_gallery);
                $image_gallery = $item->image_gallery;
                for ($i=0; $i < count($image_gallery); $i++) { 
                  
                    $image_gallery[$i] = [
                        "url" =>  url(
                    sprintf('storage/%s', str_replace('\\', '/', $image_gallery[$i]))),
                        "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                    ];
                
                $item->image_gallery = $image_gallery;
                }
            }
        });
        return response()->json($projects);
    } 
}
