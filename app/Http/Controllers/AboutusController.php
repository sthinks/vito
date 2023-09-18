<?php

namespace App\Http\Controllers;
use App\Models\AboutusStat;
use App\Models\AboutUsService;
use Illuminate\Http\Request;

class AboutusController extends Controller
{
    public function getAboutStat(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = AboutusStat::orderBy('order','ASC')->withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        return response()->json($data);
    }
    public function getAboutServices(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = AboutUsService::orderBy('order','ASC')->withTranslations($languageCode)->get();
        $data = $data->translate($languageCode);
        $data->map(function($item) {
            $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        return response()->json($data);
    }
}
