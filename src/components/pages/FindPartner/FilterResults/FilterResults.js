import React from "react";
import "../../../../assets/css/topProfile.css";
import bg from "../../../../assets/images/TopProfile/Vector-1.9404edcdbad9fde28712.png";
import { useGetRecentUsersQuery } from "../../../../Redux/features/AllRecentData/recentApi";

export const FilterResults = () => {
    const { data, isLoading } = useGetRecentUsersQuery();

    //     .Suggested-info__cardUp {
    //         background-image: url("../images/TopProfile/Vector-1.9404edcdbad9fde28712.png");
    //         background-position: top;
    //         background-repeat: no-repeat;
    //         background-size: cover;
    //         position: absolute;
    //         top: 100%;
    //         left: 0;
    //         width: 100%;
    //         height: 100%;
    //         transition: 0.5s ease-in-out;
    //     overflow-hidden Suggested-card
    //       }
    const styles = {
        transition: {
            transition: "0.5s ease-in-out",
        },
    };
    return (
        <div className="mt-[30px] grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3  gap-x-8">
            {data?.map(profile => {
                return (
                    <div className="col-span-1">
                        <div className="bg-cyan-400 h-[400px] relative group overflow-hidden Suggested-card">
                            <img
                                className="h-[290px] w-full"
                                src="https://i.postimg.cc/52Y8nHnf/310814492-3383940818533755-1197676094327108122-n.jpg"
                                alt="profile"
                            />
                            <div className="px-[15px] py-[10px]">
                                <div className="flex gap-x-5 items-center">
                                    <p className="text-[22px]">Monir Hossain Rabby</p>
                                    <p className="text-[18px]">23</p>
                                </div>
                                <p>Web Developer</p>
                                <p>Tongi</p>
                            </div>
                            <div
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    position: "absolute",
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "top",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                                className="Suggested-info__cardUp"
                            >
                                <img
                                    src="https://i.postimg.cc/52Y8nHnf/310814492-3383940818533755-1197676094327108122-n.jpg"
                                    alt="profile"
                                    className="w-[94px] h-[94px] rounded-full relative left-[35%] border-white border-4"
                                />
                                <div className="p-2">
                                    <h4 className="text-white text-[30px] text-center overflow-hidden">
                                        <span className="font-george">Monir Hossain</span>
                                        <span style={{ color: "rgb(135, 206, 235)" }}> 27</span>
                                    </h4>
                                    <ul className="text-white font-george">
                                        <li>
                                            <p>
                                                <span>Occupation</span> Private holder
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Location</span> Barishal shadar, Barishal
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Home Town</span> Dhake
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Education</span> Hon's(Department of History)
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Religion</span> Muslim
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="h-[30px] w-full flex items-center justify-evenly">
                                        <a href="" className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                            <i className="fas fa-user text-white p-3" aria-hidden="true"></i>
                                        </a>

                                        <a href="!#" className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                            <i className="fas fa-comment text-white p-3" aria-hidden="true"></i>
                                        </a>
                                        <a href="!#" className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                            <i className="fas fa-heart p-3 text-white" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
