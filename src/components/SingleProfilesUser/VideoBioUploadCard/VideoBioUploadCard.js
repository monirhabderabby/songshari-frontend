// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { RiVideoUploadLine } from "react-icons/ri";

// components
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";
import { useUpdateVideoBioOnProfileMutation } from "../../../Redux/features/userInfo/userApi";

const VideoBioUploadCard = ({ data, setShowPopup }) => {
  const { userMatrimonyPackageInfo } = data || {};
  const [uploadedVideo, setUploadedVideo] = useState("");
  // Redux Api call
  const [
    photosUploadOnServer,
    { data: videoUploadResponse, isLoading, error: uploadError },
  ] = usePhotosUploadOnServerMutation();
  const [
    updateVideoBioOnProfile,
    { data: videoBioAddedResponse, error: updateError },
  ] = useUpdateVideoBioOnProfileMutation();

  // function declaration
  const videoUploadHandler = (e) => {
    if (!userMatrimonyPackageInfo?.package?.videoBioData) {
      return setShowPopup(true);
    }
    if (e.target.files) {
      const formData = new FormData();
      const video = e.target.files[0];
      formData.append("image", video);
      photosUploadOnServer(formData);
    }
  };

  useEffect(() => {
    if (videoUploadResponse) {
      const video = videoUploadResponse?.data[0]?.path;
      setUploadedVideo(video);
    }
  }, [videoUploadResponse]);

  useEffect(() => {
    if (uploadedVideo !== "") {
      updateVideoBioOnProfile({
        videoBioData: uploadedVideo,
      });
    }
  }, [updateVideoBioOnProfile, uploadedVideo]);

  useEffect(() => {
    if (videoBioAddedResponse) {
      setUploadedVideo("");
      toast.success("Video Bio Uploaded Successfully!");
    }
    if (uploadError || updateError) {
      toast.error("Failed to upload video bio! ");
    }
  }, [uploadError, updateError, videoBioAddedResponse]);

  return (
    <>
      <label
        htmlFor="video"
        className="mt-[24px] w-[360px] h-[77px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[20px] flex items-center gap-x-[9px] cursor-pointer"
      >
        {isLoading ? (
          <TailSpin
            height="34"
            width="34"
            color="#F664BC"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={true}
          />
        ) : (
          // <img src={camera} alt="camera" />
          <RiVideoUploadLine className="text-pink-500 text-4xl" />
        )}
        <div className="text-[#000000] text-lg md:text-[24px] leading-[20px] font-semibold font-fira">
          {isLoading ? (
            <p className="ml-[10px]">Uploading</p>
          ) : (
            <p className="ml-[10px]">
              {data?.videoBioData ? "Update" : "Add"} Video Bio
            </p>
          )}
        </div>
      </label>
      <input
        type="file"
        id="video"
        className="hidden"
        accept="video/*"
        onChange={videoUploadHandler}
      />
    </>
  );
};

export default VideoBioUploadCard;
