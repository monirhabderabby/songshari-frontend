import React, { useEffect } from "react";
import "../../assets/css/singleprofilepage.css";
import SingleProfiles from "../../components/SingleProfilesUser/SingleProfiles";

const SingleProfile = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="content-bg-color">
            <SingleProfiles />
        </div>
    );
};

export default SingleProfile;
