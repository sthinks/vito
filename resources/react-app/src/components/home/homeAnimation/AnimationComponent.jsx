import React  from "react";
import "./AnimationComponent.css"; // Animasyonlar için CSS dosyası
import CountUp from 'react-countup';

const AnimationComponent = ({ targetNumber, description, key, unit }) => {
    return (
        <li className="flex flex-col justify-center items-center">

                <div className="animation-container p-20  ">

                    <p className="text-center text-2xl"><CountUp start={0} duration={10} end={targetNumber}/> {unit} </p>

                </div>
                <p className="text-center text-white text-lg mt-2 ">
                    {description}
                </p>

        </li>
    );
};

export default AnimationComponent;
