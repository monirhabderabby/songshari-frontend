import React from "react";
import badgesIcon from "../../assets/images/icons/badges.png";
import verificationBadge from "../../assets/images/icons/verification.png";

export const Badges = () => {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div className="mt-[24px] lg:w-[360px] h-[125px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[20px]">
            <div>
                <div className="flex items-center gap-x-[9px]">
                    <img src={badgesIcon} alt="badgesIcon" />
                    <p className="text-[#000000] text-[24px] leading-[20px] font-semibold font-fira">Badges</p>
                </div>
                <div className="mt-[30px]">
                    <div className="flex items-center gap-x-[16px]">
                        {arr.map(a => {
                            return <img className="w-[38px] h-[38px]" src={verificationBadge} alt="badge" />;
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
};
