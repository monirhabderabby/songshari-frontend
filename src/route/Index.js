import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components import 
import About from "../Wrapper/About/About";
import Homepage from "../Wrapper/Home/Homepage";
import SingleProfiles from "../components/SingleProfilesUser/SingleProfiles";
import MemberShip from "../Wrapper/Membership/MemberShip";
import FindPartner from "../Wrapper/Findpartner/FindPartner";
import ProfileInfo from "../Wrapper/Profileinfo/ProfileInfo";
import Course from "../Wrapper/Course/Course";
import FindAlawyer from "../Wrapper/Findalawyer/FindAlawyer";
import Kazi from "../Wrapper/Kazi/Kazi";
import Agent from "../Wrapper/Agent/Agent";

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/userprofile" element={<SingleProfiles></SingleProfiles>}></Route>
                    <Route path="/membership" element={<MemberShip></MemberShip>}></Route>
                    <Route path="/findpartner" element={<FindPartner></FindPartner>}></Route>
                    <Route path="/profileinfo" element={<ProfileInfo></ProfileInfo>}></Route>
                    <Route path="/course" element={<Course></Course>}></Route>
                    <Route path="/findalawyer" element={<FindAlawyer></FindAlawyer>}></Route>
                    <Route path="/kazi" element={<Kazi></Kazi>}></Route>
                    <Route path="/agent" element={<Agent></Agent>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;
