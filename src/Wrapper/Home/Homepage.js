// configuration
import React, { lazy, Suspense } from "react";
import useDocumentTitle from "../../assets/utilities/useDocumentTitle";

// components
import Anexecutive from "../../components/CardComopents/Anexecutive";
import BeginFamilyJourney from "../../components/pages/Home/BeginFamilyJourney/BeginFamilyJourney";
import FindSoleMate from "../../components/pages/Home/FindSoleMate/FindSoleMate";
import SecureVerified from "../../components/pages/Home/SecureVerified/SecureVerified";
import LatestRegisteredMember from "../../components/pages/LatestRegisteredMember/LatestRegisteredMember";
import MeetNewPeople from "../../components/pages/MeetNewPeople/MeetNewPeople";
import PeopleJoinedAlready from "../../components/pages/PeopleJoinedAlready/PeopleJoinedAlready";
import TopProfile from "../../components/pages/TopProfile/TopProfile";
import { BrandLoader } from "../../components/shared/Cards/Loader/BrandLoader/BrandLoader";
import Footer from "../../components/shared/Footer/Footer";
import isLoggedIn from "../../Helper/hooks/checkLoggerPersestency/isLoggedIn";
import { MobileHome } from "./mobileversion/MobileHome";
const NavBar = lazy(() => import("../../components/pages/Shared/NavBar"));
const Banner = React.lazy(() =>
  import("../../components/pages/Home/Banner/Banner")
);

const Homepage = () => {
  // js variables
  const logged = isLoggedIn();
  useDocumentTitle("Shongshari | Home");

  return (
    <div className="font-george overflow-x-hidden">
      <div className="hidden md:hidden lg:block">
        <Suspense fallback={<BrandLoader />}>
          <div className="ignoreMouseEffect">
            <NavBar></NavBar>
            <Banner></Banner>
            <LatestRegisteredMember />
            <SecureVerified></SecureVerified>
            <BeginFamilyJourney></BeginFamilyJourney>
            <TopProfile />
            <PeopleJoinedAlready />
            {/* <PackagePromo /> */}
          </div>
          {/* <MouseEffect /> */}
          <div className="ignoreMouseEffect">
            <MeetNewPeople />
            <FindSoleMate />
            {!logged && <Anexecutive />}
            <Footer />
          </div>
        </Suspense>
      </div>
      <div className="block lg:hidden">
        <MobileHome></MobileHome>
      </div>
    </div>
  );
};

export default Homepage;
