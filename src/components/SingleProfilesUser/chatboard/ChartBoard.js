import React, { useState } from "react";
/* Third party packages */
import { motion } from "framer-motion";
import { fadeIn } from "../../../assets/utilities/Animation/varient";

// components
import chat from "../../../assets/images/user profile/chatIcon.png";
import { useGetCertificatesWithAuthQuery } from "../../../Redux/features/Documents/documentsApi";
import { YouMayLike } from "./YouMayLike/YouMayLike";

// css
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ChartBoardCSS from "../../../assets/css/chartBoard.module.css";
import { SwapProfileMatches } from "../SwapProfileMatch/SwapProfileMatches";

const ChartBoard = () => {
    // hook variable declaration
    const [isCertificate, setIsCertificate] = useState(false);

    //Redux API calls
    const { data: certificates } = useGetCertificatesWithAuthQuery();
    const professionalCertificate = certificates?.data?.professions || {};
    const educationalCertificate = certificates?.data?.educations || {};
    const marriageCertificate = certificates?.data?.marriages || {};

    // variable declaration for certificate properties
    let proCertificate;
    let eduCertificate;
    let marCertificate;

    if (professionalCertificate?.length > 0) {
        proCertificate = professionalCertificate[0]?.certificates[0]?.photo;
    }
    if (educationalCertificate?.length > 0) {
        eduCertificate = educationalCertificate[0]?.certificates[0]?.photo;
    }
    if (educationalCertificate?.length > 0) {
        marCertificate = marriageCertificate[0]?.certificates[0]?.photo;
    }

    useEffect(() => {
        if (eduCertificate || proCertificate) {
            setIsCertificate(true);
        }
    }, [eduCertificate, proCertificate]);

    return (
        <div>
            {/* ----- Certificate ----- */}
            {isCertificate && (
                <motion.div
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="rounded-xl p-5 font-sans font-normal text-base text-[#000000] mb-[70px]"
                    style={{
                        backgroundImage: "linear-gradient(180deg, #FFD7F6 0%, #FFC1E6 100%)",
                    }}
                >
                    <div className="flex justify-start items-center mx-1 gap-[25px]">
                        <img className="h-6 w-[27px]" src={chat} alt="chat icon" />
                        <h1 className="text-[#333333] text-[22px] font-fira font-semibold">Certificate</h1>
                    </div>
                    {/* professionalCertificate */}
                    {proCertificate && (
                        <div>
                            <h3 className="mt-3 mb-2">Professional Certificate</h3>
                            <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
                                <img className="rounded-lg blur-[1px] w-[224px] h-[93px]" src={proCertificate} alt="Not Available" />
                                <Link
                                    to="/professionalCertificate"
                                    className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] rounded block bg-black text-white text-sm font-medium px-4 py-1 duration-300`}
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    )}
                    {/* Educational Certificate */}
                    {eduCertificate && (
                        <div>
                            <h3 className="mt-3 mb-2">Educational Certificate</h3>
                            <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
                                <img className="rounded-lg blur-[1px] w-[224px] h-[93px]" src={eduCertificate} alt="Not Available" />
                                <Link
                                    to="/educationalCertificate"
                                    className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] text-white rounded block bg-black text-sm font-medium px-4 py-1 duration-300`}
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    )}
                    {marCertificate && (
                        <div>
                            <h3 className="mt-3 mb-2">Marriage Certificate</h3>
                            <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
                                <img className="rounded-lg blur-[1px] w-[224px] h-[93px]" src={marCertificate} alt="Not Available" />
                                <Link
                                    to="/marriageCertificate"
                                    className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] text-white rounded block bg-black text-sm font-medium px-4 py-1 duration-300`}
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
            <div>
                <div className="hidden md:hidden lg:block">
                    <YouMayLike />
                </div>
                <div className="hidden md:hidden lg:block mt-[40px]">
                    <SwapProfileMatches />
                </div>
            </div>
        </div>
    );
};

export default ChartBoard;
