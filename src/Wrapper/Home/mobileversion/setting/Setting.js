import React from 'react'
import { Link } from 'react-router-dom'
import { BottomNav } from '../BottomNav'
import { AccountSettingMov } from './AccountSettingMov'

export const Setting = () => {
  return (
    <div>
      <Link to='/'>
        <div className='grid grid-cols-3 mt-5'>
          <div className='setting-mov'>
            <i className="fa-solid fa-chevron-left ml-8  text-xl"></i>
            <h1 className='ml-20 profile-tit'>Profile</h1>
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
      </Link>

      {/* menus  */}
     <AccountSettingMov></AccountSettingMov>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    {/* bottom navigation  */}
    <BottomNav></BottomNav>
    </div>
  )
}
