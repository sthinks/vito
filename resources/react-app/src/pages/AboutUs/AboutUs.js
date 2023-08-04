import React, { useLayoutEffect, useState } from "react";
import Aboutusbg from "../../assets/aboutus/aboutusbg.png";
import AboutusRight from "../../assets/aboutus/aboutusright.png";
import AboutWawes from "../../assets/aboutus/aboutwawes.png";
import service from "../../service/service";
import pr1 from "../../assets/aboutus/pr1.png";
import pr2 from "../../assets/aboutus/pr2.png";
import pr3 from "../../assets/aboutus/pr3.png";
import pr4 from "../../assets/aboutus/pr4.png";
import pr5 from "../../assets/aboutus/pr5.jpg";
import serviceBg from "../../assets/aboutus/servicebg.png";
import { useInView } from "react-intersection-observer";
function AboutUs() {
    const [data, setData] = useState(null);
    const [dataService, setDataService] = useState(null);
    const [newsAnim, setNewsAnim] = useState(false);
    useLayoutEffect(() => {
        getDataStatHandler();
        getDataServiceHandler();
    }, []);
    const getDataStatHandler = async () => {
        const result = await service.getAboutStat();
        setData(result.data);
    };
    const getDataServiceHandler = async () => {
        const result = await service.getAboutServices();
        setDataService(result.data);
    };
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    if (inView === true) {
        if (newsAnim !== true) {
            setNewsAnim(true);
        }
    }
    return (
        <>
            <div
                className="w-full bg-[#093977] relative"
                style={{
                    backgroundImage: `url(${Aboutusbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                }}
            >
                <img
                    className="absolute w-full h-auto z-50 bottom-[-0.1rem] left-0"
                    src={AboutWawes}
                    alt="AboutUsWawes"
                />
                <div className="w-full flex justify-center items-center flex-col text-center pt-56 pb-20 px-36 max-lg:px-20 max-md:px-12">
                    <p className="text-7xl font-bold max-md:text-5xl text-center text-white tracking-widest z-50 py-10">
                        ABOUT US
                    </p>
                    <p className="text-xl font-normal max-md:text-lg text-center text-white z-50 py-10">
                        Hindistan’daki mühendislik ofisimiz, Türkiye’deki uzman
                        mühendislerimiz ile proje yönetimi ve satın alma,
                        Katar,Azerbaycan’daki inşaat gruplarımız ile EPC tank
                        çiftliği projeleri yanı sıra OIL&GAS ve enerji
                        sektöründeki tüm projeler de tek çatı altındaanahtar
                        teslim inşaat ve montaj hizmetleri vermekteyiz.
                        Bergama'da kurulu tüm uluslararası kalite
                        sertifikalarına sahip fabrikamız ile de müşterilerimize
                        basınçlı kap, borulama prefabrikasyonu ve muhtelif çelik
                        konstrüksiyonu dünya standartlarında üretebilmektedir.
                    </p>
                </div>
                {data != null && (
                    <div className="w-full flex flex-wrap pb-20 justify-center items-center">
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className={`w-2/6 max-md:w-3/6  h-40 p-2 cursor-pointer hover:-translate-y-2 transition delay-200 ease-in max-md:hover:-translate-x-0`}
                            >
                                <div
                                    className={`w-full h-full shadow-md shadow-slate-800 flex flex-col justify-center items-center`}
                                    style={{
                                        backgroundColor: `${item.color_code}`,
                                    }}
                                >
                                    <div className="text-white text-center flex items-end">
                                        <p className="text-4xl font-bold max-lg:text-2xl max-md:text-xl">
                                            {item.value}
                                        </p>
                                        <p className="text-lg ml-2 max-md:text-base text-center">
                                            {item.type}
                                        </p>
                                    </div>

                                    <p className="text-lg text-white max-md:text-sm text-center">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="w-full relative">
                    <img
                        className="absolute right-0 w-2/6 -top-12 max-lg:-top-5 max-sm:hidden"
                        src={AboutusRight}
                        alt="AboutusRightImage"
                    />
                    <div className="w-full flex justify-start items-center px-20 pb-20 max-sm:px-0 max-sm:pb-0 max-sm:justify-center">
                        <div className="w-[40%] max-lg:w-[55%] max-sm:w-5/6">
                            <p className="text-4xl font-bold text-white py-2">
                                OUT VISION
                            </p>
                            <p className="text-lg font-light text-white py-2">
                                Our vision is to be among the premier
                                engineering, construction, and project
                                management organizations by achieving
                                extraordinary results for our customers who
                                engage us for our expertise, industry knowledge
                                and ability to execute. We strive to establish
                                long-lasting relationships with our customers
                                who work together with us year after year.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-start pb-40">
                        <div className="w-1/4 h-auto relative -left-40 max-sm:hidden">
                            <p
                                className="text-[13rem] font-bold text-white tracking-[1.2rem] "
                                style={{
                                    writingMode: "vertical-rl",
                                    rotate: "180deg",
                                }}
                            >
                                VİTO
                            </p>
                        </div>
                        <div className="w-3/4 relative -left-40 max-lg:-left-24 max-md:-left-12 max-sm:left-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-full">
                            <div className="w-3/6 max-lg:w-5/6 my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    MISSINION
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    Petrotrokim ya ve rafineri sektöründe öncü
                                    bir müteahhitlik firması olmayı
                                    hedefliyoruz. Sektörde liderlik konumuna
                                    ulaşarak, müşterilerimize en kaliteli
                                    hizmeti sunan, yeniliklere açık ve çevreye
                                    duyarlı projeler gerçekleştiren bir firma
                                    olmak istiyoruz. Vizyonumuz, liderlik,
                                    mükemmeliyet ve sürekli gelişim anlayışı
                                    üzerine kuruludur.
                                </p>
                            </div>
                            <div className="w-5/6  my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    DEĞERLERİMİZ
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    Müşteri Odaklılık: Müşterilerimizin
                                    ihtiyaçlarını anlamak, onlara
                                    özelleştirilmiş çözümler sunmak ve uzun
                                    süreli iş ilişkileri kurmak için çaba
                                    gösteriyoruz. Kalite ve Güvenilirlik:
                                    Projelerimizde yüksek kalite standartlarını
                                    koruyor, güvenilir ve zamanında hizmet
                                    sunmayı taahhüt ediyoruz. İnovasyon ve
                                    Sürekli Gelişim: Sektörde öncü olmak için
                                    yenilikçi çözümler geliştiriyor, araştırma
                                    ve teknolojiye yatırım yaparak sürekli
                                    kendimizi geliştiriyoruz. Çevreye
                                    Duyarlılık: Projelerimizi çevresel etkilere
                                    duyarlı bir şekilde planlıyor, çevre yönetim
                                    sistemlerine uymayı önemsiyor ve
                                    sürdürülebilir çözümler üretmek için çaba
                                    gösteriyoruz. Ekip Çalışması ve İşbirliği:
                                    Takım çalışmasını teşvik ediyor,
                                    çalışanlarımız arasında açık iletişim ve
                                    işbirliği kültürünü destekliyoruz.
                                </p>
                            </div>
                            <div className="w-5/6  my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    ÇALIŞMA PRENSİBİMİZ
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    Müşteri Odaklılık: Müşterilerimizin
                                    ihtiyaçlarını anlamak, onlara
                                    özelleştirilmiş çözümler sunmak ve uzun
                                    süreli iş ilişkileri kurmak için çaba
                                    gösteriyoruz. Kalite ve Güvenilirlik:
                                    Projelerimizde yüksek kalite standartlarını
                                    koruyor, güvenilir ve zamanında hizmet
                                    sunmayı taahhüt ediyoruz. İnovasyon ve
                                    Sürekli Gelişim: Sektörde öncü olmak için
                                    yenilikçi çözümler geliştiriyor, araştırma
                                    ve teknolojiye yatırım yaparak sürekli
                                    kendimizi geliştiriyoruz. Çevreye
                                    Duyarlılık: Projelerimizi çevresel etkilere
                                    duyarlı bir şekilde planlıyor, çevre yönetim
                                    sistemlerine uymayı önemsiyor ve
                                    sürdürülebilir çözümler üretmek için çaba
                                    gösteriyoruz. Ekip Çalışması ve İşbirliği:
                                    Takım çalışmasını teşvik ediyor,
                                    çalışanlarımız arasında açık iletişim ve
                                    işbirliği kültürünü destekliyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="text-6xl font-semibold text-[#093977] max-md:text-5xl">
                    HİZMETLER
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <div
                ref={ref}
                className="w-full flex flex-wrap justify-center items-center px-32 py-6 max-lg:px-10 max-md:px-6 max-sm:px-2"
            >
                {dataService != null &&
                    dataService.map((item, i) => (
                        <div
                            key={i}
                            className="w-2/6 flex justify-center items-center max-md:w-5/6"
                        >
                            <div className="relative rounded-full w-64 h-64 flex justify-center items-center max-sm:w-52 max-sm:h-52 max-sm:m-2">
                                {/* Dönen Çerçeve */}
                                <div
                                    style={{
                                        backgroundColor: `${item.color_code}`,
                                    }}
                                    className={`absolute top-0 left-0 w-full h-full rounded-full bg-cover ${
                                        newsAnim ? "animate-spin" : ""
                                    }`}
                                ></div>
                                {/* Dönen Border */}
                                <div
                                    className={`absolute top-0 left-0 w-full h-full  rounded-full ${
                                        newsAnim ? "animate-spin" : ""
                                    } bg-cover`}
                                    style={{
                                        backgroundImage: `url(${serviceBg})`,
                                    }}
                                ></div>
                                {/* Sabit Resim */}
                                <img
                                    className="w-[90%] relative z-30 rounded-full border-[12px] border-[#ffffff57]"
                                    src={item.image}
                                    alt="ServicesImage"
                                />
                                <div className="absolute z-40 w-[83%] h-[82%] border-4 border-black   rounded-full bg-black opacity-30" />
                                <p className="absolute text-white text-2xl font-bold text-center z-50">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="text-6xl font-semibold text-[#093977] max-md:text-5xl">
                    ETİK
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <div className="w-full px-24 flex justify-center items-center flex-col max-md:px-6">
                <p className="text-2xl font-bold text-black py-4 text-center ">
                    CODE OF ETHICS AND BUSINESS CONDUCT
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-5">
                    ViTOGroup displays the highest standards for understanding
                    and observing laws and regulations; and expects its
                    Employees and Business Partners to always act in a compliant
                    manner.
                </p>
                <p className="text-xl font-normal text-slate-700 text-center py-5">
                    “Respect for people” is the core element of our philosophy.
                    We value human rights and employee rights. Harassment and
                    mobbingare unethical ways of behaving towards a person.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-5">
                    Protecting the environment and human health are the basic
                    principles that we prioritize in all our activities.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-5">
                    We pay utmost attention to business ethics and moral values.
                    We do not engage in any type of corruption, including
                    facilitation payments, all forms of bribery and corrupt
                    practices, and money laundering.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-5">
                    ViTOGroup Employees and Business Partners shall not directly
                    or indirectly obtain personal gain from any transactions and
                    contractsrelated to ViTOGroup.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-5">
                    If Employees and Business Partners suspect any actual or
                    potential violation, we expect them to speak up. All such
                    communicationwill be kept confidential.
                </p>
            </div>
        </>
    );
}

export default AboutUs;
