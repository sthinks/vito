import React, { useState, Fragment, useEffect } from "react";
import logo from "../../assets/footer/vitologo.png";
import map from "../../assets/footer/footermap.png";
import bglogo from "../../assets/footer/bgfooter.png";
import bglogosecond from "../../assets/footer/bgsecond.png";
import mapcursor from "../../assets/footer/mapcursor.png";
import { Dialog, Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import { BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import footerWave from "../../assets/footer/footerwaves.png";

function Footer2() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        // Sayfa yüklendiğinde veya uygun bir tetikleyiciyle haritayı göstermek için setShowMap değerini true yapın
        if (inView === true) {
            setShowMap(true);
        }
    }, [inView]);

    const date = new Date();
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
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div
                className={`w-full bg-[#093977] relative map-container ${
                    showMap ? "show-map" : ""
                }`}
                ref={ref}
                onScroll={(e) => console.log(e.currentTarget.scrollTop)}
            >
                <img
                    src={bglogo}
                    alt="Background"
                    className="absolute right-0 bottom-0 w-[55%] max-md:w-[85%]"
                />

                <div className="relative top-20 mb-[31rem] max-lg:mb-[20rem] max-md:mb-[12rem] max-md:top-10">
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
                                setSelectedIndex(i);
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

                <div className="flex px-10 max-sm:px-2 pb-14 h-96 justify-between relative z-20 max-lg:flex-col-reverse">
                    <div className="flex flex-col justify-between w-2/6 max-lg:w-full max-md:mt-5 max-md:gap-5">
                        <img
                            src={logo}
                            alt="Vito Logo"
                            className="w-52 max-md:w-36"
                        />
                        <div className="text-white text-base max-md:text-sm">
                            <p>Vadistanbul Ayazağa Mah.</p>

                            <p>
                                Azerbaycan Cad. 3B 1B Blok <br />
                            </p>
                            <p>34485 Sarıyer-İstanbul</p>
                            <p>Türkiye</p>
                            <div className="flex justify-start items-start mt-5">
                                <p className="font-bold ">
                                    CONTACT <br />
                                    <a
                                        className="font-normal"
                                        href="tel:+902122323030"
                                    >
                                        +90 (212) 232 30 30
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between w-4/6 max-lg:w-full text-white flex-col">
                        <div className="flex justify-between text-white max-lg:flex-wrap  max-md:gap-5 max-md:flex-initial max-md:items-start">
                            <ul className="">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/">HOME</a>
                                </li>
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/instituonal">INSTITUTIONAL</a>
                                </li>
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="#">SERVICES</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="#">PROJECTS</a>
                                </li>
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="#">SECTORS</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="#">HUMAN RESOURCES</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="#">MEDIA</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li className="pb-2 max-sm:text-sm text-end hover:text-[#1DA1F2]">
                                    <a href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-end items-center max-lg:mt-5">
                            <div className="flex justify-center items-center mr-12 max-sm:mr-0 max-lg:hidden">
                                <a
                                    href="https://www.linkedin.com/company/vitogroup?originalSubdomain=tr"
                                    target="blank"
                                >
                                    <BiLogoLinkedin className="text-3xl mx-1 text-[#456998] cursor-pointer hover:text-white max-md:text-white" />
                                </a>
                            </div>

                            <p className="text-sm max-lg:hidden ">
                                Vito ©. Copyright {date.getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex max-lg:flex p-4">
                    <div className="hidden  max-lg:flex justify-center items-center mr-12 max-sm:mr-0">
                        <a href="https://twitter.com/GroupVito" target="blank">
                            <BiLogoTwitter className="text-3xl mx-1 text-[#456998] cursor-pointer hover:text-[#1DA1F2] max-md:text-[#1DA1F2]" />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/vitogroup?originalSubdomain=tr"
                            target="blank"
                        >
                            <BiLogoLinkedin className="text-3xl mx-1 text-[#456998] cursor-pointer hover:text-white max-md:text-white" />
                        </a>
                    </div>
                    <p className="hidden max-lg:flex text-xs text-white w-full text-end max-lg:justify-end max-lg:items-center ">
                        Vito ©. Copyright {date.getFullYear()}
                    </p>
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

export default Footer2;
