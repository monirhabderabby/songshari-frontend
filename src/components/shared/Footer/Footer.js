import React from "react";
import { FaAngleDoubleRight, FaDribbble, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../App.css";
import "../../../assets/css/footer.css";

export const Footer = () => {
    const links = {
        ourInformation: [
            {
                id: 1,
                name: "About Us",
                to: "/about",
            },
            {
                id: 2,
                name: "Contact Us",
                to: "/contact",
            },
            {
                id: 3,
                name: "Customer Reviews",
                to: "/",
            },
            {
                id: 4,
                name: "Success Stories",
                to: "/",
            },
            {
                id: 5,
                name: "Business License",
                to: "/",
            },
        ],
        myAccount: [
            {
                id: 1,
                name: "Manage Account",
                to: "/",
            },
            {
                id: 2,
                name: "Safety Tips",
                to: "/",
            },
            {
                id: 3,
                name: "Account Verification",
                to: "/",
            },
            {
                id: 4,
                name: "Safety & Security",
                to: "/",
            },
            {
                id: 5,
                name: "MemberShip Level",
                to: "/",
            },
        ],
        helpCenter: [
            { id: 1, name: "Help centre", to: "/" },
            { id: 2, name: "FAQ", to: "/" },
            { id: 3, name: "Quick Start Guide", to: "/" },
            { id: 4, name: "Tutorials", to: "/" },
            { id: 5, name: "Associate Blog", to: "/" },
        ],
        legal: [
            { id: 1, name: "Privacy Policy", to: "/" },
            { id: 2, name: "End User Agreements", to: "/" },
            { id: 3, name: "Refund Policy", to: "/" },
            { id: 4, name: "Cookie Policy", to: "/" },
            { id: 5, name: "Report abuse", to: "/" },
        ],
    };
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <section className="custom-container">
                <div className="newsLetter"></div>
                <hr />
                <div className="grid grid-cols-2 md:grid-cols-4 my-[86px]">
                    <div className="mx-auto">
                        <h1 className="text-white mb-[9px] font-medium tracking-[1.5px] font-george text-[24px]">OUR INFORMATION</h1>
                        {links?.ourInformation.map(link => {
                            return (
                                <Link
                                    to={link.to}
                                    className="flex items-center mb-[21px] text-[16px] text-gray-400 hover:text-white hover:translate-x-3 transition-[0.3s]"
                                >
                                    <span className="mr-1">
                                        <FaAngleDoubleRight />
                                    </span>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-white mb-[9px] font-medium tracking-[1.5px] font-george text-[24px]">MY ACCOUNT</h1>
                        {links?.ourInformation.map(link => {
                            return (
                                <Link
                                    to={link.to}
                                    className="flex items-center mb-[21px] text-[16px] text-gray-400 hover:text-white hover:translate-x-3 transition-[0.3s]"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-white mb-[9px] font-medium tracking-[1.5px] font-george text-[24px]">HELP CENTER</h1>
                        {links?.ourInformation.map(link => {
                            return (
                                <Link
                                    to={link.to}
                                    className="flex items-center mb-[21px] text-[16px] text-gray-400 hover:text-white hover:translate-x-3 transition-[0.3s]"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-white mb-[9px] font-medium tracking-[1.5px] font-george text-[24px]">LEGAL</h1>
                        {links?.ourInformation.map(link => {
                            return (
                                <Link
                                    to={link.to}
                                    className="flex items-center mb-[21px] text-[16px] text-gray-400 hover:text-white hover:translate-x-3 transition-[0.3s]"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <hr />
                <div className="h-[80px] w-full flex justify-between items-center">
                    <div className="text-white text-[16px] tracking-[0.5px] leading-[24px] font-normal font-george">
                        Copyright © 2021.All Rights Reserved By <span className="text-[#FFCA28]">Shongshari.com </span>
                    </div>
                    <div className="flex items-center gap-x-[16px]">
                        <a
                            href="https://www.facebook.com/shongsharibd"
                            target="facebook"
                            className="h-[50px] w-[50px] flex justify-center items-center bg_Color rounded-full button_shadow"
                        >
                            <FaFacebookF className="text-white" />
                        </a>
                        <a
                            href="https://www.instagram.com/shongshari_"
                            target="instagram"
                            className="h-[50px] w-[50px] flex justify-center items-center bg_Color rounded-full button_shadow"
                        >
                            <FaInstagram className="text-white" />
                        </a>
                        <a
                            href="https://dribbble.com"
                            target="dribble"
                            className="h-[50px] w-[50px] flex justify-center items-center bg_Color rounded-full button_shadow"
                        >
                            <FaDribbble className="text-white" />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
};
