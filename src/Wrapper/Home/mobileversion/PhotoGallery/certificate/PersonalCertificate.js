import React, { useState } from "react";
import { NavLink } from "react-router-dom";
/* certificate img */
import certificate1 from "../../../../../assets/images/user profile/certificate1.png";
import certificate2 from "../../../../../assets/images/user profile/certificate2.png";
import certificate3 from "../../../../../assets/images/user profile/certificate3.png";
import certificate4 from "../../../../../assets/images/user profile/certificate4.png";
import certificate5 from "../../../../../assets/images/user profile/certificate5.png";
import certificate6 from "../../../../../assets/images/user profile/certificate6.png";
import certificate7 from "../../../../../assets/images/user profile/certificate7.png";
/* component */
import AllCertificateImg from "../../../../../components/SingleProfilesUser/CertificateSection/UpdateCertificateSection/AllCertificateImg/AllCertificateImg";
import UpdateCertificateSection from "../../../../../components/SingleProfilesUser/CertificateSection/UpdateCertificateSection/UpdateCertificateSection";

const PersonalCertificate = () => {
    const [certificateId, setCertificateId] = useState(0);
    /* all img data */
    const allData = [
        {
            id: 1,
            name: "SSC Certificate",
            img: certificate1,
            type: "education",
        },
        {
            id: 2,
            name: "HSC Certificate",
            img: certificate2,
            type: "education",
        },
        {
            id: 3,
            name: "Bachelor Certificate ",
            img: certificate3,
            type: "education",
        },
        {
            id: 4,
            name: "Masters Certificate",
            img: certificate4,
            type: "education",
        },
        {
            id: 5,
            name: "PHD Certificate",
            img: certificate5,
            type: "education",
        },
        {
            id: 6,
            name: "Employment Certificate 1",
            img: certificate6,
            type: "proffession",
        },
        {
            id: 7,
            name: "Employment Certificate 2",
            img: certificate1,
            type: "proffession",
        },
        {
            id: 8,
            name: "Employment Certificate 3",
            img: certificate2,
            type: "proffession",
        },
        {
            id: 9,
            name: "Employment Certificate 4",
            img: certificate3,
            type: "proffession",
        },
        {
            id: 10,
            name: "Employment Certificate 5",
            img: certificate4,
            type: "proffession",
        },
        {
            id: 11,
            name: "Certificate 1",
            img: certificate7,
            type: "others",
        },
        {
            id: 12,
            name: "Certificate 2",
            img: certificate1,
            type: "others",
        },
        {
            id: 13,
            name: "Certificate 3",
            img: certificate2,
            type: "others",
        },
        {
            id: 14,
            name: "Certificate 4",
            img: certificate3,
            type: "others",
        },
        {
            id: 15,
            name: "Certificate 5",
            img: certificate4,
            type: "others",
        },
    ];
    /* used to filter img data */
    const [certificateData, setCertificateData] = useState(allData);
    /* filtering img data */
    const filterData = type => {
        if (type === "education") {
            setCertificateData(allData.filter(data => data.type === "education"));
        } else if (type === "profession") {
            setCertificateData(allData.filter(data => data.type === "proffession"));
        } else if (type === "others") {
            setCertificateData(allData.filter(data => data.type === "others"));
        } else {
            setCertificateData(allData);
        }
    };
    /* filtering img to show single img */
    const selectCertificate = certificateData.filter(newCertficate => newCertficate.id === certificateId + 1);

    return (
        <div className="mx-auto max-w-[1200px] bg-[#FAFBFF] pt-[58px] font-sans ">
            <div className="flex gap-[51px]">
                {/* Left side filtered img */}
                <div className="w-[360px]">
                    {certificateData.map(certificate => (
                        <AllCertificateImg
                            key={certificate.id}
                            certificate={certificate}
                            certificateData={certificateData}
                            setCertificateId={setCertificateId}
                            selectCertificate={selectCertificate}
                        />
                    ))}
                </div>
                {/* Filtering button */}
                <div className="w-[835px]">
                    <h1 className="text-left font-semibold text-[32px] text-[#333333]">Certificate</h1>
                    <div className="grid grid-cols-3 gap-[25px] my-10 w-full font-sans font-normal text-2xl text-[#000000] text-center">
                        <NavLink to={'/educationalCertificate'} onClick={() => filterData("education")} className={({ isActive }) =>
                            `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center ${isActive ? "font-semibold text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3]" : "text-[#000000] bg-[#D0DBFF]"
                            }`}>
                            Educational Certificate
                        </NavLink>
                        <NavLink to={'/professionalCertificate'} onClick={() => filterData("profession")} className={({ isActive }) =>
                            `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center ${isActive ? "font-semibold text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3]" : "text-[#000000] bg-[#D0DBFF]"
                            }`}>
                            Professional Certificate
                        </NavLink>
                        <NavLink to={'/personalCertificate'} onClick={() => filterData("others")} className={({ isActive }) =>
                            `bg-[#D0DBFF] py-[13px] rounded-[10px] text-center ${isActive ? "font-semibold text-[#FFFFFF] bg-gradient-to-r from-[#E52982] to-[#A72BC3]" : "text-[#000000] bg-[#D0DBFF]"
                            }`}>
                            Others Certificate
                        </NavLink>
                    </div>
                    {/* Main img showing */}
                    <div style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }} className="bg-[#FFFFFF] py-[15px] px-[18px] rounded-[16px]">
                        <img
                            className="h-[1187px] w-[800px] rounded-[16px]"
                            src={selectCertificate[0] ? selectCertificate[0]?.img : certificateData[0].img}
                            alt="view certificate"
                        />
                    </div>
                    {/* file uploading section */}
                    <UpdateCertificateSection />
                </div>
            </div>
        </div>
    );
};

export default PersonalCertificate;
