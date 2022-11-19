import React from 'react';
import LawyerService from '../../components/pages/Lawyer/LawyerService';
import NavBar from '../../components/pages/Shared/NavBar';

const Lawyer = () => {
    return (
        <div>
            <NavBar />
            <LawyerService />
        </div>
    );
};

export default Lawyer;