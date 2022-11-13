import React from 'react';
import Banner from '../../components/pages/Home/Banner/Banner';
import ThreeEasySteps from '../../components/pages/Home/Banner/ThreeEasySteps';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <ThreeEasySteps></ThreeEasySteps>
            </div>
        </div>
    );
};

export default Homepage;