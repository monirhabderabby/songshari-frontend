import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../../assets/css/topProfile.css";
import bg from "../../../../assets/images/TopProfile/Vector-1.9404edcdbad9fde28712.png";
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";

export const UserCard = ({ profile, isLoading }) => {
    const array = [1, 2, 3];
    const navigate = useNavigate();

    if (profile) {
        console.log(profile);
    }
    return (
        <div className="col-span-1" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            {profile && (
                <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] h-[400px] relative group overflow-hidden Suggested-card">
                    <img className="h-[290px] w-full" src={profile?.profilePhoto} alt="profile" />
                    <div className="px-[15px] py-[10px] text-white">
                        <div className="flex gap-x-5 items-center">
                            <p className="text-[22px]">{profile?.firstName + " " + profile?.lastName}</p>
                            <p className="text-[18px]">{ageCalculator(profile?.dateOfBirth ? profile?.dateOfBirth : 0)}</p>
                        </div>
                        <p>{profile?.designation ? profile?.designation : "Not Provided"}</p>
                        <p>{profile?.hometown ? profile?.hometown : "Not Provided"}</p>
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
                                        <span>Occupation</span>
                                        {profile?.designation ? profile?.designation : "Not Provided"}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Home Town</span> {profile?.hometown ? profile?.hometown : "Not Provided"}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Education</span>{" "}
                                        {profile?.hightestEducationalQualification
                                            ? profile?.hightestEducationalQualification?.degreeName +
                                              `(Department Of ${profile?.hightestEducationalQualification?.Department})`
                                            : "Not Provided"}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Religion</span> Muslim
                                    </p>
                                </li>
                            </ul>
                            <div className="h-[30px] w-full flex items-center justify-evenly">
                                <p
                                    onClick={() => navigate(`/profile/${profile?._id}`)}
                                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full cursor-pointer"
                                >
                                    <i className="fas fa-user text-white p-3" aria-hidden="true"></i>
                                </p>

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
            )}
            {isLoading &&
                array.map(a => {
                    return (
                        <div key={a} class="h-[400px] w-[300px] shadow-2xl">
                            <div class="h-[290px] w-full bg-gray-100"></div>
                            <div class="px-[15px] py-[15px] h-[110px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
                                <div class="flex items-center justify-start gap-x-5">
                                    <div class="w-[200px] h-[15px] bg-gray-200 animate-pulse"></div>
                                    <div class="h-[30px] w-[30px] bg-gray-200 rounded-full animate-pulse"></div>
                                </div>
                                <div class="w-[150px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                <div class="w-[100px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
