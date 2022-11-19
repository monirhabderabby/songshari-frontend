import React from 'react'
import { Link } from 'react-router-dom';
import { OthersNav } from './OthersNav';

 const OthersBanner = () => {
  return (
    <div className='membership-banner'>
    <div className='text-white text-5xl font-bold membershipbanner-text pt-40 pl-24'>Single Profile</div>
    <div className='membership-banner-menu pl-24 mt-6'>
       <Link className='text-lg pr-4'>Home <i className="fa-sharp fa-solid fa-arrow-right pl-2"></i></Link>
       <Link className='text-lg'>Single Profile</Link>
    </div>
       </div>
       
  )
}
export default OthersBanner;