import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components import
import Login from "../components/pages/Authentications/Login";
import SignUp from "../components/pages/Authentications/SignUp";
import Contact from "../components/pages/Contact/Contact";
import { Members } from "../components/pages/Members/Members";
import NotFound from "../components/pages/notfound/NotFound";
import { Footer } from "../components/shared/Footer/Footer";
import SingleProfiles from "../components/SingleProfilesUser/SingleProfiles";
import About from "../Wrapper/About/About";
import Agent from "../Wrapper/Agent/Agent";
import Community from "../Wrapper/Community/Community";
import Course from "../Wrapper/Course/Course";
import FindAlawyer from "../Wrapper/Findalawyer/FindAlawyer";
import FindPartner from "../Wrapper/Findpartner/FindPartner";
import Homepage from "../Wrapper/Home/Homepage";
import Kazi from "../Wrapper/Kazi/Kazi";
import MemberShip from "../Wrapper/Membership/MemberShip";
import ProfileInfo from "../Wrapper/Profileinfo/ProfileInfo";
import Shop from "../Wrapper/Shop/Shop";
import SingleProduct from "../Wrapper/SingleProduct/SingleProduct";

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
                    <Route path="/agent" element={<Agent></Agent>}></Route>
                    <Route path="/community" element={<Community></Community>}></Route>
                    <Route path="/shop" element={<Shop></Shop>}></Route>
                    <Route path="/singleproduct" element={<SingleProduct></SingleProduct>}></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/members" element={<Members />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Index;
