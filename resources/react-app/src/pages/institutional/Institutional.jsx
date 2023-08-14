import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Vedat from "../.././assets/institutional/vedatirelp.png";
import Fuat from "../.././assets/institutional/Fuat Şengül.png";
import Burhan from "../.././assets/institutional/burhant.png";
import Dinc from "../.././assets/institutional/dinsellier.jpg";
import Zeki from "../.././assets/institutional/zekigunay.png";
import InstBanner from "../.././assets/institutional/institional-bannerpng.png";
import AboutWave from "../.././assets/institutional/about-wave.png";
import History from "../.././assets/institutional/ghistory.png";

const paragraphStyles = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
};

function Institutional() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
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
                                President's Message
                            </h1>
                        </div>
                        <div className="bg-[#00a1e0] h-full text-white p-4 text-left">
                            <h2 className="text-3xl">
                                Vedat Irdelp /Meet the chairman & CEO
                            </h2>
                            <p className="text-xl mt-5">
                                Founded in 2000, ViTO Group continues to grow
                                steadily. With the establishment of our
                                subsidiary IVT Construction in 2017, and then
                                its consolidation within ViTO engineering in
                                2020, we are able to better meet the demands of
                                our customers and business partners thanks to
                                their EPC (Engineering, Procurement and
                                Construction) application capabilities for the
                                comprehensive tank farm. We come together with
                                our customers in our branches in Mumbai, Baku,
                                Qatar and Dubai, and in our head office in
                                Aliağa (İzmir) and Istanbul.
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
                        Civil Engineer ViTO Engineering Construction and
                        Contracting Inc. Vice Chairman of the Board Born in
                        Istanbul in 1964, Fuat Şengül graduated from Istanbul
                        Technical University Civil Engineering Department
                        (1985), Istanbul Technical University Engineering He
                        completed his master's degree in the Faculty of Medicine
                        (1987). He received his specialization certificate from
                        Marmara University Finance and Accounting Department
                        (1988). Şengül, who works as an investment valuation
                        specialist in private banks, is the General Manager and
                        Board of Directors of Istanbul Gaz Dağıtım A.Ş (İGDAŞ).
                        member assumed the duties of .(1994-2000). Şengül joined
                        the ViTo Group in 2001 and still serves as the Vice
                        Chairman of the Board of Directors at Vito Mühendislik
                        İnşaat ve Taahhüt A.Ş. He is married and has four
                        children.
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
                        className="h-[450px] max-lg:w-full object-cover"
                    />
                </div>
                <div className="bg-[#be677b]  text-white w-[65%] p-4 text-left h-[450px] max-lg:w-full h-auto">
                    <h2 className="text-3xl">Burhan Tekdemir </h2>
                    <p className="text-xl mt-5">
                        Technicon General Manager since 2018
                        <br />
                        Since 2017, ViTO Engineering Construction and
                        Contracting Inc. board member
                        <br />
                        Joined ViTOGroup in 2005
                        <br />
                        2014 - 2018: IOT ViTO Engineering Construction and
                        Contracting Inc. general manager
                        <br />
                        2008 - 2017: ViTO Energy and Trade Investment Inc.
                        Business Development Manager
                        <br />
                        2005 - 2008: ViTO Energy and Trade Investment Inc.
                        Business Development Manager
                    </p>
                </div>
            </div>
            {/*Zeki*/}
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse">
                <div className="w-1/2 max-lg:w-full  ">
                    <h2 className="text-3xl p-5 mb-1">Zeki Gunay</h2>
                    <p className="text-black text-left p-5">
                        Zeki Gunay was born in 1972 and was born in 1994. He
                        graduated from Hacettepe Mechanical Engineering Faculty.
                        After completing his military service in 1996, natural
                        gas distribution pipelines and He started his
                        professional career on terminal design studies. Petrol
                        Ofisi Terminal in Turkey with Foster Wheeler between
                        1996-2001 Worked on revision and renovation projects,
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
                    <h2 className="text-3xl p-5">Dinc Senlier </h2>
                    <p
                        className="text-xl mt-5"
                        style={isOpen ? null : paragraphStyles}
                    >
                        Dinç Senlier graduated from the Middle East Technical
                        University (METU) in 1976 with a B.Sc. degree in
                        Electronics Engineering, and in 1980, he obtained his
                        M.Sc. degree in Electronics Engineering from the same
                        university. He began his professional career in 1976 as
                        a Research Assistant at METU. After working at PTT
                        General Directorate and Aselsan, he joined the Tekfen
                        Group in 1982. He spent 40 years at Tekfen, one of
                        Turkey's largest conglomerates, holding various
                        positions and responsibilities. After working as the
                        General Manager of two Tekfen Group companies engaged in
                        defense industry for 8 years, he served as the
                        Management Representative in the Contracting company.
                        Later, he worked as the Consultant to the President of
                        Tekfen Group Companies in the Holding company, providing
                        guidance in various fields. Since the beginning of 2022,
                        he has been contributing to ViTO Engineering
                        Construction and Contracting Inc. as the Deputy Managing
                        Director responsible for Health-Safety-Environment,
                        Quality, and Information Technologies. Dinç Şenlier
                        graduated from Middle East Technical University as an
                        Electronics Engineer in 1976 and as an Electronics
                        Engineer from the same university in 1980. He started
                        his career as a Research Assistant at METU in 1976,
                        continued his career at the PTT General Directorate and
                        Aselsan, and joined the Tekfen Group in 1982. He took
                        part in almost every position and responsibility in his
                        life at Tekfen, one of the largest groups in Turkey,
                        which lasted 40 years until 2022. After working as a
                        General Manager at 2 Tekfen Group companies that
                        manufacture for the Defense Industry for 8 years, and
                        then as a Management Representative at the Contracting
                        Company, he acted as a consultant to the Group Companies
                        President in the Holding company in many areas. Since
                        the beginning of 2022, he has been contributing to ViTO
                        Mühendislik İnşaat ve Taahhüt A.Ş. as Assistant General
                        Manager responsible for Health-Safety-Environment,
                        Quality and Information Technologies.
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
            <div className="w-full overflow-scroll">
                <div className="flex w-[3000px]">
                    <img
                        src={History}
                        draggable="true"
                        alt="asdasdsa"
                        className="w-[5000px] h-auto"
                    />
                </div>
            </div>
        </>
    );
}

export default Institutional;
