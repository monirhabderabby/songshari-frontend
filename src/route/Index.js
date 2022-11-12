import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components import 
import About from "../Wrapper/About/About";
import Homepage from "../Wrapper/Home/Homepage";
import SingleProfiles from "../components/SingleProfilesUser/SingleProfiles";

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/userprofile" element={<SingleProfiles></SingleProfiles>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;
