import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import blackLogo from '../../../assets/images/Logo/logoBlack.png';
import findPartner from '../../../assets/images/NavIcons/Find-Your-Partner.svg';
import membership from '../../../assets/images/NavIcons/Membership.svg';
import blog from '../../../assets/images/NavIcons/Blog.svg';
import course from '../../../assets/images/NavIcons/Online-Course.svg';
// import shop from '../../../assets/images/NavIcons/Shop.svg';
import findALawyer from '../../../assets/images/NavIcons/Lawyer.svg';
import kazi from '../../../assets/images/NavIcons/Kazi.svg';
import agent from '../../../assets/images/NavIcons/Agent.svg';

const NavBar = () => {

    const allMenu = [
        { id: 1, to: '/findpartner', icon: findPartner },
        { id: 2, to: '/membership', icon: membership },
        { id: 3, to: '/blog', icon: blog },
        { id: 4, to: '/course', icon: course },
        // { id: 5, to: '/shop', icon: shop },
        { id: 6, to: '/findalawyer', icon: findALawyer },
        { id: 7, to: '/kazi', icon: kazi },
        { id: 8, to: '/agent', icon: agent },
    ];

    return (
        <div>
            <div className='grid grid-cols-5 w-4/5 mx-auto'>
                <div className="col-span-1 py-4">
                    <Link to={'/'}>
                        <img src={blackLogo} alt="" />
                    </Link>
                </div>
                <div className="col-span-3">
                    <ul className='flex flex-row gap-4 py-4 ml-4 w-4/5'>
                        {
                            allMenu.map(menu => <li key={menu.id}>
                                <NavLink
                                    to={menu.to}
                                    className={({ isActive }) =>
                                        isActive ? '' : ''
                                    }
                                >
                                    <img className='hover:rotate-[360deg] duration-[2000ms] w-1/4' src={menu.icon} alt="" />
                                </NavLink>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="col-span-1">
                    3
                </div>
            </div>
        </div>
    );
};

export default NavBar;