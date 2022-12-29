import React from 'react';

const AllCertificateImg = ({ certificate, certificateData, setCertificateId, selectCertificate }) => {
    return (
        <div key={certificate.id} className='flex flex-col w-full font-medium text-2xl text-[#000000]'>
            <h1 className='mb-6 text-left'>{certificate.name}</h1>
            <img onClick={() => setCertificateId(certificate.id - 1)} className={`mb-10 h-[243px] rounded-[12px] ${(certificate.id === (selectCertificate[0] ? selectCertificate[0]?.id : certificateData[0].id)) ? 'border-[2px] border-[#E41272] boxShadow: [3px 3px 12px rgba(0, 0, 0, 0.12)]' : ''}`} src={certificate?.img} alt="certificate" />
        </div>
    );
};

export default AllCertificateImg;