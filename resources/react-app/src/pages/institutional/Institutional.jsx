import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Vedat from "../.././assets/institutional/vedatirelp.png";
import Fuat from "../.././assets/institutional/Fuat Şengül.png";
import Burhan from "../.././assets/institutional/burhant.png";
import Dinc from "../.././assets/institutional/dinsellier.jpg";
import Zeki from "../.././assets/institutional/zekigunay.png";
import InstBanner from "../.././assets/institutional/institional-bannerpng.png";
import AboutWave from "../.././assets/institutional/about-wave.png";
import History from "../.././assets/institutional/ghistory.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const paragraphStyles = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
};

function Institutional() {
    const [objectPosition, setObjectPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);

    //İmage slider start
    const handleDrag = (value) => {
        if (objectPosition + value < 0) {
            setObjectPosition(0);
        } else if (objectPosition + value > 100) {
            setObjectPosition(100);
        } else {
            setObjectPosition(objectPosition + value);
        }

        console.log(objectPosition);
    };
    //İmage slider end

    return (
        <>
            <Header />
            <div className="relative w-full flex justify-center items-center h-96">
                <img src={InstBanner} alt="instbanner" />
                <h2 className="overlay-text mt-10 absolute text-center text-4xl text-[#093977] bg-opacity-70 px-2 py-1 rounded font-bold">
                    INSTITUTIONAL
                </h2>
            </div>

            <div className="relative ">
                <div className="flex justify-between w-full max-lg:flex-col">
                    <div className="flex flex-1 flex-col  ">
                        <div className="bg-[#e24f82] w-full">
                            <h1 className=" text-white p-3 text-center text-3xl font-bold">
                                Corporate Board of Directors
                            </h1>
                        </div>
                        <div className="sol-alt ">
                            <img
                                src={Vedat}
                                alt="deneme"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-[2_2_0%] flex-col justify-between  ">
                        <div className="w-full">
                            <h1 className=" text-white text-3xl  p-3 bg-[#1b4378] text-left font-bold">
                                The Message of The President
                            </h1>
                        </div>
                        <div className="bg-[#00a1e0] h-full text-white p-4 text-left">
                            <h2 className="text-3xl">
                                Vedat Irdelp /Meet the chairman & CEO
                            </h2>
                            <p className="text-xl mt-5">
                                Founded in 2000, ViTO Group continues to grow
                                consistently. Following the establishment of our
                                subsidiary IVT Construction in 2017, we can now
                                better meet the demands of our customers and
                                business partners thanks to comprehensive EPC
                                execution capabilities. We meet with our
                                customers in our branches in Mumbai, Baku, Qatar
                                and Dubai as well as our main site office in
                                Aliağa (Izmir), and headquarters in Istanbul
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Fuat    */}
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse">
                <div className="bg-[#093977]  text-white w-[65%] p-4 text-left h-[450px] max-lg:w-full max-lg:h-auto">
                    <h2 className="text-3xl">Fuat Şengül</h2>
                    <p className="text-xl mt-5">
                        Mr. Fuat Şengül is a highly experienced professional
                        with over 25 years of experience in the energy sector.
                        He currently holds the position of Deputy Chairman of
                        the Board at ViTO Mühendislik İnşaat ve Taahhüt A.Ş, a
                        role he has held since 2017. He joined the ViTO Group in
                        2014, initially serving as the Deputy Chairman of the
                        Board at ViTO Enerji ve Ticaret Yatırım A.Ş from 2014 to
                        2020. Prior to joining the ViTO Group, Mr. Şengül served
                        as the General Manager of SMM Engineering Audit (EPDK)
                        from 2000 to 2014. Additionally, he held the position of
                        General Manager at İGDAŞ (Istanbul Gas Distribution
                        Company) from 1994 to 2000. Mr. Şengül holds an MSc. in
                        Civil Engineering with a specialization in Geotechnical
                        Engineering and a BSc. in Civil Engineering, both
                        obtained from Istanbul Technical University. With his
                        extensive experience and expertise in the energy sector,
                        Mr. Fuat Şengül brings valuable insights and leadership
                        to his role at ViTO.
                    </p>
                </div>
                <div className="w-[27%] max-lg:w-full">
                    <img
                        src={Fuat}
                        alt="fuat"
                        className="h-[450px] w-full object-cover"
                    />
                </div>
                <div className="w-[8%] flex-col text-center  max-lg:hidden">
                    <div className="k bg-[#093977] h-4/5 relative flex justify-center">
                        <p
                            className="text-white text-2xl p-1 max-lg:hidden"
                            style={{
                                writingMode: "vertical-rl",

                                position: "absolute",
                                height: "250px",
                                top: "90px",
                            }}
                        >
                            Vice Chairman of <br /> the Board of Directors
                        </p>
                    </div>

                    <div className=" h-1/5 bg-[#00a1e0]"></div>
                </div>
                <div className="hidden max-lg:flex w-full h-[100px] bg-[#093977] justify-center items-center max-md:text-xl">
                    <p className="text-white text-3xl text-center">
                        Vice Chairman of the Board of Directors
                    </p>
                </div>
            </div>
            {/*Burhan   */}
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col">
                <div className="w-[8%] flex-col text-center ">
                    <div className=" bg-[#be677b] h-4/5  flex justify-center items-center max-lg:hidden">
                        <p
                            className="text-white text-3xl"
                            style={{
                                transform: "rotate(-180deg)",
                                writingMode: "vertical-lr",
                            }}
                        >
                            General Manager
                        </p>
                    </div>

                    <div className=" h-1/5 bg-[#00a1e0]"></div>
                </div>
                <div className="hidden max-lg:flex bg-[#be677b] w-full h-auto justify-center items-center ">
                    <p className="text-white text-2xl p-1 max-lg:text-xl">
                        General Manager
                    </p>
                </div>
                <div className="w-[27%] max-lg:w-full">
                    <img
                        src={Burhan}
                        alt="fuat"
                        className="w-full max-lg:w-full object-cover"
                    />
                </div>
                <div className="bg-[#be677b]  text-white w-[65%] p-4 text-left h-[450px] max-lg:w-full h-auto">
                    <h2 className="text-3xl">Burhan Tekdemir </h2>
                    <p className="text-xl mt-5">
                        General Manager of Technicon since 2018‍
                        <br />
                        Board Member at ViTO Mühendislik İnşaat ve Taahhüt A.Ş.
                        since 2017‍
                        <br />
                        Joined ViTOGroup in 2005
                        <br />
                        2014 - 2018: Managing Director at IOT ViTO Mühendislik
                        İnşaat ve Taahhüt A.Ş.‍
                        <br />
                        2008 - 2017: Managing Director Business Development at
                        ViTO Enerji ve Ticaret Yatırım A.Ş.‍
                        <br />
                        2005 - 2008:Business Development Manager at ViTO Enerji
                        ve Ticaret Yatırım A.Ş
                        <br />
                        1999 - 2004: Business Development Director at IBS
                        Research & Consultancy in Istanbul, Turkey‍
                        <br />
                        25+ years of experience in project management and the
                        energy sector
                    </p>
                </div>
            </div>
            {/*Zeki*/}
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse">
                <div className="w-1/2 max-lg:w-full  ">
                    <h2 className="text-3xl p-5 mb-1">Zeki Gunay</h2>
                    <p className="text-black text-left p-5">
                        Zeki Gunay, born in 1972, graduated from Hacettepe
                        Mechanical Engineering Faculty in 1994, after completing
                        his military service in 1996, started his professional
                        carried in Turkey for natural gas distribution pipe
                        lines and terminal design works. From 1996 to 2001, Mr.
                        Gunay worked with Foster Wheeler, rewamping and
                        renovation of Petrol Ofisi Terminals in Turkey, from
                        design stage up to commissioning. From 2001 to 2010
                        contunied his professional career in abroad projects
                        with Gama Industry and Enka Insaat taking roles in
                        different regions from Libya up to Sakhalin in Oil & Gas
                        Project , worked with BP, Technip, Bechtel and Shell. In
                        2010 started to work in Akenerji until 2015 to establish
                        one the biggest combined power plant in Turkey from feed
                        to commissioning. He contunied his professional services
                        as advisor from 2015 to 2017 in power plants projects in
                        Turkey. Joined to Vito in 2017, between 2017 and 2022
                        worked as project director in couple of works and
                        contunie his career as Country Manager in Qatar.
                    </p>
                </div>
                <div className="w-[32%] max-lg:w-full">
                    <img
                        src={Zeki}
                        alt="zeki"
                        className="h-[450px] max-lg:w-full max-lg:h-auto object-cover"
                    />
                </div>
                <div className="flex justify-center items-center text-center w-[8%] max-lg:hidden">
                    <p
                        className="text-black text-xl p-1"
                        style={{
                            writingMode: "vertical-rl",
                            marginLeft: "-50%",
                            marginTop: "50%",
                            height: "350px",
                        }}
                    >
                        Project Directory and Country Manager Qatar
                    </p>
                </div>
                <div className="hidden max-lg:flex w-full h-[100px] bg-[#093977] justify-center items-center max-md:text-xl">
                    <p className="text-white text-xl text-center">
                        Project Directory and Country Manager Qatar
                    </p>
                </div>
                <div className="w-[8%]">
                    <div className="bg-[#00a1e0] h-1/3"></div>
                    <div className="bg-[#093977] h-1/3"></div>
                    <div className="bg-[#be677b] h-1/3"></div>
                </div>
            </div>
            {/*Dinçer    */}

            <div className="flex flex-row justify-between  bg-[#00a1e0] w-full max-lg:flex-col">
                <div className="w-[35%] max-lg:w-full">
                    <img
                        src={Dinc}
                        alt="dnc"
                        className="h-[450px] w-full object-cover"
                    />
                </div>
                <div className="w-[5%] h-full bg-blue-500"></div>

                <div className="bg-[#093977]  text-white w-[65%] p-4 text-left h-auto max-lg:w-full">
                    <h2 className="text-3xl px-5 py-2">Dinc Senlier</h2>
                    <br />
                    <h3 className="text-2xl">
                        Deputy Managing Directory HSEQ & IT
                    </h3>
                    <p
                        className="text-xl mt-5"
                        style={isOpen ? null : paragraphStyles}
                    >
                        Dinç Şenlier graduated from the Middle East Technical
                        University (METU) in 1976 with a degree in Electronic
                        Engineering, and in 1980, he obtained a Master's degree
                        in Electronic Engineering from the same university. He
                        began his professional career in 1976 as a Research
                        Assistant at METU. After working at PTT General
                        Directorate and Aselsan, he joined the Tekfen Group in
                        1982. He spent 40 years at Tekfen, one of Turkey's
                        largest conglomerates, holding various positions and
                        responsibilities. After working as the General Manager
                        of two Tekfen Group companies engaged in defense
                        industry production for 8 years, he served as the
                        Management Representative in the Contracting company.
                        Later, he worked as the Group Companies President
                        Advisor in the Holding company, providing guidance in
                        various fields. Since the beginning of 2022, he has been
                        contributing to ViTO Engineering Construction and
                        Contracting Inc. as the Deputy General Manager
                        responsible for Health-Safety-Environment, Quality, and
                        Information Technologies.
                    </p>
                    <p
                        className="text-2xl text-blue-500 mt-5 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "Read less..." : "Read More..."}
                    </p>
                </div>
            </div>
            <div className="w-full mt-10">
                <img src={AboutWave} alt="about-wave" />
            </div>
            <div className="w-full">
                <div
                    className="flex w-full justify-center items-center"
                    onDragOver={(e) => e.preventDefault()}
                >
                    <MdKeyboardArrowLeft
                        className="absolute left-4 max-md:-left-2 max-lg:left-2 h-48 w-48 z-50 hover:-translate-x-4 cursor-pointer duration-100"
                        style={{
                            color: "#f1f2f2",
                        }}
                        onClick={(e) => handleDrag(-25)}
                    />
                    <img
                        style={{ objectPosition: `${objectPosition}% center` }}
                        draggable="true"
                        src={History}
                        alt="asdasdsa"
                        className="object-cover cursor-pointer h-[500px] duration-200 py-5"
                    />

                    <MdKeyboardArrowRight
                        className="absolute right-4 max-md:-right-2 max-lg:right-2 h-48 w-48 z-50 hover:translate-x-4 cursor-pointer duration-100"
                        style={{
                            color: "#f1f2f2",
                        }}
                        onClick={(e) => handleDrag(25)}
                    />
                </div>
            </div>
        </>
    );
}

export default Institutional;
