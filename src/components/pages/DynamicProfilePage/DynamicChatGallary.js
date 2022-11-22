import React from "react";
import Carousel from "react-grid-carousel";
import LeftArrowButton from "../../SingleProfilesUser/chatboard/LeftArrowButton";
import RightArrowButton from "../../SingleProfilesUser/chatboard/RightArrowButton";

const DynamicChatGallary = () => {
    const chats = [1, 2, 3, 4, 5, 6];
    return (
        <div className="my-6 px-2 md:px-0 w-72 md:w-full">
            <div className="">
                <h1 className="text-2xl font-semibold pb-6">You may like</h1>
            </div>
            <div className="w-72">
                <Carousel
                    cols={2}
                    rows={2}
                    gap={6}
                    loop={true}
                    arrowRight={<RightArrowButton type="right" />}
                    arrowLeft={<LeftArrowButton type="left" />}
                >
                    {chats.map((city, i) => (
                        <Carousel.Item key={i}>
                            <img className="rounded-lg" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default DynamicChatGallary;
