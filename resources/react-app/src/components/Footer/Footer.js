import React from "react";
import logo from "../../assets/footer/vitologo.png";
import map from "../../assets/footer/footermap.png";
import bglogo from "../../assets/footer/bgfooter.png";
import bglogosecond from "../../assets/footer/bgsecond.png";
import { BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

function Footer() {
    const date = new Date();
    return (
        <div className="w-full bg-[#093977] relative">
            <img
                src={bglogosecond}
                alt="Background"
                className="absolute w-2/6"
            />
            <img
                src={bglogo}
                alt="Background"
                className="absolute right-0 bottom-0 w-[55%]"
            />
            <img
                src={map}
                alt="Footer Map"
                className="w-full pt-20 pb-[31rem]"
            />
            <div className="flex px-10 pb-14 h-96 justify-between relative z-20">
                <div className="flex flex-col justify-between w-2/6">
                    <img src={logo} alt="Vito Logo" className="w-52" />
                    <div className="text-white text-base">
                        <p>Ayazağa, Vadistanbul, Azerbaycan Cd. 3B D:1B </p>
                        <p>Blok, 34485 Sarıyer/İstanbul</p>
                        <p>Phone: +90 (212) 232 3030</p>
                    </div>
                </div>
                <div className=" flex justify-between w-4/6 text-white flex-col">
                    <div className="flex justify-between text-white">
                        <ul className="">
                            <li className="py-2">
                                <a href="/">ANASAYFA</a>
                            </li>
                            <li className="py-2">
                                <a href="#">KURUMSAL</a>
                            </li>
                            <li className="py-2">
                                <a href="#">HİZMETLER</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="py-2">
                                <a href="#">PROJELER</a>
                            </li>
                            <li className="py-2">
                                <a href="#">SEKTÖRLER</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="py-2">
                                <a href="#">İNSAN KAYNAKLARI</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="py-2">
                                <a href="#">BASIN ODASI</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li clas>
                                <a href="#">İLETİŞİM</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="flex justify-center items-center mr-12">
                            <BiLogoTwitter className="text-3xl mx-1 text-[#456998] cursor-pointer hover:text-[#1DA1F2]" />
                            <BiLogoLinkedin className="text-3xl mx-1 text-[#456998] cursor-pointer hover:text-white" />
                        </div>

                        <p className="text-sm">
                            Vito ©. Copyright {date.getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
