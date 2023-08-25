import React, { useLayoutEffect, useState } from "react";
import service from "../../service/service";
function Hseq() {
    const [data, setData] = useState(null);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        getPages();
    }, []);

    const getPages = async () => {
        const result = await service.getBasePage("our-policies");
        setData(result.data);
    };
    return (
        <div className="w-full">
            <div className="container mx-auto px-24 max-lg:px-16 max-md:px-5 my-14">
                <div className="py-2">
                    <p className="text-2xl font-bold text-black py-2 text-center ">
                        CODE OF ETHICS AND BUSINESS CONDUCT
                    </p>
                    <p className="text-lg  py-2">
                        As VITO, we embrace the Total Quality Management
                        philosophy as a management methodology that involves the
                        participation of all our departments, applied in all our
                        activities, and considers continuous improvement as a
                        way of life. Providing a safe and healthy workplace,
                        conducting our business activities in an environmentally
                        protective manner, continuously improving our systems to
                        achieve and sustain customer satisfaction are our
                        principles. Our commitment is to eliminate the harm that
                        can be caused to employees, third parties, property, and
                        the environment; to take necessary measures to analyze
                        and minimize risks; to stop work in high-risk situations
                        until measures are taken; We believe that all
                        accunderlinehover:idents are preventable and we continue
                        to pursue the goal of "Zero Accidents" in all our
                        activities. We communicate our principles and
                        commitments regarding
                        <a
                            className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                            href={data?.pdf_links[1]}
                            target="blank"
                        >
                            {" "}
                            "Quality"{" "}
                        </a>
                        and
                        <a
                            className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                            href={data?.pdf_links[0]}
                            target="blank"
                        >
                            {" "}
                            "Health, Safety, and Environment Policy"{" "}
                        </a>
                        to our employees and third parties through our Policies.
                        To achieve the goals we set with our Policies, we take
                        guidance from{" "}
                        <a
                            className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                            href={data?.pdf_links[2]}
                            target="blank"
                        >
                            {" "}
                            ISO 9001:2015{" "}
                        </a>{" "}
                        Quality ,{" "}
                        <a
                            className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                            href={data?.pdf_links[4]}
                            target="blank"
                        >
                            {" "}
                            ISO 45001:2018{" "}
                        </a>{" "}
                        Occupational Health and Safety, and{" "}
                        <a
                            className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                            href={data?.pdf_links[3]}
                            target="blank"
                        >
                            {" "}
                            ISO 14001:2015{" "}
                        </a>{" "}
                        Environmental Management System Standards. We prove the
                        conformity of our Management Systems applied in all our
                        projects and workplaces, including our Head Office, with
                        the standards by the certificates provided by accredited
                        audit institutions.
                    </p>
                </div>
                {/* <div className="py-2">
                    <p className="text-3xl font-bold py-2">
                        Our Human Resources Policy
                    </p>
                    <p className="text-lg   py-2">
                        VITO defends the principle of equal opportunities in our
                        recruitment policy. While trying to reach the right
                        candidate in line with our needs, it cares about the
                        fairest execution of our processes. As an employer, it
                        has adopted the principle of providing equal opportunity
                        and processes such as employee selection, interview,
                        recruitment, classification, training, promotion, wage
                        offer are only based on merit and qualification,
                        regardless of race, religion, belief, color,
                        nationality, disability, gender or age. operates on its
                        principles. ViTO Human Resources basic policy; It is
                        based on the principle of working in accordance with the
                        understanding of service focused on respect for people,
                        within the framework of the relevant legislation and
                        determined policies. ViTO; It has adopted as a strategic
                        goal to have employees who are open to change, modern,
                        innovative, efficient and specialized in their field by
                        developing their structure in accordance with corporate
                        values and who can transfer these expertise to others.
                    </p>
                </div>
                <div className="py-2">
                    <p className="text-3xl font-bold py-2">Why Vito</p>
                    <p className="text-lg  py-2">
                        Starting from the selection process, it offers equal
                        opportunities to its employees in all processes, the
                        right people are placed in the right positions, promotes
                        from within the organization for new positions, cares
                        about the morale and motivation of its employees, makes
                        training plans for its employees, provides an open
                        communication environment, and all these processes are
                        in accordance with the law to protect personal data. Our
                        basic principle is to be an organization that puts
                        people at its center by conducting business.
                    </p>
                </div>
                <div className="py-2">
                    <p className="text-3xl font-bold py-2">
                        Career Opportunities
                    </p>
                    <p className="text-lg  py-2">
                        You can follow us on Kariyer.net and linkedin for our
                        current job opportunities. You can send your current CV
                        to{" "}
                        <a
                            className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                            href="mailto:cv@vito.com.tr"
                        >
                            cv@vito.com.tr
                        </a>{" "}
                        to apply for our open positions.
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Hseq;
