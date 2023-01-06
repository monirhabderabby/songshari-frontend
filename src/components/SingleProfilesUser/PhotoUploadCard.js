import React, { useEffect } from "react";
import camera from "../../assets/images/icons/camera.svg";
import { usePhotosUploadOnServerMutation } from "../../Redux/features/fileUpload/fileUploadApi";

export const PhotoUploadCard = () => {
    const [photosUploadOnServer, { data, error }] = usePhotosUploadOnServerMutation();

    const photosHandler = e => {
        const files = e.target.files;
        const data = {
            photos: files,
        };
        console.log(data);
        photosUploadOnServer(data);
    };

    useEffect(() => {
        if (data) {
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }, [data, error]);

    return (
        <>
            <label
                htmlFor="photos"
                className="mt-[24px] w-[360px] h-[77px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] py-[16px] px-[20px] flex items-center gap-x-[9px]"
            >
                <img src={camera} alt="camera" />
                <p className="text-[#000000] text-[24px] leading-[20px] font-semibold font-fira">Upload Photo</p>
            </label>
            <input type="file" id="photos" className="hidden" multiple onChange={photosHandler} />
        </>
    );
};
