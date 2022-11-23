import React from "react";
import Anexecutive from "../../components/CardComopents/Anexecutive";
import Membership from "../../components/membership/Membership";
import Banner from "../../components/pages/Home/Banner/Banner";
import ThreeEasySteps from "../../components/pages/Home/Banner/ThreeEasySteps";
import BeginFamilyJourney from "../../components/pages/Home/BeginFamilyJourney/BeginFamilyJourney";
import FindSoleMate from "../../components/pages/Home/FindSoleMate/FindSoleMate";
import SecureVerified from "../../components/pages/Home/SecureVerified/SecureVerified";
import LatestRegisteredMember from "../../components/pages/LatestRegisteredMember/LatestRegisteredMember";
import MeetNewPeople from "../../components/pages/MeetNewPeople/MeetNewPeople";
import PeopleJoinedAlready from "../../components/pages/PeopleJoinedAlready/PeopleJoinedAlready";
import NavBar from "../../components/pages/Shared/NavBar";
import TopProfession from "../../components/pages/TopProfession/TopProfession";
import TopProfile from "../../components/pages/TopProfile/TopProfile";
import Footer from "../../components/Shared/Footer/Footer";
// import NavBar from "../../components/shared/NavBar/NavBar";

const Homepage = () => {
  return (
    <div className="font-george">
      <NavBar></NavBar>
      <Banner></Banner>
      <ThreeEasySteps></ThreeEasySteps>
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
    </div>
  );
};

export default Homepage;
