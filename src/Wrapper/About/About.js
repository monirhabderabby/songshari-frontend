import React, { useEffect } from "react";
import AboutHeaderBanner from "../../components/pages/About/AboutHeaderBanner";
import AboutOurMission from "../../components/pages/About/AboutOurMission";
import AboutUsBlog from "../../components/pages/About/AboutUsBlog";
import AboutUsCommunity from "../../components/pages/About/AboutUsCommunity";
import AboutUsMotive from "../../components/pages/About/AboutUsMotive";
import AboutUsOurHistory from "../../components/pages/About/AboutUsOurHistory";
import AboutUsStory from "../../components/pages/About/AboutUsStory";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import Footer from "../../components/shared/Footer/Footer";

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <CustomHeader title={"About Us"} />
            <AboutHeaderBanner />
            <AboutOurMission />
            <AboutUsStory />
            <AboutUsOurHistory />
            <AboutUsBlog />
            <AboutUsCommunity />
            <AboutUsMotive />
            <Footer />
        </div>
    );
};
export default About;
