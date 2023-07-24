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
        });

        return response()->json($data);
    }
}
