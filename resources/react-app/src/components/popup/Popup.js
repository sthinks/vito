import React from "react";
import img from "./Vito_Sponspor.jpg";
import { useTranslation } from "react-i18next";

function Popup({ setModal }) {
    const { t, i18n } = useTranslation();

    return (
        <div className="fixed top-0 left-0 bg-[#00000048] w-full h-full z-[9999999] flex justify-center items-center">
            <div className="w-[400px] max-xl:w-80 h-auto bg-white relative">
                <div
                    className="absolute  text-black top-2 right-2 text-2xl hover:text-3xl duration-150 delay-150 cursor-pointer"
                    onClick={() => setModal(false)}
                >
                    X
                </div>
                <p className="text-center p-5 mt-4 text-[#535353] font-medium">
                    {i18n.language === "tr"
                        ? "Cumhuriyetin 100. Yıl kutlaması vesilesiyle 23 Kasım 2023 tarihinde Doha'daki Türk Büyükelçiliği'nde düzenlenen törenin sponsorlarından biri olduğunu duyurmaktan mutluluk duyarız."
                        : "We are pleased to announce that we are one of the sponsors of the ceremony held at the Turkish Embassy in Doha on November 23, 2023, in celebration of the 100th anniversary of the Republic."}
                </p>
                <img src={img} alt="popupimage" />
            </div>
        </div>
    );
}

export default Popup;
