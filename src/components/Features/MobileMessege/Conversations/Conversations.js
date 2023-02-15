// Configuration
import React from "react";

// Third party packages
import Divider from "@mui/material/Divider";
import moment from "moment";

// Components
import { MobileBackButton } from "../../../shared/Components/MobileBackButton";

export const Conversations = () => {
    const demo = [
        {
            id: 1,
            img: "https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/285722642_3283246311936540_7816692518925760812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEaTv9acgXhHvkaa3jnO1reUx5aig2fxHZTHlqKDZ_Edm2XxW825x9K_KYJBPJjT4yZFZxj7jYl3GE4-6p7aNzt&_nc_ohc=YBLUpyw4lDQAX_So9qF&tn=5Af7VWSQfe-WPdJS&_nc_ht=scontent.frjh5-1.fna&oh=00_AfB4hOu9qNqWkt2UlYbiieALiH3-xGg_V39kCboWILMUXA&oe=63F0034D",
            name: "Monir Hossain",
            message: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            timeStamp: 1639711440000,
        },
        {
            id: 2,
            img: "https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/285722642_3283246311936540_7816692518925760812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEaTv9acgXhHvkaa3jnO1reUx5aig2fxHZTHlqKDZ_Edm2XxW825x9K_KYJBPJjT4yZFZxj7jYl3GE4-6p7aNzt&_nc_ohc=YBLUpyw4lDQAX_So9qF&tn=5Af7VWSQfe-WPdJS&_nc_ht=scontent.frjh5-1.fna&oh=00_AfB4hOu9qNqWkt2UlYbiieALiH3-xGg_V39kCboWILMUXA&oe=63F0034D",
            name: "Monir Hossain",
            message: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
            timeStamp: 1639711440000,
        },
        {
            id: 3,
            img: "https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/285722642_3283246311936540_7816692518925760812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEaTv9acgXhHvkaa3jnO1reUx5aig2fxHZTHlqKDZ_Edm2XxW825x9K_KYJBPJjT4yZFZxj7jYl3GE4-6p7aNzt&_nc_ohc=YBLUpyw4lDQAX_So9qF&tn=5Af7VWSQfe-WPdJS&_nc_ht=scontent.frjh5-1.fna&oh=00_AfB4hOu9qNqWkt2UlYbiieALiH3-xGg_V39kCboWILMUXA&oe=63F0034D",
            name: "Monir Hossain",
            message: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
            timeStamp: 1639711440000,
        },
        {
            id: 1,
            img: "https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/285722642_3283246311936540_7816692518925760812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEaTv9acgXhHvkaa3jnO1reUx5aig2fxHZTHlqKDZ_Edm2XxW825x9K_KYJBPJjT4yZFZxj7jYl3GE4-6p7aNzt&_nc_ohc=YBLUpyw4lDQAX_So9qF&tn=5Af7VWSQfe-WPdJS&_nc_ht=scontent.frjh5-1.fna&oh=00_AfB4hOu9qNqWkt2UlYbiieALiH3-xGg_V39kCboWILMUXA&oe=63F0034D",
            name: "Monir Hossain",
            message: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
            timeStamp: 1639711440000,
        },
    ];
    return (
        <div>
            <MobileBackButton name="Conversation" />
            <div className="max-w-[1024px] mx-auto px-6">
                {demo.map(item => {
                    return (
                        <>
                            <Divider light />
                            <div className="w-full h-[88px] flex gap-x-[34px] mt-[10px]">
                                <img
                                    className="h-[58px] w-[58px] rounded-full"
                                    src="https://i.postimg.cc/j2nh3WBh/310814492-3383940818533755-1197676094327108122-n.jpg"
                                    alt="profile"
                                />
                                <div className="flex-1 h-full">
                                    <div className="w-full flex justify-between">
                                        <p className="text-[16px] text-[#000000] font-medium">{item.name}</p>
                                        <p className="text-[#898989] text-[14px] font-normal">{moment(item.timeStamp).startOf("hour").fromNow()}</p>
                                    </div>
                                    <div className="content">
                                        <p className="text-[14px] text-[#000000] font-normal">{item.message}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};
