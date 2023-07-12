// Configuration
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Third party packages
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Collapse } from "antd";
import { decodeToken } from "react-jwt";
import { HiOutlineMail } from "react-icons/hi";

// components
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineManageAccounts, MdOutlineReviews } from "react-icons/md";
import getCookie from "../../../../Helper/cookies/getCookie";
const { Panel } = Collapse;

export const AccountSettingMov = () => {
  const [servicePath, setServicePath] = useState();
  const [activityPath, setActivityPath] = useState();
  const [reviewsPath, setReviewsPath] = useState();

  const token = getCookie("token");
  const authInfo = decodeToken(token);
  const { _id, role } = authInfo || {};

  // Decision about professional page route
  useEffect(() => {
    if (role === "lawyer") {
      setServicePath("/mobileLawyerServices");
      setActivityPath("/lawyerActivityMov");
      setReviewsPath("/lawyerReviewsMov");
    } else if (role === "agent") {
      setServicePath("/mobileAgentServices");
      setActivityPath("/agentActivityMov");
      setReviewsPath("/agentReviewsMov");
    } else if (role === "kazi") {
      setServicePath("/mobileKaziServices");
      setActivityPath("/kaziActivityMov");
      setReviewsPath("/kaziReviewsMov");
    }
  }, [role]);

  // user services link
  const customExpandIcon = ({ isActive, onClick }) => (
    <div>
      <i
        onClick={onClick}
        className={`text-[17px] fa-solid fa-angle-right mr-[7px] ${
          isActive && "rotate-90"
        }`}
      ></i>
    </div>
  );

  const memberServicesHeader = (
    <div className="setting-mov">
      <img
        src="https://i.ibb.co/FnGQ6bg/Vector.png"
        className="ml-[6px] mr-6"
        alt="Not Available"
      ></img>
      <h1 className="mt-[-5px]">Services</h1>
    </div>
  );

  return (
    <div className="mt-10 max-w-[1024px] mx-auto">
      <h1 className="font-bold ml-8 text-xl mb-12">Account</h1>
      <Link to="/mobileuserprofile">
        <div className="grid grid-cols-6 mt-5 mb-8 he">
          <div className="setting-mov">
            <img
              src="https://i.ibb.co/WxB9SbQ/Vector.png"
              className="ml-8 mr-6"
              alt="Not Available"
            ></img>
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
      <Link to="/my-orders/account">
        <div className="grid grid-cols-6 mt-5 mb-8 he">
          <div className="flex items-center col-span-5 pl-14">
            <MdOutlineManageAccounts className="text-black text-xl mr-5" />
            <h1 className="whitespace-nowrap">My Account</h1>
          </div>
          <div>
            <i className="fa-solid fa-angle-right ml-8"></i>
          </div>
        </div>
      </Link>
      <Link to={`/galleryMov/${_id}`}>
        <div className="grid grid-cols-6 mt-5 mb-10 he">
          <div className="setting-mov">
            <img
              src="https://i.postimg.cc/X7Q3PJ3z/gallery.png"
              className="ml-8 mr-6 w-[16px] h-[16px]"
              alt="Not Available"
            ></img>
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
      <Link to={`/connections/${_id}`}>
        <div className="grid grid-cols-6 mt-5 mb-8 he">
          <div className="setting-mov">
            <h1 className="mt-[-5px] whitespace-nowrap flex items-center">
              <AiOutlineUsergroupAdd className="ml-8 mr-[22px] text-black text-xl" />{" "}
              Connections
            </h1>
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
      <Link to="/mobile-conversations">
        <div className="grid grid-cols-6 mt-5 mb-8 he">
          <div className="setting-mov">
            <h1 className="mt-[-5px] whitespace-nowrap flex items-center">
              <HiOutlineMail className="ml-8 mr-[22px] text-black text-xl" />{" "}
              Inbox
            </h1>
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
        <div className="grid grid-cols-6 mt-5 mb-8 he">
          <div className="setting-mov">
            <img
              src="https://i.ibb.co/mhkdwc9/Vector.png"
              className="ml-8 mr-6"
              alt="Not Available"
            ></img>
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
      {role === "member" && (
        <Link to="/mobileActivityPage">
          <div className="grid grid-cols-6 mb-5 he">
            <div className="setting-mov">
              <img
                src="https://i.ibb.co/Jnp44YF/Vector.png"
                className="ml-8 mr-6"
                alt="Not Available"
              ></img>
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
      )}
      {role !== "member" && (
        <Link to={activityPath}>
          <div className="grid grid-cols-6 mt-5 mb-10 ">
            <div className="setting-mov">
              <img
                src="https://i.ibb.co/Jnp44YF/Vector.png"
                className="ml-6 mr-6"
                alt="Not Available"
              ></img>
              <h1 className="mt-[-5px] whitespace-nowrap">My Activity</h1>
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
      )}
      {/* Member all types of services page */}
      {role === "member" && (
        <Collapse expandIconPosition="end" expandIcon={customExpandIcon} ghost>
          <Panel className="" header={memberServicesHeader}>
            <div className="pl-24">
              <div className="text-left font-Inter mb-1 w-full">
                <Link to={"/allServices"} className="">
                  All Services
                </Link>
              </div>
              <div className="text-left font-Inter mb-1 w-full">
                <Link to={"/ongoingServices"} className="">
                  Ongoing Services
                </Link>
              </div>
              <div className="text-left font-Inter mb-1 w-full">
                <Link to={"/completedServices"} className="">
                  Completed Services
                </Link>
              </div>
              <div className="text-left font-Inter mb-1 w-full">
                <Link to={"/cancelledServices"} className="">
                  Cancelled Services
                </Link>
              </div>
              <div className="text-left font-Inter mb-1 w-full">
                <Link to={"/agentServices"} className="">
                  Agent Services
                </Link>
              </div>
              <div className="text-left font-Inter mb-1 w-full">
                <Link to={"/kaziServices"} className="">
                  Kazi Services
                </Link>
              </div>
              <div className="text-left font-Inter mb-1 w-full">
                <Link to={"/lawyerServices"} className="">
                  Lawyer Services
                </Link>
              </div>
            </div>
          </Panel>
        </Collapse>
      )}

      {role !== "member" && (
        <Link to={servicePath}>
          <div className="grid grid-cols-6 mt-5 mb-10 he">
            <div className="setting-mov">
              <img
                src="https://i.ibb.co/FnGQ6bg/Vector.png"
                className="ml-8 mr-6"
                alt="Not Available"
              ></img>
              <h1 className="mt-[-5px] whitespace-nowrap">My Services</h1>
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
      )}

      {role !== "member" && (
        <Link to={reviewsPath}>
          <div className="grid grid-cols-6 mt-5 mb-10 he">
            <div className="setting-mov">
              <h1 className="mt-[-5px] whitespace-nowrap flex items-center">
                <MdOutlineReviews className="ml-8 mr-[22px] text-black text-xl" />{" "}
                My Reviews
              </h1>
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
      )}

      {role === "member" && (
        <Link to="/matchesmov">
          <div className="grid grid-cols-6 mt-5 mb-8 he">
            <div className="setting-mov">
              <img
                src="https://i.ibb.co/LC2W3Ch/Vector.png"
                className="ml-8 mr-6 "
                alt="Not Available"
              ></img>
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
      )}

      <Link to="/certificatemov">
        <div className="grid grid-cols-6 mt-5 mb-8 he">
          <div className="setting-mov">
            <img
              src="https://i.ibb.co/rcSG8xR/Vector.png"
              className="ml-8 mr-6"
              alt="Not Available"
            ></img>
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
            <img
              src="https://i.ibb.co/FbYM9Bt/coolicon.png"
              className="ml-8 mr-6"
              alt="Not Available"
            ></img>
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
            <i className="fa-solid fa-ban mr-5 ml-8 my-3"></i> About Shongshari
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="pb-[15px]">
            <Link to="/meetmov" className="ml-[100px] ">
              Team Member
            </Link>
            <br></br>
            <br></br>
            <Link to="/privacy-policy" className="ml-[100px] ">
              Privacy Policy
            </Link>
            <br></br>
            <br></br>
            <Link to="/aboutmov" className="ml-[100px]">
              About Us
            </Link>
            <br></br>
            <br></br>
            <Link to="/contact" className="ml-[100px]">
              Contact Us
            </Link>
            <br></br>
            <br></br>
            <Link to="/faq" className="ml-[100px]">
              FAQ
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
            <br></br>
            <br></br>
            <Link to="/help" className="ml-[100px]">
              Help Center
            </Link>
            <br></br>
            <br></br>
            <Link to="/endUserAgreement" className="ml-[100px]">
              End User Agreement
            </Link>
            <br></br>
            <br></br>
            <Link to="/refundPolicy" className="ml-[100px]">
              Refund Policy
            </Link>
            <br></br>
            <br></br>
            <Link to="/cookiePolicy" className="ml-[100px]">
              Cookie Policy
            </Link>
            <br></br>
            <br></br>
            <Link to="/customerReviews" className="ml-[100px]">
              Customer Review
            </Link>
            <br></br>
            <br></br>
            <Link to="/associateBlog" className="ml-[100px]">
              Associate Blog
            </Link>
            <br></br>
            <br></br>
            <Link to="/tutorials" className="ml-[100px]">
              Tutorials
            </Link>
            <br></br>
            <br></br>
            <Link to="/quickStart" className="ml-[100px]">
              Quick Start Guide
            </Link>
            <br></br>
            <br></br>
            <Link to="/reportAbuse" className="ml-[100px]">
              Report Abuse
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
