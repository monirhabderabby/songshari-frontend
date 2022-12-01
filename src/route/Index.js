import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminAnalytics from "../components/pages/AdminAnalytics/AdminAnalytics";

// components import
import Login from "../components/pages/Authentications/Login";
import LoginAsProfessional from "../components/pages/Authentications/LoginAsProfessional";
import RegAsProfessional from "../components/pages/Authentications/RegAsProfessional";
import SignUp from "../components/pages/Authentications/SignUp";
import Contact from "../components/pages/Contact/Contact";
import { DynamicProfilePage } from "../components/pages/DynamicProfilePage/DynamicProfilePage";
import { LawyerActivity } from "../components/pages/lawyeractivity/LawyerActivity";
import LawyerProfilePage from "../components/pages/lawyerPage/lawyerProfile/LawyerProfilePage";
import LawyerReview from "../components/pages/lawyerPage/lawyerReview/LawyerReview";
import LawyerServiceDetails from "../components/pages/lawyerPage/LawyerServiceDetails/LawyerServiceDetails";
import { Members } from "../components/pages/Members/Members";
import NotFound from "../components/pages/notfound/NotFound";
import { OurTeams } from "../components/pages/OurTeams/OurTeams";
import { Privacy } from "../components/pages/Privacy/Privacy";
import { SingleRequestView } from "../components/pages/SingleRequestView/SingleRequestView";
import TopProfessionAgent from "../components/pages/TopProfession/TopProfessionAgent";
import TopProfessionKazi from "../components/pages/TopProfession/TopProfessionKazi";
import Suggested from "../components/pages/TopProfile/Suggested";
import TopBride from "../components/pages/TopProfile/TopBride";
import TopGroom from "../components/pages/TopProfile/TopGroom";
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
import SingleProfile from "../Wrapper/SingleProfilesUser/SingleProfile";
import { Container } from "../Wrapper/Stepper/Container";
// import { UsersProfile } from "../components/SingleProfilesUser/profileSection/UsersProfile";
import MobileDiamondPlan from "../components/pages/Membership/MobileVersion/MobileDiamondPlan";
import MobileFreePlan from "../components/pages/Membership/MobileVersion/MobileFreePlan";
import MobileGoldPlan from "../components/pages/Membership/MobileVersion/MobileGoldPlan";
import MobilePlatinumPlan from "../components/pages/Membership/MobileVersion/MobilePlatinumPlan";
import UpgradePlan from "../components/pages/Membership/MobileVersion/UpgradePlan";
import MobileActivity from "../components/pages/MobileActivity/MobileActivity";
import MobileActivityPost from "../components/pages/MobileActivity/MobileActivityPost";
import { CertificateMov } from "../Wrapper/Home/mobileversion/CertificateMov";
import { Like } from "../Wrapper/Home/mobileversion/Like";
import { MatchesMov } from "../Wrapper/Home/mobileversion/MatchesMov";
import { MobileHome } from "../Wrapper/Home/mobileversion/MobileHome";
import { CompletedCaseMov } from "../Wrapper/Home/mobileversion/mobilelawyeractivity/CompletedCase";
import { NavCase } from "../Wrapper/Home/mobileversion/mobilelawyeractivity/NavCase";
import { PendingCaseMov } from "../Wrapper/Home/mobileversion/mobilelawyeractivity/PendingCase";
import { RunningCaseMov } from "../Wrapper/Home/mobileversion/mobilelawyeractivity/RunningCase";
import MobileProfileOthers from "../Wrapper/Home/mobileversion/MobileProfileOthers";
import { Setting } from "../Wrapper/Home/mobileversion/Setting";

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/userprofile" element={<SingleProfile />}></Route>
                    <Route path="/mobileotherprofile" element={<MobileProfileOthers></MobileProfileOthers>}></Route>
                    <Route path="/membership" element={<MemberShip></MemberShip>}></Route>
                    <Route path="/profileinfo" element={<ProfileInfo></ProfileInfo>}></Route>
                    <Route path="/course" element={<Course></Course>}></Route>
                    <Route path="/findalawyer" element={<FindAlawyer></FindAlawyer>}></Route>
                    <Route path="/lawyer-profile" element={<LawyerProfilePage />}></Route>
                    <Route path="/lawyer-review" element={<LawyerReview />}></Route>
                    <Route path="/lawyer-service-detail" element={<LawyerServiceDetails />}></Route>
                    <Route path="/kazi" element={<Kazi></Kazi>}></Route>
                    <Route path="/agent" element={<Agent></Agent>}></Route>
                    <Route path="/community" element={<Community></Community>}></Route>
                    <Route path="/shop" element={<Shop></Shop>}></Route>
                    <Route path="products" element={<NavCase />}>
                        <Route path="search" element={<PendingCaseMov />} />
                        <Route path="list" element={<RunningCaseMov />} />
                        <Route path="add" element={<CompletedCaseMov />} />
                    </Route>
                    <Route path="/singleproduct" element={<SingleProduct></SingleProduct>}></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/regAsProfessional" element={<RegAsProfessional />} />
                    <Route path="/loginAsProfessional" element={<LoginAsProfessional />} />
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/lawyeractivity" element={<LawyerActivity></LawyerActivity>}></Route>
                    <Route path="/members" element={<Members />}></Route>
                    <Route path="/profile/:id" element={<DynamicProfilePage />}></Route>
                    <Route path="/privacy-policy" element={<Privacy></Privacy>}></Route>
                    <Route path="/our-teams" element={<OurTeams />}></Route>
                    <Route path="/find-partner" element={<FindPartner />}>
                        <Route path="/find-partner" element={<Suggested />} />
                        <Route path="top" element={<TopBride />} />
                        <Route path="nearest" element={<TopGroom />} />
                    </Route>
                    <Route path="/" element={<Homepage></Homepage>}>
                        <Route path="/" element={<Suggested />} />
                        <Route path="/top-gride" element={<TopBride />} />
                        <Route path="/top-groom" element={<TopGroom />} />
                        <Route path="/top-profession/kazi" element={<TopProfessionKazi />} />
                        <Route path="/top-profession/agent" element={<TopProfessionAgent />} />
                    </Route>
                    <Route path="/singleViewRequest" element={<SingleRequestView />} />
                    <Route path="/admin-analytics" element={<AdminAnalytics />}></Route>
                    <Route path="/stepper" element={<Container></Container>}></Route>
                    <Route path="/upgrade" element={<UpgradePlan></UpgradePlan>}></Route>

                    {/* --------------- MOBILE ROUTES START --------------- */}
                    <Route path="/mobileHomePage" element={<MobileHome />}></Route>
                    <Route path="/setting" element={<Setting></Setting>}></Route>
                    <Route path="/matchesmov" element={<MatchesMov></MatchesMov>}></Route>
                    <Route path="/mobileActivityPage" element={<MobileActivity />}></Route>
                    <Route path="/mobileActivityNextPage" element={<MobileActivityPost />}></Route>

                    <Route path="/certificatemov" element={<CertificateMov></CertificateMov>}></Route>
                    <Route path="/like" element={<Like></Like>}></Route>
                    <Route path="/mobileUpgrade" element={<UpgradePlan></UpgradePlan>}></Route>
                    <Route path="/mobileFreePlan" element={<MobileFreePlan />}></Route>
                    <Route path="/mobileGoldPlan" element={<MobileGoldPlan />}></Route>
                    <Route path="/mobileDiamondPlan" element={<MobileDiamondPlan />}></Route>
                    <Route path="/mobilePlatinumPlan" element={<MobilePlatinumPlan />}></Route>
                    {/* --------------- MOBILE ROUTES END --------------- */}

                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;
