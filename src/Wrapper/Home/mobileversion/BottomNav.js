import React from 'react'
import agent from '../../../assets/images/Logo/Agent.svg'
import partner from '../../../assets/images/Logo/partner.svg'
import Lawyer from '../../../assets/images/Logo/Lawyer.svg'
import Kazi from '../../../assets/images/Logo/Kazi.svg'
import Shop from '../../../assets/images/Logo/Shop.svg'
import courses from '../../../assets/images/Logo/online.svg'
import member from '../../../assets/images/Logo/Membership.svg'
import cart from '../../../assets/images/Logo/Cart.svg'
import HOME from '../../../assets/images/Logo/HOME.svg'
import { Link } from 'react-router-dom'

export const BottomNav = () => {
  return (
    <div className='rounded-full bg-bottom-nav'>
        <div className='grid grid-cols-5 gap-4 bottom-bar'>
<img src={member} className='w-10'></img>
<img src={Shop} className='w-10'></img>
<img src='https://i.ibb.co/d5yyNd6/512-512-Icon.png' className='w-10'></img>
<img src={cart} className='w-10'></img>
<Link to='/setting'><img src={cart} className='w-10'></img></Link>





        </div>
    </div>
  )
}
