import React from "react";
import "../../../App.css";
import profile from "../../../assets/images/profile/up1.png";

export const DynamicPhotosContainer = () => {
    const p = [1, 2, 3, 4, 5, 6];
    return (
        <div className="flex justify-center lg:block py-3">
            <div>
                <div className=" lg:w-[360px] h-[333px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] mt-[30px] p-[26px]">
                    <>
                        <p className="font-fira font-semibold text-[24px] leading-[31px] ml-[61px] text-[#333333]">21 Upload Photos</p>
                        <div className="grid grid-cols-3 mt-[27px] gap-[20px]">
                            {p.map(card => {
                                return <img key={card} src={profile} alt="profile" />;
                            })}
                        </div>
                    </>

                </div>
                <div className="w-[360px] flex justify-center mt-[32px]">
                    <button className="w-[215px] h-[38px] pink_Gradient shadow-[0px_5px_20px_rgba(139,122,132,0.5)] rounded-[50px] text-white">
                        View All Photos
                    </button>
                </div>
            </div>

        </div>
    );
};
