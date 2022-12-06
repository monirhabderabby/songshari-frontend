import React from 'react'
import { useState } from 'react';

import { CloudUploadOutlined, ZoomInOutlined, ZoomOutOutlined } from '@material-ui/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;



export const ProfessionalCertificateSidebar = () => {


    return (
        <div>
            <div className='pt-2'>
                <div>
                    <h1 className="title mb-1">
                        Certificate 1
                    </h1>
                    <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" />
                </div>
            </div>
            <div className='pt-2'>
                <div>
                    <h1 className="title mb-1">
                        Certificate 1
                    </h1>
                    <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" />
                </div>
            </div>
            <div className='pt-2'>
                <div>
                    <h1 className="title mb-1">
                        Certificate 2
                    </h1>
                    <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" />
                </div>
            </div>
            <div className='pt-2'>
                <div>
                    <h1 className="title mb-1">
                        Certificate 3
                    </h1>
                    <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" />
                </div>
            </div>
            <div className='pt-2'>
                <div>
                    <h1 className="title mb-1">
                        Certificate 4
                    </h1>
                    <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" />
                </div>
            </div>
        </div>
    )
}

export function ProfessionalCertificate() {
    const [stepScale, setStepScale] = useState(1.0)
    return (
        <div>
            <div className='py-2'>
                <div className='shadow rounded p-2 '>
                    <div>
                        <img
                            width={200}
                            src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000"
                            style={{ transform: `scale(${stepScale})` }}

                        />
                    </div>

                    <div>
                        <div className='flex justify-between justify-items-center w-full'>
                            <button className='p-[0px]' onClick={() => setStepScale(stepScale + .1)}>
                                <ZoomInOutlined color='black' style={{ fontSize: 'unset' }} />
                            </button>
                            <h1 className="title mt-2">Certificate</h1>
                            <button className='p-[0px]'>
                                <ZoomOutOutlined color='black' style={{ fontSize: 'unset' }} />
                            </button>
                        </div>

                    </div>
                </div>

                <section className='py-2 mt-5'>
                    <div>
                        <h1 className="title">Add New Certificate</h1>
                    </div>

                    <div className='shadow rounded p-2'>
                        <Dragger style={{ border: 'none' }}>
                            <p className="mobile-content">Click or drag file to this area to upload</p>
                            <div className='flex justify-center mt-1'>
                                <p className='btn-certificate title flex w-[50px] p-1 rounded text-white flex justify-center items-center' >
                                    <CloudUploadOutlined className=' text-white mr-1' style={{ fontSize: 'initial' }} /> upload
                                </p>
                            </div>
                        </Dragger>
                    </div>

                </section>

                <section className='pt-5'>
                    <div>
                        <h className="title">Re-Upload Certificate</h>
                        <p className="mobile-content">Admin ask you to upload your Certificate again</p>
                    </div>
                    <div className='mt-4 flex'>
                        <div className='mr-2'>
                            <div className='reupload-certificate'>
                                <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" style={{ opacity: '.5' }} />
                            </div>
                            <div className='reupload-certificate-inner-box text-white px-2 '>
                                <Dragger style={{ border: 'none' }}>
                                    <p className="mobile-content text-white">Drag and drop or click on the uploadd button to add new certificate</p>
                                    <div className='flex justify-center mt-1'>
                                        <p className='btn-certificate title flex w-[50px] p-1 rounded text-white flex justify-center items-center' >
                                            <CloudUploadOutlined className=' text-white mr-1' style={{ fontSize: 'initial' }} /> upload
                                        </p>
                                    </div>
                                </Dragger>
                            </div>
                        </div>
                        <div className=''>
                            <div className='reupload-certificate'>
                                <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="" style={{ opacity: '.5' }} />
                            </div>
                            <div className='reupload-certificate-inner-box text-white px-2 '>
                                <Dragger style={{ border: 'none' }}>
                                    <p className="mobile-content text-white">Drag and drop or click on the uploadd button to add new certificate</p>
                                    <div className='flex justify-center mt-1'>
                                        <p className='btn-certificate title flex w-[50px] p-1 rounded text-white flex justify-center items-center' >
                                            <CloudUploadOutlined className=' text-white mr-1' style={{ fontSize: 'initial' }} /> upload
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
