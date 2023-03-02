// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { Select } from "antd";
import { ref } from "firebase/storage";
import { MdCreateNewFolder } from "react-icons/md";

// components
import { useSelector } from "react-redux";
import coolicon from "../../../assets/images/activity/coolicon.png";
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";
import {
  useAddUserPostMutation,
  useGetMyPostsQuery,
} from "../../../Redux/features/Post/postApi";
import { MovDynamicActivity } from "../../pages/DynamicProfilePage/MobileDynamicActivity/MovDynamicActivity";
import { AllPostsOfLoggedInUser } from "./AllPostsOfLoggedInUser/AllPostsOfLoggedInUser";

const SingleUserActivity = () => {
  // hook variable declaration
  const [photoURL, setPhotoUrl] = useState("");
  const [postText, setPostText] = useState("");
  const [privacy, setPrivacy] = useState("");

  // page title
  useDocumentTitle("Shongshari | Activity");

  // Redux Api Call
  const [addUserPost, { data: response, isSuccess: addPostSuccess }] =
    useAddUserPostMutation();
  const { data: posts, isLoading, error } = useGetMyPostsQuery();
  const [photosUploadOnServer, { isSuccess, data }] =
    usePhotosUploadOnServerMutation();

  const userInfo = useSelector(
    (state) => state?.persistedReducer?.userInfo?.userInfo?.user
  );

  const { profilePhoto, firstName, lastName } = userInfo || {};

  // decision making about profile photo
  let profile;
  profile = profilePhoto
    ? profilePhoto
    : "https://i.postimg.cc/Hn3ghQJn/images.jpg";

  // function declarations
  const addPost = async (event) => {
    event.preventDefault();
    const data = {
      authorName: firstName + " " + lastName,
      attachment: photoURL,
      postBody: postText,
      privacy: privacy,
      profilePhoto: profilePhoto,
    };

    await addUserPost({
      data,
    });
  };

  const photoHandler = async (e) => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append("photos", photo);
    photosUploadOnServer(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      setPhotoUrl(data?.data?.file[0]?.fileName);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (addPostSuccess) {
      setPostText("");
      setPhotoUrl("");
    }
  }, [addPostSuccess]);

  return (
    <div>
      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-y-[30px]">
          <div className="w-[457px] mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-white rounded-[10px] p-[30px] font-Inter font-normal text-[11px]">
            <div className="flex w-full h-[100px] gap-[19px]">
              <img
                className="w-12 h-10 rounded-full"
                src={profile}
                alt="profile"
              />
              <textarea
                id="message"
                value={postText}
                className="text-[#757575] w-full focus:outline-none resize-none"
                name="post_description"
                placeholder="Write somethings here......"
                onChange={(e) => setPostText(e.target.value)}
              ></textarea>
            </div>
            <hr />
            <div className="flex w-full justify-between mt-[30px]">
              <div className="flex items-center">
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
                <div className="flex items-center cursor-pointer rounded-[50px] px-3 py-2 text-[#333333]">
                  <Select
                    labelInValue
                    defaultValue={{
                      value: "public",
                      label: "Public",
                    }}
                    style={{
                      width: 100,
                      borderRadius: "50px",
                    }}
                    onSelect={(val) => setPrivacy(val.value)}
                    options={[
                      {
                        value: "public",
                        label: "Public",
                      },
                      {
                        value: "friend",
                        label: "Friends",
                      },
                      {
                        value: "only me",
                        label: "Only me",
                      },
                    ]}
                  />
                </div>
              </div>
              <button
                className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-5 font-bold text-[17px] text-[#FFFFFF] bg-gradient-to-t from-[#942DD9] to-[#F22876] shadow-[0.872px_9.962px_20px_rgba(12, 78, 165, 0.3)] cursor-pointer"
                onClick={addPost}
                disabled={postText === "" && photoURL === ""}
              >
                Post
              </button>
            </div>
          </div>
          <AllPostsOfLoggedInUser {...{ posts, isLoading, error }} />
        </div>
      </div>
      <div className="md:hidden w-full">
        <div
          className="bg-[#FFFFFF] rounded-md pb-[5px] my-[10px]"
          style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.12)" }}
        >
          <div className="max-w-[338px] border-[rgba(0, 0, 0, 0.2)] pt-[30px] pb-[50px] border-b-[1px] mx-auto flex px-6">
            <div className="relative">
              <img
                className="w-[40px] h-[40px] rounded-[50px]"
                src={profile}
                alt="Not Available"
              />
            </div>
            <div className="ml-[25px]">
              <textarea
                ref={ref}
                id="message"
                className="text-[#757575] w-full focus:outline-none resize-none"
                name="post_description"
                placeholder="Write somethiings here......"
              ></textarea>
            </div>
          </div>
          <div className="flex max-w-[338px] mt-[20px] mx-auto justify-between items-center px-6">
            <div className="flex justify-between items-center">
              <button className="bg-[#F7E9F8] flex justify-center items-center w-[51px] h-[31px] rounded-[20px]">
                <img src={coolicon} alt="Not Available" />
              </button>
              <div className="ml-[20px]">
                <Select
                  defaultValue="Public"
                  style={{ width: 105, borderRadius: "50px" }}
                  options={[
                    {
                      value: "Public",
                      label: "Public",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "disabled",
                      disabled: true,
                      label: "Disabled",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                  ]}
                />
              </div>
            </div>
            <button
              className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-5 font-bold text-[17px] text-[#FFFFFF] bg-gradient-to-t from-[#942DD9] to-[#F22876] shadow-[0.872px_9.962px_20px_rgba(12, 78, 165, 0.3)]"
              onClick={addPost}
              disabled={postText === "" && photoURL === ""}
            >
              Post
            </button>
          </div>
          <MovDynamicActivity postRefetch={response}></MovDynamicActivity>
        </div>
      </div>
    </div>
  );
};

export default SingleUserActivity;
