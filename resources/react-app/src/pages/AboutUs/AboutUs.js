import React, { useLayoutEffect, useState } from "react";
import Aboutusbg from "../../assets/aboutus/aboutusbg.png";
import AboutusRight from "../../assets/aboutus/aboutusright.png";
import AboutWawes from "../../assets/aboutus/aboutwawes.png";
import service from "../../service/service";
import CountUp from "react-countup";
import serviceBg from "../../assets/aboutus/servicebg.png";
import { useInView } from "react-intersection-observer";
import CEO from "../../assets/institutional/vedattbey.jpg";
import { useNavigate } from "react-router-dom";
import Kvkk from "../KVKK/Hseq";
function AboutUs() {
    const [data, setData] = useState(null);
    const [dataService, setDataService] = useState(null);
    const [newsAnim, setNewsAnim] = useState(false);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        getDataStatHandler();
        getDataServiceHandler();
    }, []);
    const getDataStatHandler = async () => {
        const result = await service.getAboutStat();
        setData(result.data);
    };
    const getDataServiceHandler = async () => {
        const result = await service.getAboutServices();
        setDataService(result.data);
    };
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    if (inView === true) {
        if (newsAnim !== true) {
            setNewsAnim(true);
        }
    }
    const navigate = useNavigate();
    return (
        <>
            <div
                className="w-full bg-[#093977] relative"
                style={{
                    backgroundImage: `url(${Aboutusbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                }}
            >
                <img
                    className="absolute w-full h-auto z-50 bottom-[-0.1rem] left-0"
                    src={AboutWawes}
                    alt="AboutUsWawes"
                />
                <div className="w-full flex justify-center items-center flex-col text-center pt-56 pb-20 px-36 max-lg:px-20  max-md:px-2 h-auto">
                    <p className="text-7xl font-bold max-md:text-5xl text-center text-white tracking-widest z-50 py-10">
                        ABOUT US
                    </p>
                    <p className="text-xl font-normal max-lg:text-lg max-md:text-base text-center text-white z-50 py-10 ">
                        ViTO has grown steadily over the past 24 years to become
                        today's ViTO Group of Companies. During this growth
                        process, it has realized various important projects in
                        the field of contracting with partnerships with
                        world-class companies in its field. IVT company, which
                        we had previously established, was 100% included in ViTO
                        Group of Companies in 2017.
                        <br />
                        In 2019, the Group became one of the founding partners
                        of Bergama Industry factory to manufacture pressure
                        vessels and pipe prefabrication in Bergama Organized
                        Industry Zone. Currently exporting to three continents,
                        Bergama Industry's most prominent principles are the
                        delivery of projects on time, customer satisfaction and
                        managing projects in occupational health and safety.
                    </p>
                </div>
                <div className="w-full flex justify-between items-center my-5 h-[450px] max-xl:h-[550px] max-lg:h-auto max-md:flex-col">
                    <img
                        className="w-2/6 h-full object-cover object-top max-md:w-full"
                        src={CEO}
                        alt="CEO"
                    />
                    <div className="w-4/6  px-10 py-5 max-md:w-full max-md:px-2 h-auto">
                        <p className="text-3xl font-bold max-lg:text-xl max-md:text-lg text-center text-white z-50 py-10">
                            THE MESSAGE OF THE CHAIRMAN & CEO
                        </p>
                        <p className="text-xl font-normal max-lg:text-lg max-md:text-base text-center text-white z-50 py-10">
                            Founded in 2000, we have steadily grown our company
                            over the years and transformed it into today's ViTO
                            group of companies.
                            <br />
                            During this growth process, we established many
                            experienced and reputable foreign partnerships in
                            the world and realized important projects in the
                            field of contracting. In this context, we added our
                            joint venture contracting company, which we
                            established with our foreign partners, to our ViTO
                            group of companies as IVT company in 2017. After
                            that, in 2019, we opened our Bergama Industry
                            Factory, where pressure vessels and pipe
                            prefabrication are manufactured, in Bergama
                            Organized Industrial Zone. Currently, we export our
                            products to three continents and deliver them to
                            customers all over the world. The priority of our
                            company is the timely delivery of projects managed
                            by our experienced staff and the successful
                            execution of projects by prioritizing customer
                            satisfaction and occupational safety.
                        </p>
                    </div>
                </div>
                {data != null && (
                    <div className="w-full flex flex-wrap pb-20 justify-center items-center">
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className={`w-2/6 max-md:w-3/6  h-40 p-2  hover:-translate-y-2 transition delay-200 ease-in max-md:hover:-translate-x-0`}
                            >
                                <div
                                    className={`w-full h-full shadow-md shadow-slate-800 flex flex-col justify-center items-center`}
                                    style={{
                                        backgroundColor: `${item.color_code}`,
                                    }}
                                >
                                    <div className="text-white text-center flex items-end">
                                        <p className="text-4xl font-bold max-lg:text-2xl max-md:text-xl">
                                            <CountUp
                                                start={1}
                                                end={item.value}
                                            />
                                        </p>
                                        <p className="text-lg ml-2 max-md:text-base text-center">
                                            {item.type}
                                        </p>
                                    </div>

                                    <p className="text-lg text-white max-md:text-sm text-center">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="w-full relative">
                    <img
                        className="absolute right-0 w-2/6 -top-12 max-lg:-top-5 max-sm:hidden"
                        src={AboutusRight}
                        alt="AboutusRightImage"
                    />
                    <div className="w-full flex justify-start items-center px-20 pb-20 max-sm:px-0 max-sm:pb-0 max-sm:justify-center">
                        <div className="w-[40%] max-lg:w-[55%] max-sm:w-5/6">
                            <p className="text-4xl font-bold text-white py-2">
                                OUR VISION
                            </p>
                            <p className="text-lg font-light text-white py-2">
                                Our vision is to become a leading contracting
                                company in the petrochemical, hydrogen and
                                refinery sectors, renowned for our commitment to
                                sustainability. We aspire to achieve a
                                leadership position in the industry by
                                delivering the highest quality services,
                                embracing innovation, and executing projects
                                that are environmentally conscious. Our vision
                                is built upon the principles of leadership,
                                excellence, and continuous improvement, all
                                while contributing significantly to a
                                carbon-free future.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-start pb-40">
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
                        <div className="w-3/4 relative -left-40 max-lg:-left-24 max-md:-left-12 max-sm:left-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-full">
                            <div className="w-3/6 max-lg:w-5/6 my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    OUR MISSION
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    Our mission is to provide high-quality,
                                    reliable, and sustainable solutions that
                                    meet and exceed the needs and expectations
                                    of our customers. We strive to successfully
                                    complete projects in the petrochemical and
                                    refinery sectors, maintain the highest
                                    safety standards, and prioritize customer
                                    satisfaction.
                                </p>
                            </div>
                            <div className="w-5/6  my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    OUR VALUES
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    Customer Focus: We strive to understand our
                                    customers' needs, provide customized
                                    solutions, and establish long-term business
                                    relationships. Quality and Reliability: We
                                    uphold high-quality standards in our
                                    projects, commit to delivering reliable and
                                    timely services. Innovation and Continuous
                                    Improvement: We develop innovative solutions
                                    to be at the forefront of the industry,
                                    invest in research and technology, and
                                    continuously improve ourselves.
                                    Environmental Awareness: We plan our
                                    projects with consideration for
                                    environmental impact, adhere to
                                    environmental management systems, and strive
                                    to provide sustainable solutions. Teamwork
                                    and Collaboration: We encourage teamwork,
                                    foster open communication and a culture of
                                    collaboration among our employees.
                                </p>
                            </div>
                            <div className="w-5/6  my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    OUR WORKING PRINCIPLE
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    Ethical Principles: We fully comply with
                                    business ethics and integrity principles,
                                    adhere to laws and regulations. Occupational
                                    Health and Safety: The safety and health of
                                    our employees are our top priorities. We
                                    take necessary precautions to ensure
                                    compliance with occupational health and
                                    safety policies. Continuous Improvement: We
                                    constantly review our work processes,
                                    identify improvement opportunities, and
                                    strive to enhance efficiency. Transparency
                                    and Accountability: We maintain transparent
                                    communication and accountability towards our
                                    customers, suppliers, and employees. Social
                                    Responsibility: We are committed to being
                                    socially responsible, supporting social
                                    responsibility projects, and contributing to
                                    sustainability. Based on these values and
                                    working principles, we aim to maintain the
                                    highest level of quality and customer
                                    satisfaction as a leading company in the
                                    petrochemical and refinery sectors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="text-6xl font-semibold text-[#093977] max-md:text-5xl">
                    SERVICES
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <div
                ref={ref}
                className="w-full flex flex-wrap justify-center items-center px-32 py-6 max-lg:px-10 max-md:px-6 max-sm:px-2"
            >
                {dataService != null &&
                    dataService.map((item, i) => (
                        <a
                            id="spinning-service"
                            key={i}
                            className="w-2/6 flex justify-center items-center max-md:w-5/6 cursor-pointer"
                            href={`/service/${item.slug}#${item.slug}`}
                        >
                            <div className="relative rounded-full w-64 h-64 flex justify-center items-center max-sm:w-52 max-sm:h-52 max-sm:m-2">
                                {/* Dönen Çerçeve */}
                                <div
                                    style={{
                                        backgroundColor: `${item.color_code}`,
                                    }}
                                    className={`absolute top-0 left-0 w-full h-full rounded-full bg-cover ${
                                        newsAnim ? "animate-spin" : ""
                                    }`}
                                ></div>
                                {/* Dönen Border */}
                                <div
                                    className={`absolute top-0 left-0 w-full h-full  rounded-full ${
                                        newsAnim ? "animate-spin" : ""
                                    } bg-cover`}
                                    style={{
                                        backgroundImage: `url(${serviceBg})`,
                                    }}
                                ></div>
                                {/* Sabit Resim */}
                                <img
                                    className="w-[90%] relative z-30 rounded-full border-[12px] border-[#ffffff57]"
                                    src={item.image}
                                    alt="ServicesImage"
                                />
                                <div className="absolute z-40 w-[83%] h-[82%] border-4 border-black   rounded-full bg-black opacity-30" />
                                <p className="absolute text-white text-2xl font-bold text-center z-50">
                                    {item.title}
                                </p>
                            </div>
                        </a>
                    ))}
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="text-6xl text-center max-sm:w-full font-semibold text-[#093977] max-md:text-5xl">
                    ETHIC
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <div className="w-full container mx-auto px-36 flex justify-center items-center flex-col max-md:px-6">
                <p className="text-2xl font-bold text-black py-2 text-center ">
                    HEALTH SAFETY ENVIRONMENT - QUALITY
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-2">
                    ViTO Group displays the highest standards for understanding
                    and observing laws and regulations; and expects its
                    Employees and Business Partners to always act in a compliant
                    manner.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-2">
                    “Respect for people” is the core element of our philosophy.
                    We value human rights and employee rights. Harassment and
                    mobbingare unethical ways of behaving towards a person.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-2">
                    Protecting the environment and human health are the basic
                    principles that we prioritize in all our activities.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-2">
                    We pay utmost attention to business ethics and moral values.
                    We do not engage in any type of corruption, including
                    facilitation payments, all forms of bribery and corrupt
                    practices, and money laundering.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-2">
                    ViTO Group Employees and Business Partners shall not
                    directly or indirectly obtain personal gain from any
                    transactions and contractsrelated to ViTO Group.
                </p>
                <p className="text-lg font-normal text-slate-700 text-center py-2">
                    If Employees and Business Partners suspect any actual or
                    potential violation, we expect them to speak up. All such
                    communicationwill be kept confidential.
                </p>
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-10 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-[40%] border-2 border-[#456998] max-sm:hidden" />
                <p className="w-[20%] max-sm:w-full text-6xl font-semibold text-[#093977] max-md:text-5xl text-center">
                    HSE-Q
                </p>
                <hr className="w-[40%] border-2 border-[#456998] max-sm:hidden" />
            </div>
            <Kvkk />
        </>
    );
}

export default AboutUs;
