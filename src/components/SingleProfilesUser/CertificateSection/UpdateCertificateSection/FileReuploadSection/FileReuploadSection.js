import React from 'react';
import { CloudUploadOutlined } from '@material-ui/icons';
import { Upload } from 'antd';

const FileReuploadSection = () => {
    const { Dragger } = Upload;
    return (
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
    );
};

export default FileReuploadSection;