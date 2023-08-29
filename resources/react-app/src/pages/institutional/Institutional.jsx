import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import VedatBey from "../.././assets/institutional/VedatBeyCv.png";
import Fuat from "../.././assets/institutional/fuat.png";
import Burhan from "../.././assets/institutional/burhanbey.jpg";
import Dinc from "../.././assets/institutional/dinsellier.jpg";
import Zeki from "../.././assets/institutional/zekigunay.png";
import Reha from "../.././assets/institutional/reha.jpg";
import Tahir from "../.././assets/institutional/tahirbey.jpg";
import InstBanner from "../.././assets/institutional/kurumsl.png";
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
            <div className="relative w-full flex justify-center items-center h-full object-cover max-lg:h-auto">
                <img src={InstBanner} alt="instbanner" />
                <div className="absolute bg-blue-800 opacity-25 w-full h-full left-0 top-0" />
                <h2 className="overlay-text max-md:text-5xl max-sm:text-2xl max-sm:mt-0 mt-10 absolute text-center text-6xl text-white bg-opacity-70 px-2 py-1 rounded font-bold">
                    CORPORATE
                </h2>
            </div>

            <div className="relative ">
                <div className="flex justify-between w-full max-lg:flex-col">
                    <div className="flex w-2/6 max-xl:w-2/4 max-lg:w-full flex-col  ">
                        <div className="bg-[#e24f82] w-full">
                            <h1 className=" text-white p-3 text-center text-3xl font-bold">
                                Corporate Board of Directors
                            </h1>
                        </div>
                        <div className="sol-alt w-full h-full">
                            <img
                                src={VedatBey}
                                alt="deneme"
                                className="w-full object-cover object-center h-full"
                            />
                        </div>
                    </div>
                    <div className="flex w-4/6 max-xl:w-2/4 max-lg:w-full   flex-col justify-between  ">
                        <div className="w-full">
                            <h1 className=" text-white text-3xl  p-3 bg-[#1b4378] text-left font-bold">
                                Chairman & CEO
                            </h1>
                        </div>
                        <div className="bg-[#00a1e0] h-full text-white p-4 text-left flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3">
                            <h2 className="text-3xl font-semibold">
                                Vedat Irdelp
                            </h2>
                            <p className=" mt-5">
                                Vedat İrdelp, the founder and Chairman of the
                                Board of Directors of our company, graduated
                                from Sankt Georg Science High School in Austria
                                and then graduated from ITU (Istanbul Technical
                                University) Faculty of Engineering and
                                Architecture. He worked as a member of the Board
                                of Directors of a financial institution in
                                Germany, worked on many Mergers & Acquisitions,
                                then came to Turkey and after providing
                                consultancy services in the construction of
                                ISKEN 1.320 MW imported coal power plant in
                                Iskenderun, he founded ViTO Engineering
                                Construction and Contracting Inc. in 2000 in
                                Turkey. In order to develop the engineering and
                                construction works of all facilities related to
                                energy, oil and gas, VITO has established a
                                system that completes the entire supply chain
                                for the realization of industrial structures
                                including power plants, petrochemical plants and
                                refineries with the ViTO group of companies
                                headquartered in Turkey with the Vito Group of
                                Companies, with an engineering office in Mumbai
                                as well as a factory investment in Bergama.Vedat
                                İrdelp, who has served as a member of the Board
                                of Directors of DEİK, WEF, AHK and Galatasaray
                                Sports Club, is the Chairman of the Board of
                                Directors and Group CEO of ViTO Group of
                                Companies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Fuat    */}
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse">
                <div className="bg-[#093977]  text-white w-[65%] p-4 text-left h-[450px] max-lg:w-full max-lg:h-auto flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3">
                    <h2 className="text-3xl font-semibold">
                        Muhittin Fuat Şengül
                    </h2>

                    <p className=" mt-5">
                        Born in 1964 in Istanbul, Fuat Şengül graduated from
                        Istanbul Technical University, Department of Civil
                        Engineering (1985) and received his Master's degree from
                        Istanbul Technical University, Faculty of Engineering
                        (1987). He received his specialization certificate from
                        Marmara University Finance and Accounting Department
                        (1988). After working as an investment appraiser in
                        private banks, Mr. Şengül assumed the positions of
                        General Manager and Board Member at Istanbul Gaz Dağıtım
                        A.Ş. (İGDAŞ) (1994-2000). He took over Istanbul Gaz
                        Dağıtım A.Ş. with 100.000 subscribers and increased it
                        to 1.500.000 subscribers. During his term of office, he
                        managed 2.100 km polyethylene, 400 km high pressure
                        steel pipeline and 2 million WDI works. In 2001, Şengül
                        joined Vito Group and worked as an auditor manager in
                        projects such as Gebze thermal power plant, Aslancık
                        hydro power plant and Bergama Industry factory
                        construction. He currently serves as Vice Chairman of
                        the Board of Directors at Vito Engineering Construction
                        and Contracting Inc. He is married and has four
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
                    <div className=" bg-[#3266a7] h-4/5  flex justify-center items-center max-lg:hidden">
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
                <div className="hidden max-lg:flex bg-[#3266a7] w-full h-auto justify-center items-center ">
                    <p className="text-white text-3xl p-1  max-md:py-4">
                        General Manager
                    </p>
                </div>
                <div className="w-[27%] max-lg:w-full h-auto">
                    <img
                        src={Burhan}
                        alt="fuat"
                        className="w-full h-full max-lg:w-full object-cover"
                    />
                </div>
                <div className="bg-[#3266a7]  text-white w-[65%] p-4 text-left max-lg:w-full h-auto flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3 ">
                    <h2 className="text-3xl font-semibold">Burhan Tekdemir </h2>
                    <p className=" mt-5">
                        Burhan Tekdemir is a highly accomplished professional
                        with a strong background in managing complex
                        construction and contracting projects. Tekdemir’s
                        educational background includes a diploma in Business
                        Administration from Boğaziçi University and completed an
                        executive education program for leadership in Sabancı
                        University. He is also an active member of DEIK (Foreign
                        Economic Relations Board of Türkiye), Fenerbahçe Sports
                        Club, and BUMED (Boğaziçi University Alumni
                        Association). Currently serving as an Executive Board
                        Member at ViTO Engineering Construction and Contracting,
                        he has made significant contributions to the company's
                        growth and success. With over 17 years of experience at
                        several high-level positions in ViTO Group, Tekdemir has
                        successfully managed various projects, including the
                        several mechanical works for the STAR Refinery, and the
                        Socar Aliağa tank farm project. He has also held the
                        position of Managing Director at Technicon Azerbaijan,
                        overseeing projects such as the turnkey construction of
                        six storage tanks and the construction of an anti-blast
                        central control building in Baku Heydar Aliyev Refinery.
                        As the Managing Director at IOT-ViTO Construction, he
                        played a key role in the implementation of Türkiye and
                        the region’s largest storage tank project in STAR
                        Refinery. Prior to these roles, Tekdemir served as
                        several management positions at ViTO Energy and
                        Investment, where he has been involved in the projects
                        such as the 900-MW Gebze Combined Cycle Gas-fired power
                        plant and the 120-MW Aslancık Hydro power plant and
                        Business Development Director in IBS Research &
                        Consultancy.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex flex-row items-center justify-center my-2">
                <div className="w-2/5 h-[2px] bg-[#093977] mr-4"></div>
                <h1 className="font-bold text-4xl my-5 mx-0 text-[#093977] text-center">
                    MANAGMENT
                </h1>
                <div className="w-2/5 h-[2px] bg-[#093977] ml-4"></div>
            </div>
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse bg-sky-800">
                <div className="w-1/2 text-white  p-4 text-left max-lg:w-full h-auto flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3 ">
                    <h2 className="text-3xl text-white font-semibold mb-1">
                        Dinç Şenlier
                    </h2>
                    <p className="text-white text-left">
                        Dinç Şenlier graduated from the Middle East Technical
                        University, Department of Electrical Engineering in
                        1976, and then completed his master's degree at the same
                        university and received the title of Electronics
                        Engineer M.Sc. in 1980. He started his career as a
                        Research Assistant at METU in 1976, and continued his
                        career at PTT General Directorate and Aselsan before
                        joining Tekfen Group in 1982. For 40 years until 2022,
                        he worked in almost every position and responsibility in
                        Tekfen, one of Turkey's largest groups. After working as
                        a General Manager at 2 Tekfen Group companies producing
                        for the Defense Industry for 8 years, and then as
                        Management Representative in the Contracting company, he
                        served as the consultant to the President of Tekfen
                        Group Companies and guided and leaded in many areas.
                        Şenlier, who has been working as the Deputy Managing
                        Director of ViTO Mühendislik İnşaat ve Taahhüt A.Ş.
                        since the beginning of 2022, is married and has one son.
                    </p>
                </div>
                <div className="w-[32%] max-lg:w-full h-auto">
                    <img
                        src={Dinc}
                        alt="dinç"
                        className="h-full w-full max-lg:h-auto object-cover"
                    />
                </div>
                <div className="flex justify-center items-center text-center w-[8%] max-lg:hidden">
                    <p
                        className="text-white text-2xl p-1"
                        style={{
                            writingMode: "vertical-rl",
                            marginLeft: "-50%",
                            marginTop: "50%",
                            height: "350px",
                        }}
                    >
                        Deputy Managing Director HSEQ
                    </p>
                </div>
                <div className="hidden max-lg:flex w-full h-[100px] bg-[#093977] justify-center items-center max-md:text-xl">
                    <p className="text-white text-xl text-center">
                        Deputy Managing Director HSEQ
                    </p>
                </div>
                <div className="w-[8%]">
                    <div className="bg-[#00a1e0] h-1/3"></div>
                    <div className="bg-[#093977] h-1/3"></div>
                    <div className="bg-[#be677b] h-1/3"></div>
                </div>
            </div>
            {/*Dinçer    */}

            <div className="flex flex-row justify-between  bg-[#be677b] w-full max-lg:flex-col">
                <div className="w-[5%] h-full bg-[#be677b] max-lg:hidden">
                    <p
                        className="text-white text-2xl p-1"
                        style={{
                            writingMode: "vertical-rl",
                            marginLeft: "15%",
                            marginTop: "100%",
                            height: "400px",
                            textAlign: "center",
                            transform: "rotate(180deg)",
                        }}
                    >
                        Project Director and Country Manager Qatar
                    </p>
                </div>
                <div className="bg-[#be677b] w-full hidden max-lg:flex justify-center items-center">
                    <p className="text-white text-3xl p-1 max-lg:text-xl max-md:py-4 text-center">
                        Project Director and Country Manager Qatar
                    </p>
                </div>
                <div className="w-[35%] h-auto max-lg:w-full">
                    <img
                        src={Zeki}
                        alt="dnc"
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className=" bg-[#00a1e0]  text-white w-[65%] p-4 text-left h-auto max-lg:w-full px-36 max-xl:px-1 flex flex-col justify-center items-start">
                    <h2 className="text-3xl font-semibold px-5 py-2 max-md:px-0">
                        Zeki Günay
                    </h2>
                    <br />

                    <p className=" mt-5">
                        Zeki Günay was born in 1972 and graduated from Hacettepe
                        Mechanical Engineering Faculty in 1994. In 1996, after
                        completing his military service, he started his
                        professional career on natural gas distribution
                        pipelines and terminal design works in Turkey. Between
                        1996-2001, he worked with Foster Wheeler on the Petrol
                        Ofisi Terminal revision and renovation projects in
                        Turkey, from the design phase to the commissioning
                        phase. Between 2001-2010, he worked on overseas
                        projectsFuat and worked with companies such as BP,
                        Technip, Bechtel and Shell in oil and gas projects in
                        different regions from Libya to Sakhalin. In 2010, he
                        started working at Akenerji CEZ and until 2015, he was
                        involved in the construction of one of the largest
                        combined power plants in Turkey, from the feed-in phase
                        to the commissioning phase. Between 2015-2017, he worked
                        as a consultant for power plant projects in Turkey. In
                        2017, he joined Vito and worked as a project director in
                        several projects between 2017 and 2022 and currently
                        continues his career as Country Manager in Qatar.
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse">
                <div className="bg-[#26697ce3]  text-white w-[65%] p-4 text-left h-auto max-lg:w-full max-lg:h-auto px-36 max-xl:px-12 max-md:px-3 flex flex-col justify-center items-start">
                    <h2 className="text-3xl font-semibold">Reha Akın</h2>
                    <p className=" mt-5">
                        Born in 1968, Reha Akın graduated from Middle East
                        Technical University, Department of Mechanical
                        Engineering in 1991 and received his master's degree
                        from the same department in 1994. Mr. Akın also received
                        his European Welding Engineering diploma from SLV Munich
                        Germany in 1992 and his MBA from Işık University in
                        2014. Mr. Akın worked as a quality system auditor at TSE
                        between 1991 and 1994. After taking part in the
                        construction of a sawmill in Russia between 1994-1996,
                        he worked as Project Manager and Project Director in the
                        construction of oil refineries, LNG plants and power
                        plants in various countries at Gama Holding between
                        1996-2018. During this period, he also collaborated with
                        companies such as Technip, JGC, Chiyoda, Saipem, Fluor,
                        Alstom, Ansaldo, GE, Shell at a high level. Bukhara
                        Refinery, Turkmenbashi MSCC and Lube Oil Projects,
                        Tomskneft Gas Compressor Station, Atyrau Refinery
                        Modernization Project, Sakhalin LNG Plant, Shoaiba Power
                        Plants, Erzin Combined Cycle Power Plant, Khuraish Gas
                        and Oil Separation Plant are some of the projects in
                        which he worked at senior level. Between 2018 and 2023,
                        he took senior roles in the construction of the process
                        unit at Gazprom's Amur Gas field and module
                        manufacturing and assembly projects in Italy and Russia.
                        As of 2023, he is the Project Director at VITO's head
                        office.
                    </p>
                </div>
                <div className="w-[27%] h-auto max-lg:w-full">
                    <img
                        src={Reha}
                        alt="Reha"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="hidden max-lg:flex bg-[#093977] w-full justify-center items-center">
                    <p className="text-white text-3xl p-1 max-lg:text-xl max-md:py-4 text-center">
                        Head Office Project Director
                    </p>
                </div>
                <div className="w-[8%] flex-col text-center  max-lg:hidden">
                    <div className=" bg-[#093977] h-4/5 relative flex justify-center">
                        <p
                            className="text-white text-2xl p-1"
                            style={{
                                writingMode: "vertical-rl",
                                marginLeft: "-20%",
                                marginTop: "20%",
                                height: "350px",
                            }}
                        >
                            Head Office Project Director
                        </p>
                    </div>
                    <div className=" h-1/5 bg-[#00a1e0]"></div>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col">
                <div className="w-[8%] flex-col text-center ">
                    <div className=" bg-[#313e72] h-4/5  flex justify-center items-center max-lg:hidden p-3">
                        <p
                            className="text-white text-2xl"
                            style={{
                                transform: "rotate(-180deg)",
                                writingMode: "vertical-lr",
                            }}
                        >
                            Financial And Administrative Director
                        </p>
                    </div>

                    <div className=" h-1/5 bg-[#226b88]"></div>
                </div>
                <div className="hidden max-lg:flex bg-[#313e72] w-full justify-center items-center">
                    <p className="text-white text-3xl p-1 max-lg:text-xl max-md:py-4 text-center">
                        Financial And Administrative Director
                    </p>
                </div>
                <div className="w-[27%] max-lg:w-full h-auto">
                    <img
                        src={Tahir}
                        alt="Tahir"
                        className="w-full h-full max-lg:w-full object-cover"
                    />
                </div>
                <div className="bg-[#6786bc]  text-white w-[65%] p-4 text-left max-lg:w-full h-auto px-36 max-xl:px-12 max-md:px-3 flex flex-col justify-center items-start">
                    <h2 className="text-3xl font-semibold">Tahir Kolat</h2>
                    <p className=" mt-5">
                        Born in 1965, Tahir Kolat graduated from Dokuz Eylül
                        University, Faculty of Economics and Administrative
                        Sciences - Department of Business Administration in 1987
                        and then completed his master's degree at Istanbul
                        University, Institute of Business Economics in 1990.
                        Tahir Kolat worked as a Supervisor at Deloitte Touche
                        Tohmatsu Independent Audit firm between 1989-1994. He
                        worked as Accounting & Operations Coordinator at Vakıf
                        Deniz Leasing between 1994-1997, Assistant General
                        Manager and Acting General Manager at İktisat Leasing
                        between 1997-2003, Financial Controller at Greıf
                        Flexible Products & Services between 2003-2019,
                        Financial Controller at Tamer Tanca (Kemal Tanca)
                        Magazacılık Tic. A.Ş. between 2019 and 2022. As of 2022,
                        he has been working as Finance and Administrative
                        Affairs Director at VİTO Head Office.
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 mt-9">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="font-bold text-4xl my-5 mx-0 text-[#093977] text-center">
                    HISTORY
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
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
