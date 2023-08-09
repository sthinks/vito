import React from "react";
import logo from "../../assets/footer/vitologo.png";
import { BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

function ShortFooter() {
    const date = new Date();

    return (
        <div className={`w-full bg-[#093977] relative map-container`}>
            <div className="flex px-10 max-sm:px-2 pb-14 h-96 justify-between relative z-20 max-lg:flex-col-reverse mt-10">
                <div className="flex flex-col justify-between w-2/6 max-lg:w-full max-md:mt-5 max-md:gap-5">
                    <img
                        src={logo}
                        alt="Vito Logo"
                        className="w-52 max-md:w-36"
                    />
                    <div className="text-white text-base max-md:text-sm">
                        <p>Ayazağa, Vadistanbul, Azerbaycan Cd. 3B D:1B </p>
                        <p>Blok, 34485 Sarıyer/İstanbul</p>
                        <p>
                            <a href="tel:+902122323030">+90 (212) 232 3030</a>
                        </p>
                    </div>
                </div>
                <div className=" flex justify-between w-4/6 max-lg:w-full text-white flex-col">
                    <div className="flex justify-between text-white max-lg:flex-wrap  max-md:gap-5 max-md:flex-initial max-md:items-start">
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start">
                                <a href="/">ANASAYFA</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-start">
                                <a href="#">KURUMSAL</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-start">
                                <a href="#">HİZMETLER</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start">
                                <a href="#">PROJELER</a>
                            </li>
                            <li className="pb-2 max-sm:text-sm text-start">
                                <a href="#">SEKTÖRLER</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start">
                                <a href="#">İNSAN KAYNAKLARI</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-start">
                                <a href="#">BASIN ODASI</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="pb-2 max-sm:text-sm text-end">
                                <a href="#">İLETİŞİM</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-end items-center max-lg:mt-5">
                        <div className="flex justify-center items-center mr-12 max-sm:mr-0 max-lg:hidden">
                            <a
                                href="https://twitter.com/GroupVito"
                                target="blank"
                            >
                                <BiLogoTwitter className="text-3xl mx-1 text-[#456998] cursor-pointer hover:text-[#1DA1F2] max-md:text-[#1DA1F2]" />
                            </a>

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
    );
}

export default ShortFooter;