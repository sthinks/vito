import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            title_news: "Haberler",
            nav_home: "ANASAYFA",
            nav_services: "SERVİSLER",
            nav_humanres: "İNSAN KAYNAKLARI",
            nav_kvkk: "KVKK",
            nav_policy: "ÇEREZ POLİTİKASI",
            nav_aboutus: "HAKKIMIZDA",
            nav_corporate: "KURUMSAL",
            nav_project: "PROJELER",
            nav_sector: "SEKTÖR",
            nav_news: "HABERLER",
            nav_contact: "İLETİŞİM",
            home_who: "BİZ KİMİZ",
            home_who_title: "ViTO Grup",
            home_who_content:
                "ViTO, Petrol ve Gaz, hidrojen ve enerji sektörlerindeki projelere tek bir şemsiye altında sorunsuz bir şekilde entegre edilmiş kapsamlı bir dizi karmaşık anahtar teslimi inşaat ve montaj hizmetleri sağlama konusunda geniş deneyime sahiptir. Sektör lideri olarak tanınan ViTO, başarılı EPC yüklenicileri olarak depolama tesisleri ve tank çiftliklerinin inşasında da mükemmelliğe ulaşmıştır. Grup, 2019 yılında Bergama Organize Sanayi Bölgesi'nde basınçlı kap ve boru prefabrikasyonu üretimi yapmak üzere Bergama Sanayi fabrikasının kurucu ortaklarından biri olmuştur.",
            home_who_go: "Daha fazla bilgi edinin",
            news_read_more: "Devamı",

            home_activity_title: "FAALİYET ALANLARI",
            home_activity_going: "DEVAM EDEN PROJELER",
            details: "Detay",
            home_activity_main: "ANAHTAR TESLİM PROJELER",
            home_activity_project: "PROJE",
            home_activity_project2: "FABRİKASYON",
            home_activity_project3: "BAKIM VE YEDEK PARÇALAR",
            home_activity_project4: "Çelik Yapı Montajı",
            home_activity_project5:
                "Tanklar İçin İmal Edilen ve Dikilen Çelik Plakalar",
            home_activity_project6: "Tanklar için Depolama Kapasitesi",
            home_new: "HABERLER",
            about_us_content:
                "ViTO, geçtiğimiz 24 yıl boyunca istikrarlı bir şekilde büyüyerek bugünkü ViTO Şirketler Grubu haline gelmiştir. Bu büyüme sürecinde alanında dünya çapında firmalarla yaptığı ortaklıklarla müteahhitlik alanında çeşitli önemli projeleri hayata geçirmiştir. Daha önce kurmuş olduğumuz IVT şirketi 2017 yılında %100 ViTO Şirketler Grubu bünyesine dahil olmuştur. Grup, 2019 yılında Bergama Organize Sanayi Bölgesi'nde basınçlı kap ve boru prefabrikasyonu üretimi yapmak üzere Bergama Sanayi fabrikasının kurucu ortaklarından biri oldu. Halihazırda üç kıtaya ihracat yapan Bergama Endüstri'nin en öne çıkan ilkeleri projelerin zamanında teslimi, müşteri memnuniyeti ve projelerin iş sağlığı ve güvenliği içerisinde yönetilmesidir.",
            about_us_ceo_message: "BAŞKAN VE CEO'NUN MESAJI",
            about_us_ceo_message_content:
                "2000 yılında kurulan şirketimizi yıllar içinde istikrarlı bir şekilde büyüterek bugünkü ViTO şirketler grubuna dönüştürdük. Bu büyüme sürecinde dünyada deneyimli ve saygın birçok yabancı ortaklık kurduk ve müteahhitlik alanında önemli projeler gerçekleştirdik. Bu kapsamda yabancı ortaklarımızla kurduğumuz ortak girişim müteahhitlik şirketimizi 2017 yılında IVT şirketi olarak ViTO şirketler grubumuza kattık. Ardından 2019 yılında Bergama Organize Sanayi Bölgesi'nde basınçlı kap ve boru prefabrikasyon üretiminin yapıldığı Bergama Sanayi Fabrikamızı açtık. Şu anda ürünlerimizi üç kıtaya ihraç ediyor ve dünyanın her yerindeki müşterilerimize ulaştırıyoruz. Firmamızın önceliği, deneyimli kadromuz tarafından yönetilen projelerin zamanında teslim edilmesi ve müşteri memnuniyeti ile iş güvenliğini ön planda tutarak projelerin başarılı bir şekilde yürütülmesidir.",
            about_us_vision: "VİZYONUMUZ",
            about_us_vision_content:
                "Vizyonumuz, petrokimya, hidrojen ve rafineri sektörlerinde sürdürülebilirliğe olan bağlılığımızla tanınan lider bir müteahhitlik şirketi olmaktır. En yüksek kalitede hizmet sunarak, yenilikçiliği benimseyerek ve çevreye duyarlı projeler yürüterek sektörde liderlik konumuna ulaşmayı hedefliyoruz. Vizyonumuz, karbonsuz bir geleceğe önemli ölçüde katkıda bulunurken liderlik, mükemmellik ve sürekli iyileştirme ilkeleri üzerine inşa edilmiştir.",
            about_us_mission: "MİSYONUMUZ",
            about_us_mission_content:
                "Misyonumuz, müşterilerimizin ihtiyaç ve beklentilerini karşılayan ve aşan yüksek kaliteli, güvenilir ve sürdürülebilir çözümler sunmaktır. Petrokimya ve rafineri sektörlerindeki projeleri başarıyla tamamlamak, en yüksek güvenlik standartlarını korumak ve müşteri memnuniyetine öncelik vermek için çalışıyoruz.",
            about_us_value: "DEĞERLERİMİZ",
            about_us_value_content:
                "Müşteri Odaklılık: Müşterilerimizin ihtiyaçlarını anlamak, özelleştirilmiş çözümler sunmak ve uzun vadeli iş ilişkileri kurmak için çalışıyoruz. Kalite ve Güvenilirlik: Projelerimizde yüksek kalite standartlarını koruyor, güvenilir ve zamanında hizmet sunmayı taahhüt ediyoruz. Yenilikçilik ve Sürekli İyileştirme: Sektörün ön saflarında yer almak için yenilikçi çözümler geliştiriyor, araştırma ve teknolojiye yatırım yapıyor ve kendimizi sürekli geliştiriyoruz. Çevre Bilinci: Projelerimizi çevresel etkileri göz önünde bulundurarak planlıyor, çevre yönetim sistemlerine bağlı kalıyor ve sürdürülebilir çözümler sunmak için çalışıyoruz. Ekip Çalışması ve İş birliği: Çalışanlarımız arasında ekip çalışmasını, açık iletişimi ve işbirliği kültürünü teşvik ediyoruz.",
            about_us_work_prencible: "ÇALIŞMA PRENSİBİMİZ",
            about_us_work_prencible_content:
                "Etik İlkeler: İş etiği ve dürüstlük ilkelerine tam olarak uyar, yasa ve yönetmeliklere bağlı kalırız. İş Sağlığı ve Güvenliği: Çalışanlarımızın güvenliği ve sağlığı en önemli önceliğimizdir. İş sağlığı ve güvenliği politikalarına uyumu sağlamak için gerekli önlemleri alırız. Sürekli İyileştirme: İş süreçlerimizi sürekli gözden geçirir, iyileştirme fırsatlarını belirler ve verimliliği artırmak için çalışırız. Şeffaflık ve Hesap Verebilirlik: Müşterilerimize, tedarikçilerimize ve çalışanlarımıza karşı şeffaf bir iletişim ve hesap verebilirlik sergileriz. Sosyal Sorumluluk: Sosyal sorumluluk sahibi olmayı, sosyal sorumluluk projelerini desteklemeyi ve sürdürülebilirliğe katkıda bulunmayı taahhüt ediyoruz. Bu değerler ve çalışma ilkeleri doğrultusunda, petrokimya ve rafineri sektörlerinde lider bir şirket olarak kalite ve müşteri memnuniyetini en üst düzeyde tutmayı hedefliyoruz.",
            about_us_ethic: "ETİK",
            about_us_ethic_title: "ETİK KURALLAR VE İŞ DAVRANIŞLARI",
            about_us_ethic_content:
                "ViTO Group, yasa ve yönetmelikleri anlama ve bunlara uyma konusunda en yüksek standartları sergiler; Çalışanlarından ve İş Ortaklarından her zaman uyumlu bir şekilde hareket etmelerini bekler. 'İnsana saygı' felsefemizin temel unsurudur. İnsan haklarına ve çalışan haklarına değer veririz. Taciz ve mobbing, bir insana karşı etik olmayan davranış biçimleridir. Çevreyi ve insan sağlığını korumak tüm faaliyetlerimizde öncelik verdiğimiz temel ilkelerdir. İş etiğine ve ahlaki değerlere azami özen gösteririz. Kolaylaştırma ödemeleri, her türlü rüşvet ve yolsuzluk uygulamaları ve kara para aklama dahil olmak üzere hiçbir yolsuzluk türüne karışmayız. ViTO Group Çalışanları ve İş Ortakları, ViTO Group ile ilgili herhangi bir işlem ve sözleşmeden doğrudan veya dolaylı olarak kişisel kazanç elde edemez. Çalışanlar ve İş Ortakları herhangi bir fiili veya potansiyel ihlalden şüphelenirse, bunu dile getirmelerini bekleriz. Bu tür tüm iletişimler gizli tutulacaktır.",
            about_us_hseq_title: "SAĞLIK GÜVENLİK ÇEVRE- KALİTE",
            about_us_hsqe_contetnt1:
                "VİTO olarak Toplam Kalite Yönetimi felsefesini, tüm birimlerimizin katılımını içeren, tüm faaliyetlerimizde uygulanan ve sürekli iyileştirmeyi bir yaşam biçimi olarak kabul eden bir yönetim metodolojisi olarak benimsiyoruz. Güvenli ve sağlıklı bir işyeri sağlamak, faaliyetlerimizi çevreyi koruyacak şekilde yürütmek, müşteri memnuniyetini sağlamak ve sürekli kılmak için sistemlerimizi sürekli iyileştirmek ilkelerimizdir. Çalışanlara, üçüncü şahıslara, mala ve çevreye verilebilecek zararları ortadan kaldırmayı; riskleri analiz etmek ve en aza indirmek için gerekli önlemleri almayı; yüksek riskli durumlarda önlemler alınıncaya kadar işi durdurmayı; tüm kazaların önlenebilir olduğuna inanıyor ve tüm faaliyetlerimizde 'Sıfır Kaza' hedefini gözetmeye devam ediyoruz. ",
            about_us_hsqe_contetnt2: "'Kalite'",
            about_us_hsqe_contetnt3: "'Sağlık, Emniyet ve Çevre Politikası'",
            about_us_hsqe_contetnt4: "ve",
            about_us_hsqe_contetnt5:
                "ile ilgili ilke ve taahhütlerimizi Politikalarımız aracılığıyla çalışanlarımıza ve üçüncü taraflara iletiyoruz. Politikalarımızla belirlediğimiz hedeflere ulaşmak için",
            about_us_hsqe_contetnt6: "Kalite",
            about_us_hsqe_contetnt7: "İş Sağlığı ve Güvenliği ve ",
            about_us_hsqe_contetnt8:
                "Çevre Yönetim Sistemi Standartlarını rehber alıyoruz. Merkez Ofisimiz dahil tüm proje ve işyerlerimizde uyguladığımız Yönetim Sistemlerimizin standartlara uygunluğunu akredite denetim kuruluşları tarafından verilen sertifikalar ile kanıtlıyoruz.",
            services_enginering: "Mühendislik",
            services_enginering_content:
                "Son derece disiplinli mühendislik ekibimiz, depolama terminalleri için gelişmiş süreç modellemesi ve ayrıntılı tasarımın yanı sıra ilk planlama aşaması için mühendislik ve tasarım (FEED) hizmetleri sunmaktadır. Ayrıca borulama ve mekanik işleri de kapsamaktadır. Ekibimiz, uluslararası alanda tanınmış mühendislik firmalarından ve yüklenicilerden farklı geçmişlere sahip deneyimli mühendislerden oluşmaktadır. Multidisipliner mühendislik ekibimizle, depolama terminalleri için ileri proses modelleme ve detaylı tasarımın yanı sıra ilk planlama aşaması için mühendislik ve tasarım (FEED) hizmetleri ile borulama ve mekanik işler de sağlıyoruz. Ekibimiz, uluslararası alanda tanınmış mühendislik firmaları ve yüklenicilerden gelen çeşitli geçmişlere sahip son derece deneyimli mühendislerden oluşmaktadır. Türkiye'de tank çiftliği inşaatı için mühendislik, tedarik ve imalatı tek çatı altında sunan tek şirketiz. Mühendislik hizmetlerimiz Technicon Mumbai tarafından sağlanmaktadır.",
            services_procument: "Tedarik",
            services_procument_content:
                "Dünyanın her yerinden en iyi maliyet, koşul ve kalitede ekipman ve malzeme tedariki, muayene ve lojistik yönetimi sağlıyoruz. Özel veri tabanımızdaki uluslararası tedarikçilerden yararlanıyor ve kritik görev bileşenleri için çift kaynak stratejisi izliyoruz. İlgili tüm üst düzey tedarikçilerle güçlü ve sürekli iletişim halinde olmak, olası pazar değişikliklerine hızlı yanıt vermemizi sağlıyor. Son 6 yılda 69.000 ton çelik sac tedariki ve işlenmesi gerçekleştirilmiştir.",
            services_construciton: "İnşaat",
            services_construciton_content:
                "Son derece deneyimli üst düzey proje yönetimi ekibimiz, büyük, uluslararası projeler için inşaat ve montaj işlerinde uzmanlaşmıştır. Geçmiş projelerimiz boyunca güvenlik, kalite ve program performansı konusunda güçlü bir itibar kazandık. En zorlu ortamlarda bile güvenli bir şekilde üstün sonuçlar elde etmek için projelerimizi tutarlı araçlar, sistemler ve standartlar kullanarak oluşturuyoruz Depolama terminalleri için, 700'den fazla hidrolik krikodan oluşan tescilli filomuzu kullanarak 105 metre çapa kadar depolama tanklarını daha hızlı, daha güvenli ve daha verimli bir şekilde kuruyor ve müşterilerimizin tesislerini geleneksel yöntemlerden daha erken kullanmalarını sağlıyoruz. Deneyimli ve üst düzey proje yönetim ekibimiz büyük, uluslararası projelerin inşaat ve montaj işlerinde uzmanlaşmıştır. Geçmiş projelerimiz boyunca güvenlik, kalite ve program performansı konusunda güçlü bir itibar kazandık. Projelerimizi, en zorlu ortamlarda bile güvenli bir şekilde üstün kaliteli sonuçlar elde etmek için tutarlı araçlar, sistemler ve standartlar kullanarak oluşturuyoruz. (ÖNERİ: En zorlu ortamlarda bile güvenli bir şekilde üstün kaliteli sonuçlar elde etmek için projelerimizi tutarlı araçlar, sistemler ve standartlar kullanarak oluşturuyoruz). 700'den fazla hidrolik krikodan oluşan tescilli filomuzu kullanarak çapı 105 metreye kadar olan depolama tanklarını daha hızlı, daha güvenli ve daha verimli bir şekilde kuruyor ve müşterilerimizin tesislerini depolama terminalleri için geleneksel yöntemlerden daha erken kullanmalarına olanak tanıyoruz.",
            services_jack_systems: "Hidrolik kriko sistemleri",
            services_jack_systems_content:
                "Depolama tanklarının yapımında tercih edilen bir yöntemdir. Bu sistemler, tankların zemin seviyesinde kurulmasına olanak sağlayarak güvenlik, kalite ve verimlilik açısından birçok avantaj sunar. Hidrolik kriko sistemleri, tankın taban plakası üzerine yerleştirilen hidrolik silindirlerden oluşur. Bu silindirler tankın gövde plakalarını yukarı doğru iterek kaynak için bir alan yaratır. Kaynak işlemi tamamlandıktan sonra silindirler tekrar çalıştırılır ve bir sonraki plaka yerleştirilir. Bu şekilde tankın gövdesi zemin seviyesinde inşa edilir. Hidrolik kriko sistemlerinin tercih edilmesinin ana nedenlerinden biri güvenliktir. Depolama tanklarının zemin seviyesinde inşa edilmesi kaza riskini azaltır. Bu yöntem, son 10 yılda kullanılan hidrolik kriko sistemlerinin güvenilirliğini kanıtlamış ve önemli bir olay rapor edilmemiştir. Hidrolik kriko sistemleri kullanılarak yapılan tank inşaatları iskele gerektirmez. Şimdiye kadar 75 tank bu sistemler kullanılarak başarıyla inşa edilmiştir. Özellikle petrol rafinerilerinde 92 metre çapındaki en büyük tanklar bile hidrolik kriko sistemleri kullanılarak inşa edilmiştir. Bu sistemler ayrıca 1900 ton ağırlığa kadar olan ağır tankların kurulumunu da kolaylaştırmaktadır. Hidrolik kriko sistemleri denetim süreçlerini de kolaylaştırıyor. Kaynak denetçileri, ultrasonik veya diğer tahribatsız test yöntemlerini kullanarak zemin seviyesindeki kaynakları denetleyebilir. Bu, denetim sürecini daha pratik hale getirir ve kalite kontrolünü geliştirir. Kaynak denetçileri artık tehlikeli pozisyonlara tırmanma riski olmadan çalışabilir. Tank montajında hidrolik kriko sistemlerinin kullanılması inşaat süresini ve maliyetini önemli ölçüde azaltır. Vinç ihtiyacı ortadan kalkar ve montaj süreci daha hızlı tamamlanır. Ayrıca, bu sistemler daha az insan gücü gerektirerek inşaat maliyetlerini düşürür. Böylece ekonomik ve verimli bir tank inşaatı elde edilir.Hidrolik kriko sistemleri, depolama tanklarının yapımında profesyonel bir çözüm sağlar. Bu sistemler hem iş güvenliğini hem de kaliteyi artırır. Ayrıca inşaat süresini ve maliyetini azaltır. Hidrolik kriko sistemlerinin kullanıldığı tank inşaatları geleceğin teknolojisini bugünden kullanmaktadır.",
            services_manufacturing: "Üretim",
            services_manufacturing_content:
                "İştirakimizin üretim tesisi, çeşitli modüller ve ekipmanlar için çok sayıda hızlı proje yürütmektedir. Plakalar ve yapısal çelik, borular ve basınçlı kaplar, ısı eşanjörleri veya kolonlar gibi karmaşık modüler montajlar üretiyoruz. Tek tek bileşenler üretebilir, büyük alt montajlar sağlayabilir ve ayrıca tesiste boyama, kumlama, kaynak sonrası ısıl işlem, tahribatsız muayene ve testler gerçekleştirebiliriz. Bu bileşenler ve montajlar, EPC proje kapsamımızın bir parçası olarak veya üçüncü taraf projeleri için ayrı bir proje bazında sunulmaktadır. Şirketimizin üretim tesisi aynı anda çeşitli modüller ve ekipmanlar için çok sayıda hızlı tempolu projeyi yönetmektedir. Plakalar ve yapısal çelik, borular ve basınçlı kaplar, ısı eşanjörleri veya kolonlar gibi karmaşık modüler montajlar üretiyoruz. Ayrıca, münferit bileşenler üretebiliyor, büyük alt montajlar sağlayabiliyor ve tesisimizde boyama, kumlama, kaynak sonrası ısıl işlem, tahribatsız muayene ve test işlemleri gerçekleştirebiliyoruz. Bu bileşen ve montajlar ya EPC proje kapsamımızın bir parçası olarak ya da üçüncü taraf projeleri için ayrı bir proje bazında sunulmaktadır. Projelerimizle ilgili üretimlerimiz 2020 yılında kurduğumuz Bergama Endüstri A.Ş. de gerçekleştirilmektedir.",
            coprote_title: "Kurumsal Yönetim Kurulu",
            coprote_title2: "Yönetim Kurulu Başkanı & CEO",
            coprote_cv_vedat:
                "Şirketimizin kurucusu ve Yönetim Kurulu Başkanı Vedat İrdelp, Avusturya'da Sankt Georg Fen Lisesi'ni bitirdikten sonra İTÜ Mühendislik ve Mimarlık Fakültesi'nden mezun olmuştur. Almanya'da bir finans kuruluşunda Yönetim Kurulu Üyesi olarak çalışmış, birçok Şirket Birleşme ve Devralmalarında görev almış, daha sonra Türkiye'ye gelerek İskenderun'da İSKEN 1.320 MW ithal kömür santrali inşaatında danışmanlık hizmeti verdikten sonra 2000 yılında Türkiye'de ViTO Mühendislik İnşaat ve Taahhüt A.Ş.'yi kurmuştur. Enerji, petrol ve gaz ile ilgili tüm tesislerin mühendislik ve inşaat işlerini geliştirmek üzere, merkezi Türkiye'de bulunan ViTO şirketler grubu ile enerji santralleri, petrokimya tesisleri ve rafineriler dahil olmak üzere endüstriyel yapıların gerçekleştirilmesi için tüm tedarik zincirini tamamlayan bir sistem kuran Vito Şirketler Grubu, Mumbai'de bir mühendislik ofisinin yanı sıra Bergama'da bir fabrika yatırımına sahiptir. DEİK, WEF, AHK ve Galatasaray Spor Kulübü Yönetim Kurulu Üyeliği görevlerinde bulunan Vedat İrdelp, ViTO Şirketler Grubu Yönetim Kurulu Başkanı ve Grup CEO'sudur.",
            coprote_fuat_title: "Yönetim Kurulu Başkan Yardımcısı",
            coprote_fuat_cv:
                "1964 yılında İstanbul'da doğan Fuat Şengül, İstanbul Teknik Üniversitesi İnşaat Mühendisliği Bölümü'nden mezun oldu (1985) ve İstanbul Teknik Üniversitesi Mühendislik Fakültesi'nden yüksek lisans derecesini aldı (1987). Marmara Üniversitesi Maliye ve Muhasebe Bölümü'nden uzmanlık sertifikası aldı (1988). Şengül, özel bankalarda yatırım değerleme uzmanı olarak çalıştıktan sonra İstanbul Gaz Dağıtım A.Ş.'de Genel Müdürlük ve Yönetim Kurulu Üyeliği görevlerini üstlendi. (İGDAŞ) GENEL MÜDÜRLÜĞÜ (1994-2000) GÖREVLERINI ÜSTLENDI. İstanbul Gaz Dağıtım A.Ş.'yi 100.000 abone ile devraldı ve 1.500.000 aboneye çıkardı. Görev süresi boyunca 2.100 km polietilen, 400 km yüksek basınçlı çelik boru hattı ve 2 milyon WDI işini yönetti. 2001 yılında Vito Group'a katılan Şengül, Gebze termik santrali, Aslancık hidroelektrik santrali ve Bergama Sanayi fabrika inşaatı gibi projelerde denetim müdürü olarak çalıştı. Halen Vito Mühendislik İnşaat ve Taahhüt A.Ş.'de Yönetim Kurulu Başkan Yardımcısı olarak görev yapmaktadır. Evli ve dört çocuk babasıdır. ",
            coprote_burhan_title: "Genel Müdür",
            coprote_burhan_cv:
                "Burhan Tekdemir, karmaşık inşaat ve taahhüt projelerinin yönetiminde güçlü bir geçmişe sahip, son derece başarılı bir profesyoneldir. Tekdemir'in eğitim geçmişinde Boğaziçi Üniversitesi'nden İşletme diploması ve Sabancı Üniversitesi'nde liderlik için bir yönetici eğitim programı bulunmaktadır. Aynı zamanda DEİK (Dış Ekonomik İlişkiler Kurulu), Fenerbahçe Spor Kulübü ve BÜMED (Boğaziçi Üniversitesi Mezunlar Derneği) aktif üyesidir. Halen ViTO Mühendislik İnşaat ve Taahhüt'te İcra Kurulu Üyesi olarak görev yapmakta olup, şirketin büyümesine ve başarısına önemli katkılarda bulunmuştur. ViTO Grubu'nda çeşitli üst düzey pozisyonlarda 17 yılı aşkın deneyime sahip olan Tekdemir, STAR Rafinerisi'nin çeşitli mekanik işleri ve Socar Aliağa tank çiftliği projesi de dahil olmak üzere çeşitli projeleri başarıyla yönetmiştir. Ayrıca Technicon Azerbaijan'da Genel Müdür olarak altı depolama tankının anahtar teslimi inşaatı ve Bakü Heydar Aliyev Rafinerisi'nde patlamaya karşı merkezi kontrol binası inşaatı gibi projeleri yönetmiştir. IOT-ViTO Construction'da Genel Müdür olarak STAR Rafinerisi'nde Türkiye'nin ve bölgenin en büyük depolama tankı projesinin hayata geçirilmesinde kilit rol oynamıştır. Tekdemir, bu görevlerinden önce ViTO Enerji ve Yatırım'da 900 MW Gebze Kombine Çevrim Gaz yakıtlı enerji santrali ve 120 MW Aslancık Hidro enerji santrali gibi projelerde yer aldığı çeşitli yönetim pozisyonlarında ve IBS Araştırma ve Danışmanlık'ta İş Geliştirme Direktörü olarak görev yapmıştır.",
            coprote_dinc_title: "Genel Müdür Yardımcısı HSEQ",
            coprote_dinc_cv:
                "Orta Doğu Teknik Üniversitesi Elektrik Mühendisliği Bölümü'nden 1976 yılında mezun olan Dinç Şenlier, aynı üniversitede yüksek lisans eğitimini tamamlayarak 1980 yılında Elektronik Yüksek Mühendisi unvanını almıştır. ODTÜ'de 1976 yılında Araştırma Görevlisi olarak başladığı kariyerine PTT Genel Müdürlüğü ve Aselsan'da devam etmiş, 1982 yılında Tekfen Grubu'na katılmıştır. 2022 yılına kadar 40 yıl boyunca Türkiye'nin en büyük gruplarından biri olan Tekfen'de hemen her pozisyon ve sorumlulukta görev aldı. Savunma Sanayii'ne üretim yapan 2 Tekfen Grup şirketinde 8 yıl Genel Müdürlük ve ardından Taahhüt şirketinde Yönetim Temsilciliği yaptıktan sonra, Tekfen Grup Şirketleri Başkan Danışmanlığı görevini yürütmüş ve birçok alanda yönlendirme ve liderlik yapmıştır. 2022'nin başından bu yana ViTO Mühendislik İnşaat ve Taahhüt A.Ş.'de Genel Müdür Yardımcısı olarak görev yapan Şenlier, evli ve bir erkek çocuk babasıdır.",
            coprote_zeki_title: "Proje Direktörü ve Katar Ülke Müdürü",
            coprote_zeki_cv:
                "Zeki Günay 1972 yılında doğdu ve 1994 yılında Hacettepe Makine Mühendisliği Fakültesi'nden mezun oldu. Askerlik hizmetini tamamladıktan sonra 1996 yılında Türkiye'de doğal gaz dağıtım boru hatları ve terminal tasarım işlerinde profesyonel kariyerine başladı. 1996-2001 yılları arasında Foster Wheeler ile Türkiye'de Petrol Ofisi Terminali revizyon ve yenileme projelerinde tasarım aşamasından devreye alma aşamasına kadar çalıştı. 2001-2010 yılları arasında yurtdışı projelerde görev alan Fuat, BP, Technip, Bechtel ve Shell gibi firmalarla Libya'dan Sakhalin'e kadar farklı bölgelerdeki petrol ve gaz projelerinde çalıştı. 2010 yılında Akenerji CEZ'de çalışmaya başlamış ve 2015 yılına kadar Türkiye'nin en büyük kombine enerji santrallerinden birinin inşasında feed-in aşamasından devreye alma aşamasına kadar görev almıştır. 2015-2017 yılları arasında Türkiye'deki enerji santrali projelerinde danışman olarak çalıştı. 2017 yılında Vito'ya katıldı ve 2017-2022 yılları arasında çeşitli projelerde proje direktörü olarak çalıştı ve şu anda Katar'da Ülke Müdürü olarak kariyerine devam etmektedir.",
            coprote_reha_title: "Merkez Oﬁs Proje Direktörü",
            coprote_reha_cv:
                "1968 doğumlu olan Reha Akın, 1991 yılında Orta Doğu Teknik Üniversitesi Makine Mühendisliği Bölümü'nden mezun olmuş, 1994 yılında aynı bölümde yüksek lisansını tamamlamıştır. Akın ayrıca 1992 yılında SLV Münih Almanya'dan Avrupa Kaynak Mühendisliği diplomasını ve 2014 yılında Işık Üniversitesi'nden MBA derecesini almıştır. Akın, 1991-1994 yılları arasında TSE'de kalite sistem denetçisi olarak çalıştı. 1994-1996 yılları arasında Rusya'da kereste fabrikası inşaatında görev aldıktan sonra 1996-2018 yılları arasında Gama Holding'de çeşitli ülkelerde petrol rafinerileri, LNG tesisleri ve enerji santralleri inşaatlarında Proje Müdürü ve Proje Direktörü olarak çalışmıştır. Bu süre zarfında Technip, JGC, Chiyoda, Saipem, Fluor, Alstom, Ansaldo, GE, Shell gibi firmalarla da üst düzeyde iş birliği yapmıştır. Buhara Rafinerisi, Türkmenbaşı MSCC ve Lube Oil Projeleri, Tomskneft Gaz Kompresör İstasyonu, Atyrau Rafinerisi Modernizasyon Projesi, Sakhalin LNG Tesisi, Shoaiba Enerji Santralleri, Erzin Kombine Çevrim Enerji Santrali, Khuraish Gaz ve Petrol Ayrıştırma Tesisi üst düzey görev aldığı projelerden bazılarıdır. 2018-2023 yılları arasında Gazprom'un Amur Gaz sahasındaki proses ünitesi inşaatı ile İtalya ve Rusya'daki modül imalat ve montaj projelerinde üst düzey görevler almıştır. 2023 yılı itibariyle VITO'nun merkez ofisinde Proje Direktörü olarak görev yapmaktadır.",
            coprote_tahir_title: "Mali ve İdari İşler  Direktörü",
            coprote_tahir_cv:
                "1965 yılında doğan Tahir Kolat, 1987 yılında Dokuz Eylül Üniversitesi İktisadi ve İdari Bilimler Fakültesi İşletme Bölümü'nden mezun olduktan sonra 1990 yılında İstanbul Üniversitesi İşletme İktisadı Enstitüsü'nde yüksek lisansını tamamladı. Tahir Kolat, 1989-1994 yılları arasında Deloitte Touche Tohmatsu Bağımsız Denetim firmasında Süpervizör olarak çalışmıştır. 1994-1997 yılları arasında Vakıf Deniz Leasing'de Muhasebe & Operasyon Koordinatörü, 1997-2003 yılları arasında İktisat Leasing'de Genel Müdür Yardımcısı ve Genel Müdür Vekili, 2003-2019 yılları arasında Greıf Flexible Products & Services'de Finansal Kontrolör, 2019-20 yılları arasında Tamer Tanca (Kemal Tanca) Magazacılık Tic. A.Ş.'de 2019-2022 yılları arasında Mali Kontrolör olarak görev yapmıştır. 2022 yılı itibariyle VİTO Genel Müdürlüğü'nde Mali ve İdari İşler Direktörü olarak görev yapmaktadır.",
            coprote_history: "TARİHCE",
            coprota_managment: "YÖNETİM",
            project_PREVIOUS: "ÖNCEKİ",
            project_NEXT: "SONRAKİ",
            project_PROJECTS: "PROJELER",
            project_CLIENT: "MÜŞTERİ",
            project_SCOPE: "KAPSAM",
            project_SUBCONTRACTOR: "TAŞERON",
            project_PROJECT_STATUS: "PROJE DURUM",
            sector_oilandgaz: "Petrol ve Gaz",
            sector_t1: "-EPC Tank Çiftliği",
            sector_t2: "-Borulama ve E&I",
            sector_t3:
                "Sektörlere depolama tesisleri sağlayan lider bir EPC şirketi olarak. Toplam 2,3 milyon metreküpten fazla depolama kapasitesi, 2,4 milyondan fazla WDI boru kaynağı ve çeşitli mekanik ve boru hattı işleri kurduk. Ham petrol, benzin, dizel, kerosen, reformat, nafta ve LPG gibi çeşitli ürünlerin depolanması için kullanılan küresel hidrojenik ve silindirik tanklar da dahil olmak üzere 90 metre çapa kadar tanklar konusunda uzmanız. Mekanik işlerin yanı sıra, elektrik ve enstrümantasyon işlerini, tank temellerini de üstleniyoruz.",
            sector_energy: "Enerji",
            sector_e1:
                "-Türkiye'de ve diğer EMEA ülkelerinde çok sayıda enerji santralinde yaklaşık 5.000 MW kurulu kapasitenin tedarikinde yer aldık. Rolümüz, münferit ekipman tedarikinden tüm tesisin anahtar teslimi tedarikine kadar uzanmaktadır. Aşağıdaki enerji santrali türlerine odaklanıyoruz:",
            sector_e2: "-Kombine çevrim ve açık çevrim tesisleri",
            sector_e3:
                "-Hidroelektrik santralleri gibi yenilenebilir enerji kaynakları",
            sector_e4:
                "Enerji sektöründe, önde gelen OEM'lere (Orijinal Ekipman Üreticileri) enerji adaları tedarikinde yardımcı oluyor ve tesis işlerinin anahtar teslimini sağlıyoruz.",
            contact_title: "Bölgesel Ofisler",
            contact_form: "İletişim Formu",
            contact_form_field1: "Ad / Soyad",
            contact_form_field2: "Telefon Numarası",
            contact_form_field4: "Konu",
            contact_form_field5: "Mesaj",
            contact_form_field6: "GÖNDER",
            contact_form_field7: "GÖNDERİLİYOR",
            contact_meta_title: "İletişim",
            contact_meta_SUCCCES: "Form başarıyla gönderildi.",
            contact_meta_FAİL: "Form gönderilemedi.",
        },
    },
    en: {
        translation: {
            title_news: "News",
            nav_home: "HOME",
            nav_services: "SERVICES",
            nav_humanres: "HUMAN RESOURCES",
            nav_kvkk: "GDPR",
            nav_policy: "COOKIE POLICY",

            nav_aboutus: "ABOUT US",
            nav_corporate: "CORPORATE",
            nav_project: "PROJECTS",
            nav_sector: "SECTORS",
            nav_news: "NEWS",
            nav_contact: "CONTACT",
            home_who: "WHO WE ARE",
            home_who_title: "ViTO Group",
            home_who_content:
                "ViTO has extensive experience in providing a comprehensive range of intricate turnkey construction and erection services, seamlessly integrated under a single umbrella, catering to projects within the Oil & Gas, hydrogen and energy sectors. Widely recognized as industry leaders, ViTO has also achieved excellence in constructing storage facilities and tank farms as accomplished EPC contractors. In 2019, the Group became one of the founding partners of Bergama Industry factory to manufacture pressure vessels and pipe prefabrication in Bergama Organized Industry Zone.",
            home_who_go: "Read More",
            news_read_more: "Read More",
            home_activity_title: "FIELDS OF ACTIVITY",
            home_activity_going: "ONGOING PROJECTS",
            details: "Details",
            home_activity_main: "TURNKEY PROJECTS",
            home_activity_project: "PROJECT DEVELOPMENT",
            home_activity_project2: "FABRICATION",
            home_activity_project3: "MAINTANCE AND SPARE PARTS",
            home_activity_project4: "Steel Structure Erection",
            home_activity_project5:
                "Steel Plates Fabricated and Erected For Tanks",
            home_activity_project6: "Storage Capacity for Tanks",
            home_new: "NEWS",
            about_us_content:
                "ViTO has grown steadily over the past 24 years to become today's ViTO Group of Companies. During this growth process, it has realized various important projects in the field of contracting with partnerships with world-class companies in its field. IVT company, which we had previously established, was 100% included in ViTO Group of Companies in 2017. In 2019, the Group became one of the founding partners of Bergama Industry factory to manufacture pressure vessels and pipe prefabrication in Bergama Organized Industry Zone. Currently exporting to three continents, Bergama Industry's most prominent principles are the delivery of projects on time, customer satisfaction and managing projects in occupational health and safety.",
            about_us_ceo_message: "THE MESSAGE OF THE CHAIRMAN & CEO",
            about_us_ceo_message_content:
                "Founded in 2000, we have steadily grown our company over the years and transformed it into today's ViTO group of companies. During this growth process, we established many experienced and reputable foreign partnerships in the world and realized important projects in the field of contracting. In this context, we added our joint venture contracting company, which we established with our foreign partners, to our ViTO group of companies as IVT company in 2017. After that, in 2019, we opened our Bergama Industry Factory, where pressure vessels and pipe prefabrication are manufactured, in Bergama Organized Industrial Zone. Currently, we export our products to three continents and deliver them to customers all over the world. The priority of our company is the timely delivery of projects managed by our experienced staff and the successful execution of projects by prioritizing customer satisfaction and occupational safety.",
            about_us_vision: "OUR VISION",
            about_us_vision_content:
                "Our vision is to become a leading contracting company in the petrochemical, hydrogen and refinery sectors, renowned for our commitment to sustainability. We aspire to achieve a leadership position in the industry by delivering the highest quality services, embracing innovation, and executing projects that are environmentally conscious. Our vision is built upon the principles of leadership, excellence, and continuous improvement, all while contributing significantly to a carbon-free future.",
            about_us_mission: "OUR MISSION",
            about_us_mission_content:
                "Our mission is to provide high-quality, reliable, and sustainable solutions that meet and exceed the needs and expectations of our customers. We strive to successfully complete projects in the petrochemical and refinery sectors, maintain the highest safety standards, and prioritize customer satisfaction.",
            about_us_value: "OUR VALUES",
            about_us_value_content:
                "Customer Focus: We strive to understand our customers' needs, provide customized solutions, and establish long-term business relationships. Quality and Reliability: We uphold high-quality standards in our projects, commit to delivering reliable and timely services. Innovation and Continuous Improvement: We develop innovative solutions to be at the forefront of the industry, invest in research and technology, and continuously improve ourselves. Environmental Awareness: We plan our projects with consideration for environmental impact, adhere to environmental management systems, and strive to provide sustainable solutions. Teamwork and Collaboration: We encourage teamwork, foster open communication and a culture of collaboration among our employees.",
            about_us_work_prencible: "OUR WORKING PRINCIPLE",
            about_us_work_prencible_content:
                "Ethical Principles: We fully comply with business ethics and integrity principles, adhere to laws and regulations. Occupational Health and Safety: The safety and health of our employees are our top priorities. We take necessary precautions to ensure compliance with occupational health and safety policies. Continuous Improvement: We constantly review our work processes, identify improvement opportunities, and strive to enhance efficiency. Transparency and Accountability: We maintain transparent communication and accountability towards our customers, suppliers, and employees. Social Responsibility: We are committed to being socially responsible, supporting social responsibility projects, and contributing to sustainability. Based on these values and working principles, we aim to maintain the highest level of quality and customer satisfaction as a leading company in the petrochemical and refinery sectors.",
            about_us_ethic: "ETHIC",
            about_us_ethic_title: "CODE OF ETHICS AND BUSINESS CONDUCT",
            about_us_ethic_content:
                "ViTO Group displays the highest standards for understanding and observing laws and regulations; and expects its Employees and Business Partners to always act in a compliant manner. “Respect for people” is the core element of our philosophy. We value human rights and employee rights. Harassment and mobbingare unethical ways of behaving towards a person. Protecting the environment and human health are the basic principles that we prioritize in all our activities. We pay utmost attention to business ethics and moral values. We do not engage in any type of corruption, including facilitation payments, all forms of bribery and corrupt practices, and money laundering. ViTO Group Employees and Business Partners shall not directly or indirectly obtain personal gain from any transactions and contractsrelated to ViTO Group. If Employees and Business Partners suspect any actual or potential violation, we expect them to speak up. All such communicationwill be kept confidential.",
            about_us_hseq_title: "HEALTH SAFETY ENVIRONMENT - QUALITY",
            about_us_hsqe_contetnt1:
                "VİTO olarak Toplam Kalite Yönetimi felsefesini, tüm birimlerimizin katılımını içeren, tüm faaliyetlerimizde uygulanan ve sürekli iyileştirmeyi bir yaşam biçimi olarak kabul eden bir yönetim metodolojisi olarak benimsiyoruz. Güvenli ve sağlıklı bir işyeri sağlamak, faaliyetlerimizi çevreyi koruyacak şekilde yürütmek, müşteri memnuniyetini sağlamak ve sürekli kılmak için sistemlerimizi sürekli iyileştirmek ilkelerimizdir. Çalışanlara, üçüncü şahıslara, mala ve çevreye verilebilecek zararları ortadan kaldırmayı; riskleri analiz etmek ve en aza indirmek için gerekli önlemleri almayı; yüksek riskli durumlarda önlemler alınıncaya kadar işi durdurmayı; tüm kazaların önlenebilir olduğuna inanıyor ve tüm faaliyetlerimizde 'Sıfır Kaza' hedefini gözetmeye devam ediyoruz. ",
            about_us_hsqe_contetnt2: "'Quality'",
            about_us_hsqe_contetnt3: "'Health, Safety, and Environment Policy'",
            about_us_hsqe_contetnt4: "and",
            about_us_hsqe_contetnt5:
                "to our employees and third parties through our Policies. To achieve the goals we set with our Policies, we take guidance from",
            about_us_hsqe_contetnt6: "Quality",
            about_us_hsqe_contetnt7: "Occupational Health and Safety, and ",
            about_us_hsqe_contetnt8:
                "Environmental Management System Standards. We prove the conformity of our Management Systems applied in all our projects and workplaces, including our Head Office, with the standards by the certificates provided by accredited audit institutions.",
            services_enginering: "Engineering",
            services_enginering_content:
                "Our highly disciplined engineering team provides advanced process modeling and detailed design for storage terminals, as well as engineering and design (FEED) services for the initial planning phase. It also includes piping and mechanical work. Our team consists of experienced engineers with different backgrounds from internationally recognized engineering firms and contractors. With our multidisciplinary engineering team, we provide advanced process modeling and detailed design for storage terminals, as well as engineering and design (FEED) services for the initial planning phase, as well as piping and mechanical work. Our team consists of highly experienced engineers with various backgrounds from internationally recognized engineering firms and contractors. We are the only company that provides engineering, procurement, and manufacturing under one roof for tank farm construction in Turkey. Our engineering services are provided by Technicon Mumbai.",
            services_procument: "Procurement",
            services_procument_content:
                "We provide equipment and material procurement, inspection and logistics management from anywhere in the world at the best cost, condition and quality. We benefit from international suppliers in our special database and follow a dual source strategy for critical mission components. Being in strong and continuous communication with all relevant top-level suppliers allows us to respond quickly to possible market changes. In the last 6 years, 69,000 tons of steel sheet supply and processing have been realized. ",
            services_construciton: "Construction",
            services_construciton_content:
                "Our highly experienced senior project management team specializes in construction and installation works for large, international projects. Throughout our past projects, we have gained a strong reputation for safety, quality, and program performance. We create our projects using consistent tools, systems, and standards to achieve superior results safely, even in the most challenging environments For storage terminals, we use our proprietary fleet of over 700 hydraulic jacks to install storage tanks up to 105 meters in diameter faster, safer, and more efficiently, allowing our customers to use their facilities earlier than traditional methods. Our experienced and top-tier project management team specializes in construction and installation works for large, international projects. Throughout our past projects, we have gained a strong reputation for safety, quality, and program performance. We create our projects using consistent tools, systems, and standards to achieve superior quality results safely, even in the most challenging environments. (SUGGESTION: We create our projects using consistent tools, systems, and standards to achieve superior quality results safely, even in the most challenging environments.) Using our proprietary fleet of over 700 hydraulic jacks, we install storage tanks up to 105 meters in diameter faster, safer, and more efficiently, allowing our customers to use their facilities earlier than traditional methods for storage terminals. ",
            services_jack_systems: "Hydraulic jack systems",
            services_jack_systems_content:
                "It is a preferred method in the construction of storage tanks. These systems offer many advantages in terms of safety, quality, and efficiency by allowing the tanks to be installed at ground level. Hydraulic jacking systems consist of hydraulic cylinders placed on the base plate of the tank. These cylinders push the body plates of the tank upwards, creating a space for welding. Once the welding process is completed, the cylinders are operated again and the next plate is placed. In this way, the body of the tank is constructed at ground level. One of the main reasons for the preference of hydraulic jacking systems is safety. Constructing storage tanks at ground level reduces the risk of accidents. This method has proven the reliability of hydraulic jacking systems used in the past 10 years, with no significant incidents reported. Tank constructions made using hydraulic jacking systems do not require scaffolding. So far, 75 tanks have been successfully built using these systems. Especially in petroleum refineries, even the largest tanks with a diameter of 92 meters have been erected using hydraulic jacking systems. These systems also facilitate the installation of heavy tanks weighing up to 1900 tons. Hydraulic jacking systems also facilitate inspection processes. Weld inspectors can inspect the ground-level welds using ultrasonic or other non-destructive testing methods. This makes the inspection process more practical and improves quality control. Weld inspectors can now work without the risk of climbing to hazardous positions. The use of hydraulic jacking systems in tank assembly significantly reduces construction time and cost. The need for cranes is eliminated, and the assembly process is completed faster. Moreover, these systems require less manpower, reducing construction costs. Thus, an economical and efficient tank construction is achieved. Hydraulic jacking systems provide a professional solution in the construction of storage tanks. These systems enhance both work safety and quality. Additionally, they reduce construction time and cost. Tank constructions using hydraulic jacking systems utilize the technology of the future today.",
            services_manufacturing: "Manufacturing",
            services_manufacturing_content:
                "Our subsidiary's production facility is handling multiple fast-track projects for various modules and equipment. We manufacture complex modular assemblies such as plates and structural steel, pipes and pressure vessels, heat exchangers, or columns. We can produce individual components, provide large sub-assemblies, and also perform painting, blasting, post-weld heat treatment, non-destructive examination, and testing at the facility. These components and assemblies are offered as part of our EPC project scope or on a separate project basis for third-party projects. Our company's production facility is simultaneously managing several fast-paced projects for various modules and equipment. We manufacture complex modular assemblies, such as plates and structural steel, pipes and pressure vessels, heat exchangers, or columns. Additionally, we can produce individual components, provide large sub-assemblies, and perform painting, blasting, post-weld heat treatment, non-destructive examination, and testing processes at our facility. These components and assemblies are offered either as part of our EPC project scope or as a separate project basis for third-party projects. Our productions related to our projects are Bergama Industry A, which we established in 2020.Sh.it is also performed.",

            coprote_title: "Corporate Board of Directors",
            coprote_title2: "Chairman & CEO",
            coprote_cv_vedat:
                "Vedat İrdelp, the founder and Chairman of the Board of Directors of our company, graduated from Sankt Georg Science High School in Austria and then graduated from ITU (Istanbul Technical University) Faculty of Engineering and Architecture. He worked as a member of the Board of Directors of a financial institution in Germany, worked on many Mergers & Acquisitions, then came to Turkey and after providing consultancy services in the construction of ISKEN 1.320 MW imported coal power plant in Iskenderun, he founded ViTO Engineering Construction and Contracting Inc. in 2000 in Turkey. In order to develop the engineering and construction works of all facilities related to energy, oil and gas, VITO has established a system that completes the entire supply chain for the realization of industrial structures including power plants, petrochemical plants and refineries with the ViTO group of companies headquartered in Turkey with the Vito Group of Companies, with an engineering office in Mumbai as well as a factory investment in Bergama.Vedat İrdelp, who has served as a member of the Board of Directors of DEİK, WEF, AHK and Galatasaray Sports Club, is the Chairman of the Board of Directors and Group CEO of ViTO Group of Companies.",
            coprote_fuat_title:
                "Vice Chairman <br /> of the Board of Directors",
            coprote_fuat_cv:
                "Born in 1964 in Istanbul, Fuat Şengül graduated from Istanbul Technical University, Department of Civil Engineering (1985) and received his Master's degree from Istanbul Technical University, Faculty of Engineering (1987). He received his specialization certificate from Marmara University Finance and Accounting Department (1988). After working as an investment appraiser in private banks, Mr. Şengül assumed the positions of General Manager and Board Member at Istanbul Gaz Dağıtım A.Ş. (İGDAŞ) (1994-2000). He took over Istanbul Gaz Dağıtım A.Ş. with 100.000 subscribers and increased it to 1.500.000 subscribers. During his term of office, he managed 2.100 km polyethylene, 400 km high pressure steel pipeline and 2 million WDI works. In 2001, Şengül joined Vito Group and worked as an auditor manager in projects such as Gebze thermal power plant, Aslancık hydro power plant and Bergama Industry factory construction. He currently serves as Vice Chairman of the Board of Directors at Vito Engineering Construction and Contracting Inc. He is married and has four children. ",
            coprote_burhan_title: "General Manager",
            coprote_burhan_cv:
                "Burhan Tekdemir is a highly accomplished professional with a strong background in managing complex construction and contracting projects. Tekdemir’s educational background includes a diploma in Business Administration from Boğaziçi University and completed an executive education program for leadership in Sabancı University. He is also an active member of DEIK (Foreign Economic Relations Board of Türkiye), Fenerbahçe Sports Club, and BUMED (Boğaziçi University Alumni Association). Currently serving as an Executive Board Member at ViTO Engineering Construction and Contracting, he has made significant contributions to the company's growth and success. With over 17 years of experience at several high-level positions in ViTO Group, Tekdemir has successfully managed various projects, including the several mechanical works for the STAR Refinery, and the Socar Aliağa tank farm project. He has also held the position of Managing Director at Technicon Azerbaijan, overseeing projects such as the turnkey construction of six storage tanks and the construction of an anti-blast central control building in Baku Heydar Aliyev Refinery. As the Managing Director at IOT-ViTO Construction, he played a key role in the implementation of Türkiye and the region’s largest storage tank project in STAR Refinery. Prior to these roles, Tekdemir served as several management positions at ViTO Energy and Investment, where he has been involved in the projects such as the 900-MW Gebze Combined Cycle Gas-fired power plant and the 120-MW Aslancık Hydro power plant and Business Development Director in IBS Research & Consultancy.",
            coprote_dinc_title: "Deputy Managing Director HSEQ",
            coprote_dinc_cv:
                "Dinç Şenlier graduated from the Middle East Technical University, Department of Electrical Engineering in 1976, and then completed his master's degree at the same university and received the title of Electronics Engineer M.Sc. in 1980. He started his career as a Research Assistant at METU in 1976, and continued his career at PTT General Directorate and Aselsan before joining Tekfen Group in 1982. For 40 years until 2022, he worked in almost every position and responsibility in Tekfen, one of Turkey's largest groups. After working as a General Manager at 2 Tekfen Group companies producing for the Defense Industry for 8 years, and then as Management Representative in the Contracting company, he served as the consultant to the President of Tekfen Group Companies and guided and leaded in many areas. Şenlier, who has been working as the Deputy Managing Director of ViTO Mühendislik İnşaat ve Taahhüt A.Ş. since the beginning of 2022, is married and has one son.",
            coprote_zeki_title: "Project Director and Country Manager Qatar",
            coprote_zeki_cv:
                "Zeki Günay was born in 1972 and graduated from Hacettepe Mechanical Engineering Faculty in 1994. In 1996, after completing his military service, he started his professional career on natural gas distribution pipelines and terminal design works in Turkey. Between 1996-2001, he worked with Foster Wheeler on the Petrol Ofisi Terminal revision and renovation projects in Turkey, from the design phase to the commissioning phase. Between 2001-2010, he worked on overseas projectsFuat and worked with companies such as BP, Technip, Bechtel and Shell in oil and gas projects in different regions from Libya to Sakhalin. In 2010, he started working at Akenerji CEZ and until 2015, he was involved in the construction of one of the largest combined power plants in Turkey, from the feed-in phase to the commissioning phase. Between 2015-2017, he worked as a consultant for power plant projects in Turkey. In 2017, he joined Vito and worked as a project director in several projects between 2017 and 2022 and currently continues his career as Country Manager in Qatar.",
            coprote_reha_title: "Head Office Project Director",
            coprote_reha_cv:
                "Born in 1968, Reha Akın graduated from Middle East Technical University, Department of Mechanical Engineering in 1991 and received his master's degree from the same department in 1994. Mr. Akın also received his European Welding Engineering diploma from SLV Munich Germany in 1992 and his MBA from Işık University in 2014. Mr. Akın worked as a quality system auditor at TSE between 1991 and 1994. After taking part in the construction of a sawmill in Russia between 1994-1996, he worked as Project Manager and Project Director in the construction of oil refineries, LNG plants and power plants in various countries at Gama Holding between 1996-2018. During this period, he also collaborated with companies such as Technip, JGC, Chiyoda, Saipem, Fluor, Alstom, Ansaldo, GE, Shell at a high level. Bukhara Refinery, Turkmenbashi MSCC and Lube Oil Projects, Tomskneft Gas Compressor Station, Atyrau Refinery Modernization Project, Sakhalin LNG Plant, Shoaiba Power Plants, Erzin Combined Cycle Power Plant, Khuraish Gas and Oil Separation Plant are some of the projects in which he worked at senior level. Between 2018 and 2023, he took senior roles in the construction of the process unit at Gazprom's Amur Gas field and module manufacturing and assembly projects in Italy and Russia. As of 2023, he is the Project Director at VITO's head office.",
            coprote_tahir_title: "Director Financial And Administrative",
            coprote_tahir_cv:
                "Born in 1965, Tahir Kolat graduated from Dokuz Eylül University, Faculty of Economics and Administrative Sciences - Department of Business Administration in 1987 and then completed his master's degree at Istanbul University, Institute of Business Economics in 1990. Tahir Kolat worked as a Supervisor at Deloitte Touche Tohmatsu Independent Audit firm between 1989-1994. He worked as Accounting & Operations Coordinator at Vakıf Deniz Leasing between 1994-1997, Assistant General Manager and Acting General Manager at İktisat Leasing between 1997-2003, Financial Controller at Greıf Flexible Products & Services between 2003-2019, Financial Controller at Tamer Tanca (Kemal Tanca) Magazacılık Tic. A.Ş. between 2019 and 2022. As of 2022, he has been working as Finance and Administrative Affairs Director at VİTO Head Office.",
            coprote_history: "HISTORY",
            coprota_managment: "MANAGEMENT",
            project_PREVIOUS: "PREVIOUS",
            project_NEXT: "PREVIOUS",
            project_PROJECTS: "PROJECTS",
            project_CLIENT: "CLIENT",
            project_SCOPE: "SCOPE",
            project_SUBCONTRACTOR: "SUBCONTRACTOR",
            project_PROJECT_STATUS: "PROJECT STATUS",
            sector_oilandgaz: "Oil & Gas",
            sector_t1: "-EPC Tank Farm",
            sector_t2: "-Piping and E&I",
            sector_t3:
                "As a leading EPC company providing storage facilities for the sectors. We have installed more than 2.3 million cubic meters of total storage capacity, more than 2.4 million WDI pipe welding and various mechanical and pipeline works. We are specialized for tanks up to 90 meters in diameter, including sphericali hydrogenic and cylindrical tanks used for storing various products such as crude oil, gasoline, diesel, kerosene, reformate, naphtha and LPG. In addition to mechanical works, we also undertake electrical and instrumentation works, tank foundations.",
            sector_energy: "Energy",
            sector_e1:
                "-We have participated in the supply of approximately 5,000 MW installed capacity in numerous power plants in Turkey and other EMEA countries. Our role ranges from individual equipment supply to turnkey supply of the entire facility. We focus on the following types of power plants:",
            sector_e2: "-Combined cycle and open cycle facilities",
            sector_e3:
                "-Renewable energy sources such as hydroelectric power plants",
            sector_e4:
                "In the energy sector, we assist leading OEMs (Original Equipment Manufacturers) in supplying energy islands and provide turnkey delivery of facility works.",
            contact_title: "Regional Offices",
            contact_form: "Contact Form",
            contact_form_field1: "Name / Surname",
            contact_form_field2: "Mobile Phone",
            contact_form_field4: "Subject",
            contact_form_field5: "Message",
            contact_form_field6: "SUBMIT",
            contact_form_field7: "SENDING",
            contact_meta_title: "Contact",
            contact_meta_SUCCCES: "The form was sent successfully.",
            contact_meta_FAİL: "Form could not be sent.",
        },
    },
};
i18n.use(initReactI18next).init({
    lng: localStorage.getItem("lang"),
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    fallbackLng: "tr",
    resources,
});

export default i18n;
