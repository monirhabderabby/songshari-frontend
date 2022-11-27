import React from 'react'
import ChartBoard from '../../../components/SingleProfilesUser/chatboard/ChartBoard'
import certificate from "../../../assets/images/certificate.jpg";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsCommand } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';
import { BiUserPlus } from 'react-icons/bi';
import ChartBoardCSS from '../../../assets/css/chartBoard.module.css';
import profilePhoto from "../../../assets/images/profileSmile.jpg";
import { BottomNav } from './BottomNav';
import { Link } from 'react-router-dom';
const suggestedProfiles = [
    { id: 1, name: "Mr. Sherlock", img: profilePhoto },
    { id: 2, name: "Mr. Sherlock", img: profilePhoto },
    { id: 3, name: "Mr. Sherlock", img: profilePhoto },
    { id: 4, name: "Mr. Sherlock", img: profilePhoto },
    { id: 5, name: "Mr. Sherlock", img: profilePhoto },
    { id: 6, name: "Mr. Sherlock", img: profilePhoto },
    { id: 7, name: "Mr. Sherlock", img: profilePhoto },
    { id: 8, name: "Mr. Sherlock", img: profilePhoto },
];

export const Like = () => {
  return (
    <div>
        <div className='mt-5'>
        <div className='setting-mov'>
            <Link to='/setting'>
            <i class="fa-solid fa-chevron-left ml-8 mt-3"></i>
            </Link>
        
            <h1 className='profile-tit ml-20 mt-2 mb-5'>You May Like</h1>
        </div> 
      </div>
         {/* ----- You may like ----- */}
         <div className='mt-[20px]'>
                <div className='flex justify-start items-center mx-1 gap-6 mb-6'>
                    <BsCommand className='text-[#2E3A59] text-2xl' />
                    <h1 className='text-[#333333] text-2xl leading-[34px] font-bold' >You May Like</h1>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    {
                        suggestedProfiles.map(profile => <div
                            key={profile.id}
                            className="bg-white ggg rounded-[20px] flex flex-col items-center justify-center  py-2"
                            style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
                        >
                            <img className='w-[45px] h-[45px] rounded-full' src='https://i.ibb.co/djmzvNG/placeholder.png' alt="" />
                            <h4 className='text-xs leading-5 font-semibold'>
                                {profile.name}
                            </h4>
                            <div className='flex justify-between items-center gap-4'>
                                <span className='bg-[#FFDFF4] p-3 rounded-full'>
                                    <MdMessage className='text-[#E41272] text-xl' />
                                </span>
                                <span className='bg-[#FFDFF4] p-3 rounded-full'>
                                    <BiUserPlus className='text-[#E41272] text-xl' />
                                </span>
                            </div>
                        </div>)
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
