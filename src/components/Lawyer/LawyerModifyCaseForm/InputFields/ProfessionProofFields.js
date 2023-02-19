import React from 'react';

export const ProfessionProofFields = ({ register, name }) => {
    return (
        <div className='mb-[39px]'>
            <label htmlFor="professionProof">Profession Proof Certificate(ID Card/Employment Certificate)</label>
            <div className='flex items-center justify-around gap-[1px] h-[174px] border border-[#98999C] bg-[#F5F7FA]'>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="professionProof" className="flex flex-col items-center justify-center w-full cursor-pointer">
                        <div className="flex flex-col text-center items-center justify-center pt-5 pb-6">
                            <div className='font-poppins font-normal text-[13px] text-[#707276]'>
                                <p>Drop files here to add <br /> attachments </p>
                                <p className='pt-[18px]'>or <span className='text-[#E41272]'>Browse</span></p>
                            </div>
                        </div>
                        <input id="professionProof" {...register(name)} type="file" className="hidden" />
                    </label>
                </div>

                <div className='flex items-center'>
                    <div className="w-[1px] bg-[#E41272] h-[124px]"></div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <label htmlFor="professionProof" className="flex flex-col items-center justify-center w-full bg-[#F5F7FA] cursor-pointer">
                        <div className="flex flex-col text-center items-center justify-center pt-5 pb-6 font-sans font-normal text-xs text-[#707276]">
                            <p className="mb-2 text-sm">Embed <br /> from other sites</p>
                        </div>
                        <input id="professionProof" {...register(name)} type="file" className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    );
};