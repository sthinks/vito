import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/header/logo.png";
import LogoTitle from "../../assets/header/title.png";
import BlueLogo from "../../assets/header/blue.png";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import engIcon from "../../assets/header/engIcons.svg";
import trIcon from "../../assets/header/trIcon.svg";
import { useTranslation } from "react-i18next";
import { BsFillPeopleFill, BsBuilding } from "react-icons/bs";
import { BiWorld, BiImages, BiSolidContact, BiNews } from "react-icons/bi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";

import "./HamburgerMenu.css";
function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleResize = () => {
        // Set isVisible to true if the window width is greater than or equal to 768px, otherwise false
        setIsVisible(window.innerWidth >= 768);

        if (isOpen && window.innerWidth < 768) {
            setIsOpen(false);
        }
    };

    const [hasOpacity, setHasOpacity] = useState(true);
    const mobilRef = useRef();
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHasOpacity(false);
        } else {
            setHasOpacity(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        const closeDropdown = (e) => {
            console.log(e.target.className);
            if (
                e.target.className ===
                "w-full absolute h-screen top-[80px] flex justify-end left-0 z-[9999]"
            ) {
                setIsOpen(false);
            }
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, []);

    useEffect(() => {
        // Add event listener to handle window resizing
        window.addEventListener("resize", handleResize);

        // Call the handleResize function on initial render<

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);
    const navigate = useNavigate();
    const changeLanguage = (lang) => {
        console.log(i18n.language);
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    const date = new Date();
    return (
        <header>
            <nav
                className={`${
                    hasOpacity ? "bg-transparent" : "bg-[#fff] opacity-100 "
                } h-20 flex justify-center px-28 max-2xl:px-20 max-xl:px-10 max-lg:px-4 items-center fixed z-[9999] w-full transition-all max-md:hidden`}
            >
                <div
                    className="flex justify-center items-center logo w-2/12"
                    onClick={() => navigate("/")}
                >
                    <Link className="relative w-[80%]" to="/">
                        <img
                            onClick={() => navigate("/")}
                            src={hasOpacity ? Logo : BlueLogo}
                            alt="Logo"
                            className="w-full"
                        />
                        <img
                            className={
                                hasOpacity
                                    ? "absolute -bottom-10 max-lg:-bottom-6 w-full"
                                    : "hidden"
                            }
                            src={LogoTitle}
                            alt="LogoTitle"
                        />
                    </Link>
                </div>
                <ul className="flex flex-row justify-around navbar-ul items-center w-9/12">
                    <li className="text-white font-bold text-base max-xl:text-xs  text-center w-full">
                        <Link
                            className={`${
                                hasOpacity
                                    ? "text-[#fff]"
                                    : "text-[#1b4378] hover:bg-[#1b4378]  hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                            } `}
                            to="/about-us"
                        >
                            {t("nav_aboutus")}
                        </Link>
                    </li>
                    <li className="text-white font-bold text-base max-xl:text-xs  text-center w-full">
                        <Link
                            className={`${
                                hasOpacity
                                    ? "text-[#fff]"
                                    : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                            } `}
                            to="/corporate"
                        >
                            {t("nav_corporate")}
                        </Link>
                    </li>
                    <li className="text-white font-bold text-base max-xl:text-xs  text-center w-full">
                        <Link
                            className={`${
                                hasOpacity
                                    ? "text-[#fff]"
                                    : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                            } `}
                            to="/vito-global"
                        >
                            GLOBAL
                        </Link>
                    </li>
                    <li className="text-white font-bold text-base max-xl:text-xs  text-center w-full">
                        <Link
                            className={`${
                                hasOpacity
                                    ? "text-[#fff]"
                                    : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                            } `}
                            to="/projects"
                        >
                            {t("nav_project")}
                        </Link>
                    </li>
                    <li className="text-white font-bold text-base max-xl:text-xs  text-center w-full">
                        <Link
                            className={`${
                                hasOpacity
                                    ? "text-[#fff]"
                                    : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                            } `}
                            to="/sector"
                        >
                            {t("nav_sector")}
                        </Link>
                    </li>
                    <li className="text-white font-bold text-base max-xl:text-xs  text-center w-full">
                        <Link
                            className={`${
                                hasOpacity
                                    ? "text-[#fff]"
                                    : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                            } `}
                            to="/news"
                        >
                            {t("nav_news")}
                        </Link>
                    </li>
                    <li className="text-white font-bold text-base max-xl:text-xs  text-center w-full">
                        <Link
                            className={`${
                                hasOpacity
                                    ? "text-[#fff]"
                                    : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                            } `}
                            to="/contact"
                        >
                            {t("nav_contact")}
                        </Link>
                    </li>
                </ul>
                <div className="w-1/12 flex justify-around items-center">
                    <div
                        className={`flex justify-around items-center  ${
                            hasOpacity ? "text-white" : "text-black"
                        }`}
                    >
                        {i18n.language === "tr" ? (
                            <img
                                className="w-6 cursor-pointer"
                                src={engIcon}
                                alt="EngIcon"
                                onClick={() => changeLanguage("en")}
                            />
                        ) : (
                            <img
                                className="w-6 cursor-pointer"
                                src={trIcon}
                                alt="TrIcon"
                                onClick={() => changeLanguage("tr")}
                            />
                        )}
                    </div>
                    <div className="text-[#456998] text-3xl cursor-pointer max-lg:text-2xl ">
                        <a
                            href="https://tr.linkedin.com/company/vitogroup"
                            target="blank"
                        >
                            <FaLinkedinIn
                                className={`${
                                    hasOpacity ? "text-white" : "text-[#1b4378]"
                                }`}
                            />
                        </a>
                    </div>
                </div>
            </nav>

            <nav
                className={
                    hasOpacity
                        ? "bg-[#fff] h-20 w-full p-5 justify-between items-center relative z-[9999]  opacity-90 hidden max-md:flex"
                        : "bg-[#fff] h-20 w-full p-5 justify-between items-center fixed z-[9999] opacity-90 hidden max-md:flex"
                }
            >
                <div className="flex justify-center items-center">
                    <img
                        src={BlueLogo}
                        alt="sa"
                        className="w-[150px]"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div
                    ref={mobilRef}
                    className={
                        !isOpen
                            ? "hidden"
                            : "w-full absolute h-screen top-[80px] flex justify-end left-0 z-[9999]"
                    }
                >
                    <nav
                        className={
                            !isOpen
                                ? "hidden"
                                : " w-[65%] h-screen  bg-white flex flex-col justify-between"
                        }
                    >
                        {/* Burada menü öğelerini ekleyebilirsiniz */}
                        <ul className="bg-white ">
                            <li className="text-black font-bold text-lg  max-xl:text-sm ">
                                <Link
                                    to="/about-us"
                                    className="w-full flex justify-end items-center gap-10 p-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t("nav_aboutus")}
                                    <BsFillPeopleFill className="text-2xl text-[#264ea4]" />
                                </Link>
                            </li>
                            <li className="text-black font-bold text-lg max-xl:text-sm ">
                                <Link
                                    to="/corporate"
                                    className="w-full flex justify-end items-center gap-10 p-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t("nav_corporate")}
                                    <BsBuilding className="text-2xl text-[#264ea4]" />
                                </Link>
                            </li>
                            <li className="text-black font-bold text-lg max-xl:text-sm ">
                                <Link
                                    to="/vito-global"
                                    className="w-full flex justify-end items-center gap-10 p-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    {t("nav_global")}
                                    <BiWorld className="text-2xl text-[#264ea4]" />
                                </Link>
                            </li>
                            <li className="text-black font-bold text-lg max-xl:text-sm ">
                                <Link
                                    to="/projects"
                                    className="w-full flex justify-end items-center gap-10 p-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t("nav_project")}
                                    <BiImages className="text-2xl text-[#264ea4]" />
                                </Link>
                            </li>

                            <li className="text-black font-bold text-lg max-xl:text-sm ">
                                <Link
                                    to="/sector"
                                    className="w-full flex justify-end items-center gap-10 p-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    {t("nav_sector")}
                                    <IoAnalyticsOutline className="text-2xl text-[#264ea4]" />
                                </Link>
                            </li>
                            <li className="text-black font-bold text-lg max-xl:text-sm ">
                                <Link
                                    to="/news"
                                    className="w-full flex justify-end items-center gap-10 p-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    {t("nav_news")}
                                    <BiNews className="text-2xl text-[#264ea4]" />
                                </Link>
                            </li>
                            <li className="text-black font-bold text-lg max-xl:text-sm ">
                                <Link
                                    to="/contact"
                                    className="w-full flex justify-end items-center gap-10 p-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    {t("nav_contact")}
                                    <BiSolidContact className="text-2xl text-[#264ea4]" />
                                </Link>
                            </li>
                            <li className="text-black font-bold text-lg max-xl:text-sm ">
                                <div className="w-full flex justify-end items-center gap-10 p-3">
                                    {i18n.language === "tr" ? (
                                        <img
                                            className="w-6 cursor-pointer"
                                            src={engIcon}
                                            alt="EngIcon"
                                            onClick={() => changeLanguage("en")}
                                        />
                                    ) : (
                                        <img
                                            className="w-6 cursor-pointer"
                                            src={trIcon}
                                            alt="TrIcon"
                                            onClick={() => changeLanguage("tr")}
                                        />
                                    )}

                                    <LuLanguages className="text-2xl text-[#264ea4]" />
                                </div>
                            </li>
                        </ul>
                        <div className="w-full flex justify-between items-center">
                            <p className="text-sm text-black ">
                                Vito ©. Copyright {date.getFullYear()}
                            </p>
                        </div>
                    </nav>
                </div>
                <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
