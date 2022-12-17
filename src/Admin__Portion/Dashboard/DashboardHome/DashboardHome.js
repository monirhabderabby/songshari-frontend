//configuration
import React from 'react';
//components
import Invoices from './Invoices';
import NewUser from './NewUser';
import ServerStatus from './ServerStatus';
import VisitorGraph from './VisitorGraph';

// incomplete components
const DashboardHome = () => {
    return (
        <div className='mt-8'>
            <VisitorGraph />
            <div className='flex'>
                <ServerStatus />
                <NewUser />
            </div>
            <div>
                <Invoices />
            </div>
        </div>
    );
}

export default DashboardHome;
