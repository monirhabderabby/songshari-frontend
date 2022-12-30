import React from 'react'
import { Link } from 'react-router-dom'
import { AccountSettingMov } from './AccountSettingMov'
import { BottomNav } from '../BottomNav'


export const Setting = () => {
  return (
    <div className='bg-setting-mov'>
      <Link to='/'>
        <div className='grid grid-cols-6 mt-5'>
          <div className='setting-mov'>
            <i className="fa-solid fa-chevron-left ml-8 mt-1"></i>
            <h1 className='ml-28 profile-tit'>Profile</h1>
          </div>

          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>

        </div>
      </Link>


      <AccountSettingMov></AccountSettingMov>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <LogoutMov></LogoutMov>
     <br></br>
     <br></br>
     <BottomNav></BottomNav> */}
      <BottomNav></BottomNav>
    </div>
  )
}