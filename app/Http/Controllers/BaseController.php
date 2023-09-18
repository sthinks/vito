<?php

namespace App\Http\Controllers;
use App\Models\Slider;
use App\Models\BasePage;
use Illuminate\Http\Request;


class BaseController extends Controller
{
    public function getHomeSlider(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $slider = Slider::orderBy('created_at','DESC')->withTranslations($languageCode)->get();
        $slider = $slider->translate($languageCode);

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
    public function getBasePage(Request $request,$slug)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $slider = BasePage::where('slug', $slug)->withTranslations($languageCode)->first();
        $slider = $slider->translate($languageCode);
        
        if ($slider) {
            $pdfLinks = [];
            // "pdf" anahtarının içeriğini bir dizi olarak çözümlüyoruz
            $pdfData = json_decode($slider['pdf'], true);

            if (is_array($pdfData)) {
                foreach ($pdfData as $pdfItem) {
                    if (isset($pdfItem['download_link'])) {
                        $pdfLinks[] = url(
                        sprintf('storage/%s', str_replace('\\', '/', $pdfItem['download_link']))
                    );
                    }
                }
            }

            // JSON verisine bağlantıları ekliyoruz
            $slider['pdf_links'] = $pdfLinks;

            return response()->json($slider);
        } else {
            return response()->json(['error' => 'Sayfa bulunamadı'], 404);
        }
    }


}
