// configuration
import React, { useEffect } from "react";

// Third party packages
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AiFillCamera } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

// Components
import {
  useGetProfileDetailsWIthAuthQuery,
  useSetPersonalDetailsMutation,
} from "../../../Redux/features/userInfo/userApi";
import { firebaseStorage } from "../../../firebase.init";
import { toast, Toaster } from "react-hot-toast";

const MobileUsersProfile = () => {
  const { data } = useGetProfileDetailsWIthAuthQuery();
  const [setPersonalDetails, { data: profilePhotoResponse }] =
    useSetPersonalDetailsMutation();

  const profilePhotoUploadHandler = (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(
      firebaseStorage,
      `profile/${photo?.name + uuidv4()}`
    );
    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        const data = {
          profilePhoto: url.toString(),
        };
        setPersonalDetails(data);
      });
    });
  };

  useEffect(() => {
    if (profilePhotoResponse?.message?.includes("Update successful")) {
      toast.success("Updated successfully");
    }
  }, [profilePhotoResponse]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full mx-7">
          <div className="bg-[#D9D9D9] rounded-t-[4px] flex justify-center items-center flex-col  mx-auto h-[92px]">
            <h1 className="text-[#979C9E] pb-[10px] text-xs">
              Upload a cover photo
            </h1>
            <i className="fa-solid text-[#979C9E]  fa-camera"></i>
          </div>
          <div
            style={{ boxShadow: " 0px 10px 40px rgba(0, 0, 0, 0.03)" }}
            className="px-[23px] w-full rounded-sm mx-auto bg-[#ffffff]"
          >
            <div>
              <div className="flex justify-start items-center">
                <label htmlFor="uploadProfilePhoto" className="relative">
                  <img
                    src={
                      data?.profilePhoto
                        ? data?.profilePhoto
                        : "https://cdn-icons-png.flaticon.com/512/194/194938.png"
                    }
                    className="mt-[-20px] w-16 h-16 rounded-full border border-slate-300 p-[1.5px] bg-white"
                    alt="Not Available"
                  />
                  <input
                    type="file"
                    id="uploadProfilePhoto"
                    name="uploadProfilePhoto"
                    className="hidden"
                    onChange={profilePhotoUploadHandler}
                  />
                  <div className="absolute right-0 bg-[#DADBE1] group rounded-full bottom-[5%]">
                    <AiFillCamera className="text-[16px] m-[2px]" />
                  </div>
                </label>
                <h2 className="pl-[7px] text-sm font-semibold text-[#000000]">
                  {data?.firstName + " " + data?.lastName}
                </h2>
              </div>
              <div>
                <h3 className="text-[#737373] w-[165px] mt-[16px] pb-[10px] border-[#737373] text-xs font-normal border-b-[1px]">
                  {data?.email ? data?.email : "Not Provided"}
                </h3>
                <h3 className="text-[#737373] w-[165px] mt-[16px] pb-[10px] border-[#737373] text-xs font-normal border-b-[1px]">
                  {data?.phone ? data?.phone : "Not Provided"}
                </h3>
                <h3 className="text-[#737373] w-[165px] mt-[16px]  text-xs font-normal pb-[20px] capitalize">
                  {data?.maritalStatus ? data?.maritalStatus : "Not Provided"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MobileUsersProfile;
