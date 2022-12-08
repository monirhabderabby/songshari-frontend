import React from 'react'
// import ChartBoard from '../../../components/SingleProfilesUser/chatboard/ChartBoard'
// import certificate from "../../../assets/images/certificate.jpg";
// import { TbMessageCircle2 } from "react-icons/tb";
import { BsCommand } from 'react-icons/bs';

// import ChartBoardCSS from '../../../assets/css/chartBoard.module.css';
import { BottomNav } from './BottomNav';
import { Link } from 'react-router-dom';
import { useGetSuggestedUsersQuery } from '../../../Redux/features/AllRecentData/recentApi';
import MayLikeSingle from './MayLikeSingle';

export const Like = () => {
    const { data } = useGetSuggestedUsersQuery();

    return (
        <div>
            <div className='mt-5'>
                <div className='setting-mov'>
                    <Link to='/setting'>
                        <i className="fa-solid fa-chevron-left ml-8 mt-3"></i>
                    </Link>

                    <h1 className='profile-tit ml-20 mt-2 mb-5'>You May Like</h1>
                </div>
            </div>
            {/* ----- You may like ----- */}
            <div className='mt-[20px] px-6'>
                <div className='flex justify-start items-center mx-1 gap-6 mb-6'>
                    <BsCommand className='text-[#2E3A59] text-2xl' />
                    <h1 className='text-[#333333] text-2xl leading-[34px] font-bold' >You May Like</h1>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    {
                        data?.suggestion.map(profile => {
                            return <MayLikeSingle key={profile._id} {...{ data: profile }} />
                        })
                    }
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <BottomNav></BottomNav>
        </div>
    )
}
