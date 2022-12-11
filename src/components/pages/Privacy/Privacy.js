import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import { PolicyPage } from "./PolicyPage";
import ".././../../App.css";

export const Privacy = () => {
    const links = [
        {
            id: 1,
            name: "Intregation and Definitions",
            link: "/privacy-policy",
        },
        {
            id: 2,
            name: "Collecting and Using Your Personal Data",
            link: "/privacy-policy",
        },
        {
            id: 3,
            name: "Personal Data",
            link: "/privacy-policy",
        },
        {
            id: 4,
            name: "Usage Data",
            link: "/privacy-policy",
        },
        {
            id: 5,
            name: "Tracking Technologies and Cookies",
            link: "/privacy-policy",
        },
        {
            id: 6,
            name: "Business Transactions",
            link: "/privacy-policy",
        },
    ];
    return (
        <>
            <div className="hidden lg:block">
                <CustomHeader title="Privacy Policy" />
                <div className="bg-[#FAFBFF] pt-[60px]">
                    <section className="custom-container w-[936px] mb-[88px] shadow-[0px_1px_24px_rgba(0,0,0,0.08)] rounded-[3px]">
                        <div className="flex h-[50px] items-center bg-white p-[4px]">
                            <span className="p-[18px]">
                                <AiOutlineSearch className="text-[#4A4A4A]" />
                            </span>
                            <input type="text" className="h-full w-full bg-[#FAFBFF] px-[8px]" />
                        </div>
                    </section>
                    <section className="flex custom-container gap-x-[214px]">
                        <div className="bg-[#FFFFFF] h-[490px] px-[45px] py-[43px]">
                            <p className="font-medium mb-[38px] font-sans text-[12px] text-[#00A4BD]">Privacy Policy</p>
                            <div className="flex flex-col w-[240px]">
                                <button className="w-full  flex items-center bg-[#A42BC9] rounded-[2px] text-white p-[12px]">
                                    Last updated: August 20,2021
                                </button>
                                {links?.map(link => {
                                    return (
                                        <button
                                            key={link.id}
                                            className="w-full p-[12px] flex items-center text-left text-[#33475B] font-normal text-[14px]"
                                        >
                                            {link.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <PolicyPage />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>

            {/* Responsive section for Tablet & mobile */}
            <div className="lg:hidden md:block">
                <div>
                    <div className='grid grid-cols-3'>
                        <img src='https://i.ibb.co/stTYBVf/Arrow-1.png' className='col-span-2 ml-8 mt-5' alt="Not Available"></img>
                        <img src='https://i.ibb.co/x2L99Cr/Arrow-2.png' className='ml-20 mt-5' alt="Not Available"></img>
                    </div>
                    <Card className='w-full rounded'>
                        <CardActionArea>
                            <CardContent>
                                <h1 className='font-bold mt-8'>Privacy Policy</h1>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <p className='text-text mb-2 mt-4'>Latest Updated: Aug 20, 2022</p>
                                        <p className='text-text mb-2'>Interpretation & Defination</p>
                                        <p className='text-text mb-2'>Collecting & Using Personal Data</p>
                                        <p className='text-text mb-2'>Personal Data</p>
                                        <p className='text-text mb-2'>Usage Data</p>
                                        <p className='text-text'>Tracking Technologies & Cookies</p>
                                    </div>
                                    <div>
                                        <p className='text-text mb-2 mt-4'>Latest Updated: Aug 20, 2022</p>
                                        <p className='text-text mb-2'>Interpretation & Defination</p>
                                        <p className='text-text mb-2'>Collecting & Using Personal Data</p>
                                        <p className='text-text mb-2'>Personal Data</p>
                                        <p className='text-text mb-2'>Usage Data</p>
                                        <p className='text-text'>Tracking Technologies & Cookies</p>
                                    </div>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <div className='ml-4 mr-2 mt-12'>
                        <p className='text-sm font-bold mb-4 mt-5'>Privacy Policy</p>
                        <p className='text-sm'>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                        <br></br>
                        <p className='text-sm'>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='ml-4 mr-2'>
                        <p className='text-sm font-bold'>Contact Us</p>
                        <p className='text-sm'>If you have any questions about this Privacy Policy, You can contact us:</p>
                    </div>
                </div>
            </div>
        </>
    );
};
