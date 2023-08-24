import React from "react";
import logo from "../../assets/footer/vitologo.png";
import { BiLogoLinkedin } from "react-icons/bi";
import title from "../../assets/header/title.png";

function ShortFooter() {
    const date = new Date();

    return (
        <div className={`w-full bg-[#093977] relative map-container`}>
            <div className="flex px-10 max-sm:px-2 pb-14 h-96 max-md:h-auto justify-between relative z-20 max-lg:flex-col-reverse mt-10">
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
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                <a href="/">HOME</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                <a href="/instituonal">INSTITUTIONAL</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                <a href="/service">SERVICES</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                <a href="/projects">PROJECTS</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                <a href="/sector">SECTORS</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                <a href="/human-resources">HUMAN RESOURCES</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start hover:text-[#1DA1F2]">
                                <a href="/news">MEDIA</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-end hover:text-[#1DA1F2] text-white">
                                <a href="/pages/vito-lighting-text">KVKK</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-end hover:text-[#1DA1F2] text-white">
                                <a href="/pages/cookie-policy">COOKIE POLICY</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-end hover:text-[#1DA1F2] text-white">
                                <a href="/our-policies">OUR POLICIES</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-end hover:text-[#1DA1F2]">
                                <a href="/contact">CONTACT</a>
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
    );
}

export default ShortFooter;
