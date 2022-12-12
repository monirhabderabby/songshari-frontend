import React from 'react'
import { UsersButton } from '../../components/comons/UsersButton'
import { NotificationCard } from '../Shared_Dashboard/NotificationCard'
import { UserTableNotification } from './User/UserTableNotification'

export const SendNotificationUpgrade = () => {
  return (
   <div>
    <h1 className='text-center font-bold text-4xl mb-8'>Notification for Upgrade</h1>
    <input type="text" placeholder="Search Here" className='not-search ml-80 mb-8 w-2/4 pt-4 pb-4'></input>
 <div className='grid grid-cols-1 lg:grid-cols-2 mb-4 ml-32'>
        <div className='mb-4'>
        <NotificationCard />
        </div>
      
        <div>
        <NotificationCard />
        </div>
       
        <div>
        <NotificationCard />
        </div>
       
        <div>
        <NotificationCard />
        </div>    
    </div>

    <div>
    <textarea  rows="10" cols="120" className='bg-gray-100 ml-32' placeholder='Send Your Message'>

</textarea>
<UsersButton></UsersButton>
<UserTableNotification></UserTableNotification>
    </div>
   </div>
   
  )
}













