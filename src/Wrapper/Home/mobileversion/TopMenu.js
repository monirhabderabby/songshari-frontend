import React from 'react'
import './TopMenu.css';
export const TopMenu = () => {
  return (
    <div>
        <div className='grid grid-cols-5  ml-8 mt-2'>
            <div>
                <img src='https://i.ibb.co/TKH1hQj/Ellipse-8.png'></img>
            </div>
            <div>
                <select className='mt-2 top-menu-hobile'>
                    <option>Anik Haque</option>
                </select>
            </div>
            <div>
              
            </div>
            <div>
            <i class="fa-regular fa-bell mt-3"></i>
            </div>
            <div>
            <i class="fa-solid fa-magnifying-glass mt-3"></i>
            </div>
        </div>
    </div>
  )
}
