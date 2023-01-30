import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";
import { decodeToken } from "react-jwt";
import { Link } from "react-router-dom";
import getCookie from "../../../../Helper/cookies/getCookie";

export const AccountSettingMov = () => {
    const token = getCookie("token");
    const authInfo = decodeToken(token);
    const { _id } = authInfo || {};
    return (
        <div className="mt-10 max-w-[1024px] mx-auto">
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
            <Link to={`/Gallery/mobile/${_id}`}>
                <div className="grid grid-cols-6 mt-5 mb-10 he">
                    <div className="setting-mov">
                        <img src="https://i.postimg.cc/X7Q3PJ3z/gallery.png" className="ml-8 mr-6 w-[16px] h-[16px]" alt="Not Available"></img>
                        <h1>Gallery</h1>
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
                        <img src="https://i.ibb.co/mhkdwc9/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1 className="mt-[-5px]">Upgrade</h1>
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
                        <img src="https://i.ibb.co/Jnp44YF/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1 className="mt-[-5px]">Activity</h1>
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
            <Link to="/servicemov">
                <div className="grid grid-cols-6 mt-5 mb-10 he">
                    <div className="setting-mov">
                        <img src="https://i.ibb.co/FnGQ6bg/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1 className="mt-[-5px]">Service</h1>
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
                        <img src="https://i.ibb.co/LC2W3Ch/Vector.png" className="ml-8 mr-6 " alt="Not Available"></img>
                        <h1 className="mt-[-5px]">Matches</h1>
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
                        <img src="https://i.ibb.co/rcSG8xR/Vector.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1 className="mt-[-5px]">Certificate</h1>
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
                        <img src="https://i.ibb.co/FbYM9Bt/coolicon.png" className="ml-8 mr-6" alt="Not Available"></img>
                        <h1 className="mt-[-5px]">Like</h1>
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
            <Accordion>
                <AccordionSummary
                    className="max-w-[1024px] mx-auto"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>
                        {" "}
                        <i className="fa-solid fa-ban mr-5 ml-8 mt-[25px]"></i> About Shongshari
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="pt-[15px] pb-[15px]">
                        <Link to="/meetmov" className="ml-[100px] ">
                            Team Member
                        </Link>
                        <br></br>
                        <br></br>
                        <Link to="/privacymov" className="ml-[100px] ">
                            Privacy Policy
                        </Link>
                        <br></br>
                        <br></br>
                        <Link to="/aboutmov" className="ml-[100px]">
                            About Us
                        </Link>
                        <br></br>
                        <br></br>
                        <Link to="/historymov" className="ml-[100px]">
                            History
                        </Link>
                        <br></br>
                        <br></br>
                        <Link to="/communitymov" className="ml-[100px]">
                            Community
                        </Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
