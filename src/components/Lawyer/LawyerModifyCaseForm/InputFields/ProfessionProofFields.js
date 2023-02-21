import React, { useCallback, useEffect } from "react";

// Third party package
import { useDropzone } from "react-dropzone";
import { toast, Toaster } from "react-hot-toast";
import liveLinkGenerator from "../../../../assets/utilities/liveLink/liveLinkGenerator";

// Components
import { usePhotosUploadOnServerMutation } from "../../../../Redux/features/fileUpload/fileUploadApi";
import { OvalLoader } from "../../../shared/Cards/Loader/OvalLoader/OvalLoader";

export const ProfessionProofFields = ({ setCertificate, certificate }) => {
  // Redux Api Call
  const [photosUploadOnServer, { data: uploadedPhotos, isLoading, error }] =
    usePhotosUploadOnServerMutation();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const formData = new FormData();
      for (let i = 0; i < acceptedFiles.length; i++) {
        formData.append("photos", acceptedFiles[i]);
      }
      photosUploadOnServer(formData);
    },
    [photosUploadOnServer]
  );

  const { getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (error) {
      toast.error(
        "Something went wrong. Please try to upload your photo again"
      );
    }
    if (uploadedPhotos && !error) {
      const photo = uploadedPhotos?.data?.file[0]?.fileName;
      setCertificate(photo);
    }
  }, [uploadedPhotos, setCertificate, error]);

  return (
    <div className="mb-[39px]">
      <label htmlFor="professionProof">
        Profession Proof Certificate(ID Card/Employment Certificate)
      </label>
      <div className="flex items-center justify-around gap-[1px] h-[174px] border border-[#98999C] bg-[#F5F7FA]">
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
                  ) : !isLoading && certificate ? (
                    <img
                      className="w-[80px] h-[80px] rounded-[4px]"
                      src={liveLinkGenerator(certificate)}
                      alt="servicePhoto"
                    />
                  ) : (
                    <div className="font-poppins font-normal text-[13px] text-[#707276]">
                      <p>
                        Drop files here to add <br /> attachments{" "}
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
      <Toaster />
    </div>
  );
};
