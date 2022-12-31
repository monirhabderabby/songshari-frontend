import React from 'react';
/* reacr icon */
import { GrUploadOption } from "react-icons/gr";
/* reupload section background img */
import reUpload from '../../../../../assets/images/user profile/certificate2.png';
import reUpload1 from '../../../../../assets/images/user profile/certificate3.png';

const FileReuploadSection = () => {
    return (
        <div className='font-sans mb-[145px]'>
            <h1 className='font-semibold text-[32px] text-[#333333]'>Re-Upload Certificate</h1>
            <p className='mt-4 mb-8 font-normal text-base text-[#000000]'>Admin Ask You to upload your Certificate again</p>

            <label className="cursor-pointer">
                <div className=' lg:flex items-center justify-center gap-10 grid grid-cols-1'>
                    <div className='relative overflow-hidden h-[380px] w-[411px] rounded-2xl mx-auto lg:mx-0'>
                        <div className='h-full w-full absolute -z-10 bg-[#000000] bg-opacity-50'>
                        </div>
                        <img className='absolute -z-20 w-full h-full' src={reUpload} alt="background" />
                        <div className='z-30 w-full h-full flex flex-col items-center justify-center'>
                            <p className='font-medium text-base text-[#FFFFFF] text-center mb-5'>Drag and drop or clilck on the upload <br /> button to add new certificate</p>
                            <div className='flex items-center justify-center font-medium text-base text-[#FFFFFF] gap-[13px] bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] w-[144px] h-[47px]'>
                                <GrUploadOption className='text-xl text-white' />
                                <p>Re-Upload</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative overflow-hidden h-[380px] w-[411px] rounded-2xl mx-auto lg:mx-0'>
                        <div className='h-full w-full absolute -z-10 bg-[#000000] bg-opacity-50'>
                        </div>
                        <img className='absolute -z-20 w-full h-full' src={reUpload1} alt="background" />
                        <div className='z-30 w-full h-full flex flex-col items-center justify-center'>
                            <p className='font-medium text-base text-[#FFFFFF] text-center mb-5'>Drag and drop or clilck on the upload <br /> button to add new certificate</p>
                            <div className='flex items-center justify-center font-medium text-base text-[#FFFFFF] gap-[13px] bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] w-[144px] h-[47px]'>
                                <GrUploadOption className='text-xl text-white' />
                                <p>Re-Upload</p>
                            </div>
                        </div>
                    </div>
                </div>
                <input
                    id="reUploadPhoto"
                    type="file"
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default FileReuploadSection;