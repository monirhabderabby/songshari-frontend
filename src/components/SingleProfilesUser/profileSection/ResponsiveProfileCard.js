/* eslint-disable react-hooks/exhaustive-deps */
// configuration, ex: react-router
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// Third party packages
import { AiFillCamera } from "react-icons/ai";

// components
import blackLove from "../../../assets/images/icons/blackLove.png";
import { ageCalculator } from "../../../assets/utilities/AgeCalculation/ageCalculator";
import { ProfileSkeletonLoader } from "../../shared/Cards/Loader/Profile__Card__Skeleton__Loader/ProfileSkeletonLoader";

// css files
import "../../../assets/css/profileCards.css";
import { useUpdateProfilePhotoMutation } from "../../../Redux/features/userInfo/userApi";
import { ResponsiveSocialMediaBox } from "../SocialMediaBox/ResponsiveSocialMediaBox";
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";

const ResponsiveProfileCard = ({ data, isLoading }) => {
  // hook variables
  const [age, setAge] = useState(0);
  const [updateProfilePhoto] = useUpdateProfilePhotoMutation();
  const [uploadPhotoOnServer, { data: uploadedPhoto }] =
    usePhotosUploadOnServerMutation();
  const navigate = useNavigate()
  useEffect(() => {
    if (data) {
      const age = ageCalculator(data?.dateOfBirth);
      setAge(age);
    }
  }, [data]);
  const [SocialBoxOpen, setSocialBoxOpen] = useState(false);

  // JS Variables
  // decision making about social Box
  const { LinkedInId } = data || {};
  const { faceBookId } = data || {};
  const { instagramId } = data || {};

  useEffect(() => {
    if (LinkedInId || faceBookId || instagramId) {
      setSocialBoxOpen(true);
    }
  }, [LinkedInId, faceBookId, instagramId, setSocialBoxOpen]);

  // js variable declare
  const name =
    (data?.firstName ? data?.firstName : "") +
    " " +
    (data?.lastName ? data?.lastName : "");
  const likes = data?.likes.length || 0;
  const UserAge = data?.dateOfBirth ? `${age + "Years old"}` : "";
  const coverPhoto = (data?.coverPhoto && data.coverPhoto) || "";
  let profilePhoto = data?.profilePhoto
    ? data?.profilePhoto
    : "https://cdn-icons-png.flaticon.com/512/194/194938.png";
  let content = null;

  // function declaration
  const profilePhotoUploadHandler = (e) => {
    const photo = e.target.files[0];
    if (photo) {
      const formData = new FormData();
      formData.append("image", photo);
      uploadPhotoOnServer(formData);
    }
    // const storageRef = ref(
    //   firebaseStorage,
    //   `profile/${photo?.name + uuidv4()}`
    // );
    // uploadBytes(storageRef, photo).then(async (snapshot) => {
    //   await getDownloadURL(snapshot.ref).then((url) => {
    //     updateProfilePhoto(url.toString());
    //     console.log(url.toString());
    //   });
    // });
  };

  useEffect(() => {
    if (uploadedPhoto?.data) updateProfilePhoto(uploadedPhoto?.data[0]?.path);
  }, [uploadedPhoto]);

  if (isLoading) {
    content = <ProfileSkeletonLoader />;
  } else if (!isLoading && data) {
    content = (
      <div>
        <div
          className="
              h-[400px] w-[700px] ml-[50px] shadow-[0px_10px_5px_rgba(119,123,146,0.02)] bg-white rounded-[10px] relative"
        >
          <div
            style={{ backgroundImage: `url(${coverPhoto})` }}
            className={`relative h-[150px] w-full rounded-tl-[10px] rounded-tr-[10px] ${
              !coverPhoto &&
              "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
            } bg-center bg-cover`}
          >
            <div className="h-[135px] absolute -bottom-[50%] left-[110px] w-[135px] z-50 bg-white shadow-sm border-[1px] rounded-full flex justify-center items-center ml-[150px]">
              <label
                htmlFor="uploadPhoto"
                style={{
                  backgroundImage: `url(${profilePhoto})`,
                }}
                className="h-[120px] w-[120px] group rounded-full bg-center bg-cover"
              >
                <div className="h-[120px] w-[120px] top-[7px] left-[7.3px] group-hover:absolute inset-0 group-hover:bg-black/20 rounded-full"></div>
                <input
                  type="file"
                  id="uploadPhoto"
                  name="uploadPhoto"
                  className="hidden"
                  onChange={profilePhotoUploadHandler}
                />
              </label>
              <div className="absolute right-1 bg-[#DADBE1] group rounded-full bottom-[15%]">
                <AiFillCamera className="text-[20px] m-[4px]" />
              </div>
            </div>
          </div>
          <h2 className="text-center mt-[70px] text-[28px] ml-[-30px] font-semibold font-fira">
            {name}
          </h2>
          {/* content */}
          <div className="w-full flex justify-center items-center absolute top-[70%]">
            <div className="text-[17px] font-normal font-Inter">{UserAge}</div>
            <div className="h-[28px] w-[5px] bg-gray-200 rounded-[4px] mx-[20px]"></div>
            <div className="flex items-center">
              <svg
                color="#FF1D8E"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <h3 className="ml-2 text-[17px] font-normal font-Inter">
                {data?.hometown || ""}
              </h3>
            </div>
          </div>
          <div className="absolute top-[82%] w-full flex justify-center items-center gap-x-[20px]">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#F7E9F8] mr-1 flex items-center justify-center">
                <img src={blackLove} alt="blackLove" />
              </div>
              <span>{likes}</span>
            </div>
            <div>
              {data ? (
                <button
                  onClick={()=>navigate("/packages")}
                  className="special_profile_button"
                >
                  Upgrade Membership
                </button>
              ) : (
                <button className="special_profile_button">
                  Send Connection Request
                </button>
              )}
            </div>
          </div>
          <div className="">
            {SocialBoxOpen && (
              <ResponsiveSocialMediaBox
                {...{ LinkedInId, faceBookId, instagramId }}
              />
            )}{" "}
          </div>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default ResponsiveProfileCard;
