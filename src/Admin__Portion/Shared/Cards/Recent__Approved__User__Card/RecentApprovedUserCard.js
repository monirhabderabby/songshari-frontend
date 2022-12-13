// configuration, ex: react-router
import React from "react";

export const RecentApprovedUserCard = () => {
    return (
        <div>
            <div className="w-[385px] h-[222px] bg-[#51BD7C] rounded-[8px] px-[35px] py-[31px]">
                <div className="flex gap-x-[24px]">
                    <img
                        className="w-[85px] h-[85px] rounded-full"
                        src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/310814492_3383940818533755_1197676094327108122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGA9lfn6WujkVz6fYFMVoFwjDMuNZrRHNWMMy41mtEc1bicZO-AvSF9FXCNTfRYimndHxJlLdYlNYLMqh4qcFXK&_nc_ohc=pnwXwFDs9p4AX84f9_g&tn=5Af7VWSQfe-WPdJS&_nc_ht=scontent.frjh5-1.fna&oh=00_AfCnC0OauOwJbL5QBOgOb6NmrEn6TxqsCJ4KvHwiuqxG9A&oe=639B55DC"
                        alt="profile"
                    />
                    <div className="flex flex-col gap-y-[18px]">
                        <h1 className="text-[#FFFFFF] text-[24px] leading-[29px] font-medium">Jhon William</h1>
                        <p className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium">Age: 26</p>
                        <button className="w-[135px] h-[37px] mt-[20px] flex justify-center items-center bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[4px]">
                            View Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
