import React from "react";

export const AllPartnersCards = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className="mt-[18px] grid grid-cols-2 gap-y-[20px] w-full">
            {arr.map(p => {
                return (
                    <div key={p} className="h-[187px] w-[165px] bg-white rounded-[15px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] mx-auto">
                        <div
                            className="h-[110px] bg-center bg-cover rounded-tr-[15px] rounded-tl-[15px]"
                            style={{
                                backgroundImage:
                                    "url('https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/257249068_3124859467775226_6783626932182437554_n.jpg?stp=dst-jpg_s417x417&_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEWQa4WtatE5evB3WjuLULsdJQwt0vLeX50lDC3S8t5fgZrNP9z4rlzyKwFW5iDh7TSgDZYnaC8UHQBYqDwDvvz&_nc_ohc=Ljat-ImhLy4AX9m2-F2&_nc_ht=scontent.frjh5-1.fna&oh=00_AfAzIcLuU4R9upR2QxvN4V-rpxQe4BaLVQFpRX2fsNbWyw&oe=63C04299')",
                            }}
                        ></div>
                        <div className="content h-[calc(187px-110px)] w-full px-[14px]">
                            <div className="flex items-center gap-x-[12px]">
                                <p className="leading-[30px] text-[#333333] text-[12px] font-bold font-Inter">Erma Porter</p>
                                <p className="text-[12px] leading-[30px] font-bold font-Inter text-[#E41272]">26</p>
                            </div>
                            <p className="font-normal text-[10px] font-Inter  text-[#333333] h-[20px] flex items-center">Student</p>
                            <p className="font-medium text-[10px] font-Inter  text-[#333333] h-[20px] flex items-center">Savar, Dhaka</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
