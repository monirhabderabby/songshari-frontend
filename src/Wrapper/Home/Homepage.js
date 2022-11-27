import React, { Suspense } from "react";
import Anexecutive from "../../components/CardComopents/Anexecutive";
import Membership from "../../components/membership/Membership";
import BeginFamilyJourney from "../../components/pages/Home/BeginFamilyJourney/BeginFamilyJourney";
import FindSoleMate from "../../components/pages/Home/FindSoleMate/FindSoleMate";
import SecureVerified from "../../components/pages/Home/SecureVerified/SecureVerified";
import LatestRegisteredMember from "../../components/pages/LatestRegisteredMember/LatestRegisteredMember";
import MeetNewPeople from "../../components/pages/MeetNewPeople/MeetNewPeople";
import PeopleJoinedAlready from "../../components/pages/PeopleJoinedAlready/PeopleJoinedAlready";
import NavBar from "../../components/pages/Shared/NavBar";
import TopProfession from "../../components/pages/TopProfession/TopProfession";
import TopProfile from "../../components/pages/TopProfile/TopProfile";
import Footer from "../../components/shared/Footer/Footer";
import { MobileHome } from "./mobileversion/MobileHome";
const Banner = React.lazy(() => import("../../components/pages/Home/Banner/Banner"));
// import NavBar from "../../components/shared/NavBar/NavBar";
const Homepage = () => {
    return (
        <div className="font-george">
            <div className="hidden md:block">
                <Suspense fallback={<div>Loading...</div>}>
                    <NavBar></NavBar>
                    <Banner></Banner>
                    {/* <ThreeEasySteps></ThreeEasySteps> */}
                    <SecureVerified></SecureVerified>
                    <BeginFamilyJourney></BeginFamilyJourney>
                    <LatestRegisteredMember />
                    <TopProfile />
                    <PeopleJoinedAlready />
                    <TopProfession />
                    <FindSoleMate />
                    <MeetNewPeople />
                    <Membership />
                    <Anexecutive></Anexecutive>
                    <Footer />
                </Suspense>
            </div>
            <div className="md:hidden">
                <MobileHome></MobileHome>
            </div>
        </div>
    );
};

export default Homepage;
