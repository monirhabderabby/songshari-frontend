// configuration, ex: react-router
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Third party packages
import { AiFillHeart } from "react-icons/ai";

// components
import { useDispatch, useSelector } from "react-redux";
import { setSuperMatched } from "../../../../Redux/features/Swap/SwapSlice";
import { useLikeSingleProfileMutation } from "../../../../Redux/features/connections/connectionApi";
import { useGetProfileDetailsWIthAuthQuery } from "../../../../Redux/features/userInfo/userApi";
import "../../../../assets/css/topProfile.css";
import bg from "../../../../assets/images/TopProfile/Vector-1.9404edcdbad9fde28712.png";
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";
import { SuperMatchedModal } from "../../../shared/Components/superMatched/SuperMatchedModal";
import GoPremium from "../../../shared/Package/GoPremium";
import customFunc from "../../../../assets/utilities/customFunc";

const message = "If you wont to access kazi you need to buy premium package";
export const UserCard = ({ profile, role }) => {
  // variable declaration
  // hook variables
  const [likeSingleProfile, { data: likeResponse, isLoading: likeLoading }] =
    useLikeSingleProfileMutation();
  const { data: myProfile } = useGetProfileDetailsWIthAuthQuery();
  const freeKaziContact =
    myProfile?.userMatrimonyPackageInfo?.package?.freeKaziContact;
  const [likeSent, setLikeSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // js variable
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // super matched
  const { isMatched } = useSelector((state) => state.persistedReducer?.swap);

  // all useEffect declaration
  useEffect(() => {
    if (likeResponse) {
      const { matched, data } = likeResponse || {};
      setLikeSent(true);

      // if super matched
      if (matched) {
        dispatch(setSuperMatched(data?.updatedProfile));
      }
    }
  }, [likeResponse, dispatch]);

  // js variable declaration
  const name = profile?.firstName || "Not Available";

  // profile photo decision maker
  const { profilePhotoDecisionMaker } = customFunc;
  const profilePhoto = profilePhotoDecisionMaker(profile?.profilePhoto);
  const designation = profile?.designation || "Not Available";
  const hometown = profile?.hometown || "Not Available";
  const aboutYou = profile?.aboutYou;
  let intro = null;

  if (aboutYou?.length < 60) {
    intro = aboutYou;
  } else if (aboutYou?.length > 60) {
    intro = aboutYou?.slice(0, 60);
  } else if (!aboutYou) {
    intro = (
      <div className="h-[100px] flex items-center justify-center text-gray-400">
        No Intro Added
      </div>
    );
  }

  // function declaration
  const addProfileLike = async () => {
    await likeSingleProfile(profile._id);
  };

  const goToProfile = () => {
    if (role === "kazi" && !freeKaziContact) {
      return setShowPopup(true);
    }
    navigate(`/profile/${profile?._id}`);
  };

  const goToMobileProfile = () => {
    if (role === "kazi" && !freeKaziContact) {
      return setShowPopup(true);
    }
    navigate(`/mobileprofile/${profile?._id}`);
  };

  return (
    <>
      <div>
        {/* desktop version  */}
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="hidden md:block"
        >
          {profile && (
            <div className="h-[400px]  relative group overflow-hidden Suggested-card  ml-6">
              <img
                className="h-[400px] rounded-tr-[12px] rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px] object-cover w-full"
                src={profilePhoto}
                alt="profile"
              />
              <div className="absolute h-[100px] w-full top-[300px] right-0 inset-0 bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] opacity-90 text-white px-4 py-2 font-serif group-hover:top-[370px] transition ease-out duration-500 rounded-bl-[12px] rounded-br-[12px]">
                <div className="flex gap-x-4 items-center">
                  <p className="text-[20px] text-white font-bold drop-shadow-lg">
                    {name}
                  </p>
                  {profile?.dateOfBirth && <p className="text-[18px] text-[#87ceeb]">
                    {ageCalculator(
                      profile?.dateOfBirth ? profile?.dateOfBirth : 0
                    )}
                  </p>}
                </div>
                <p>{designation}</p>
                <p>{hometown}</p>
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
                  src={profilePhoto}
                  alt="profile"
                  className="w-[94px] h-[94px] rounded-full relative left-[35%] bg-white border-white border-4"
                />
                <div className="p-2 relative h-1/2">
                  <h4 className="text-white text-[25px] font-bold text-center overflow-hidden">
                    <span className="font-george">{name}</span>
                    {profile?.dateOfBirth && <span style={{ color: "rgb(135, 206, 235)" }}>
                      {" "}
                      {ageCalculator(
                        profile?.dateOfBirth ? profile?.dateOfBirth : 0
                      )}
                    </span>}
                  </h4>
                  <ul className="text-white font-Inter">
                    <li>
                      <div className="text-[14px] font-normal">{intro} {intro?.length===60 && "..."} </div>
                    </li>
                  </ul>
                  <div className="h-[30px] w-full flex items-center justify-evenly absolute bottom-10">
                    <p
                      onClick={goToProfile}
                      className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full p-3 cursor-pointer"
                    >
                      <PersonIcon style={{ color: "white" }} />
                    </p>

                    <span
                      onClick={() => setShowPopup(true)}
                      href="!#"
                      className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full p-3"
                    >
                      <ChatIcon style={{ color: "white" }} />
                    </span>
                    <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full h-[40px] w-[40px] flex items-center justify-center">
                      {likeLoading ? (
                        <div className="h-[16px] bg-[#FFFFFF] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                      ) : likeSent ? (
                        <AiFillHeart className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
                      ) : (
                        <FavoriteIcon
                          style={{ color: "white" }}
                          onClick={() => addProfileLike()}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* mobile version  */}
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:hidden"
        >
          {profile && (
            <div className="h-[400px] bg-black w-[324px]  relative group overflow-hidden Suggested-card mx-3">
              <img
                className="h-[400px] rounded-tr-[12px] bg-white rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px] object-cover w-full"
                src={profilePhoto}
                alt="profile"
              />
              <div className="absolute h-[150px] w-full top-[300px] right-0 inset-0 bg-white opacity-90 text-black px-4 py-2 font-serif group-hover:top-[370px] transition ease-out duration-500 rounded-bl-[12px] rounded-br-[12px]">
                <div className="flex gap-x-4 items-center">
                  <p className="text-[20px] text-black font-bold drop-shadow-lg">
                    {name}
                  </p>
                  {profile?.dateOfBirth && <p className="text-[17px] ml-[40px] text-black">
                    {ageCalculator(
                      profile?.dateOfBirth ? profile?.dateOfBirth : 0
                    )}
                  </p>}
                </div>
                <p className="text-[14px]">{designation}</p>
                <p className="text-[16px]">{hometown}</p>
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
                  src={profilePhoto}
                  alt="profile"
                  className="w-[94px] h-[94px] rounded-full relative left-[35%] bg-white border-white border-4"
                />
                <div className="p-2 relative h-1/5">
                  <h4 className="text-white text-[25px] font-bold text-center overflow-hidden">
                    <span className="font-george">{name}</span>
                    {profile?.dateOfBirth && <span style={{ color: "rgb(135, 206, 235)" }}> {profile?.dateOfBirth && ageCalculator(profile?.dateOfBirth)}</span>}
                  </h4>
                  <ul className="text-white font-Inter">
                    <li>
                      <p className="text-[14px] font-normal">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </li>
                  </ul>
                  <div className="h-[30px] w-full flex items-center justify-evenly absolute -bottom-[40px]">
                    <p
                      onClick={goToMobileProfile}
                      className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full cursor-pointer p-3"
                    >
                      <PersonIcon style={{ color: "white" }} />
                    </p>

                    <span
                      onClick={() => setShowPopup(true)}
                      className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full p-3"
                    >
                      <ChatIcon style={{ color: "white" }} />
                    </span>
                    <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full h-[40px] w-[40px] flex items-center justify-center">
                      {likeLoading ? (
                        <div className="h-[16px] bg-[#FFFFFF] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
                      ) : likeSent ? (
                        <AiFillHeart className="text-green-400 w-[20px] h-[20px] text-xl transition-all duration-500 " />
                      ) : (
                        <FavoriteIcon
                          style={{ color: "white" }}
                          onClick={() => addProfileLike()}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showPopup && <GoPremium {...{ setShowPopup, message }} />}
      {isMatched && <SuperMatchedModal />}
    </>
  );
};
