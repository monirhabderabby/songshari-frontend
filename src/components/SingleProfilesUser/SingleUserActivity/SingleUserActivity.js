// configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { Select } from "antd";
import { MdCreateNewFolder } from "react-icons/md";

// components
import { useSelector } from "react-redux";
import {
  useAddUserPostMutation,
  useGetMyPostsQuery,
} from "../../../Redux/features/Post/postApi";
import { usePhotosUploadOnServerMutation } from "../../../Redux/features/fileUpload/fileUploadApi";
import { useGetProfileDetailsWIthAuthQuery } from "../../../Redux/features/userInfo/userApi";
import useDocumentTitle from "../../../assets/utilities/useDocumentTitle";
import { AllPostsOfLoggedInUser } from "./AllPostsOfLoggedInUser/AllPostsOfLoggedInUser";
import GoActivityPremiumCard from "./GoActivityPremiumCard";

const SingleUserActivity = () => {
  // hook variable declaration
  const [photoURL, setPhotoUrl] = useState("");
  const [postText, setPostText] = useState("");
  const [privacy, setPrivacy] = useState("public");
  const [canPost, setCanPost] = useState(true);

  // page title
  useDocumentTitle("Shongshari | Activity");

  // Redux Api Call
  const { data: profileData } = useGetProfileDetailsWIthAuthQuery();
  const [addUserPost, { isSuccess: addPostSuccess }] = useAddUserPostMutation();
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
    if (!profileData?.userMatrimonyPackageInfo?.package?.timelinePost) {
      return setCanPost(false);
    } else {
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

      setPostText("");
    }
  };

  const photoHandler = async (e) => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    photosUploadOnServer(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      setPhotoUrl(data?.data[0]?.path);
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
                className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-5 font-bold text-[17px] text-[#FFFFFF] bg-[linear-gradient(to_top,#942DD9,#F22876)] shadow-[0.872px_9.962px_20px_rgba(12,78,165,0.3)] cursor-pointer hover:bg-[linear-gradient(to_top,#F22876,#942DD9)] duration-500"
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

      {!canPost && <GoActivityPremiumCard {...{ canPost, setCanPost }} />}
    </div>
  );
};

export default SingleUserActivity;
