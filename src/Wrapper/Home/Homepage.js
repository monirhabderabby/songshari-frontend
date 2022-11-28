import React, { Suspense, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Anexecutive from "../../components/CardComopents/Anexecutive";
import BeginFamilyJourney from "../../components/pages/Home/BeginFamilyJourney/BeginFamilyJourney";
import FindSoleMate from "../../components/pages/Home/FindSoleMate/FindSoleMate";
import SecureVerified from "../../components/pages/Home/SecureVerified/SecureVerified";
import LatestRegisteredMember from "../../components/pages/LatestRegisteredMember/LatestRegisteredMember";
import MeetNewPeople from "../../components/pages/MeetNewPeople/MeetNewPeople";
import PeopleJoinedAlready from "../../components/pages/PeopleJoinedAlready/PeopleJoinedAlready";
import NavBar from "../../components/pages/Shared/NavBar";
import TopProfile from "../../components/pages/TopProfile/TopProfile";
import Footer from "../../components/shared/Footer/Footer";
import { auth } from "../../firebase.init";
import { MobileHome } from "./mobileversion/MobileHome";
const Banner = React.lazy(() => import("../../components/pages/Home/Banner/Banner"));
// import NavBar from "../../components/shared/NavBar/NavBar";
const Homepage = () => {
    const [user, loading] = useAuthState(auth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (loading) {
            setIsLoggedIn(false);
        } else if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [user, loading, setIsLoggedIn]);
    return (
        <div className="font-george">
            <div className="hidden md:block">
                <Suspense fallback={<div>Loading...</div>}>
                    <NavBar></NavBar>
                    <Banner></Banner>
                    <FindSoleMate />
                    {/* <ThreeEasySteps></ThreeEasySteps> */}
                    <SecureVerified></SecureVerified>
                    <BeginFamilyJourney></BeginFamilyJourney>
                    <LatestRegisteredMember />
                    <TopProfile />
                    {/* <TopProfession /> */}
                    <PeopleJoinedAlready />
                    <MeetNewPeople />
                    {/* <Membership /> */}
                    {!isLoggedIn && <Anexecutive />}
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
