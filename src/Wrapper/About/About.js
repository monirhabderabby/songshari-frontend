import React, { useEffect } from "react";
import Anexecutive from "../../components/CardComopents/Anexecutive";
import MeetCard from "../../components/CardComopents/MeetCard";
import CommonBanner from "../../components/comons/CommonBanner";
import Membership from "../../components/membership/Membership";
import AboutComponents from "../../components/pages/About/AboutComponents";
import AboutHeaderBanner from "../../components/pages/About/AboutHeaderBanner";
import AboutOurMission from "../../components/pages/About/AboutOurMission";
import AboutUsBlog from "../../components/pages/About/AboutUsBlog";
import AboutUsCommunity from "../../components/pages/About/AboutUsCommunity";
import AboutUsMotive from "../../components/pages/About/AboutUsMotive";
import AboutUsOurHistory from "../../components/pages/About/AboutUsOurHistory";
import AboutUsStory from "../../components/pages/About/AboutUsStory";
import AnimatetdBanner from "../../components/pages/About/AnimatetdBanner";
import LoveIsFeath from "../../components/pages/About/LoveIsFeath";
import NavBar from "../../components/pages/Shared/NavBar";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import Footer from "../../components/shared/Footer/Footer";

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <CustomHeader title={"About Us"} />
            {/* <NavBar /> */}
            {/* <CommonBanner title="About Us" currentStage="> About" /> */}
            <AboutHeaderBanner />
            <AboutOurMission />
            <AboutUsStory />
            <AboutUsOurHistory />
            <AboutUsBlog />
            <AboutUsCommunity />
            <AboutUsMotive />
            {/* <AboutComponents /> */}
            {/* <Anexecutive /> */}
            {/* <AnimatetdBanner /> */}
            {/* <LoveIsFeath /> */}
            {/* <Membership /> */}
            {/* <Anexecutive /> */}
            {/* <MeetCard /> */}
            <Footer />
        </div>
    );
};
export default About;
