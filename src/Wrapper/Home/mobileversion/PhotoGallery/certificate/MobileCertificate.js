import React from 'react'
import './Certificate.css'


import { useState } from 'react';
import EducationalCertificate from './EducationalCertificate';
import ProfessionalCertificate from './ProfessionalCertificate';
import OthersCertificate from './OthersCertificate';



export default function MobileCertificate() {

    const [tabValue, setTabValue] = useState(1);
    const [selectedImage, setSelectedImage] = useState('https://img.freepik.com/free-vector/elegant-blue-gold-diploma-certificate-template_1017-17257.jpg?w=2000');
    return (
        <div className='flex justify-center'>
            <div className='max-w-[337px] p-2  '>
                <div className=' '>

                    <div >
                        <div className='p-2'>
                            <div>
                                <h1 className='font-bold text-sm'>Certificate</h1>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <button className="p-1  btn-tab-mobile" style={tabValue === 1 ? {
                                    background: 'linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)',
                                    color: '#fff'
                                } : {}} onClick={() => setTabValue(1)}>Educational Certificate</button>
                                <button className="p-1  btn-tab-mobile mx-2" style={tabValue === 2 ? {
                                    background: 'linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)',
                                    color: '#fff'
                                } : {}} onClick={() => setTabValue(2)}>Professional Certificate</button>
                                <button className="p-1  btn-tab-mobile" style={tabValue === 3 ? {
                                    background: 'linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)',
                                    color: '#fff'
                                } : {}} onClick={() => setTabValue(3)}>Others Certificate</button>

                            </div>

                        </div>
                        <div>
                            {tabValue === 1 && <EducationalCertificate selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
                            {tabValue === 2 && <ProfessionalCertificate selectedImage={selectedImage} />}
                            {tabValue === 3 && <OthersCertificate selectedImage={selectedImage} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
