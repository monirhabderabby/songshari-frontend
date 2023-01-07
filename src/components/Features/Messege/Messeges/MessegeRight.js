import React from "react";

export const MessegeRight = () => {
    return (
        <div className="flex w-full justify-end gap-x-[20px] my-[51px]">
            <div className="flex flex-col flex-wrap-reverse">
                <div className="content bg-[#A32BCA] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] px-[20px] py-[9px] w-3/5">
                    <p className="text-white text-[16px] font-normal">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptat
                    </p>
                </div>
                <p className="text-[#969696] text-[12px] text-right font-normal mt-[13px]">4.30 AM</p>
            </div>
            <img
                className="h-[58px] w-[58px] rounded-full"
                src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                alt="profile"
            />
        </div>
    );
};
