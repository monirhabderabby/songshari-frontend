// Configuration
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Third party package
import { AiFillHeart } from "react-icons/ai";

// Components
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";
import { useLikeSingleProfileMutation } from "../../../../Redux/features/connections/connectionApi";
import GoPremium from "../../../shared/Package/GoPremium";
import { useGetProfileDetailsWIthAuthQuery } from "../../../../Redux/features/userInfo/userApi";
import customFunc from "../../../../assets/utilities/customFunc";

const message = "If you wont to access kazi you need to buy premium package";

export const MobilePartnerCard = ({ user, role }) => {
  const [likeSent, setLikeSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [likeSingleProfile, { data: likeResponse, isLoading: likeLoading }] =
    useLikeSingleProfileMutation();
  const { data: myProfile } = useGetProfileDetailsWIthAuthQuery();
  const freeKaziContact =
    myProfile?.userMatrimonyPackageInfo?.package?.freeKaziContact;

  const navigate = useNavigate();

  let name;
  const { firstName, lastName, dateOfBirth, designation, hometown } =
    user || {};

  // user name
  name = firstName + " " + lastName;
  if (name.length > 13) {
    name = name.slice(0, 13) + " ...";
  }

  // profile photo
  let { profilePhoto } = user || {};

  // profile photo decision maker
  const { profilePhotoDecisionMaker } = customFunc;
  profilePhoto = profilePhotoDecisionMaker(profilePhoto);

  // function declaration
  const addProfileLike = async () => {
    if (role === "kazi" && !freeKaziContact) {
      return setShowPopup(true);
    }
    await likeSingleProfile(user?._id);
  };

  const goToProfile = () => {
    if (role === "kazi" && !freeKaziContact) {
      return setShowPopup(true);
    }
    navigate(`/mobileprofile/${user?._id}`);
  };

  // all useEffect declaration
  useEffect(() => {
    if (likeResponse) setLikeSent(true);
  }, [likeResponse]);

  return (
    <>
      <div className="h-[227px] w-[153px] bg-white rounded-[15px] shadow-[2px_2px_8px_rgba(0,0,0,0.12)] mx-auto">
        <div
          onClick={goToProfile}
          className="h-[110px] bg-center bg-cover rounded-tr-[15px] rounded-tl-[15px]"
          style={{
            backgroundImage: `url(${profilePhoto})`,
          }}
        ></div>
        <div className="content h-[calc(227px-110px)] w-full px-3">
          <div className="flex items-center gap-x-[12px]">
            <p
              className="leading-7 text-[#333333] text-[12px] font-bold font-Inter whitespace-nowrap"
              onClick={goToProfile}
            >
              {name}
            </p>
            <p className="text-[12px] leading-7 font-bold font-Inter text-[#E41272]">
              {dateOfBirth ? ageCalculator(dateOfBirth) : ""}
            </p>
          </div>
          <p className="font-normal text-[10px] font-Inter  text-[#333333] h-[20px] flex items-center">
            {designation ? designation : ""}
          </p>
          <p className="font-medium text-[10px] font-Inter  text-[#333333] h-[20px] flex items-center">
            {hometown ? hometown : ""}
          </p>
          <div className="h-[30px] w-full flex items-center justify-evenly mt-[6px]">
            <span
              onClick={() => setShowPopup(true)}
              className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full"
            >
              <i
                className="fas fa-comment text-white p-2"
                aria-hidden="true"
              ></i>
            </span>
            <div className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full h-8 w-8 flex items-center justify-center">
              {likeLoading ? (
                <div className="h-[16px] bg-[#FFFFFF] rounded-full animate-ping w-[16px] text-[#E41272] transition-all duration-500 "></div>
              ) : likeSent ? (
                <AiFillHeart className="text-green-400 w-5 h-5 text-lg transition-all duration-500 " />
              ) : (
                <i
                  className="fas fa-heart text-white"
                  aria-hidden="true"
                  onClick={() => addProfileLike()}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
      {showPopup && <GoPremium {...{ message, setShowPopup }} />}
    </>
  );
};
