import React, { useEffect } from "react";

// Components
import { SingleProfiles } from "../../components/SingleProfilesUser/SingleProfiles";

// CSS
import "../../assets/css/singleprofilepage.css";

const SingleProfile = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="bg-[#fafbff]">
            <div className="hidden md:block">
                <SingleProfiles />
            </div>
            <div className="md:hidden">
                <SingleProfiles />
            </div>
        </div>
    );
};

export default SingleProfile;
