// configuration 
import React from 'react'
import { useNavigate } from 'react-router-dom'

// components 
import { useGetProfileDetailsWIthAuthQuery } from '../../../Redux/features/userInfo/userApi';

export const MobileAccordionLink = () => {

  const {data} = useGetProfileDetailsWIthAuthQuery();
  console.log(data?._id);
  const navigate = useNavigate();
  
  return (
    <div> 
        <div className='grid grid-cols-5 mt-5 mb-10'>
          <div className='col-span-4'>
            <p className='pl-8' onClick={() => navigate(`/personalprofile/${data?._id}`)}>Personal Details</p>
          </div>
          <div>
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>
        </div>
        
        
        <div className='grid grid-cols-5 mt-5 mb-10'>
          <div className='col-span-4'>
            <p className='pl-8' onClick={() => navigate(`/professionalprofile/${data?._id}`)}>Professional Details</p>
          </div>
          <div>
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>
        </div>
      
        
        <div className='grid grid-cols-5 mt-5 mb-10'>
          <div className='col-span-4'>
            <p className='pl-8' onClick={() => navigate(`/educationalprofile/${data?._id}`)}>Educational Details</p>
          </div>
          <div>
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>
        </div>
    
        
        <div className='grid grid-cols-5 mt-5 mb-10'>
          <div className='col-span-4'>
            <p className='pl-8' onClick={() => navigate(`/physicalprofile/${data?._id}`)}>Physical Details</p>
          </div>
          <div>
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>
        </div>
      
        <div className='grid grid-cols-5 mt-5 mb-10'>
          <div className='col-span-4'>
            <p className='pl-8' onClick={() => navigate(`/othersprofile/${data?._id}`)}>Other Details</p>
          </div>
          <div>
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>
        </div>
    </div>
  )
}
