import React from 'react'
import Shop from '../../../assets/images/Logo/Shop.svg'
import member from '../../../assets/images/Logo/Membership.svg'
import cart from '../../../assets/images/Logo/Cart.svg'
import HOME from '../../../assets/images/Logo/HOME.svg'
import { Link } from 'react-router-dom'

export const BottomNav = () => {
  return (
    <div className='rounded-full bg-bottom-nav mt-4'>
      <div className='grid grid-cols-5 gap-4 bottom-bar'>
        <Link to='/mobileUpgrade'>
          <img src={member} alt='' className='w-8'></img>
        </Link>
        <img src={Shop} alt='' className='w-8'></img>
        <Link to='/'>
          <img src='https://i.ibb.co/d5yyNd6/512-512-Icon.png' alt='' className='w-8'></img>
        </Link>
        <img src={cart} alt='' className='w-8'></img>
        <Link to='/setting'><img src={cart} alt='' className='w-8'></img></Link>
      </div>
    </div>
  )
}

