// configuration
import React, { useState } from "react";

// components
import { Friends } from "../FriendsSection/Friends";
import { Matches } from "../profileSection/Matches";
import { Profile } from "../profileSection/Profile";
import ProfileServices from "../ServicesSection/ProfileServices";
import SingleUserActivity from "../SingleUserActivity/SingleUserActivity";

// css files
import "../../../App.css";
import ProfileNav from "./ProfileNav";

const Table = ({ data, isLoading }) => {
    const [page, setPage] = useState(2);
    const [matchesCount, setMatchesCount] = useState(0);
    //here navigate use for manage edit profile information route

    return (
        <div className="w-full">

            <div className="mb-4 w-full">
                <div className="w-full h-[60px] lg:max-w-[512px] mx-auto mb-[20px]">
                    <ProfileNav {...{setPage,matchesCount}} />                    
                </div>
            </div>
            {/* table 1 */}
            {page === 1 && <SingleUserActivity {...{ data, isLoading }} />}
            {page === 2 && <Profile {...{ data, isLoading }} />}
            {page === 3 && <ProfileServices />}
            {page === 4 && <Friends {...{ data, isLoading }} />}
            {page === 5 && <Matches {...{ setMatchesCount }} />}
        </div>
    );
};

export default Table;
