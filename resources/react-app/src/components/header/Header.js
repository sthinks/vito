import React, { useState, useEffect } from "react";
import Logo from "../../assets/header/logo.png";
import LogoTitle from "../../assets/header/title.png";
import BlueLogo from "../../assets/header/blue.png";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import engIcon from "../../assets/header/engIcons.svg";
import trIcon from "../../assets/header/trIcon.svg";
import { useTranslation } from "react-i18next";
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
                                    ? "absolute -bottom-10 w-full"
                                    : "hidden"
                            }
                            src={LogoTitle}
                            alt="LogoTitle"
                        />
                    </Link>
                </div>
                <ul className="flex flex-row justify-around navbar-ul items-center w-9/12">
                    <li className="text-white font-bold text-base max-lg:text-xs  text-center w-[10%]">
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
                    <li className="text-white font-bold text-base max-lg:text-xs  text-center w-[10%]">
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
                    <li className="text-white font-bold text-base max-lg:text-xs  text-center w-[10%]">
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
                    <li className="text-white font-bold text-lg  max-lg:text-xs max-xl:text-base text-center w-[10%]">
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
                    <li className="text-white font-bold text-lg  max-lg:text-xs max-xl:text-base text-center w-[10%]">
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
                    <li className="text-white font-bold text-base max-lg:text-xs  text-center w-[10%]">
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
                    <li className="text-white font-bold text-lg  max-lg:text-xs max-xl:text-base text-center w-[10%]">
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
                        ? "bg-[#fff] h-20  p-5 justify-between items-center relative z-[9999] w-full opacity-90 hidden max-md:flex"
                        : "bg-[#fff] h-20  p-5 justify-between items-center fixed z-[9999] w-full opacity-90 hidden max-md:flex"
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
                <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <nav className={!isOpen ? "hidden" : "menu  z-[9999]"}>
                        {/* Burada menü öğelerini ekleyebilirsiniz */}
                        <ul className="bg-[#1b4378] ">
                            <li className="text-white font-bold text-lg  max-xl:text-sm ">
                                <Link
                                    to="/about-us"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ABOUT US{" "}
                                </Link>
                            </li>
                            <li className="text-white font-bold text-lg max-xl:text-sm">
                                <Link
                                    to="/corporate"
                                    onClick={() => setIsOpen(false)}
                                >
                                    CORPORATE
                                </Link>
                            </li>
                            <li className="text-white font-bold text-lg max-xl:text-sm">
                                <Link
                                    to="/vito-global"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    GLOBAL{" "}
                                </Link>
                            </li>
                            <li className="text-white font-bold text-lg max-xl:text-sm">
                                <Link
                                    to="/projects"
                                    onClick={() => setIsOpen(false)}
                                >
                                    PROJECTS
                                </Link>
                            </li>

                            <li className="text-white font-bold text-lg max-xl:text-sm">
                                <Link
                                    to="/sector"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    SECTORS{" "}
                                </Link>
                            </li>
                            <li className="text-white font-bold text-lg max-xl:text-sm">
                                <Link
                                    to="/news"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    NEWS{" "}
                                </Link>
                            </li>
                            <li className="text-white font-bold text-lg max-xl:text-sm">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {" "}
                                    CONTACT{" "}
                                </Link>
                            </li>
                            {/* <li className="flex items-center gap-3">
                                    <img
                                        className="w-[30px] h-[20px]"
                                        src={Turkish}
                                        alt="turkish_flag"
                                    />
                                    <img
                                        className="w-[30px] h-[20px]"
                                        src={British}
                                        alt="british_flag"
                                    />
                                </li>

                                <li>
                                    <div className="flex ">
                                        <label>
                                            <Switch
                                                onChange={handleToggle}
                                                checked={isToggled}
                                                onColor="#86d3ff"
                                                onHandleColor="#2693e6"
                                                handleDiameter={24}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                height={20}
                                                width={48}
                                            />
                                        </label>
                                    </div>
                                </li> */}
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    );
}

export default Header;
