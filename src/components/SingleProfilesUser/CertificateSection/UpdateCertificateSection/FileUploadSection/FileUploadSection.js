import React from 'react';
/* third party packages */
import { CloudUploadOutlined } from '@material-ui/icons';
import { Upload } from 'antd';

const FileUploadSection = () => {
    const { Dragger } = Upload;
    return (
        <section className='py-2 mt-[70px] mb-[70px]'>
            <div className='mb-4'>
                <h1 className="font-bold text-xl text-[#333333]">Add New Certificate</h1>
            </div>

            <div style={{ boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, 0.12)' }} className='shadow-certificate rounded-[16px] p-10 bg-[#FFFFFF]'>
                <Dragger className='border-none bg-none'>
                    <p className='font-bold text-base mb-4'>Drag and drop or click on the upload button to add new certificate</p>
                    <div className='flex justify-center mt-1 px-4'>
                        <p className='btn-certificate p-1 px-2 rounded text-white font-bold flex justify-center items-center' >
                            <CloudUploadOutlined className=' text-white mr-1' /> Upload
                        </p>
                    </div>
                </Dragger>
            </div>
        </section>
    );
};

export default FileUploadSection;