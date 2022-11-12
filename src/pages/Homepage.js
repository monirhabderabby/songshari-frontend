import React from 'react';
import Banner from '../components/Homepage/Banner';
import ThreeEasySteps from '../components/Homepage/ThreeEasySteps';

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