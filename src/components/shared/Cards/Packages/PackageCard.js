import React, { useState } from "react";
import { useNavigate } from "react-router";
import getCookie from "../../../../Helper/cookies/getCookie";
import VarientAnimation from "../../../../assets/utilities/Animation/VarientAnimation";
import PackageForm from "../../Packages/PackageForm";
import { PackagePriceTest } from "./PackagePriceTest";

export const PackageCard = ({ pack, packages, index, height, setSuccessSnackBarOpen, setSelectedPack, useCase, hovered, setHovered }) => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    // function declaration
    const handleBuyPack = () => {
        if (getCookie("token")) {
            if (useCase === "home") {
                return setSelectedPack(pack);
            }
            return setShowPopup(true);
        } else {
            navigate("/login");
        }
    };

    const hoveredHandler = indexNum => {
        setHovered(indexNum);
    };
    return (
        <VarientAnimation direction="up" delay={0.3}>
            <div
                className={`${height ? height : "h-[580px]"} w-[320px] rounded-[10px] px-[30px] py-[34px] bg-[rgb(255,255,255)] group ${
                    hovered === index && "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                } duration-300 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] relative`}
                onMouseEnter={() => hoveredHandler(index)}
                onMouseLeave={() => hoveredHandler(0)}
            >
                <PackagePriceTest pack={pack} hovered={hovered} index={index} />
                <div className="mt-[20px] ">
                    <ul className={`list-disc pl-6 text-[14px] font-george ${hovered === index ? "text-[#FFFFFF]" : "text-gray-400"} h-[450px]`}>
                        {pack?.title?.toLowerCase()?.includes("free") && (
                            <>
                                <li className="whitespace-nowrap">Browse Basic Features</li>
                                <li>Register/Login</li>
                                <li>Complete Profile</li>
                            </>
                        )}
                        {index !== 0 && <li>All feature of {packages[index - 1]?.title}</li>}
                        <li>{pack?.chatRequestPerDay} chat request every 24hours </li>
                        <li>{pack?.swapPerDay || "Unlimited"} Swap every 24hours</li>
                        <li>{pack?.messageLimit || "Unlimited"} Message Per Day</li>
                        {pack?.videoCall !== 0 && <li>Video Chat: {pack?.videoCall} Minutes a Day</li>}
                        {pack?.videoCallPerMonth !== 0 && <li>{pack?.videoCallPerMonth} Minutes+ Video Chat Per Month</li>}
                        {pack?.timelinePost && <li>Timeline Post</li>}
                        {pack?.courseDiscount !== 0 && <li>Course Discount {pack?.courseDiscount}%</li>}
                        {pack?.uploadMarriageCertificate && <li>Upload Marriage Certificate</li>}
                        {pack?.freeKaziContact && <li>Free Kazi Contact</li>}
                        {pack?.shoppingDiscount !== 0 && <li>{pack?.shoppingDiscount}% Shopping Discount</li>}
                        {pack?.lawyerDiscount !== 0 && <li>{pack?.lawyerDiscount}% Discount on Lawyer Fee</li>}
                        {pack?.agentDiscount !== 0 && <li>{pack?.agentDiscount}% Discount on Agent Fee</li>}
                        {pack?.kaziDiscount !== 0 && <li>{pack?.kaziDiscount}% Discount on Agent Fee</li>}
                        {pack?.specialSupport && <li>Special Support</li>}
                        {pack?.videoBioData && <li>Video Biodata</li>}
                        {pack?.profileBoost !== 0 && <li>{pack?.profileBoost} Profile Boost Per Month</li>}
                    </ul>
                </div>
                <div className="absolute w-full bottom-0 left-0 mb-[34px] px-[34px]">
                    {!pack?.title?.toLowerCase()?.includes("free") && (
                        <button
                            className="w-full rounded-[4px] bg-black group-hover:bg-white group-hover:text-primary duration-300 ease-in-out text-white py-[6px]"
                            onClick={handleBuyPack}
                        >
                            Buy Now
                        </button>
                    )}
                    {pack?.title?.toLowerCase()?.includes("free") && (
                        <button
                            className={`w-full rounded-[4px]   ${
                                hovered === index ? "text-primary bg-white" : "text-white bg-[#eaeaea]"
                            } duration-300 ease-in-out text-white py-[6px]`}
                            disabled
                        >
                            Try Free
                        </button>
                    )}
                </div>
            </div>
            {showPopup && useCase !== "home" && <PackageForm {...{ pack, setShowPopup, setSuccessSnackBarOpen }} />}
        </VarientAnimation>
    );
};
