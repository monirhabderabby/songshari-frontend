import React from "react";
import love from "../../../assets/images/icons/coolicon.svg";
import banner from "../../../assets/images/icons/s-p-img1.jpg";
import profile from "../../../assets/images/profile/up1.png";

export const DynamicActivityPage = () => {
    const post = [
        { number: 1, img: null },
        { number: 2, img: banner },
        { number: 1, img: null },
    ];
    return (
        <div className="grid grid-cols-1 gap-y-[30px]">
            {post.map(p => {
                return (
                    <div className="max-w-[457px] mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] p-[30px]">
                        <div className="flex items-center">
                            <img className="w-[40px] h-[40px] rounded-full mr-[19px]" src={profile} alt="profile" />
                            <p className="font-semibold font-fira text-[18px] text-[#333333] mr-[14px]">Albert Don</p>
                            <div className="w-[20px] h-[20px] bg-[#FCE9F3] rounded-full mr-[14px]"></div>
                            <div>
                                <span className="text-[14px] font-normal text-[#333333]">
                                    @albertdon . <span>19h</span>
                                </span>
                            </div>
                        </div>
                        <div className="my-[23px] ml-[60px] w-[337px]">
                            <p className="text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta felis.</p>

                            {p.img && <img className="mt-[23px]" src={p.img} alt="Not Available" />}
                        </div>
                        <hr />
                        <div className="h-[61px] flex items-end">
                            <div className="flex items-center">
                                <img src={love} alt="likeButton" className="mr-[22px]" />
                                <button className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-[10px] text-[13px]">
                                    Comment
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
