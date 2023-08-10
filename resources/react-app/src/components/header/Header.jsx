import React, { useState, useEffect } from "react";
import Logo from "../../assets/header/logo.png";
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

    useEffect(() => {
        // Add event listener to handle window resizing
        window.addEventListener("resize", handleResize);

        // Call the handleResize function on initial render

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <header>
            {isVisible ? (
                <nav className="bg-[#1b4378] h-20 flex justify-center items-center fixed z-[200] w-full opacity-90 ">
                    <div className="flex justify-center items-center">
                        <Link to="/">
                            <img src={Logo} alt="sa" className="w-[150px] max-lg:w-[115px]" />
                        </Link>
                    </div>
                    <ul className="flex flex-row gap-4 max-lg:mt-2">
                        <li className="text-white font-bold text-lg ml-5 max-lg:text-sm ">
                            <Link to="/hakkimizda"> ABOUT US </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-sm">
                            <Link to="/kurumsal"> INSTITUONAL </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-sm">
                            <Link to="/global"> GLOBAL </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-sm">
                            <Link to="/projeler"> PROJECTS </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-sm">
                            <Link to="/sektorler"> SECTORS </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-sm">
                            <Link to="/haberler"> NEWS </Link>
                        </li>
                        <li className="text-white font-bold text-lg max-lg:text-sm">
                            <Link to="/iletisim"> CONTACT </Link>
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
                        <li>
                            <div className="text-white opacity-50 text-3xl cursor-pointer max-lg:text-2xl">
                                <a
                                    href="https://twitter.com/groupvito"
                                    target="blank"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="text-white opacity-50 text-3xl cursor-pointer max-lg:text-2xl ">
                                <a
                                    href="https://tr.linkedin.com/company/vitogroup"
                                    target="blank"
                                >
                                    <FaLinkedinIn />
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
                <nav className="bg-[#1b4378] h-20 flex p-5 justify-between items-center fixed z-20 w-full opacity-90">
                    <div className="flex justify-center items-center">
                        <img src={Logo} alt="sa" className="w-[150px]" />
                    </div>
                    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <nav className="menu">
                            {/* Burada menü öğelerini ekleyebilirsiniz */}
                            <ul className="bg-[#1b4378] ">
                                <li className="text-white font-bold text-lg  max-xl:text-sm ">
                                    <Link to="/hakkimizda">ABOUT US </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/kurumsal"> INSTITUONAL </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/global"> GLOBAL </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/projeler"> PROJECTS </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/sektorler"> SECROTS </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/haberler"> NEWS </Link>
                                </li>
                                <li className="text-white font-bold text-lg max-xl:text-sm">
                                    <Link to="/iletisim"> CONTACT </Link>
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