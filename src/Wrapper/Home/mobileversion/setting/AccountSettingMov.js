import React from "react";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AccountSettingMov = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
    return (
        <div className="mt-10">
            <h1 className="font-bold ml-8 text-xl mb-12">Account</h1>
            <Link to="/mobileuserprofile">
                <div className="grid grid-cols-6 mt-5 mb-10 he">
                    <div className="setting-mov">
                        <img src="https://i.ibb.co/WxB9SbQ/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1>Profile</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <i className="fa-solid fa-angle-right ml-8"></i>
                    </div>
                </div>
            </Link>
            <Link to="/mobileUpgrade">
                <div className="grid grid-cols-6 mt-5 mb-10 he">
                    <div className="setting-mov">
                        <img src="https://i.ibb.co/WxB9SbQ/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1>Upgrade</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <i className="fa-solid fa-angle-right ml-8"></i>
                    </div>
                </div>
            </Link>
            <Link to="/mobileActivityPage">
                <div className="grid grid-cols-6 mt-5 mb-10 he">
                    <div className="setting-mov">
                        <img src="https://i.ibb.co/LgdJt5t/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1>Activity</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <i className="fa-solid fa-angle-right ml-8"></i>
                    </div>
                </div>
            </Link>

            <Link to="/matchesmov">
                <div className="grid grid-cols-6 mt-5 mb-10 he">
                    <div className="setting-mov">
                        <img src="https://i.ibb.co/4tN7Jwp/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1>Match</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <i className="fa-solid fa-angle-right ml-8"></i>
                    </div>
                </div>
            </Link>
            <Link to="/certificatemov">
                <div className="grid grid-cols-6 mt-5 mb-10 he">
                    <div className="setting-mov">
                        <img src="https://i.ibb.co/4tN7Jwp/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1>Certificate</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <i className="fa-solid fa-angle-right ml-8"></i>
                    </div>
                </div>
            </Link>
            <Link to="/like">
                <div className="grid grid-cols-6 mt-5 he">
                    <div className="setting-mov">
                        <img src="https://i.ibb.co/4tN7Jwp/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1>Like</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <Link to="/like">
                            <i className="fa-solid fa-angle-right ml-8"></i>
                        </Link>
                    </div>
                </div>
            </Link>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <i className="fa-solid fa-ban mr-6 ml-2 mt-[25px]"></i> About Shongshari</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="bg-[#D9D9D9] pt-[15px] pb-[15px]">
          <Link to="/meetmov" className="ml-[50px] ">Team Member</Link>
                    <br></br>
                    <br></br>
                    <Link to="/privacymov" className="ml-[50px] ">Privacy Policy</Link>
                    <br></br>
                    <br></br>
                    <Link to="/aboutmov" className="ml-[50px]">About Us</Link>
                    <br></br>
                    <br></br>
                    <Link to="/historymov" className="ml-[50px]">History</Link>
                    <br></br>
                    <br></br>
                    <Link to="/communitymov" className="ml-[50px]">Community</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    );
};
