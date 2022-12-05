import { Fragment, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import profileS1 from "../../../../assets/images/banner/profileS1.png";
import profileS2 from "../../../../assets/images/banner/profileS2.png";
import profileS3 from "../../../../assets/images/banner/profileS3.png";
import img1 from "../../../../assets/images/HomeImage/bottom-img.png";
import img2 from "../../../../assets/images/HomeImage/bottom-img1.png";
import bgImg from "../../../../assets/images/HomeImage/Rectangle .png";

const BannerProfile = () => {
    const [swipematch, setSwipeMatch] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/withoutLogin/recentMembers")
            .then(res => res.json())
            .then(data => setSwipeMatch(data));
    }, [setSwipeMatch]);

    if (swipematch) {
        console.log(swipematch);
    }

    return (
        <Fragment>
            <div>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {swipematch.map(data => (
                        <SwiperSlide key={data._id}>
                            <div className="w-[280px] h-[400px] relative overflow-hidden">
                                <img
                                    src={data?.profilePhoto}
                                    className="h-[400px] w-[280px] rounded-tr-[12px] rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px] object-cover"
                                    alt="profile"
                                />
                                <div
                                    style={{
                                        background: "linear-gradient(0deg, #1B070E 52.26%, rgba(0, 0, 0, 0) 100.26%, rgba(0, 0, 0, 0) 100.26%)",
                                    }}
                                    className="h-[140px] w-full absolute top-[260px] rounded-bl-[12px] rounded-br-[12px] px-[22px] py-[10px]"
                                >
                                    <div className="flex items-center gap-x-[12px]">
                                        <h1 className="font-Inter text-[18px] font-bold leading-[22px] text-[#FFFFFF]">Crystina</h1>
                                        <p className="text-[18px] font-normal leading-[22px] font-Inter text-[#FFFFFF]">20</p>
                                    </div>
                                    <div className="flex flex-col mt-[4px]">
                                        <p className="text-[14px] text-[#FFFFFF] font-normal leading-[17px] font-Inter">New Work</p>
                                        <p className="text-[14px] text-[#FFFFFF] font-normal leading-[17px] font-Inter">Doctor</p>
                                    </div>
                                    <div className="w-full flex justify-center items-center relative -bottom-4">
                                        <div
                                            className="w-[29.21px] mr-[20px] rounded-[50px] flex justify-center items-center h-[30.38px]"
                                            style={{
                                                background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                            }}
                                        >
                                            <img src={profileS1} alt="Not Available" />
                                        </div>
                                        <div
                                            className="w-[36.22px] rounded-[40px] flex justify-center items-center h-[37.66px]"
                                            style={{
                                                background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                            }}
                                        >
                                            <img className="w-[20px]" src={profileS2} alt="Not Available" />
                                        </div>
                                        <div
                                            className="w-[29.21px] ml-[20px] rounded-[50px] flex justify-center items-center h-[30.38px]"
                                            style={{
                                                background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                            }}
                                        >
                                            <img className="w-[15px]" src={profileS3} alt="Not Available" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-[#E41272] to-[#701FD8] rounded-b-[40px] h-[86px]">
                                    <div className="w-full h-full bg-white bg-opacity-50 backdrop-blur-[28px] flex items-center justify-center rounded-b-[40px]">
                                        <div className="w-[175px] relative">
                                            <img className="w-full" src={bgImg} alt="card-bottom-img" />
                                            <div className="absolute -left-3 -top-7">
                                                <img src={img1} alt="card-bottom-img1" />
                                            </div>
                                            <div className="absolute -right-4 -top-2 w-[60px] h-[60px] rounded-full overflow-hidden bg-[#F2F4A7] flex items-center justify-center">
                                                <img src={img2} alt="card-bottom-img2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    );
};

export default BannerProfile;
