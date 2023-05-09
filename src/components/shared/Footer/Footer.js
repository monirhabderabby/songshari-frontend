import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Toaster, toast } from "react-hot-toast";
import "../../../App.css";
import { useAddSubscriberMutation } from "../../../Redux/features/subscriber/subscriberApi";
import "../../../assets/css/footer.css";
import { VersionTrack } from "../VersionTrack/VersionTrack";
import flower from "./../../../assets/images/footer/flower01.png";
import icon from "./../../../assets/images/footer/icon.png";
import rightShape from "./../../../assets/images/footer/right-shape.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [addSubscriber, { data, isLoading, error }] =
    useAddSubscriberMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    addSubscriber({ email });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      setEmail("");
      toast.success(data.message);
    }
    if (error) {
      setEmail("");
      toast.error("Some thing went wrong");
    }
  }, [data, isLoading, error]);
  return (
    <footer className="footer-section ignoreMouseEffect">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <img
        className="shape1"
        src="https://shonshari.vercel.app/static/media/f-shape.b5e3192423e8e9d80b7a.png"
        alt="Not Available"
      />
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
                  <p className="text mt-[200px]">
                    Sign up to receive a monthly email on the latest news!
                  </p>
                  <form onSubmit={handleSubmit} className="newslater-form">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Your Email Address"
                    />
                    <button type="submit">
                      <i className="fab fa-telegram-plane"></i>
                    </button>
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
                <h4 className="ignoreMouseEffect text-[24px] mb-[9px] uppercase font-normal text-[#fff]">
                  Our Information
                </h4>
                <ul className="f-social-links ignoreMouseEffect">
                  <li className="py-[5px]">
                    <Link className="footer-link" to="/about">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      About Us
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/contact">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Contact Us
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/customerReviews">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Customer Reviews
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/our-teams">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Our Teams
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Business License
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" relative flex justify-center ">
              <div className="link-wrapper three">
                <h4 className="ignoreMouseEffect text-[24px] mb-[9px] uppercase font-normal text-[#fff]">
                  help center
                </h4>
                <ul className="ignoreMouseEffect f-social-links">
                  <li className="py-[5px]">
                    <Link to="/help">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Help centre
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/faq">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      FAQ
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/quickStart">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>
                      Quick Start Guide
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/tutorials">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>
                      Tutorials
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/associateBlog">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>
                      Associate Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" relative flex justify-center ">
              <div className="link-wrapper four">
                <h4 className="ignoreMouseEffect text-[24px] mb-[9px] uppercase font-normal text-[#fff]">
                  legal
                </h4>
                <ul className="ignoreMouseEffect f-social-links">
                  <li className="py-[5px]">
                    <Link to="/privacy-policy">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Privacy policy
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/endUserAgreement">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      End User Agreements
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/refundPolicy">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Refund Policy
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/cookiePolicy">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Cookie policy
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/reportAbuse">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Report abuse
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
                <span className="ignoreMouseEffect text-[#fff]">
                  Copyright © 2021.All Rights Reserved By
                </span>
                <a
                  className="ignoreMouseEffect ml-1 text-[#ffca28]"
                  href="http://shongshari.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  shongshari.com
                </a>
              </div>
              <VersionTrack />
            </div>
            <div>
              <ul className="footer-social-links flex ignoreMouseEffect">
                <li>
                  <a
                    href="https://www.facebook.com/shongsharibd"
                    target="blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/shongshari_" target="blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="http://shongshari.com/" target="blank">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </footer>
  );
};

export default Footer;
