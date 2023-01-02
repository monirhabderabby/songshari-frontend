import React from 'react';
/* reupload section img */
import icon from '../../../../../assets/images/user profile/reUpload.png';
import reUpload from '../../../../../assets/images/user profile/certificate2.png';
import reUpload1 from '../../../../../assets/images/user profile/certificate3.png';

const FileReuploadSection = () => {
    return (
        <div className='font-sans mb-[145px]'>
            <h1 className='font-semibold text-[32px] text-[#333333]'>Re-Upload Certificate</h1>
            <p className='mt-4 mb-8 font-normal text-base text-[#000000]'>Admin Ask You to upload your Certificate again</p>
            {/* reupload section */}
            <div className=' lg:flex items-center justify-center gap-[13px] grid grid-cols-1'>
                <label className="cursor-pointer z-20 w-full">
                    <div className='relative overflow-hidden h-[380px] w-full  rounded-2xl mx-auto lg:mx-0'>
                        <img className='absolute z-[-1] w-full h-full' src={reUpload} alt="background" />
                        <div className='z-30 w-full h-full flex flex-col items-center justify-center bg-[#000000] bg-opacity-50'>
                            <p className='font-medium text-base text-[#FFFFFF] text-center mb-5'>Drag and drop or clilck on the upload <br /> button to add new certificate</p>
                            <div className='flex items-center justify-center font-medium text-base text-[#FFFFFF] gap-[13px] bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] w-[144px] h-[47px]'>
                                <img className='h-5 w-5' src={icon} alt="reUpload icon" />
                                <p>Re-Upload</p>
                            </div>
                        </div>
                    </div>
                    <input id="reUploadPhoto" type="file" className="hidden" />
                </label>

                <label className="cursor-pointer w-full z-20">
                    <div className='relative overflow-hidden h-[380px] w-full rounded-2xl mx-auto lg:mx-0'>
                        <img className='absolute z-[-1] w-full h-full' src={reUpload1} alt="background" />
                        <div className='z-30 w-full h-full flex flex-col items-center justify-center bg-[#000000] bg-opacity-50'>
                            <p className='font-medium text-base text-[#FFFFFF] text-center mb-5'>Drag and drop or clilck on the upload <br /> button to add new certificate</p>
                            <div className='flex items-center justify-center font-medium text-base text-[#FFFFFF] gap-[13px] bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] w-[144px] h-[47px]'>
                                <img className='h-5 w-5' src={icon} alt="reUpload icon" />
                                <p>Re-Upload</p>
                            </div>
                        </div>
                    </div>
                    <input id="reUploadPhoto" type="file" className="hidden" />
                </label>
            </div>
        </div>
    );
};

export default FileReuploadSection;