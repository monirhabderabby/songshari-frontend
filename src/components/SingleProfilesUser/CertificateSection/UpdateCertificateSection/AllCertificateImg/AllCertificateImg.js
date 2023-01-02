import React from 'react';

const AllCertificateImg = ({ certificate, certificateData, setCertificateId, selectCertificate }) => {
    return (
        <div key={certificate.id} className='flex flex-col w-full font-sans font-medium text-2xl text-[#000000]'>
            <h1 className='mb-6 text-left'>{certificate.name}</h1>
            <div className='h-[243px] w-[349px] relative mb-10'>
                <img onClick={() => setCertificateId(certificate.id - 1)} className={`h-full w-full rounded-[12px] ${(certificate.id === (selectCertificate[0] ? selectCertificate[0]?.id : certificateData[0].id)) ? 'border-[2px] border-[#E41272] boxShadow: [3px 3px 12px rgba(0, 0, 0, 0.12)]' : ''}`} src={certificate?.img} alt="certificate" />
                <p className={`absolute font-sans font-medium text-base text-[#FFFFFF] left-[35%] bottom-5 py-[5px] px-5 bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] ${(certificate.id === (selectCertificate[0] ? selectCertificate[0]?.id : certificateData[0].id)) ? 'block' : 'hidden'}`}>Selected</p>
            </div>
        </div>
    );
};

export default AllCertificateImg;