import React from "react";
import "../../../assets/css/PeopleJoinedAlready.css";
import icon1 from "../../../assets/images/icons/Messages sent-per-day (1).png";
import icon2 from "../../../assets/images/icons/Messages sent-per-day (2).png";
import icon3 from "../../../assets/images/icons/Messages sent-per-day (3).png";
import icon4 from "../../../assets/images/icons/Messages sent-per-day (4).png";
import { useGetStatisticsQuery } from "../../../Redux/features/userInfo/userApi";

const PeopleJoinedAlready = () => {
    const {data, isLoading, error} = useGetStatisticsQuery();
    console.log(data, isLoading, error, "Statisdcs");
    return (
        <section>
            <div className="People-Joined-Alreadyon">
                <div className="custom-container">
                    <h1 className="text-white text-[50px] text-center">{data?.totalRegistration}</h1>
                    <h2 className="text-[#f36] text-[24px] text-center">People joined already!</h2>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 pt-[20px] mx-auto">
                            <div
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000"
                                data-aos="fade-up"
                                className="flex flex-wrap -m-4 text-center"
                            >
                                <div className="p-4 sm:w-1/4 w-1/2 text-center">
                                    <img className=" inline-block" src={icon1} alt="Not Available" />
                                    <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">{data?.totalMessageSentToday}</h2>
                                    <p className="leading-relaxed text-[20px] text-white">Messages sent per day</p>
                                </div>
                                <div
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1200"
                                    data-aos="fade-up"
                                    className="p-4 sm:w-1/4 w-1/2 text-center"
                                >
                                    <img className=" inline-block" src={icon2} alt="Not Available" />
                                    <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">{data?.totalRegistration}</h2>
                                    <p className="leading-relaxed text-[20px] text-white">Registered users worldwide</p>
                                </div>
                                <div
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1400"
                                    data-aos="fade-up"
                                    className="p-4 sm:w-1/4 w-1/2 text-center"
                                >
                                    <img className=" inline-block" src={icon3} alt="Not Available" />
                                    <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">{data?.totalActiveUserThisMonth}</h2>
                                    <p className="leading-relaxed text-[20px] text-white">Monthly active users</p>
                                </div>
                                <div
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1600"
                                    data-aos="fade-up"
                                    className="p-4 sm:w-1/4 w-1/2 text-center"
                                >
                                    <img className=" inline-block" src={icon4} alt="Not Available" />
                                    <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">{data?.totalRegistrationToday}</h2>
                                    <p className="leading-relaxed text-[20px] text-white">New daily sign ups</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default PeopleJoinedAlready;
