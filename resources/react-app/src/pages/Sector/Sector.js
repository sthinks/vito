import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import backSectorImage from "../../assets/sector/bgsector2.png";
import rightImage from "../../assets/sector/asasa.png";
import leftImage from "../../assets/sector/bgsector.png";
import SectorBanner from "../../assets/sector/sectors.jpg";
import Wave from "../../assets/footer/footerwaves.png";
import {Helmet} from "react-helmet";
function Sector() {
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
    return (
        <>
          <Helmet>
                <meta name="description" content="Vito Sector" />
                <meta name="keywords" content="Vito Sector Page" />
                <meta
                    name="og:title"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="og:title" content="ViTO Energy Engineering " />
            </Helmet>
        <div className="w-full">
            <div className="w-full flex justify-center items-center relative max-md:h-[250px]">
                <img
                    className="w-full h-full object-cover"
                    src={SectorBanner}
                    alt="SectorBanner"
                />
                <div className="w-full h-full absolute bg-black opacity-40 left-0 bottom-0" />
                <p className="absolute text-6xl font-extrabold tracking-widest text-white">
                    SECTORS
                </p>
            </div>
            <div>
                <ReactPlayer
                    className="sector-video"
                    width="100%"
                    controls="true"
                    url="https://www.youtube.com/watch?v=m0T3UKSuZxg"
                />
            </div>
            <div
                className="w-full bg-cover py-5"
                style={{ backgroundImage: `url(${backSectorImage})` }}
            >
                <div className="w-ful flex justify-end my-2 relative -bottom-10 max-lg:-bottom-2">
                    <div className="w-4/6 pr-8 max-lg:w-full max-lg:px-2">
                        <p className="text-end text-6xl font-semibold py-4 max-md:text-center">
                            Oil & Gas
                        </p>

                        <div className="text-end text-lg mt-10">
                            <p>- EPC Tank Farm</p>
                            <p>- Piping and E&I</p>
                        </div>
                        <p className="text-end text-lg mt-10">
                            As a leading EPC company providing storage
                            facilities for the sectors. We have installed more
                            than 2.3 million cubic meters of total storage
                            capacity, more than 2.4 million WDI pipe welding and
                            various mechanical and pipeline works. We are
                            specialized for tanks up to 90 meters in diameter,
                            including sphericali hydrogenic and cylindrical
                            tanks used for storing various products such as
                            crude oil, gasoline, diesel, kerosene, reformate,
                            naphtha and LPG. In addition to mechanical works, we
                            also undertake electrical and instrumentation works,
                            tank foundations.
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="w-[35%]">
                        <img
                            className="w-full object-contain"
                            src={leftImage}
                            alt="LeftImage"
                        />
                    </div>
                    <div className="w-[45%] max-lg:w-[65%]">
                        <img
                            className="w-full mt-20 object-contain"
                            src={rightImage}
                            alt="RightImage"
                        />
                    </div>
                </div>
                <div className="w-ful flex justify-start relative -top-14 max-lg:-top-2">
                    <div className="w-4/6 pl-8 max-lg:w-full max-lg:px-2">
                        <p className="text-start text-6xl font-semibold py-4 max-md:text-center">
                            Energy
                        </p>

                        <div className="text-start text-lg mt-10">
                            <p>
                                - We have participated in the supply of
                                approximately 5,000 MW installed capacity in
                                numerous power plants in Turkey and other EMEA
                                countries. Our role ranges from individual
                                equipment supply to turnkey supply of the entire
                                facility. We focus on the following types of
                                power plants:
                            </p>
                            <p>- Combined cycle and open cycle facilities</p>
                            <p>
                                - Renewable energy sources such as hydroelectric
                                power plants
                            </p>
                        </div>
                        <p className="text-start text-lg mt-10">
                            In the energy sector, we assist leading OEMs
                            (Original Equipment Manufacturers) in supplying
                            energy islands and provide turnkey delivery of
                            facility works.
                        </p>
                    </div>
                </div>
            </div>
            <img
                className="w-full rotate-180 relative bottom-28 -mb-11"
                src={Wave}
                alt="Wawes"
            />
        </div>
        </>
    );
}

export default Sector;
