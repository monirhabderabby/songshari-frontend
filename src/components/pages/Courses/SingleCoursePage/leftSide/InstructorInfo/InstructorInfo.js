import React from "react";

export const InstructorInfo = ({ course }) => {
    const { instructor } = course || {};

    return (
        <div className="my-[30px]">
            {instructor?.map(item => {
                return (
                    <div className="w-full border-[1px] border-[#d0deef] rounded-[6px] h-auto my-[20px]" key={item?._id}>
                        <div className="h-auto py-[5px] lg:py-0 lg:h-[100px] border-b-[1px] border-[#d0deef] flex items-center px-[15px] bg-gray-100 gap-x-[15px]">
                            <img src={item?.image} alt="profile" className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] rounded-full" />
                            <div className="flex flex-col items-start gap-y-[5px]">
                                <h1 className="text-[22px] lg:text-[28px] font-Inter font-semibold">{item?.name}</h1>
                                <p className="text-[12px] lg:text-[16px] font-Inter font-normal">{item?.designation}</p>
                            </div>
                        </div>
                        <div className="h-auto">
                            <p className="p-[22px]">{item?.bio}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
