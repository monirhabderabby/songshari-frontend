import React from 'react'
import { Link } from 'react-router-dom'
import { BottomNav } from '../BottomNav'

export const ServiceDetailsMov = () => {
  return (
    <div className='bg-gray-100'>
        <div className="pt-2">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-6 mt-3"></i>
          </Link>
          <h1 className="text-center mt-2 mb-5 text-lg">Service Details</h1>
          <div></div>
        </div>
      </div>

        <div className='ml-8 mr-4'>
            <h1 className='font-bold text-[16px]'>What do you deliver with this offer</h1>
            <p className='text-[12px] ser-details-p'>Lorem ipsum dolor sit amet consectetur. Interdum auctor mi nec ut risus mattis. Bibendum ullamcorper lobortis etiam blandit pulvinar commodo. Fermentum non varius platea urna suspendisse sed quis. Morbi sed sit posuere lacinia. Purus maecenas tellus quam nibh mi. Volutpat faucibus nisi volutpat habitasse. Sed bibendum eget nulla morbi purus. Amet et amet non aliquam non leo tellus at phasellus. Eu fames pellentesque imperdiet elit quis at sed velit.</p>
        </div>
        <br></br>
        <br></br>

        <div className='mx-6'>
            <h1 className='font-bold text-[16px]'>What do you deliver with this offer</h1>
            <p className='text-[12px] ser-details-p'>Lorem ipsum dolor sit amet consectetur. Interdum auctor mi nec ut risus mattis. Bibendum ullamcorper lobortis etiam blandit pulvinar commodo. Fermentum non varius platea urna suspendisse sed quis. Morbi sed sit posuere lacinia. Purus maecenas tellus quam nibh mi. Volutpat faucibus nisi volutpat habitasse. Sed bibendum eget nulla morbi purus. Amet et amet non aliquam non leo tellus at phasellus. Eu fames pellentesque imperdiet elit quis at sed velit.</p>
        </div>
        <br></br>
        <br></br>
        
        <div className='mx-6'>
            <h1 className='font-bold text-[16px]'>What do you deliver with this offer</h1>
            <p className='text-[12px] ser-details-p'>Lorem ipsum dolor sit amet consectetur. Interdum auctor mi nec ut risus mattis. Bibendum ullamcorper lobortis etiam blandit pulvinar commodo. Fermentum non varius platea urna suspendisse sed quis. Morbi sed sit posuere lacinia. Purus maecenas tellus quam nibh mi. Volutpat faucibus nisi volutpat habitasse. Sed bibendum eget nulla morbi purus. Amet et amet non aliquam non leo tellus at phasellus. Eu fames pellentesque imperdiet elit quis at sed velit.</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <BottomNav></BottomNav>
    </div>
  )
}
