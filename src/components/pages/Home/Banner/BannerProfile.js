import { Fragment, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import profileS1 from "../../../../assets/images/banner/profileS1.png";
import profileS2 from "../../../../assets/images/banner/profileS2.png";
import profileS3 from "../../../../assets/images/banner/profileS3.png";

const BannerProfile = () => {
    const [swipematch, setSwipeMatch] = useState([]);
    useEffect(() => {
        fetch(" https://shanshari-temp.vercel.app/withoutLogin/recentMembers")
            .then(res => res.json())
            .then(data => setSwipeMatch(data));
    }, []);
    console.log(swipematch);
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
                                <img className="h-[400px] w-[280px] rounded-[40px] " src={data?.profilePhoto} alt="" />
                                <div className="bottom-[20px] left-[25%] flex justify-around items-center absolute">
                                    <div
                                        className="w-[29px] mr-[20px] rounded-[50px] flex justify-center items-center h-[30px]"
                                        style={{
                                            background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                        }}
                                    >
                                        <img className="" src={profileS1} alt="" />
                                    </div>
                                    <div
                                        className="w-[40px] rounded-[50px] flex justify-center items-center h-[40px]"
                                        style={{
                                            background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                        }}
                                    >
                                        <img className="w-[20px]" src={profileS2} alt="" />
                                    </div>
                                    <div
                                        className="w-[29px] ml-[20px] rounded-[50px] flex justify-center items-center h-[30px]"
                                        style={{
                                            background: "linear-gradient(180deg, #D91448 0%, #603B95 100%)",
                                        }}
                                    >
                                        <img className="w-[15px]" src={profileS3} alt="" />
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
