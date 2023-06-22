// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { toast } from "react-hot-toast";
import { RiVideoUploadLine } from "react-icons/ri";
import { TailSpin } from "react-loader-spinner";

// components
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";
import { useUpdateVideoBioOnProfileMutation } from "../../../Redux/features/userInfo/userApi";
import VarientAnimation from "../../../assets/utilities/Animation/VarientAnimation";

const VideoBioUploadCard = ({ data, setShowPopup }) => {
    const { userMatrimonyPackageInfo } = data || {};
    const [uploadedVideo, setUploadedVideo] = useState("");
    // Redux Api call
    const [photosUploadOnServer, { data: videoUploadResponse, isLoading, error: uploadError }] = usePhotosUploadOnServerMutation();
    const [updateVideoBioOnProfile, { data: videoBioAddedResponse, error: updateError }] = useUpdateVideoBioOnProfileMutation();

    // function declaration
    const videoUploadHandler = e => {
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
        <VarientAnimation direction="right" delay={1}>
            <label
                htmlFor="video"
                className="mt-[24px] w-[360px] h-[77px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[30px] flex items-center gap-x-[9px] cursor-pointer"
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
                    <RiVideoUploadLine className="text-pink-500 w-6 h-6" />
                )}
                <div className="text-[#000000] text-[22px] leading-[20px] font-semibold font-fira">
                    {isLoading ? (
                        <p className="text-[24px] font-fira">Uploading</p>
                    ) : (
                        <p className=" text-[24px] font-fira">{data?.videoBioData ? "Update" : "Add"} Video Bio</p>
                    )}
                </div>
            </label>
            <input type="file" id="video" className="hidden" accept="video/*" onChange={videoUploadHandler} />
        </VarientAnimation>
    );
};

export default VideoBioUploadCard;
