import React, { useEffect, useState } from "react";
import SectorBanner from "../../assets/sector/sectors.jpg";
import { useNavigate, useParams } from "react-router-dom";
import Helmet from "react-helmet";
function Services() {
    const slug = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getTake();
    }, [slug]);
    const getTake = () => {
        if (slug.slug !== undefined) {
            const targetElement = document.querySelector(`#${slug.slug}`);

            if (targetElement) {
                const viewportHeight = window.innerHeight;
                const elementRect = targetElement.getBoundingClientRect();
                const offset =
                    -(viewportHeight / 2) + elementRect.height * 0.25; // Biraz yukarı kaydırma

                window.scrollTo({
                    top: elementRect.top + offset,
                    behavior: "smooth",
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    };
    return (
        <div className="w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ViTO Services</title>
                <link rel="canonical" href={`/services`} />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO Services" />
                <meta name="description" content="ViTO Energy Projects" />
            </Helmet>
            <div className="w-full flex justify-center items-center relative max-md:h-[250px] ">
                <img
                    className="w-full h-full object-cover"
                    src={SectorBanner}
                    alt="SectorBanner"
                />
                <div className="w-full h-full absolute bg-black opacity-60 left-0 bottom-0" />
                <p className="absolute text-6xl font-extrabold max-md:text-3xl tracking-widest text-white">
                    SERVICES
                </p>
            </div>
            <div className="container mx-auto px-24 max-lg:px-16 max-md:px-5 my-14">
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="engineering"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        Engineering
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        Our highly disciplined engineering team provides
                        advanced process modeling and detailed design for
                        storage terminals, as well as engineering and design
                        (FEED) services for the initial planning phase. It also
                        includes piping and mechanical work. Our team consists
                        of experienced engineers with different backgrounds from
                        internationally recognized engineering firms and
                        contractors. With our multidisciplinary engineering
                        team, we provide advanced process modeling and detailed
                        design for storage terminals, as well as engineering and
                        design (FEED) services for the initial planning phase,
                        as well as piping and mechanical work. Our team consists
                        of highly experienced engineers with various backgrounds
                        from internationally recognized engineering firms and
                        contractors. We are the only company that provides
                        engineering, procurement, and manufacturing under one
                        roof for tank farm construction in Turkey. Our
                        engineering services are provided by Technicon Mumbai.
                    </p>
                </div>
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="procurement"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        Procurement
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        We provide equipment and material procurement,
                        inspection and logistics management from anywhere in the
                        world at the best cost, condition and quality. We
                        benefit from international suppliers in our special
                        database and follow a dual source strategy for critical
                        mission components. Being in strong and continuous
                        communication with all relevant top-level suppliers
                        allows us to respond quickly to possible market changes.
                        In the last 6 years, 69,000 tons of steel sheet supply
                        and processing have been realized. 
                    </p>
                </div>
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="construction"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        Construction
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        Our highly experienced senior project management team
                        specializes in construction and installation works for
                        large, international projects. Throughout our past
                        projects, we have gained a strong reputation for safety,
                        quality, and program performance. We create our projects
                        using consistent tools, systems, and standards to
                        achieve superior results safely, even in the most
                        challenging environments
                        <br />
                        For storage terminals, we use our proprietary fleet of
                        over 700 hydraulic jacks to install storage tanks up to
                        105 meters in diameter faster, safer, and more
                        efficiently, allowing our customers to use their
                        facilities earlier than traditional methods.
                        <br />
                        Our experienced and top-tier project management team
                        specializes in construction and installation works for
                        large, international projects. Throughout our past
                        projects, we have gained a strong reputation for safety,
                        quality, and program performance. We create our projects
                        using consistent tools, systems, and standards to
                        achieve superior quality results safely, even in the
                        most challenging environments. (SUGGESTION: We create
                        our projects using consistent tools, systems, and
                        standards to achieve superior quality results safely,
                        even in the most challenging environments.)
                        <br />
                        Using our proprietary fleet of over 700 hydraulic jacks,
                        we install storage tanks up to 105 meters in diameter
                        faster, safer, and more efficiently, allowing our
                        customers to use their facilities earlier than
                        traditional methods for storage terminals. 
                    </p>
                </div>
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="hydraulic-jack-systems"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        Hydraulic jack systems
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        It is a preferred method in the construction of storage
                        tanks. These systems offer many advantages in terms of
                        safety, quality, and efficiency by allowing the tanks to
                        be installed at ground level.
                        <br />
                        Hydraulic jacking systems consist of hydraulic cylinders
                        placed on the base plate of the tank. These cylinders
                        push the body plates of the tank upwards, creating a
                        space for welding. Once the welding process is
                        completed, the cylinders are operated again and the next
                        plate is placed. In this way, the body of the tank is
                        constructed at ground level.
                        <br />
                        One of the main reasons for the preference of hydraulic
                        jacking systems is safety. Constructing storage tanks at
                        ground level reduces the risk of accidents. This method
                        has proven the reliability of hydraulic jacking systems
                        used in the past 10 years, with no significant incidents
                        reported.
                        <br />
                        Tank constructions made using hydraulic jacking systems
                        do not require scaffolding. So far, 75 tanks have been
                        successfully built using these systems. Especially in
                        petroleum refineries, even the largest tanks with a
                        diameter of 92 meters have been erected using hydraulic
                        jacking systems. These systems also facilitate the
                        installation of heavy tanks weighing up to 1900 tons.
                        <br />
                        Hydraulic jacking systems also facilitate inspection
                        processes. Weld inspectors can inspect the ground-level
                        welds using ultrasonic or other non-destructive testing
                        methods. This makes the inspection process more
                        practical and improves quality control. Weld inspectors
                        can now work without the risk of climbing to hazardous
                        positions.
                        <br />
                        The use of hydraulic jacking systems in tank assembly
                        significantly reduces construction time and cost. The
                        need for cranes is eliminated, and the assembly process
                        is completed faster. Moreover, these systems require
                        less manpower, reducing construction costs. Thus, an
                        economical and efficient tank construction is achieved.
                        <br />
                        Hydraulic jacking systems provide a professional
                        solution in the construction of storage tanks. These
                        systems enhance both work safety and quality.
                        Additionally, they reduce construction time and cost.
                        Tank constructions using hydraulic jacking systems
                        utilize the technology of the future today.
                    </p>
                </div>
                <div className="w-full py-20" id="manufacturing">
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        Manufacturing
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        Our subsidiary's production facility is handling
                        multiple fast-track projects for various modules and
                        equipment. We manufacture complex modular assemblies
                        such as plates and structural steel, pipes and pressure
                        vessels, heat exchangers, or columns. We can produce
                        individual components, provide large sub-assemblies, and
                        also perform painting, blasting, post-weld heat
                        treatment, non-destructive examination, and testing at
                        the facility.
                        <br />
                        These components and assemblies are offered as part of
                        our EPC project scope or on a separate project basis for
                        third-party projects.
                        <br />
                        Our company's production facility is simultaneously
                        managing several fast-paced projects for various modules
                        and equipment. We manufacture complex modular
                        assemblies, such as plates and structural steel, pipes
                        and pressure vessels, heat exchangers, or columns.
                        Additionally, we can produce individual components,
                        provide large sub-assemblies, and perform painting,
                        blasting, post-weld heat treatment, non-destructive
                        examination, and testing processes at our facility.
                        <br />
                        These components and assemblies are offered either as
                        part of our EPC project scope or as a separate project
                        basis for third-party projects.
                        <br />
                        Our productions related to our projects are Bergama
                        Industry A, which we established in 2020.Sh.it is also
                        performed.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
