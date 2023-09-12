import React, {
    useState,
    Fragment,
    useEffect,
    useLayoutEffect,
    useRef,
} from "react";
import globalheader from "../../assets/global/globalheader.png";
import map from "../../assets/footer/footermap.png";
import mapcursor from "../../assets/footer/mapcursor.png";
import { Dialog, Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import globalLayer from "../../assets/global/Layer 2.png";
import GlobalSlider from "../../components/Global/GlobalSlider";
import globalLogoBg from "../../assets/global/globalvitologo.png";
import service from "../../service/service";
import baku from "../../assets/footer/bakü.jpg";
import katar from "../../assets/footer/Katar.jpg";
import bergama from "../../assets/footer/bergama.png";
import dubai from "../../assets/footer/dubai.jpg";
import vadi from "../../assets/footer/Vadistanbul.jpg";
import mumbai from "../../assets/footer/mumbai.jpg";
import buda from "../../assets/footer/buda.jpg";
import { Helmet } from "react-helmet";
import Modal from "../../components/Footer/MapModal";
import styled from "styled-components";

const ModalContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        color: #5c3aff;
    }
`;

function Global() {
    const [data, setData] = useState(null);
    const [isOpen, toggle] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showMap, setShowMap] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    function handlOpenModal(open) {
        toggle(open);
    }

    useLayoutEffect(() => {
        getDataHandler();
        window.scrollTo(0, 0);
    }, []);
    const getDataHandler = async () => {
        const result = await service.getGlobalVito();
        setData(result.data);
    };
    useEffect(() => {
        // Sayfa yüklendiğinde veya uygun bir tetikleyiciyle haritayı göstermek için setShowMap değerini true yapın
        if (inView === true) {
            setShowMap(true);
        }
    }, [inView]);

    const locationList = [
        {
            address: "ViTO Head Office",
            location:
                "Ayazağa, Vadistanbul, Azerbaycan Cd. 3B D:1B Blok, 34485 Sarıyer/İstanbul",
            img: vadi,
            left: 55,
            top: 22,
        },
        {
            address: "Technicon Engineering",
            location:
                "Office No 404,4th Floor, Filix Condominium, L.B.S Marg, Bhandup West, Maharashtra, Mumbai, India",
            img: mumbai,
            left: 70,
            top: 44,
        },
        {
            address: "Technicon Dubai",
            location:
                "Jebel Ali free zone, Office S10123O019, Dubai, United Arab Emirates",
            img: dubai,
            left: 64,
            top: 37,
        },
        {
            address: "Technicon Baku",
            location: "Xocalı prospekti 37, Demirchi Tower, 21-ci mərtəbə",
            img: baku,
            left: 61,
            top: 24,
        },
        {
            address: "Vito Qatar",
            location:
                "Al-Gassar Tower Street 920 Zone 63 Building No 27 West Bay  P.O Box 26660  Doha QATARLandline No: +974 400 784 54",
            img: katar,
            top: 37,
            left: 62,
        },
        {
            address: "Bergama Industry",
            location:
                "Bergama OSB Mahallesi, 3.Cadde, No:1, 35700 İzmir,Türkiye +90 232 690 0 690",
            img: bergama,
            top: 24,
            left: 54,
        },
        {
            address: "Vigor Construction",
            location: "Budapest Hungary",
            img: buda,
            top: 17,
            left: 51,
        },
    ];
    const imageRef = useRef();
    useEffect(() => {
        const closeDropdown = (e) => {
            if (e.target.className === "sc-bcPKhP bLLjPR") {
                handlOpenModal(false);
            }
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, []);
    return (
        <>
            <Helmet>
                <title>ViTO Global</title>

                <meta name="description" content="Vito Global" />
                <meta name="keywords" content="Vito Global Page" />
                <link rel="canonical" href={`/vito-global`} />

                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO Energy Engineering " />
            </Helmet>
            <div className="w-full flex justify-center items-center relative">
                <img className="w-full" src={globalheader} alt="VitoGlobal" />
                <p className="absolute text-6xl font-bold max-md:text-3xl text-center text-[#093977] tracking-widest z-50">
                    ViTO GLOBAL
                </p>
                <div className="w-full h-full absolute bg-black opacity-30 z-40" />
            </div>
            <div
                className={`w-full bg-[#093977] relative map-container ${
                    showMap ? "show-map" : ""
                }`}
                ref={ref}
            >
                <div className="relative top-20 mb-[10rem] max-lg:mb-[5rem]  max-md:top-10">
                    <img
                        className="map-image w-full"
                        id="image-id"
                        src={map}
                        alt="FooterMap"
                    />
                    <Modal
                        isOpen={isOpen}
                        ref={imageRef}
                        handleClose={() => handlOpenModal(false)}
                    >
                        <ModalContent>
                            <div className="flex max-md:flex-col z-[200] w-full h-full">
                                <img
                                    src={locationList[selectedIndex].img}
                                    className="w-[35%] max-md:w-full max-md:h-44 max-md:object-cover max-md:object-bottom"
                                    alt="LocationImage"
                                />
                                <div className="w-[65%] p-6 max-md:w-full">
                                    <p className="text-lg font-medium leading-6 text-gray-900">
                                        {locationList[selectedIndex].address}
                                    </p>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {
                                                locationList[selectedIndex]
                                                    .location
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ModalContent>
                    </Modal>
                    {locationList.map((item, i) => (
                        <img
                            src={mapcursor}
                            onClick={() => {
                                setSelectedIndex(i);
                                handlOpenModal(true);
                            }}
                            className="absolute  w-[3%] hover:scale-110 ease-in duration-100 cursor-pointer map-image-cursor"
                            style={{
                                left: `${item.left}%`,
                                top: `${item.top}%`,
                            }}
                            alt="Map Cursor"
                        />
                    ))}
                </div>
                <div className="w-full flex">
                    <img
                        className="absolute w-[60%] left-0 bottom-[35%] z-10"
                        src={globalLogoBg}
                        alt="Vito_Global_Background"
                    />
                    <div className="w-3/4 pl-10 max-md:px-5 max-sm:w-full z-50">
                        {data?.map((item, i) => (
                            <>
                                <div key={i} className="w-full my-20">
                                    <div className="text-5xl max-md:text-3xl font-bold text-white my-2 flex justify-start items-center">
                                        <img
                                            src={mapcursor}
                                            alt="TitleCursor"
                                            className="w-10 mr-5 max-md:w-6"
                                        />
                                        {item.title}
                                    </div>
                                    <p
                                        className="mt-10 text-white text-lg max-md:text-base font-light"
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                </div>
                                {item.images != null && (
                                    <GlobalSlider sliderImage={item.images} />
                                )}
                            </>
                        ))}
                    </div>
                    <div className="w-1/4 h-[1500px] flex justify-end items-center max-sm:hidden z-30">
                        <p
                            className="text-9xl font-bold text-white tracking-[1.2rem]"
                            style={{ writingMode: "vertical-rl" }}
                        >
                            ViTO GLOBAL
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <img
                        className="w-4/6 max-md:w-5/6"
                        src={globalLayer}
                        alt="GlobalImage"
                    />
                </div>
            </div>
        </>
    );
}

export default Global;
