import React from "react";

const AllCertificateImg = ({ certificate, setCertificateId, certificateId, index }) => {
    return (
        <div key={certificate._id} className="flex flex-col w-full font-sans font-medium text-2xl text-[#000000]">
            <h1 className="mb-6 text-left lg:text-2xl md:text-xl text-lg">{certificate.position}</h1>
            <div className="h-[243px] lg:w-[349px] w-full relative mb-10">
                <img
                    onClick={() => setCertificateId(index)}
                    className={`h-full w-full rounded-[12px] ${
                        index === certificateId ? "border-[2px] border-[#E41272] boxShadow: [3px 3px 12px rgba(0, 0, 0, 0.12)]" : ""
                    }`}
                    src={certificate?.specialAchievementMoment}
                    alt="certificate"
                />
                <p
                    className={`absolute font-sans font-medium text-base text-[#FFFFFF] left-[35%] bottom-5 py-[5px] px-5 bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] ${
                        index === certificateId ? "block" : "hidden"
                    }`}
                >
                    Selected
                </p>
            </div>
        </div>
    );
};

export default AllCertificateImg;
