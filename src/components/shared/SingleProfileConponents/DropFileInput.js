import React, { useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-hot-toast";
import { OvalLoader } from "../Cards/Loader/OvalLoader/OvalLoader";
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";

const DropFileInput = ({ nidOrPassportPhoto, setNidOrPassportPhoto }) => {
  const [photosUploadOnServer, { data: uploadedPhotos, isLoading, error }] =
    usePhotosUploadOnServerMutation();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const formData = new FormData();
      for (let i = 0; i < acceptedFiles.length; i++) {
        formData.append("image", acceptedFiles[i]);
      }
      photosUploadOnServer(formData);
    },
    [photosUploadOnServer]
  );

  const { getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    console.log(error, "file eror");
    if (error) {
      toast.error(
        "Something went wrong. Please try to upload your photo again"
      );
    }
    if (uploadedPhotos && !error) {
      const photo = uploadedPhotos?.data[0].path;
      setNidOrPassportPhoto({ frontSide: photo });
    }
  }, [uploadedPhotos, setNidOrPassportPhoto, error]);

  return (
    <div className="mb-[39px]">
      <label
        htmlFor="professionProof"
        className="text-sm block pb-2 text-slate-600	  font-medium"
      >
        NID/Passport Photo
      </label>
      <div className="flex items-center justify-around gap-[1px] h-[120px] border border-dashed border-gray-300 rounded-xl bg-[#F5F7FA]">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="certificate"
            className="flex flex-col items-center justify-center w-full cursor-pointer"
          >
            <div className="flex flex-col text-center items-center justify-center pt-5 pb-6">
              {isLoading ? (
                <OvalLoader />
              ) : (
                <>
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : !isLoading && nidOrPassportPhoto?.frontSide ? (
                    <img
                      className="h-[120px] rounded-[4px]"
                      src={nidOrPassportPhoto?.frontSide}
                      alt="servicePhoto"
                    />
                  ) : (
                    <div className="font-poppins font-normal text-[13px] text-[#707276]">
                      <p>
                        Drop files here to add <br /> Photo{" "}
                      </p>
                      <p className="pt-[18px]">
                        or <span className="text-[#E41272]">Browse</span>
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
            <input
              id="certificate"
              {...getInputProps()}
              type="file"
              className="hidden"
            />
          </label>
        </div>
      </div>
      {/* <Toaster /> */}
    </div>
  );
};

export default DropFileInput;
