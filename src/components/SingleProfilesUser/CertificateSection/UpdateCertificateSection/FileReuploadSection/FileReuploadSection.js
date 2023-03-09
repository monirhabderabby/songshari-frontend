// Configuration
import React, { useEffect } from "react";

// Third party package
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast, Toaster } from "react-hot-toast";

/* Components */
import icon from "../../../../../assets/images/user profile/reUpload.png";
import { firebaseStorage } from "../../../../../firebase.init";
import { useResubmitAnyCertificateMutation } from "../../../../../Redux/features/Documents/documentsApi";
import { usePhotosUploadOnServerMutation } from "../../../../../Redux/features/fileUpload/fileUploadApi";

const FileReuploadSection = ({ editFor, selectedCertificate }) => {
  const [resubmitCertificate, { data: response, isLoading: loading }] =
    useResubmitAnyCertificateMutation();
  const [uploadCertificate, { data: uploadedCertificate }] =
    usePhotosUploadOnServerMutation();

  // handle file upload change data
  const handleUpload = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadCertificate(formData);
    }
  };

  if (response) {
    toast.success("Successfully Re-uploaded");
  }
  useEffect(() => {
    if (uploadedCertificate) {
      resubmitCertificate({
        id: selectedCertificate.parentId,
        data: {
          photoId: selectedCertificate?._id,
          newPhoto: uploadedCertificate?.data[0]?.path,
        },
      });
    }
  }, [uploadedCertificate]);
  
  return (
    <div className="font-sans mb-[145px]">
      <h1 className="font-semibold text-[32px] text-[#333333]">
        Re-Upload Certificate
      </h1>
      <p className="mt-4 mb-8 font-normal text-base text-[#000000]">
        Admin Ask You to upload your Certificate again
      </p>
      {/* reupload section */}
      <div className=" lg:flex items-center justify-center max-w-[393px]">
        <label htmlFor="reUploadPhoto" className="cursor-pointer z-20 w-full">
          <div className="relative overflow-hidden h-[380px] w-full  rounded-2xl mx-auto lg:mx-0">
            <img
              className="absolute z-[-1] w-full h-full"
              src={selectedCertificate?.photo}
              alt="background"
            />
            <div className="z-30 w-full h-full flex flex-col items-center justify-center bg-[#000000] bg-opacity-50">
              <p className="font-medium text-base text-[#FFFFFF] text-center mb-5">
                Click on the upload <br /> button to add new certificate
              </p>
              <div className="flex items-center justify-center font-medium text-base text-[#FFFFFF] gap-[13px] bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px] w-[144px] h-[47px]">
                <img className="h-5 w-5" src={icon} alt="reUpload icon" />
                <p>{loading ? "Uploading..." : "Re-Upload"}</p>
              </div>
            </div>
          </div>
          <input
            id="reUploadPhoto"
            onChange={handleUpload}
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <Toaster />
    </div>
  );
};

export default FileReuploadSection;
