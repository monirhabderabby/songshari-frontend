/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

// Third party package
import { IoMdCloudUpload } from "react-icons/io";
import { toast, Toaster } from "react-hot-toast";

// Components
import { useAddNewCertificateMutation } from "../../../../../Redux/features/userInfo/userApi";
import { usePhotosUploadOnServerMutation } from "../../../../../Redux/features/fileUpload/fileUploadApi";

const FileUploadSection = ({ selected, selectedPhoto }) => {
  // Redux api
  const [addNewCertificate, { data: response, isLoading, error }] =
    useAddNewCertificateMutation();
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

  useEffect(() => {
    if (uploadedCertificate)
      if (response) {
        toast.success("Successfully Added");
      }

    if (error) {
      toast.error("Error : Please try again");
    }
  }, [response, error]);

  useEffect(() => {
    if (uploadedCertificate)
      addNewCertificate({
        data: { photos: [uploadedCertificate?.data[0]?.path] },
        id: selected?._id,
      });
  }, [uploadedCertificate]);

  return (
    <section className="py-2 mt-8 mb-[145px]">
      <div className="mb-4">
        <h1 className="font-semibold text-xl text-[#333333]">
          Add New Certificate
        </h1>
      </div>

      <label htmlFor="addCertificate" className="cursor-pointer">
        <div
          style={{ boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.12)" }}
          className="shadow-certificate rounded-[16px] p-10 bg-[#FFFFFF] h-[246px]"
        >
          <p className="font-sans font-medium text-center text-base text-[#000000] pb-4 mt-[50px]">
            Click on the upload button to add new certificate
          </p>
          <div className="flex items-center justify-center mx-auto w-[133px] h-[47px] bg-gradient-to-r from-[#E52982] to-[#A72BC3] rounded-[10px]">
            <IoMdCloudUpload className="text-[#FFFFFF] text-2xl mr-4" />
            <p className="font-medium text-xs text-[#FFFFFF]">
              {" "}
              {isLoading ? "Loading..." : "Upload"}
            </p>
          </div>
          <input
            id="addCertificate"
            type="file"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      </label>
      <Toaster />
    </section>
  );
};

export default FileUploadSection;
