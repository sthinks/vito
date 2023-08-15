import React, { useState, Fragment, useEffect, useLayoutEffect } from "react";
import globalheader from "../../assets/global/globalheader.png";
import map from "../../assets/footer/footermap.png";
import mapcursor from "../../assets/footer/mapcursor.png";
import { Dialog, Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import globalLayer from "../../assets/global/Layer 2.png";
import GlobalSlider from "../../components/Global/GlobalSlider";
import globalLogoBg from "../../assets/global/globalvitologo.png";
import service from "../../service/service";
function Global() {
    const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showMap, setShowMap] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        getDataHandler();
    }, []);
    const getDataHandler = async () => {
        const result = await service.getGlobalVito();
        console.log(result);
        setData(result.data);
    };
    useEffect(() => {
        // Sayfa yüklendiğinde veya uygun bir tetikleyiciyle haritayı göstermek için setShowMap değerini true yapın
        if (inView === true) {
            setShowMap(true);
        }
    }, [inView]);
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    const locationList = [
        {
            address: "Ayazağa, Vadistanbul, Azerbaycan Cd. 3B D:1B",
            location: "Blok, 34485 Sarıyer/İstanbul",
            img: "https://1.bp.blogspot.com/-b05_L9u_wf4/X5d2fWg1SQI/AAAAAAAANRs/JzHRWiZWsOo_RKXo3IKsRMqVwOz2mArmwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Vadistanbul.jpg",
            left: 54,
            top: 19,
        },
        {
            address: "Technicon Mumbai",
            location: "Indian",
            img: "https://img.freepik.com/free-photo/new-york-skycraper-sunset-usa_268835-758.jpg?w=740&t=st=1689763378~exp=1689763978~hmac=838893463fe82ede3b799e9d933f90c02a9d85e015208afd647f95f0ad9f2201",
            left: 69,
            top: 42,
        },
        {
            address: "Technicon Dubai",
            location: "Dubai",
            img: "https://img.freepik.com/free-photo/axelborg-towers_181624-29215.jpg?w=740&t=st=1689763407~exp=1689764007~hmac=9a9ea5aa64efdf9f8b1cec63726d6de4109e8a0f22d3ca549cc4b90c1251d470",
            left: 59,
            top: 42,
        },
        {
            address: "Technicon Bakü",
            location: "Azerbaycan",
            img: "https://img.freepik.com/free-photo/axelborg-towers_181624-29215.jpg?w=740&t=st=1689763407~exp=1689764007~hmac=9a9ea5aa64efdf9f8b1cec63726d6de4109e8a0f22d3ca549cc4b90c1251d470",
            left: 69,
            top: 20,
        },
    ];
    return (
        <>
            <div className="w-full flex justify-center items-center relative">
                <img src={globalheader} alt="VitoGlobal" />
                <p className="absolute text-6xl font-bold max-md:text-3xl text-center text-[#093977] tracking-widest z-50">
                    ViTO GLOBAL
                </p>
                <div className="w-full h-full absolute bg-cyan-400 opacity-20 z-40" />
            </div>
            <div
                className={`w-full bg-[#093977] relative map-container ${
                    showMap ? "show-map" : ""
                }`}
                ref={ref}
            >
                <div className="relative top-20 mb-[10rem] max-lg:mb-[5rem]  max-md:top-10">
                    <img
                        className="map-image"
                        id="image-id"
                        src={map}
                        alt="FooterMap"
                    />
                    {locationList.map((item, i) => (
                        <img
                            src={mapcursor}
                            onClick={() => {
                                setSelectedIndex(1);
                                openModal();
                            }}
                            className="absolute  w-[4%] hover:scale-110 ease-in duration-100 cursor-pointer map-image-cursor"
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
                            VITO GLOBAL
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
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-600"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-500"
                                enterFrom="opacity-0 scale-95 mr-20"
                                enterTo="opacity-100 scale-100 max-md:w-5/6"
                                leave="ease-in duration-200 ml-20"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className="flex max-md:flex-col">
                                        <img
                                            src={
                                                locationList[selectedIndex].img
                                            }
                                            className="w-1/4 max-md:w-full max-md:h-44 max-md:object-cover max-md:object-bottom"
                                            alt="LocationImage"
                                        />
                                        <div className="w-3/4 p-6 max-md:w-full">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                {
                                                    locationList[selectedIndex]
                                                        .address
                                                }
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    {
                                                        locationList[
                                                            selectedIndex
                                                        ].location
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Global;
