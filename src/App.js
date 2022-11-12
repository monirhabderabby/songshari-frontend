import { Route, Routes } from "react-router-dom";
import SingleProfile from "../src/Pages/SingleProfile.js";
import "./App.css";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SingleProfile />} />
            </Routes>
        </div>
    );
}

export default App;
