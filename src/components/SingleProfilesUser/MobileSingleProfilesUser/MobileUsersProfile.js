/* eslint-disable react-hooks/exhaustive-deps */
// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { toast, Toaster } from "react-hot-toast";
import { AiFillCamera } from "react-icons/ai";

// Components
import {
  useGetProfileDetailsWIthAuthQuery,
  useSetPersonalDetailsMutation,
} from "../../../Redux/features/userInfo/userApi";
import MobileSocialMediaBox from "./SocialMediaMobile/MobileSocialMediaBox";
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";

const MobileUsersProfile = () => {
  const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
  const { data } = useGetProfileDetailsWIthAuthQuery();
  const [setPersonalDetails, { data: profileOrCoverPhotoResponse }] =
    useSetPersonalDetailsMutation();
  const [uploadProfilePhoto, { data: uploadedProfilePhoto }] =
    usePhotosUploadOnServerMutation();
  const [uploadCoverPhoto, { data: uploadedCoverPhoto }] =
    usePhotosUploadOnServerMutation();
  

  const profilePhotoUploadHandler = (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadProfilePhoto(formData);
    }
  };

  const coverPhotoUploadHandler = (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadCoverPhoto(formData);
    }
  };

  useEffect(() => {
    if (uploadedCoverPhoto)
      setPersonalDetails({coverPhoto: uploadedCoverPhoto?.data[0]?.path});
  }, [uploadedCoverPhoto]);
  useEffect(() => {
    if (uploadedProfilePhoto)
      setPersonalDetails({ profilePhoto: uploadedProfilePhoto?.data[0]?.path });
  }, [uploadedProfilePhoto]);

  useEffect(() => {
    if (profileOrCoverPhotoResponse?.message?.includes("Update successful")) {
      toast.success("Updated successfully");
    }
  }, [profileOrCoverPhotoResponse]);

  // decision making about social Box
  const { LinkedInId } = data || {};
  const { faceBookId } = data || {};
  const { instagramId } = data || {};
  useEffect(() => {
    if (LinkedInId || faceBookId || instagramId) {
      setSocialBoxOpen(true);
    }
  }, [LinkedInId, faceBookId, instagramId, setSocialBoxOpen]);

  return (
    <div className="w-full">
      <div className="flex justify-center mt-4">
        <div className="w-full">
          {/* Cover photo */}
          <label htmlFor="uploadCoverPhoto" className="relative">
            <div>
              {data?.coverPhoto ? (
                <div>
                  <img
                    className="max-h-28 md:max-h-52 w-full border border-gray-100 rounded-t-[4px]"
                    src={data?.coverPhoto}
                    alt=""
                  />
                </div>
              ) : (
                <div className="bg-[#D9D9D9] rounded-t-[4px] flex justify-center items-center flex-col  mx-auto h-28 md:h-52">
                  <h1 className="text-[#979C9E] pb-[10px] text-xs">
                    Upload a cover photo
                  </h1>
                  <i className="fa-solid text-[#979C9E]  fa-camera"></i>
                </div>
              )}
            </div>
            <input
              type="file"
              id="uploadCoverPhoto"
              name="uploadCoverPhoto"
              className="hidden"
              onChange={coverPhotoUploadHandler}
            />
            <div className="absolute right-1 md:right-2 flex items-center px-1 md:px-2 bg-white group rounded-xl bottom-[5%] shadow-md md:shadow-lg">
              <span className="text-[11px] md:text-base font-semibold">
                Edit Cover Photo
              </span>
              <AiFillCamera className="text-[14px] md:text-xl m-[2px] md:m-1" />
            </div>
          </label>
          <div
            style={{ boxShadow: " 0px 10px 40px rgba(0, 0, 0, 0.03)" }}
            className="px-[23px] w-full rounded-sm mx-auto bg-[#ffffff]"
          >
            <div>
              {/* Profile Photo */}
              <div className="flex justify-start items-center">
                <label htmlFor="uploadProfilePhoto" className="relative">
                  <img
                    src={
                      data?.profilePhoto
                        ? data?.profilePhoto
                        : "https://cdn-icons-png.flaticon.com/512/194/194938.png"
                    }
                    className="mt-[-20px] md:-mt-10 w-16 md:w-28 h-16 md:h-28 rounded-full border border-slate-300 p-[1.5px] bg-white"
                    alt="Not Available"
                  />
                  <input
                    type="file"
                    id="uploadProfilePhoto"
                    name="uploadProfilePhoto"
                    className="hidden"
                    onChange={profilePhotoUploadHandler}
                  />
                  <div className="absolute right-0 md:right-[2px] bg-[#DADBE1] group rounded-full bottom-[5%]">
                    <AiFillCamera className="text-[16px] md:text-2xl m-[2px] md:m-1" />
                  </div>
                </label>
                <div className="flex justify-between items-center gap-12">
                  <h2 className="pl-[7px] text-sm md:text-lg font-semibold text-[#000000]">
                    {(data?.firstName ? data?.firstName : "") +
                      " " +
                      (data?.lastName ? data?.lastName : "")}
                  </h2>
                </div>
              </div>
              <div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-[#737373] w-[140px] md:w-48 mt-[16px] pb-[10px] border-[#737373] text-xs md:text-base font-normal border-b-[1px]">
                      {data?.email ? data?.email : ""}
                    </h3>
                    <h3 className="text-[#737373] w-[140px] md:w-48 mt-[16px] pb-[10px] border-[#737373] text-xs md:text-base font-normal border-b-[1px]">
                      {data?.phone ? data?.phone : ""}
                    </h3>
                    <h3 className="text-[#737373] w-[165px] md:w-48 mt-[16px]  text-xs md:text-base font-normal pb-[20px] capitalize">
                      {data?.maritalStatus ? data?.maritalStatus : ""}
                    </h3>
                  </div>
                  <div className="w-[125px] mr-2 pb-4">
                    {SocialBoxOpen && (
                      <MobileSocialMediaBox
                        {...{ LinkedInId, faceBookId, instagramId }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MobileUsersProfile;
