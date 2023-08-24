import React, { useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
function FullScreenImage({
    modal,
    setModal,
    sliderImage,
    imgIndex,
    setImgIndex,
}) {
    const imageRef = useRef();
    const nextHandler = (imgIndex) => {
        if (imgIndex === sliderImage.length - 1) {
            setImgIndex(0);
        } else {
            setImgIndex(imgIndex + 1);
        }
    };
    const prevHandler = (imgIndex) => {
        if (imgIndex - 1 === 0) {
            setImgIndex(sliderImage.length - 1);
        } else {
            setImgIndex(imgIndex - 1);
        }
    };
    useEffect(() => {
        const closeDropdown = (e) => {
            if (e.target.className === "bg-black w-full h-full absolute z-40") {
                setModal(false);
            }
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, []);

    return (
        <div
            className="w-full fixed h-full top-0 left-0  flex justify-center items-center z-[9999]"
            ref={imageRef}
        >
            <button
                className="bg-white absolute top-10 right-4 z-50 p-2 rounded-4xl max-md:hidden"
                onClick={() => setModal(!modal)}
            >
                <GrClose className="text-2xl text-black" />
            </button>
            <p
                className="text-white z-50"
                onClick={() => prevHandler(imgIndex)}
            >
                <MdKeyboardArrowLeft className="text-6xl hover:text-7xl duration-200 cursor-pointer" />
            </p>
            <img
                className="w-[80%] h-[80%] object-contain z-50"
                src={sliderImage[imgIndex].url}
                alt="Üretim resmi"
            />
            <p
                className="text-white z-50"
                onClick={() => nextHandler(imgIndex)}
            >
                <MdKeyboardArrowRight className="text-6xl hover:text-7xl duration-200 cursor-pointer" />
            </p>
            <div className="bg-black w-full h-full absolute z-40" />
        </div>
    );
}

export default FullScreenImage;
