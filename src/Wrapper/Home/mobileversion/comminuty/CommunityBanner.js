import React from 'react'
import { Link } from 'react-router-dom'

export const CommunityBanner = () => {
  return (
    <div>
         <div className='grid grid-cols-3'>
     <img src='https://i.ibb.co/stTYBVf/Arrow-1.png' className='col-span-2 ml-8 mt-5'></img>
     <img src='https://i.ibb.co/x2L99Cr/Arrow-2.png' className='ml-20 mt-5'></img>
      </div>
      <div className='grid grid-cols-3 gap-4 ml-4  mt-5'>
<div>
    <img src='https://i.ibb.co/9hFpSXb/Ellipse-8.png'></img>
</div>
<div className='col-span-2 ml-4'>
    <h1 className='font-bold'>Shongshari.com Title</h1>
    <p className='text-sm'>
    Lorem ipsum dolor sit amet consectetur. Risus iaculis gravida turpis metus sed tincidunt.
    </p>
    <Link className='font-bold text-sm text-primary'>Shongshari.com</Link>
</div>
      </div>
      <div className='mt-12'>
        <img src='https://i.ibb.co/NYPhrpw/Capture.png'></img>
      </div>
      <div className='ml-28 mt-8'>
        <h1 className='font-bold'>Success is making those who believed in you look brilliant.</h1>
        <p className='ml-8'>
        Dharmesh Shah
        </p>
        <p className='text-sm'>
        CTO and Founder of HubSpot
        </p>
      </div>
    </div>
  )
}
