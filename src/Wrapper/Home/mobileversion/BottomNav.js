import React from 'react'
import Shop from '../../../assets/images/Logo/Shop.svg'
import member from '../../../assets/images/Logo/Membership.svg'
import cart from '../../../assets/images/Logo/Cart.svg'
import HOME from '../../../assets/images/Logo/HOME.svg'
import { Link } from 'react-router-dom'

export const BottomNav = () => {
  return (
    <div className=' ml-4  mt-10  mb-4 '>
      <div className='grid grid-cols-4 gap-4 bottom-bar'>
        <Link to='/mobileHomePage'><img src={HOME} alt='' className='w-6'></img></Link>
        <img src={member} alt='' className='w-8'></img>
        <img src={Shop} alt='' className='w-8'></img>
        <Link to='/setting'><img src={cart} alt='' className='w-8'></img></Link>
      </div>
    </div>
  )
}
