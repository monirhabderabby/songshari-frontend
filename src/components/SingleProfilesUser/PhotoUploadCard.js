// configuration
import React, { useEffect } from "react";

// Third party packages
import { toast } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";

// components
import { usePhotosUploadOnServerMutation } from "../../Redux/features/fileUpload/fileUploadApi";
import { useUpdatePhotosOnProfileMutation } from "../../Redux/features/userInfo/userApi";
import { setUpdatePhotos } from "../../Redux/features/userInfo/userInfo";
import camera from "../../assets/images/icons/camera.svg";
import VarientAnimation from "../../assets/utilities/Animation/VarientAnimation";

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
            formData.append("image", files[i]);
        }
        // console.log(formData.get("photos"));
        photosUploadOnServer(formData);
    };

    useEffect(() => {
        if (uploadedPhotos) {
            let updateElement = [];
            uploadedPhotos?.data?.map(element => {
                return (updateElement = [...updateElement, element?.path]);
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
        <VarientAnimation direction="right" delay={0.9}>
            <label
                htmlFor="photos"
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
                    <img src={camera} alt="camera" className="w-6 h-6" />
                )}
                <div className="text-[#000000] text-lg md:text-[22px] leading-[20px] font-semibold font-fira">
                    {isLoading ? <p>Uploading</p> : <p>Upload Photo</p>}
                </div>
            </label>
            <input type="file" id="photos" className="hidden" multiple onChange={photosHandler} />
        </VarientAnimation>
    );
};
