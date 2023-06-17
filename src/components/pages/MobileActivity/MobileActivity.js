// Configuration
import React, { useState, useEffect } from "react";

// Third party packages
import { Select } from "antd";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

// Components
import { MdCreateNewFolder } from "react-icons/md";
import {
  useAddUserPostMutation,
  useGetMyPostsQuery,
} from "../../../Redux/features/Post/postApi";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import MobileActivityPost from "./MobileActivityPost";
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import GoMobActivityPremium from "./GoMobActivityPremium";
import customFunc from "../../../assets/utilities/customFunc";

const MobileActivity = () => {
  const [photoURL, setPhotoUrl] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [postText, setPostText] = useState("");
  const [canPost, setCanPost] = useState(true);
  const { data: profileData } = useGetProfileDetailsWIthAuthQuery();

  const userInfo = useSelector(
    (state) => state?.persistedReducer?.userInfo?.userInfo?.user
  );

  // Redux Api Call
  const [addUserPost, { isSuccess: addPostSuccess }] = useAddUserPostMutation();
  const [photosUploadOnServer, { isSuccess, data }] =
    usePhotosUploadOnServerMutation();
  const { data: posts, isLoading, error } = useGetMyPostsQuery();
  const { register, handleSubmit, reset } = useForm();

  let { profilePhoto, firstName, lastName } = userInfo || {};

  // profile photo decision maker
  const { profilePhotoDecisionMaker } = customFunc;

  const photoHandler = async (e) => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append("photos", photo);
    photosUploadOnServer(formData);
  };

  const onSubmit = async (data) => {
    if (!profileData?.userMatrimonyPackageInfo?.package?.timelinePost) {
      return setCanPost(false);
    } else {
      let postText = "";
      postText = data.postText;
      await addUserPost({
        data: {
          authorName: firstName + " " + lastName,
          attachment: photoURL,
          postBody: postText,
          privacy: privacy,
          profilePhoto: profilePhoto,
        },
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setPhotoUrl(data?.data?.file[0]?.fileName);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (addPostSuccess) {
      reset();
      setPhotoUrl("");
    }
  }, [addPostSuccess, reset]);

  return (
    <section className="max-w-[1024px] mx-auto h-screen">
      <MobileBackButton name="Activity" />
      <div className="bg-[#FFFFFF] rounded-md pb-5 my-[10px] px-6 sticky top-0 drop-shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border-b border-[rgba(0, 0, 0, 0.2)] pt-[30px] flex">
            <img
              className="w-[40px] h-[40px] rounded-full mr-5"
              src={profilePhotoDecisionMaker(profilePhoto)}
              alt="Not Available"
            />
            <textarea
              {...register("postText")}
              onChange={(e) => setPostText(e.target.value)}
              id="postText"
              className="text-[#757575] pt-1 w-full focus:outline-none"
              placeholder="Write somethings here......"
            ></textarea>
          </div>
          <div className="flex mt-2 mx-auto justify-between items-center">
            <div className="flex justify-between items-center">
              <label
                className={`mr-[10px] ${
                  photoURL ? "bg-green-100" : "bg-[#F7E9F8]"
                } rounded-[20px] cursor-pointer`}
              >
                <div
                  className={`flex items-center justify-center h-[30px] w-[60px] text-2xl ${
                    photoURL ? "text-green-400" : "text-[#E41272]"
                  }`}
                >
                  <MdCreateNewFolder />
                </div>
                <input
                  className="hidden"
                  type="file"
                  id="postPhoto"
                  accept=".png, .jpg, .jpeg"
                  onChange={photoHandler}
                />
              </label>
              <div className="ml-[20px]">
                <Select
                  defaultValue="Public"
                  style={{ width: 105, borderRadius: "50px" }}
                  onSelect={(val) => setPrivacy(val.value)}
                  options={[
                    {
                      value: "Public",
                      label: "Public",
                    },
                    {
                      value: "Friends",
                      label: "Friends",
                    },
                    {
                      value: "Only",
                      label: "Only",
                    },
                  ]}
                />
              </div>
            </div>
            <button
              className="special_profile_button text-[16px] w-24 h-10"
              // type="submit"
              disabled={postText === "" && photoURL === ""}
            >
              Post
            </button>
          </div>
        </form>
      </div>
      {!canPost && <GoMobActivityPremium {...{ canPost, setCanPost }} />}
      <MobileActivityPost {...{ posts, isLoading, error }} />
      <div className="h-20"></div>
      <BottomNav></BottomNav>
    </section>
  );
};

export default MobileActivity;
