import React from 'react';
import Banner from '../../components/pages/Home/Banner/Banner';
import ThreeEasySteps from '../../components/pages/Home/Banner/ThreeEasySteps';
import SecureVerified from '../../components/pages/Home/SecureVerified/SecureVerified';

const Homepage = () => {
    return (
        <div className='font-george'>
            <Banner></Banner>
            <div>
                <ThreeEasySteps></ThreeEasySteps>
            </div>
            <SecureVerified></SecureVerified>
        </div>
    );
};

export default Homepage;