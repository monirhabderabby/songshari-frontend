import React, { useEffect } from "react";
import useDocumentTitle from "../../assets/utilities/useDocumentTitle";
import AboutHeaderBanner from "../../components/pages/About/AboutHeaderBanner";
import AboutOurMission from "../../components/pages/About/AboutOurMission";
import AboutUsOurHistory from "../../components/pages/About/AboutUsOurHistory";
import AboutUsStory from "../../components/pages/About/AboutUsStory";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import Footer from "../../components/shared/Footer/Footer";

const About = () => {
    useDocumentTitle("Shongshari | About");
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <div className="hidden md:block">
                <CustomHeader title={"About Us"} />
                <AboutHeaderBanner />
                <AboutOurMission />
                <AboutUsStory />
                <AboutUsOurHistory />
                <Footer />
            </div>
            <div className="md:hidden"></div>
        </>
    );
};
export default About;
