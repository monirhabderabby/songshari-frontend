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
                            <div className=" h-[400px] w-[280px] relative mx-auto">
                                <img className=" h-[400px] w-[280px] rounded-[40px] " src={data?.profilePhoto} alt="" />
                                <div className="bottom-[20px] left-[25%] flex justify-around items-center absolute">
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    );
};

export default BannerProfile;
