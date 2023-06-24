import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import "../../../App.css";
// import { useAddSubscriberMutation } from "../../../Redux/features/subscriber/subscriberApi";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { FaDribbble, FaFacebookF, FaInstagram } from "react-icons/fa";
import "../../../assets/css/footer.css";
import { SuccessSnackBar } from "../../ui/error/snackBar/SuccessSnackBar";
import flower from "./../../../assets/images/footer/flower01.png";
import icon from "./../../../assets/images/footer/icon.png";
import rightShape from "./../../../assets/images/footer/right-shape.png";
import ContactForm from "./ContactForm";

// BiLogoFacebook;
const message = "Message Sent Successfully! Thank you for reaching out to us. We will get back to you shortly.";
const Footer = () => {
    const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    // const [addSubscriber, { data, isLoading, error }] =
    //   useAddSubscriberMutation();
    const handleSubmit = e => {
        e.preventDefault();
        // addSubscriber({ email });
    };

    return (
        <footer className="footer-section ignoreMouseEffect">
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <img className="shape1" src="https://shonshari.vercel.app/static/media/f-shape.b5e3192423e8e9d80b7a.png" alt="Not Available" />
            <img className="shape2" src={flower} alt="Not Available" />
            <img className="shape3" src={rightShape} alt="Not Available" />
            <div className="newslater-section z-50">
                <div className="footer-container z-50">
                    <div className="flex mb-[50px] justify-center">
                        <div className="w-[800px]">
                            <div className="newslater-container">
                                <div className="newslater-wrapper">
                                    <div className="icon">
                                        <img src={icon} alt="Not Available" />
                                    </div>
                                    <p className="text mt-[200px]">Sign up to receive a monthly email on the latest news!</p>
                                    <form onSubmit={handleSubmit} className="newslater-form">
                                        <input
                                            onClick={() => setShowPopup(true)}
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Your Email Address"
                                        />
                                        {/* <button
                      className="flex items-center justify-center"
                      type="submit"
                    >
                      <FaTelegramPlane />
                    </button> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-links">
                    <div>
                        <div>
                            <hr className="hr" />
                        </div>
                    </div>
                    <div className="grid  lg:grid-cols-3 md:grid-cols-2">
                        <div className=" relative flex justify-center ">
                            <div className="link-wrapper one">
                                <h4 className="ignoreMouseEffect w-full text-[24px] mb-[9px] uppercase font-normal text-[#fff]">Our Information</h4>
                                <ul className="f-social-links ignoreMouseEffect">
                                    <li className="py-[5px]">
                                        <Link className="footer-link" to="/about">
                                            <KeyboardDoubleArrowRightIcon /> About Us
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/contact">
                                            <KeyboardDoubleArrowRightIcon /> Contact Us
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/customerReviews">
                                            <KeyboardDoubleArrowRightIcon /> Customer Reviews
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/our-teams">
                                            <KeyboardDoubleArrowRightIcon /> Our Teams
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/">
                                            <KeyboardDoubleArrowRightIcon /> Business License
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" relative flex justify-center">
                            <div className="link-wrapper three md:w-full">
                                <h4 className="ignoreMouseEffect w-full text-center text-[24px] mb-[9px] uppercase font-normal text-[#fff]">
                                    help center
                                </h4>
                                <ul className="ignoreMouseEffect f-social-links md:pl-24">
                                    <li className="py-[5px]">
                                        <Link to="/help">
                                            <KeyboardDoubleArrowRightIcon /> Help centre
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/faq">
                                            <KeyboardDoubleArrowRightIcon /> FAQ
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/quickStart">
                                            <KeyboardDoubleArrowRightIcon />
                                            Quick Start Guide
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/tutorials">
                                            <KeyboardDoubleArrowRightIcon />
                                            Tutorials
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/associateBlog">
                                            <KeyboardDoubleArrowRightIcon />
                                            Associate Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" relative flex justify-center ">
                            <div className="link-wrapper four md:w-full md:pl-16">
                                <h4 className="ignoreMouseEffect text-left w-full text-[24px] mb-[9px] uppercase font-normal text-[#fff]">legal</h4>
                                <ul className="ignoreMouseEffect f-social-links">
                                    <li className="py-[5px]">
                                        <Link to="/privacy-policy">
                                            <KeyboardDoubleArrowRightIcon /> Privacy policy
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/endUserAgreement">
                                            <KeyboardDoubleArrowRightIcon /> End User Agreements
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/refundPolicy">
                                            <KeyboardDoubleArrowRightIcon /> Refund Policy
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/cookiePolicy">
                                            <KeyboardDoubleArrowRightIcon /> Cookie policy
                                        </Link>
                                    </li>
                                    <li className="py-[5px]">
                                        <Link to="/reportAbuse">
                                            <KeyboardDoubleArrowRightIcon /> Report abuse
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrapper ">
                    <div>
                        <div>
                            <hr className="hr2" />
                        </div>
                    </div>
                    <div className="flex md:justify-between justify-center md:flex-row flex-col  items-center">
                        <div>
                            <div className="copyr-text">
                                <span className="ignoreMouseEffect text-[#fff]">Copyright © 2021.All Rights Reserved By</span>
                                <a className="ignoreMouseEffect ml-1 text-[#ffca28]" href="http://shongshari.com/" target={"_blank"} rel="noreferrer">
                                    shongshari.com
                                </a>
                            </div>
                            {/* <VersionTrack /> */}
                        </div>
                        <div>
                            <ul className="footer-social-links flex ignoreMouseEffect">
                                <li className="flex items-center justify-center">
                                    <a className="flex items-center justify-center" href="https://www.facebook.com/shongsharibd" target="blank">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a className="flex items-center justify-center" href="http://instagram.com/shongshari_" target="blank">
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <a className="flex items-center justify-center" href="http://shongshari.com/" target="blank">
                                        <FaDribbble />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
            {showPopup && <ContactForm {...{ setShowPopup, setSuccessSnackBarOpen, showPopup }} />}
            <SuccessSnackBar {...{ setSuccessSnackBarOpen, successSnackBarOpen, message }} />
        </footer>
    );
};

export default Footer;
