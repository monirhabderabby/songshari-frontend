import React from 'react';
import "../../assets/css/singleprofilepage.css";
import WeadingCards from '../../components/CardComopents/WeadingCards';
import SingleProfiles from '../../components/SingleProfilesUser/SingleProfiles';

const SingleProfile = () => {
    return (
        <div className='py-5 content-bg-color'>
            <SingleProfiles />
            <WeadingCards />
        </div>
    );
};

export default SingleProfile;