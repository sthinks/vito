import React, { useEffect } from "react";
import contactBanner from "../../assets/contact/contactbanner.png";
import contactLogo from "../../assets/contact/contactlogo.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { IoLocationSharp } from "react-icons/io5";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
    return (
        <>
            <div
                className="w-full bg-[#093977] relative"
                style={{
                    backgroundImage: `url(${contactBanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                }}
            >
                <div className="w-full h-full bg-black absolute top-0 left-0 opacity-50 z-20" />
                <div className="w-full flex justify-center items-center z-40 relative">
                    <div className="w-1/4 h-auto relative -left-40 max-sm:hidden">
                        <p
                            className="text-[13rem] font-bold text-white tracking-[1.2rem] "
                            style={{
                                writingMode: "vertical-rl",
                                rotate: "180deg",
                            }}
                        >
                            VİTO
                        </p>
                    </div>
                    <div className="w-3/4  flex justify-start items-end mt-52 ">
                        <div className="w-full pt-36">
                            <p className="text-4xl text-white font-bold">
                                Regional Offices
                            </p>
                            <hr className="w-full my-4 border-2" />
                            <p className="text-white text-lg mb-4 flex">
                                <IoLocationSharp className="text-red-700 text-3xl mt-3 mr-2" />
                                <p>
                                    Vadistanbul Ayazağa Mah. <br />
                                    Azerbaycan Cad. 3B 1B Blok <br />
                                    34485 Sarıyer-İstanbul <br />
                                    Türkiye
                                </p>
                            </p>
                            <p className="text-white text-lg mb-4 flex justify-start items-center">
                                <BsTelephone className="text-[#4b99ff] text-xl mr-4" />{" "}
                                <a href="tel:902122323030">+90 212 232 30 30</a>
                            </p>
                            <p className="text-white text-lg mb-4 flex justify-start items-center">
                                <AiOutlineMail className="text-[#4b99ff] text-xl mr-4" />
                                <a href="mailto:info@vito.com.tr">
                                    info@vito.com.tr
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                className="z-50"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12739.72970742042!2d28.97910437317034!3d41.10884830411325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab513dfba929d%3A0xea7a818b5624572f!2sVito%20Enerji%20Ticaret%20ve%20Yat%C4%B1r%C4%B1m%20A.%C5%9E.!5e0!3m2!1str!2str!4v1691149819430!5m2!1str!2str"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
}

export default Contact;
