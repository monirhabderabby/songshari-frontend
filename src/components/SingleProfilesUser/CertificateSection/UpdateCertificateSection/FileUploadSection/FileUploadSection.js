import React from 'react';
/* react icon */
import { IoMdCloudUpload } from "react-icons/io";

const FileUploadSection = () => {
    return (
        <section className='py-2 mt-[145px] mb-[145px]'>
            <div className='mb-4'>
                <h1 className="font-bold text-xl text-[#333333]">Add New Certificate</h1>
            </div>

            <label className="cursor-pointer">
                <div style={{ boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, 0.12)' }} className='shadow-certificate rounded-[16px] p-10 bg-[#FFFFFF] h-[246px]'>
                    <p className='font-sans font-medium text-center text-base text-[#000000] pb-4 mt-[50px]'>Drag and drop or clilck on the upload button to add new certificate</p>
                    <div className="flex items-center justify-center mx-auto w-[133px] h-[47px] bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px]">
                        <IoMdCloudUpload className="text-[#FFFFFF] text-2xl mr-4" />
                        <p className="font-medium text-xs text-[#FFFFFF]">
                            Upload
                        </p>
                    </div>
                    <input
                        id="uploadPhoto"
                        type="file"
                        className="hidden"
                    />
                </div>
            </label>
        </section>
    );
};

export default FileUploadSection;