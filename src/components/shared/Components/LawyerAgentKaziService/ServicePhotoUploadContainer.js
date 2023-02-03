import React, { useCallback, useEffect } from "react";

// Third party packages
import { useDropzone } from "react-dropzone";

// Redux APi
import { usePhotosUploadOnServerMutation } from "../../../../Redux/features/fileUpload/fileUploadApi";
import { OvalLoader } from "../../Cards/Loader/OvalLoader/OvalLoader";

export const ServicePhotoUploadContainer = ({ setPhotos }) => {
    // Redux Api Call
    const [photosUploadOnServer, { data: uploadedPhotos, isLoading, error: uploadError }] = usePhotosUploadOnServerMutation();

    const onDrop = useCallback(
        acceptedFiles => {
            const formData = new FormData();
            for (let i = 0; i < acceptedFiles.length; i++) {
                formData.append("photos", acceptedFiles[i]);
            }
            photosUploadOnServer(formData);
        },
        [photosUploadOnServer]
    );
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    useEffect(() => {
        if (uploadedPhotos) {
            let newArray = [];
            const photos = uploadedPhotos?.data?.file;

            photos?.filter(item => {
                newArray.unshift(item.fileName);
                return false;
            });

            // it will be return when this components will be return
            setPhotos(newArray);
        }
    }, [uploadedPhotos, setPhotos]);

    return (
        <>
            <div className="mt-8 mb-14">
                <label htmlFor="fileUpload" className="text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase mb-[3px]">
                    MAKE IT FUN: UPLOAD PHOTOS, VIDEOS!
                </label>
                <div
                    {...getRootProps()}
                    className="border border-[#98999C] h-[174px] bg-[#F5F7FA] flex items-center justify-center p-2 rounded-md col-span-2"
                >
                    <input name="fileUpload" {...getInputProps()} />
                    {isLoading ? (
                        <OvalLoader />
                    ) : (
                        <>
                            {isDragActive ? (
                                <p>Drop the files here ...</p>
                            ) : (
                                <div className="text-[#707276] text-[13px] font-Poppins font-normal text-center leading-[20px]">
                                    Drop photos here to add <br /> attachments
                                    <p className="mt-[6px]">
                                        or <span className="text-[#E41272]">Browse</span>
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
                <label htmlFor="fileUpload" className="text-xs leading-[18px] text-[#98999C] ml-1 mt-1 block">
                    Offer images are displayed at a 3:2 ratio, we advise using 1200x800px. Learn More!
                </label>
            </div>
        </>
    );
};
