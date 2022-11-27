import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { BannerLayerMov } from './BannerLayerMov'

export const TopProfileNav = () => {
  return (
     <div>
       
        <div className="ml-40 mt-24">
        <Link to="/products/search" className='bg-red-700 pl-4 pr-4 pt-2 pb-2 mr-4 text-white'> Pending </Link>
        <Link to="/products/list" className='pl-4 pr-4 pt-2 pb-2 mr-4 bg-gray-500 text-white'> Running </Link>
        <Link to="/products/add" className='pl-4 pr-4 pt-2 pb-2 bg-gray-500 text-white'> Completed </Link>
      </div>
      <Outlet></Outlet>
        </div>
  )
}
