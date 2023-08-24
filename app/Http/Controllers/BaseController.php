<?php

namespace App\Http\Controllers;
use App\Models\Slider;
use App\Models\BasePage;



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
    public function getBasePage($slug)
{
    $slider = BasePage::where('slug', $slug)->first();
   
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
