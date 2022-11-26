import React from 'react'
import ChartBoard from '../../../components/SingleProfilesUser/chatboard/ChartBoard'
import certificate from "../../../assets/images/certificate.jpg";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsCommand } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';
import { BiUserPlus } from 'react-icons/bi';
import ChartBoardCSS from '../../../assets/css/chartBoard.module.css';
import { BottomNav } from './BottomNav';
import { Link } from 'react-router-dom';

const certificateInfo = [
    { id: 1, text: "Personal Certificate", img: certificate },
    { id: 2, text: "Professional Certificate", img: certificate },
    { id: 3, text: "Educational Certificate", img: certificate },
];

export const CertificateMov = () => {
  return (
    <div>
        <div className='mt-5'>
        <div className='setting-mov'>
            <Link to='/setting'>
            <i class="fa-solid fa-chevron-left ml-8 mt-3"></i>
            </Link>
        
            <h1 className='profile-tit ml-20 mt-2 mb-5'>Certificate</h1>
        </div> 
      </div>
         {/* ----- Certificate ----- */}
         <div className='rounded-xl p-5' style={{ backgroundImage: "linear-gradient(180deg, #FFD7F6 0%, #FFC1E6 100%)" }}>
                <div className='flex justify-start items-center mx-1 gap-6'>
                    <TbMessageCircle2 className='text-[#333333] text-2xl' />
                    <h1 className='text-[#333333] text-2xl leading-[34px] font-bold' >Certificate</h1>
                </div>
                {
                    certificateInfo.map(certificate => <div key={certificate.id}>
                        <h3 className='mt-3 mb-2'>
                            {certificate.text}
                        </h3>
                        <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
                            <img className='rounded-lg' src={certificate.img} alt="" />
                            <button className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] rounded block bg-white text-sm font-medium leading-[26px] px-4 py-1 duration-300`}>
                                View
                            </button>
                        </div>
                    </div>)
                }
            </div>
            <BottomNav></BottomNav>
    </div>
  )
}
