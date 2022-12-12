import React from 'react'
import { useState } from 'react';

import { CloudUploadOutlined, ZoomInOutlined, ZoomOutOutlined } from '@material-ui/icons';
import { Upload } from 'antd';
const { Dragger } = Upload;



export const OthersCertificateSidebar = ({ setSelectedImage }) => {
    const handleImage = (e) => {
        setSelectedImage(e.target.currentSrc)
    }

    return (
        <div>
            <div className='mt-4'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        Certificate
                    </h1>
                    <div tabIndex="1" className='onselect-image rounded'>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-portrait-design-template-009e3d995336bfe9277e0b01e6658bc1_screen.jpg?ts=1650358684" alt="" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        Certificate 1
                    </h1>
                    <div tabIndex="2" className='onselect-image rounded'>
                        <img src="https://www.shutterstock.com/image-vector/certificate-appreciation-medal-ribbon-portrait-260nw-479429395.jpg" alt="" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        Certificate 2
                    </h1>
                    <div tabIndex="3" className='onselect-image rounded'>
                        <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        Certificate 3
                    </h1>
                    <div tabIndex="4" className='onselect-image rounded'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlisgkeJ4vUWfCnQ7AAuA8Xi6kxieUpDAu_K3MrtBNvoAy1zi6XUKCCBpeMDZVCp_osYo&usqp=CAU" alt="" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        Certificate 4
                    </h1>
                    <div tabIndex="5" className='onselect-image rounded'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCmvTUfjQJROGRqRimmATQIgD4ESoPp-kXA&usqp=CAU" alt="" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export function OthersCertificate({ selectedImage }) {
    const [stepScale, setStepScale] = useState(1.0)
    return (
        <div>
            <div className='py-2'>
                <div className='shadow-certificate rounded-2xl p-2 py-4 '>
                    <div className='flex justify-center items-center '>
                        <div className="max-h-[1187px] max-w-[800px] z-50 overflow-scroll">
                            <img
                                src={selectedImage}
                                style={{ transform: `scale(${stepScale})`, zIndex: '1' }}
                                className="w-full rounded-2xl"
                                alt=''

                            />
                        </div>

                    </div>

                    <div className='flex justify-center py-4'>
                        <div className='w-3/5' >
                            <div className='flex justify-between  justify-items-center'>
                                <button className='p-[0px]' onClick={() => setStepScale(stepScale + .1)}>
                                    <ZoomInOutlined color='black' className='w-[51px] h-[51px]' />
                                </button>
                                <h1 className="font-bold text-lg mt-2 text-slate-800">Certificate</h1>
                                <button className='p-[0px]' onClick={() => setStepScale(stepScale - .1)}>
                                    <ZoomOutOutlined color='black' className='w-[51px] h-[51px]' />
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

                <section className='py-2 mt-[70px] mb-[70px]'>
                    <div className='mb-4'>
                        <h1 className="font-bold text-xl text-slate-800	">Add New Certificate</h1>
                    </div>

                    <div className='shadow-certificate rounded p-10'>
                        <Dragger style={{ border: 'none', background: 'none' }}>
                            <p className='font-bold text-base mb-2'>Click or drag file to this area to upload</p>
                            <div className='flex justify-center mt-1 px-4'>
                                <p className='btn-certificate  flex  p-1 px-2 rounded text-white font-bold flex justify-center items-center' >
                                    <CloudUploadOutlined className=' text-white mr-1  ' /> upload
                                </p>
                            </div>
                        </Dragger>
                    </div>

                </section>

                <section className='pt-5'>
                    <div className='mb-4'>
                        <h className="font-bold text-xl text-slate-800">Re-Upload Certificate</h>
                        <p className="">Admin ask you to upload your Certificate again</p>
                    </div>
                    <div className='mt-4 flex'>
                        <div className='mr-2 '>
                            <div className='reupload-certificate rounded-2xl'>
                                <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" className='rounded-2xl' alt="" style={{ opacity: '.5' }} />
                            </div>
                            <div className='reupload-certificate-inner-box text-white px-8 '>
                                <Dragger style={{ border: 'none' }}>
                                    <p className=" text-white font-bold">Drag and drop or click on the uploadd button to add new certificate</p>
                                    <div className='flex justify-center mt-1'>
                                        <p className='btn-certificate text-lg  p-1 px-2 rounded text-white flex justify-center items-center' >
                                            <CloudUploadOutlined className='text-white mr-1 font-bold' /> upload
                                        </p>
                                    </div>
                                </Dragger>
                            </div>
                        </div>
                        <div >
                            <div className='reupload-certificate rounded-2xl'>
                                <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" className='rounded-2xl' alt="" style={{ opacity: '.5' }} />
                            </div>
                            <div className='reupload-certificate-inner-box text-white px-8 '>
                                <Dragger style={{ border: 'none' }}>
                                    <p className=" text-white font-bold">Drag and drop or click on the uploadd button to add new certificate</p>
                                    <div className='flex justify-center mt-1'>
                                        <p className='btn-certificate text-lg  p-1 px-2 rounded text-white flex justify-center items-center' >
                                            <CloudUploadOutlined className='text-white mr-1 font-bold' /> upload
                                        </p>
                                    </div>
                                </Dragger>
                            </div>
                        </div>



                    </div>
                </section>

            </div>
        </div>

    )
}
