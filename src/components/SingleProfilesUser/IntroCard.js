import React from "react";
import introIcon from "../../assets/images/icons/IntroIcon.png";

export const IntroCard = () => {
    return (
        <div className="mt-[24px] lg:w-full h-[356px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] p-[24px]">
            <div className="flex items-center gap-x-[9px]">
                <img src={introIcon} alt="" />
                <p className="text-[#000000] text-[24px] leading-[20px] font-semibold font-fira">Intro</p>
            </div>
            {/* content will be  here */}
            <p className="my-[12px] line-clamp-10 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam illum tenetur molestias, praesentium at aliquid nostrum facere ad
                doloribus a officiis soluta voluptatem ipsa saepe architecto facilis minus aspernatur quas officia rem minima eius quis, magnam
                pariatur. Fuga sit error aspernatur, rerum illo delectus, laboriosam suscipit nemo odit ratione maxime saepe tenetur ipsum?
                Consectetur reprehenderit aut nihil, ex libero rerum nostrum fugit maxime omnis eligendi, modi in quasi. Voluptatum ducimus laboriosam
                veniam quaerat tempore beatae ipsa vel officiis! Itaque impedit tempore consequatur labore perspiciatis esse excepturi sit laboriosam,
                error, consequuntur nihil totam consectetur dicta doloremque dolore officiis. Ipsum, soluta harum.
            </p>
        </div>
    );
};
