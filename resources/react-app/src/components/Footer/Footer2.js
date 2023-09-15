import React, { useState, Fragment, useEffect } from "react";
import logo from "../../assets/footer/vitologo.png";
import map from "../../assets/footer/footermap.png";
import bglogo from "../../assets/footer/bgfooter.png";
import mapcursor from "../../assets/footer/mapcursor.png";
import { Dialog, Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import title from "../../assets/header/title.png";
import buda from "../../assets/footer/buda.jpg";
import { BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import baku from "../../assets/footer/bakü.jpg";
import katar from "../../assets/footer/Katar.jpg";
import bergama from "../../assets/footer/bergama.png";
import dubai from "../../assets/footer/dubai.jpg";
import vadi from "../../assets/footer/Vadistanbul.jpg";
import mumbai from "../../assets/footer/mumbai.jpg";
import Modal from "./MapModal";
import styled from "styled-components";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

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

function Footer2() {
    const [isOpen, toggle] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(0);
    function handlOpenModal(open) {
        toggle(open);
    }

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
    const { t, i18n } = useTranslation();

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
            <div
                className={`w-full bg-[#093977] relative map-container ${
                    showMap ? "show-map" : ""
                }`}
                ref={ref}
            >
                <img
                    src={bglogo}
                    alt="Background"
                    className="absolute right-0 bottom-0 w-[55%] max-md:w-[85%]"
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
                                        {locationList[selectedIndex].location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
                <div className="relative top-20 mb-[31rem] max-lg:mb-[20rem] max-md:mb-[12rem] max-md:top-10">
                    <img
                        className="map-image w-full"
                        id="image-id"
                        src={map}
                        alt="FooterMap"
                    />
                    {locationList.map((item, i) => (
                        <img
                            key={i}
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

                <div className="flex px-10 max-sm:px-2 pb-14 h-[26rem] justify-between relative z-20 max-lg:flex-col-reverse">
                    <div className="flex flex-col justify-between w-2/6 max-lg:w-full max-md:mt-5 max-md:gap-5">
                        <img
                            src={logo}
                            alt="Vito Logo"
                            className="w-52 max-md:w-36"
                        />
                        <img
                            src={title}
                            alt="Vito Title"
                            className="w-52 max-md:w-36 md:-top-9 relative"
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
                            <ul className="max-md:w-[22%]">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/"> {t("nav_home")}</a>
                                </li>
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/corporate">
                                        {t("nav_corporate")}
                                    </a>
                                </li>
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/service">{t("nav_services")}</a>
                                </li>
                            </ul>
                            <ul className="max-md:w-[22%]">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/projects">{t("nav_project")}</a>
                                </li>
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/sector">{t("nav_sector")}</a>
                                </li>
                            </ul>
                            <ul className="max-md:w-[22%]">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/our-policies">
                                        {t("nav_humanres")}
                                    </a>
                                </li>
                            </ul>
                            <ul className="max-md:w-[22%]">
                                <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                    <a href="/news">{t("nav_news")}</a>
                                </li>
                            </ul>
                            <ul className="max-md:w-[22%]">
                                <li className="pb-2 max-sm:text-sm text-end max-md:text-start hover:text-[#1DA1F2] text-white">
                                    <a
                                        href="/pages/vito-clarification-text
"
                                    >
                                        {t("nav_kvkk")}
                                    </a>
                                </li>
                                <li className="pb-2 max-sm:text-sm text-end max-md:text-start hover:text-[#1DA1F2] text-white">
                                    <a href="/pages/cookie-policy">
                                        {t("nav_policy")}
                                    </a>
                                </li>
                                {/* <li className="pb-2 max-sm:text-sm text-end hover:text-[#1DA1F2] text-white">
                                    <a href="/our-policies">OUR POLICIES</a>
                                </li> */}
                                <li className="pb-2 max-sm:text-sm text-end max-md:text-start hover:text-[#1DA1F2]">
                                    <a href="/contact">{t("nav_contact")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-end items-center max-lg:mt-5">
                            <p className="text-sm max-lg:hidden ">
                                Vito ©. Copyright {date.getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex max-lg:flex p-4">
                    <div className="hidden  max-lg:flex justify-center items-center mr-12 max-sm:mr-0">
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
        </>
    );
}

export default Footer2;
