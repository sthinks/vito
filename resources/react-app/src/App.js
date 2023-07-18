import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import "./App.css";

function App() {
    return (
        <div className="font-custom">
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </div>
    );
}

export default App;
