import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export const AccountSettingMov = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (

    <div className='mt-10'>
      <h1 className='font-bold ml-8 text-xl mb-12'>Account</h1>
      <Link to='/mobileuserprofile'>
        <div className='grid grid-cols-6 mt-5 mb-10 he'>
          <div className='setting-mov'>
            <img src='https://i.ibb.co/WxB9SbQ/Vector.png' className='ml-8 mr-6' alt="Not Available"></img>
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

            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>

        </div>
      </Link>
      <Link to='/mobileUpgrade'>
        <div className='grid grid-cols-6 mt-5 mb-10 he'>
          <div className='setting-mov'>
            <img src='https://i.ibb.co/WxB9SbQ/Vector.png' className='ml-8 mr-6' alt="Not Available"></img>
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
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>

        </div>
      </Link>
      <Link to='/mobileActivityPage'>
        <div className='grid grid-cols-6 mt-5 mb-10 he'>
          <div className='setting-mov'>
            <img src='https://i.ibb.co/LgdJt5t/Vector.png' className='ml-8 mr-6' alt="Not Available"></img>
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
            <i className="fa-solid fa-angle-right ml-10"></i>
          </div>

        </div>
      </Link>

      <Link to='/matchesmov'>
        <div className='grid grid-cols-6 mt-5 mb-10 he'>
          <div className='setting-mov'>
            <img src='https://i.ibb.co/4tN7Jwp/Vector.png' className='ml-8 mr-6' alt="Not Available"></img>
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

            <i className="fa-solid fa-angle-right ml-10"></i>


          </div>

        </div>
      </Link>
      <Link to='/certificatemov'>
        <div className='grid grid-cols-6 mt-5 mb-10 he'>
          <div className='setting-mov'>
            <img src='https://i.ibb.co/4tN7Jwp/Vector.png' className='ml-8 mr-6' alt="Not Available"></img>
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

            <i className="fa-solid fa-angle-right ml-10"></i>



          </div>

        </div>
      </Link>
      <Link to='/like'>
        <div className='grid grid-cols-6 mt-5 he'>
          <div className='setting-mov'>
            <img src='https://i.ibb.co/4tN7Jwp/Vector.png' className='ml-8 mr-6' alt="Not Available"></img>
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
              <i className="fa-solid fa-angle-right ml-10"></i>
            </Link>

          </div>

        </div>
      </Link>
     

      <button aria-describedby={id} type="button" onClick={handleClick} className='ml-6 mt-4'>
      <i class="fa-solid fa-ban mr-4"></i> About Shongshari
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} className='p-12'>
          <Link to='/meetmov'>Team Member</Link>
          <br></br>
          <Link to='/privacymov'>Privacy Policy</Link>
          <br></br>
          <Link to='/aboutmov'>About Us</Link>
          <br></br>
          <Link to='/historymov'>History</Link>
          <br></br>
          <Link to='/communitymov'>Community</Link>
         
        </Box>
      </Popper>
    </div>
  )
}