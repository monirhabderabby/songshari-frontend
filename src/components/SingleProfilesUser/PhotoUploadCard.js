// configuration
import React, { useEffect } from "react";

// Third party packages
import { toast } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";

// components
import camera from "../../assets/images/icons/camera.svg";
import { usePhotosUploadOnServerMutation } from "../../Redux/features/fileUpload/fileUploadApi";
import { useUpdatePhotosOnProfileMutation } from "../../Redux/features/userInfo/userApi";
import { setUpdatePhotos } from "../../Redux/features/userInfo/userInfo";

export const PhotoUploadCard = () => {
    // Redux Api call
    const [photosUploadOnServer, { data: uploadedPhotos, isLoading, error: uploadError }] = usePhotosUploadOnServerMutation();
    const [updatePhotosOnProfile, { error: updateError }] = useUpdatePhotosOnProfileMutation();
    const dispatch = useDispatch();

    // function declaration
    const photosHandler = e => {
        const files = e.target.files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("photos", files[i]);
        }
        // console.log(formData.get("photos"));
        photosUploadOnServer(formData);
    };

    useEffect(() => {
        if (uploadedPhotos) {
            let updateElement = [];
            uploadedPhotos?.data?.file?.map(element => {
                return (updateElement = [...updateElement, element.fileName]);
            });

            // update photo in redux state
            dispatch(setUpdatePhotos(updateElement));

            // update all uploaded photos in user personal Details
            updatePhotosOnProfile({
                photos: updateElement,
            });
        }
    }, [uploadedPhotos, updatePhotosOnProfile, dispatch]);

    useEffect(() => {
        if (uploadError || updateError) {
            toast.error("Failed to upload photos! ");
        }
    }, [uploadError, updateError]);

    return (
        <>
            <label
                htmlFor="photos"
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
                        wrapperClass=""
                        visible={true}
                    />
                ) : (
                    <img src={camera} alt="camera" />
                )}
                <p className="text-[#000000] text-[24px] leading-[20px] font-semibold font-fira">
                    {isLoading ? <p className="ml-[10px]">Uploading</p> : <p className="ml-[10px]">Upload Photo</p>}
                </p>
            </label>
            <input type="file" id="photos" className="hidden" multiple onChange={photosHandler} />
        </>
    );
};
