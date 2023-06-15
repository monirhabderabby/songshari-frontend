import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import LatestRegisteredMemberCSS from "../../../assets/css/latestRegisteredMember.module.css";
import emptyProfile from "../../../assets/images/emptyProfile.png";
import shape from "../../../assets/images/shape.a8708fbc0aa77b10a1cf.png";
import { ageCalculator } from "../../../assets/utilities/AgeCalculation/ageCalculator";

const LatestRegisteredMember = () => {
    const { data, isLoading, error } = useGetRecentMembersQuery({
        role: "member",
        searchTerm: "",
    });

    const genderCharacterDefine = data => {
        if (data?.includes("man")) {
            return "M";
        } else {
            return "F";
        }
    };

    return (
        <>
            <section className={`${LatestRegisteredMemberCSS.latestRegisteredSection} font-Poppins`}>
                <img className={LatestRegisteredMemberCSS.shape} src={shape} alt="Not Available" />
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex justify-between items-center w-full px-0">
                        <div className="w-[30%] ">
                            <div className={LatestRegisteredMemberCSS.content}>
                                <div className={LatestRegisteredMemberCSS.sectionHeader}>
                                    <h6 className="text-[#ff317b] text-[24px] mb-[5px] font-bold">Latest Registered</h6>
                                    <h2 className="text-[50px] text-[#ff317b]  font-semibold mb-[11px]">Members</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-[62%] overflow-hidden">
                            <Swiper
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                    },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {!isLoading &&
                                    !error &&
                                    data?.data?.members?.map(data => (
                                        <SwiperSlide key={data._id}>
                                            <div className="-z-20">
                                                <div className="text-center">
                                                    <div className="mb-[30px] relative">
                                                        <img
                                                            style={{
                                                                width: "80px",
                                                                height: "80px",
                                                                borderRadius: "50%",
                                                            }}
                                                            src={data.profilePhoto || emptyProfile}
                                                            className="border-[5px] mx-auto border-[#fff] inline-block "
                                                            alt="Not Available"
                                                        />
                                                    </div>
                                                    <div className="inner-content flex justify-center gap-x-[4px]">
                                                        <h4 className="text-[#fff] text-[16px] uppercase font-bold">{data.firstName}</h4>
                                                        <span className="uppercase text-[14px] bg-secondary text-white h-[20px] w-[20px] rounded-full font-semibold flex justify-center items-center">
                                                            {ageCalculator(data?.dateOfBirth)}
                                                        </span>
                                                        <span className="uppercase text-[14px] text-white bg-primary rounded-full h-[20px] w-[20px] flex justify-center items-center">
                                                            {genderCharacterDefine(data?.gender)}
                                                        </span>
                                                    </div>
                                                    <div className="inner-content">
                                                        <h4 className="text-[#fffff9]/70 text-[12px]">{data?.designation || "Not Added"}</h4>
                                                    </div>
                                                    <div className="inner-content">
                                                        <h4 className="text-[#fffff9]/70 text-[12px]">{data?.citizenShip[0] || "Not Added"}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestRegisteredMember;
