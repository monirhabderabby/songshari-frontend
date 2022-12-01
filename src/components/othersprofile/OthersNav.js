import React from 'react'
import '../../assets/css/OthersNav.css';
export const OthersNav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white rounded-box w-52">
              <li><a href="!#">Activity</a></li>
              <li tabIndex={0}>
                <a href="!#" className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a href="!#">Submenu 1</a></li>
                  <li><a href="!#">Submenu 2</a></li>
                </ul>
              </li>
              <li><a href="!#">Item 3</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-black">
            <li className='text-black'><a href="!#">Service</a></li>

            <li><a href="!#">Profile</a></li>
            <li><a href="!#">Review <span className="badge badge-sm indicator-item hh">04</span></a></li>
            <li className='text-red-700'><a href="!#">Activity</a></li>

          </ul>
        </div>
        <div className="navbar-end">

        </div>
      </div>
    </div>
  )
}
