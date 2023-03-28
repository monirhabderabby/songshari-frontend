import React from "react";

// Third party packages
import { BsFillPlayFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { TbFileCertificate } from "react-icons/tb";

export const Faq = ({ course }) => {
    const { forWhomIsThisCourse, whatNeedToKnowForTheCourse, whatRequiredForTheCourse, willCertificateBeAvailable } = course || {};
    const faqs = [
        {
            id: 1,
            icon: <FaUserSecret />,
            question: "Who is the course for",
            answer: forWhomIsThisCourse,
        },
        {
            id: 2,
            icon: <BsFillPlayFill />,
            question: "What do you need to know for the course?",
            answer: whatNeedToKnowForTheCourse,
        },
        {
            id: 3,
            icon: <HiComputerDesktop />,
            question: "What is required for the course?",
            answer: whatRequiredForTheCourse,
        },
        {
            id: 4,
            icon: <TbFileCertificate />,
            question: "Will the certificate be available?",
            answer: willCertificateBeAvailable,
        },
    ];
    return (
        <div className="my-[30px] lg:my-[50px]">
            <h2 className="text-[32px] text-gray-700 font-semibold mb-[20px] border-b-2">Frequently Asked Questions</h2>

            <div className="grid grid-cols-1 gap-y-[30px]">
                {faqs?.map(item => {
                    return (
                        <div className="flex gap-x-[20px] lg:gap-x-[30px]" key={item?.id}>
                            <div className="w-[40px] h-[40px] rounded-full bg-[#354895] flex justify-center items-center text-white">
                                {item?.icon}
                            </div>
                            <div className="flex-1 flex flex-col gap-y-[15px]">
                                <h2 className="text-[22px] lg:text-[26px] text-[#354895] font-Poppins font-semibold">{item?.question}</h2>
                                <p className="text-[14px] lg:text-[16px] font-Inter font-normal">{item?.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
