import React, { useState, useEffect } from "react";
import Logo from "../../assets/header/logo.png";
import BlueLogo from "../../assets/header/blue.png";
import { Link } from "react-router-dom";
import Turkish from "../../assets/header/turkish_flag.jpg";
import British from "../../assets/header/british_flag.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Switch from "react-switch";
import "./HamburgerMenu.css";
function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = (checked) => {
        setIsToggled(checked);
    };

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

    return (
        <header>
            {isVisible ? (
                <nav
                    className={`${
                        hasOpacity ? "bg-transparent" : "bg-[#fff] opacity-100"
                    } h-20 flex justify-center items-center fixed z-[9999] w-full transition-all `}
                >
                    <div className="flex justify-center items-center logo">
                        <Link to="/">
                            <img
                                src={hasOpacity ? Logo : BlueLogo}
                                alt="sa"
                                className="w-[250px] mr-10 max-xl:w-[140px] max-lg:w-[120px] max-lg:mr-0 "
                            />
                        </Link>
                    </div>
                    <ul className="flex flex-row gap-10 max-xl:gap-6 max-lg:mt-2 max-lg:gap-4 navbar-ul ">
                        <li className="text-white font-bold text-lg ml-5 max-lg:text-xs max-xl:text-base">
                            <Link
                                className={`py-[30px] px-[5px] ${
                                    hasOpacity
                                        ? "text-[#fff]"
                                        : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                                } `}
                                to="/about-us"
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-xs max-xl:text-base">
                            <Link
                                className={`py-[30px] px-[5px] ${
                                    hasOpacity
                                        ? "text-[#fff]"
                                        : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                                } `}
                                to="/instituonal"
                            >
<<<<<<< HEAD
                                CORPORATE
=======
                                INSTITUONAL
>>>>>>> main
                            </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-xs max-xl:text-base">
                            <Link
                                className={`py-[30px] px-[5px] ${
                                    hasOpacity
                                        ? "text-[#fff]"
                                        : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                                } `}
                                to="/vito-global"
                            >
                                GLOBAL
                            </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-xs max-xl:text-base">
                            <Link
                                className={`py-[30px] px-[5px] ${
                                    hasOpacity
                                        ? "text-[#fff]"
                                        : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                                } `}
                                to="/projects"
                            >
                                PROJECTS
                            </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-xs max-xl:text-base">
                            <Link
                                className={`py-[30px] px-[5px] ${
                                    hasOpacity
                                        ? "text-[#fff]"
                                        : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                                } `}
                                to="/sector"
                            >
                                SECTORS
                            </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-xs max-xl:text-base">
                            <Link
                                className={`py-[30px] px-[5px] ${
                                    hasOpacity
                                        ? "text-[#fff]"
                                        : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                                } `}
                                to="/news"
                            >
                                NEWS
                            </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-xs max-xl:text-base">
                            <Link
                                className={`py-[30px] px-[5px] ${
                                    hasOpacity
                                        ? "text-[#fff]"
                                        : "text-[#1b4378] hover:bg-[#1b4378] hover:text-[#fff] hover:py-[30px] hover:px-[5px]"
                                } `}
                                to="/contact"
                            >
                                CONTACT
                            </Link>
                        </li>
                        {/* <li>
                            <img
                                className="w-[30px] h-[20px]"
                                src={Turkish}
                                alt="turkish_flag"
                            />
                        </li>

                        <li>
                            <img
                                className="w-[30px] h-[20px]"
                                src={British}
                                alt="british_flag"
                            />
                        </li> */}
                        <li className="flex flex-row justify-center items-center gap-2">
                            {/* <div className="text-[#456998] text-3xl cursor-pointer max-lg:text-2xl">
                                <a
                                    href="https://twitter.com/groupvito"
                                    target="blank"
                                >
                                    <AiOutlineTwitter className="hover:text-[#1DA1F2]" />
                                </a>
                            </div> */}

                            <div className="text-[#456998] text-3xl cursor-pointer max-lg:text-2xl">
                                <a
                                    href="https://tr.linkedin.com/company/vitogroup"
                                    target="blank"
                                >
                                    <FaLinkedinIn
                                        className={`${
                                            hasOpacity
                                                ? "text-white"
                                                : "text-[#1b4378]"
                                        }`}
                                    />
                                </a>
                            </div>
                        </li>
                        {/* <li>
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
            ) : (
                <nav className="bg-[#fff] h-20 flex p-5 justify-between items-center fixed z-[9999] w-full opacity-90">
                    <div className="flex justify-center items-center">
                        <img src={BlueLogo} alt="sa" className="w-[150px]" />
                    </div>
                    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <nav className="menu  z-[9999]">
                            {/* Burada menü öğelerini ekleyebilirsiniz */}
                            <ul className="bg-[#1b4378] ">
                                <li className="text-white font-bold text-lg  max-xl:text-sm ">
                                    <Link to="/about-us">ABOUT US </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/instituonal"> CORPORATE </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/vito-global"> GLOBAL </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/projects"> PROJECTS </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/sector"> SECROTS </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/news"> NEWS </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/contact"> CONTACT </Link>
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
            )}
        </header>
    );
}

export default Header;
