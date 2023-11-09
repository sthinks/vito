import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import "./App.css";
import { useState } from "react";
import vitoimg from "./assets/vitopup.png";
function App() {
    const [isOpen, setIsOpen] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50"
                    onClick={togglePopup}
                >
                    <div className="popup relative max-md:w-[75%] ">
                        <span className="close text-2xl max-md:text-xl absolute -top-7 -right-7 flex justify-center items-center  border-2 border-slate-800 text-black font-bold cursor-pointer bg-white w-8 h-8 rounded-full">
                            X
                        </span>

                        <img
                            alt="popupimage"
                            className="w-[28rem] h-auto"
                            src={vitoimg}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
