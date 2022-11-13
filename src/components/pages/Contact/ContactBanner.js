import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/css/ContactBanner.css';
export const ContactBanner = () => {
  return (
    <div className='contact-banner'>
 <div className='text-white text-5xl font-bold membershipbanner-text pt-40 pl-24'>Contact</div>
 <div className='contact-banner-menu pl-24 mt-6'>
    <Link className='text-lg pr-4'>Home <i class="fa-sharp fa-solid fa-arrow-right pl-2"></i></Link>
    <Link className='text-lg'>Contact</Link>
 </div>
    </div>
   

  )
}
