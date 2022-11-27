import React from 'react'
import { Link } from 'react-router-dom'

export const AccountSettingMov = () => {
   
  return (
    
    <div className='mt-10'>
<h1 className='font-bold ml-8 text-xl mb-12'>Account</h1>
      <div className='grid grid-cols-6 mt-5 mb-10 he'>
        <div className='setting-mov'>
            <img src='https://i.ibb.co/WxB9SbQ/Vector.png' className='ml-8 mr-6 mt-2'></img>
            <h1>Profile</h1>
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
        <i class="fa-solid fa-angle-right ml-10"></i>
        </div>
      
      </div>
      <div className='grid grid-cols-6 mt-5 mb-10 he'>
        <div className='setting-mov'>
            <img src='https://i.ibb.co/WxB9SbQ/Vector.png' className='ml-8 mr-6'></img>
            <h1>Upgrade</h1>
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
        <i class="fa-solid fa-angle-right ml-10"></i>
        </div>
      
      </div>
      <div className='grid grid-cols-6 mt-5 mb-10 he'>
        <div className='setting-mov'>
            <img src='https://i.ibb.co/LgdJt5t/Vector.png' className='ml-8 mr-6'></img>
            <h1>Activity</h1>
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
        <i class="fa-solid fa-angle-right ml-10"></i>
        </div>
      
      </div>
   
      <div className='grid grid-cols-6 mt-5 mb-10 he'>
        <div className='setting-mov'>
            <img src='https://i.ibb.co/4tN7Jwp/Vector.png' className='ml-8 mr-6'></img>
            <h1>Match</h1>
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
          <Link to='/matchesmov'>
          <i class="fa-solid fa-angle-right ml-10"></i>
          </Link>
        
        </div>
      
      </div>
      <div className='grid grid-cols-6 mt-5 mb-10 he'>
        <div className='setting-mov'>
            <img src='https://i.ibb.co/4tN7Jwp/Vector.png' className='ml-8 mr-6'></img>
            <h1>Certificate</h1>
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
          <Link to='/certificatemov'>
          <i class="fa-solid fa-angle-right ml-10"></i>
          </Link>
       
    
        </div>
      
      </div>
      <div className='grid grid-cols-6 mt-5 he'>
        <div className='setting-mov'>
            <img src='https://i.ibb.co/4tN7Jwp/Vector.png' className='ml-8 mr-6'></img>
            <h1>Like</h1>
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
          <Link to='/like'>
          <i class="fa-solid fa-angle-right ml-10"></i>
          </Link>
        
        </div>
      
      </div>
    
      
     
    </div>
  )
}