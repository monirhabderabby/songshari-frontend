import React from 'react'
import { useState } from 'react';

import { ZoomInOutlined, ZoomOutOutlined } from '@material-ui/icons';







export default function EducationalCertificate({ selectedImage, setSelectedImage }) {
    const [stepScale, setStepScale] = useState(1.0)

    const handleImage = (e) => {
        setSelectedImage(e.target.currentSrc)
    }

    return (
        <div>
            <div >
                <div className='  shadow-certificate rounded-2xl p-2'>
                    <div className='flex justify-center items-center  max-w-[326px] rounded-2xl ' style={{ background: ' #F0B1B1' }}>
                        <div className=' max-w-[326px]  overflow-hidden rounded-2xl'
                        >
                            <img
                                src={selectedImage}
                                style={{ transform: `scale(${stepScale})`, }}
                                className="w-full h-full "

                            />
                        </div>

                    </div>

                    <div className='d-flex justify-cente py-2'>
                        <div className='px-[70px]'>
                            <div className='flex justify-between justify-items-center '>
                                <button className='p-[0px]' onClick={() => setStepScale(stepScale + .1)}>
                                    <ZoomInOutlined color='black' style={{ fontSize: 'unset' }} />
                                </button>
                                <h1 className="mt-2 text-[12px] font-bold">Certificate</h1>
                                <button className='p-[0px]' onClick={() => setStepScale(stepScale - .1)}>
                                    <ZoomOutOutlined color='black' style={{ fontSize: 'unset' }} />
                                </button>
                            </div>

                        </div>

                    </div>
                </div>





                <section>
                    <div className='grid grid-cols-3 gap-4' >
                        <div className='pt-2 '>
                            <div>
                                <h1 className=" text-[9px] font-bold mb-2 text-center">
                                    SSC Certificate
                                </h1>
                                <div tabIndex="1" className='onselect-image-mobile rounded'>
                                    <img src="https://img.freepik.com/free-vector/elegant-blue-gold-diploma-certificate-template_1017-17257.jpg?w=2000" alt="" className='rounded-xl w-full h-full' onClick={handleImage} />
                                    <div className='selected-btn'>
                                        <button className='btn-certificate  text-white text-[10px] font-bold py-1 px-2 rounded-2xl'>Selected</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='pt-2 '>
                            <div>
                                <h1 className=" text-[9px] font-bold mb-2 text-center">
                                    HSC Certificate
                                </h1>
                                <div tabIndex="2" className='onselect-image-mobile rounded'>
                                    <img src="https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148971794.jpg?w=2000" alt="" className='rounded-xl w-full h-full' onClick={handleImage} />
                                    <div className='selected-btn'>
                                        <button className='btn-certificate  text-white text-[10px] font-bold py-1 px-2 rounded-2xl'>Selected</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='pt-2 '>
                            <div>
                                <h1 className=" text-[9px] font-bold mb-2 text-center">
                                    Bechelor Certificate
                                </h1>
                                <div tabIndex="3" className='onselect-image-mobile rounded'>
                                    <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" className='rounded-xl w-full h-full' onClick={handleImage} />
                                    <div className='selected-btn'>
                                        <button className='btn-certificate  text-white text-[10px] font-bold py-1 px-2 rounded-2xl'>Selected</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='pt-2 '>
                            <div>
                                <h1 className=" text-[9px] font-bold mb-2 text-center">
                                    Masters Certificate
                                </h1>
                                <div tabIndex="4" className='onselect-image-mobile rounded'>
                                    <img src="https://img.freepik.com/free-vector/elegant-diploma-certificate-template-design_1017-17253.jpg?w=2000" alt="" className='rounded-xl w-full h-full' onClick={handleImage} />
                                    <div className='selected-btn'>
                                        <button className='btn-certificate  text-white text-[10px] font-bold py-1 px-2 rounded-2xl'>Selected</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='pt-2 '>
                            <div>
                                <h1 className=" text-[9px] font-bold mb-2 text-center">
                                    PHD Certificate
                                </h1>
                                <div tabIndex="5" className='onselect-image-mobile rounded'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCmvTUfjQJROGRqRimmATQIgD4ESoPp-kXA&usqp=CAU" alt="" className='rounded-xl w-full h-full' onClick={handleImage} />
                                    <div className='selected-btn'>
                                        <button className='btn-certificate  text-white text-[10px] font-bold py-1 px-2 rounded-2xl'>Selected</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div >
    )
}
