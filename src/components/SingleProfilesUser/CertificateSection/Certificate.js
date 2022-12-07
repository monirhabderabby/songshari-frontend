import React from 'react'
import './Certificate.css'


import { useState } from 'react';
import EducationalCertificate, { EducationalCertificateSidebar } from './EducationalCertificate';
import { ProfessionalCertificate, ProfessionalCertificateSidebar } from './ProfessionalCertificate';
import { OthersCertificate, OthersCertificateSidebar } from './OthersCertificate';



export default function Certificate() {
    const [tabValue, setTabValue] = useState(1);
    const [selectedImage, setSelectedImage] = useState('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-portrait-design-template-009e3d995336bfe9277e0b01e6658bc1_screen.jpg?ts=1650358684');
    return (
        <div className='flex justify-center items-center'>
            <div className='lg:w-9/12 p-2 '>
                <div className='flex '>
                    <div className='w-3/12'>
                        {tabValue === 1 && <EducationalCertificateSidebar setSelectedImage={setSelectedImage} />}
                        {tabValue === 2 && <ProfessionalCertificateSidebar setSelectedImage={setSelectedImage} />}
                        {tabValue === 3 && <OthersCertificateSidebar setSelectedImage={setSelectedImage} />}

                    </div>
                    <div className='ml-8 w-9/12'>
                        <div className='p-2'>
                            <div className='mb-2'>
                                <h1 className='font-bold text-xl text-slate-800'>Certificate</h1>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <button className="p-2 font-bold btn-tab text-slate-800" style={tabValue === 1 ? {
                                        background: 'linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)',
                                        color: '#fff'
                                    } : {}} onClick={() => setTabValue(1)}>Educational Certificate</button>
                                    <button className="p-1 font-bold btn-tab mx-4 text-slate-800" style={tabValue === 2 ? {
                                        background: 'linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)',
                                        color: '#fff'
                                    } : {}} onClick={() => setTabValue(2)}>Professional Certificate</button>
                                    <button className="p-1 font-bold btn-tab text-slate-800" style={tabValue === 3 ? {
                                        background: 'linear-gradient(106.79deg, #E52982 25.24%, #A72BC3 88.25%)',
                                        color: '#fff'
                                    } : {}} onClick={() => setTabValue(3)}>Others Certificate</button>

                                </div>
                            </div>


                        </div>
                        <div className='my-4'>
                            {tabValue === 1 && <EducationalCertificate selectedImage={selectedImage} />}
                            {tabValue === 2 && <ProfessionalCertificate selectedImage={selectedImage} />}
                            {tabValue === 3 && <OthersCertificate selectedImage={selectedImage} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
