import { Fragment, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import profileS1 from "../../../../assets/images/banner/profileS1.png";
import profileS2 from "../../../../assets/images/banner/profileS2.png";
import profileS3 from "../../../../assets/images/banner/profileS3.png";
import bgImg from "../../../../assets/images/HomeImage/Rectangle .png";
import img1 from "../../../../assets/images/HomeImage/bottom-img.png";
import img2 from "../../../../assets/images/HomeImage/bottom-img1.png";

const BannerProfile = () => {
    const [swipematch, setSwipeMatch] = useState([]);
    useEffect(() => {
        fetch(" https://shanshari-temp.vercel.app/withoutLogin/recentMembers")
            .then(res => res.json())
            .then(data => setSwipeMatch(data));
    }, []);

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
                            <div className="h-[400px] w-[280px] relative mx-auto rounded-[40px]" style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }}>
                                <img className="h-[314px] w-[280px] rounded-t-[40px] " src={data?.profilePhoto} alt="Not Available" />
                                <div className="bottom-[100px] left-[25%] flex justify-around items-center absolute">
                                    <div
                                        className="w-[29px] mr-[20px] rounded-[50px] flex justify-center items-center h-[30px]"
                                        style={{
                                            background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                        }}
                                    >
                                        <img src={profileS1} alt="Not Available" />
                                    </div>
                                    <div
                                        className="w-[40px] rounded-[50px] flex justify-center items-center h-[40px]"
                                        style={{
                                            background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                        }}
                                    >
                                        <img className="w-[20px]" src={profileS2} alt="Not Available" />
                                    </div>
                                    <div
                                        className="w-[29px] ml-[20px] rounded-[50px] flex justify-center items-center h-[30px]"
                                        style={{
                                            background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                        }}
                                    >
                                        <img className="w-[15px]" src={profileS3} alt="Not Available" />
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
