import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNav = ({ children }) => {

    const routes = [
        {
            id: 1,
            path: 'addUser',
            name: 'Add User'
        },
        {
            id: 2,
            path: 'registrationRequest',
            name: 'View Registration Request'
        },
        {
            id: 3,
            path: 'upgradeUser',
            name: 'Upgrade User Plan'
        },
        {
            id: 4,
            path: 'downgradeUser',
            name: 'Downgrade User Plan'
        },
        {
            id: 5,
            path: 'sendPayment',
            name: 'Send Payment Notification'
        },
        {
            id: 6,
            path: 'sendUpgrade',
            name: 'Send Upgrade Notification'
        },
        {
            id: 7,
            path: 'sendOffer',
            name: 'Send Offer Notification'
        },
        {
            id: 8,
            path: 'restrictUser',
            name: 'Restrict/Suspend User'
        },
        {
            id: 9,
            path: 'userProfile',
            name: 'View/Edit User Profile'
        },
        {
            id: 10,
            path: 'usersActivities',
            name: 'View Users Activities'
        },
        {
            id: 11,
            path: 'manageResource',
            name: 'Manage Resource Limit'
        },
        {
            id: 12,
            path: 'addBadge',
            name: 'Add Badge'
        },
        {
            id: 13,
            path: 'documentsVerification',
            name: 'Documents Verification'
        },
        {
            id: 14,
            path: 'marriageCertificate',
            name: 'Marriage Certificate Verification'
        },
        {
            id: 15,
            path: 'markPriority',
            name: 'Mark as Priority'
        }
    ]

    return (
        <div className='bg-[#FAFBFF]'>
            <div className='w-[800px] mx-auto'>
                <div className='pt-10 mb-10'>
                    <ul className='grid grid-cols-3 gap-[41px] font-poppins font-normal text-base text-[#000000]'>
                        {
                            routes.map(route =>
                                <li className='bg-[#FFFFFF] text-center py-[5px] rounded' key={route.id}>
                                    <NavLink className={({ isActive }) => (`cursor-pointer text-[15px] font-semibold  ${isActive ? 'text-white bg-[#E41272] rounded py-[5px]' : 'text-[#000000]'}`)} to={route.path}>{route.name}</NavLink>
                                </li>
                            )}
                    </ul>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default UserNav;