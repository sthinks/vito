import React, { useLayoutEffect, useState } from "react";
import service from "../../service/service";
import { Helmet } from "react-helmet";
function Kvkk() {
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
        <>
            <div className="w-full">
                <div className="w-full flex justify-center items-center relative h-[200px] bg-[#00dcff]">
                    <div className="w-full h-full absolute bg-black opacity-60 left-0 bottom-0" />
                </div>
                <div className="container mx-auto px-24 max-lg:px-16 max-md:px-5 my-14">
                    <div className="py-2">
                        <p className="text-3xl font-bold py-2">
                            Our Human Resources Policy
                        </p>
                        <p className="text-lg   py-2">
                            VITO defends the principle of equal opportunities in
                            our recruitment policy. While trying to reach the
                            right candidate in line with our needs, it cares
                            about the fairest execution of our processes. As an
                            employer, it has adopted the principle of providing
                            equal opportunity and processes such as employee
                            selection, interview, recruitment, classification,
                            training, promotion, wage offer are only based on
                            merit and qualification, regardless of race,
                            religion, belief, color, nationality, disability,
                            gender or age. operates on its principles. ViTO
                            Human Resources basic policy; It is based on the
                            principle of working in accordance with the
                            understanding of service focused on respect for
                            people, within the framework of the relevant
                            legislation and determined policies. ViTO; It has
                            adopted as a strategic goal to have employees who
                            are open to change, modern, innovative, efficient
                            and specialized in their field by developing their
                            structure in accordance with corporate values and
                            who can transfer these expertise to others.
                        </p>
                    </div>
                    <div className="py-2">
                        <p className="text-3xl font-bold py-2">Why Vito</p>
                        <p className="text-lg  py-2">
                            Starting from the selection process, it offers equal
                            opportunities to its employees in all processes, the
                            right people are placed in the right positions,
                            promotes from within the organization for new
                            positions, cares about the morale and motivation of
                            its employees, makes training plans for its
                            employees, provides an open communication
                            environment, and all these processes are in
                            accordance with the law to protect personal data.
                            Our basic principle is to be an organization that
                            puts people at its center by conducting business.
                        </p>
                    </div>
                    <div className="py-2">
                        <p className="text-3xl font-bold py-2">
                            Career Opportunities
                        </p>
                        <p className="text-lg  py-2">
                            You can follow us on Kariyer.net and linkedin for
                            our current job opportunities. You can send your
                            current CV to{" "}
                            <a
                                className="cursor-pointer hover:underline hover:text-blue-500"
                                href="mailto:cv@vito.com.tr"
                            >
                                cv@vito.com.tr
                            </a>{" "}
                            to apply for our open positions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kvkk;
