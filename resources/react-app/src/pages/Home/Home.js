import React, { useEffect, useRef, useState } from "react";
import News from "../../components/Home/News";
import service from "../../service/service";
import DenemeSlider from "../../components/Contact/DenemeSlider";

function Home() {
    return (
        <div className="">
            <div className="h-[1200px] bg-white">
                <DenemeSlider />
            </div>
            <div className="h-[1200px] bg-white">
                B<div class="loader"></div>
            </div>
            <div className="h-[1200px] bg-red-500">C</div>
            <div className="h-[1200px] bg-green-300">D</div>
            <News />
        </div>
    );
}

export default Home;
