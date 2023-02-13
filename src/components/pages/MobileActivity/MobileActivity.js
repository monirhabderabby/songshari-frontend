// Configuration
import React, { useState } from "react";

// Third party packages
import { Select } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

// Components
import { MdCreateNewFolder } from "react-icons/md";
import { firebaseStorage } from "../../../firebase.init";
import {
  useAddUserPostMutation,
  useGetMyPostsQuery,
} from "../../../Redux/features/Post/postApi";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import MobileActivityPost from "./MobileActivityPost";

const handleChange = () => {};
const MobileActivity = () => {
  const [photoURL, setPhotoUrl] = useState("");

  const userInfo = useSelector(
    (state) => state?.persistedReducer?.userInfo?.userInfo?.user
  );

  const [addUserPost] = useAddUserPostMutation();
  const { data: posts, isLoading, error } = useGetMyPostsQuery();
  const { register, handleSubmit, reset } = useForm();

  // Profile photo
  let { profilePhoto } = userInfo || {};

  profilePhoto = profilePhoto
    ? profilePhoto
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const photoHandler = async (e) => {
    const photo = e.target.files[0];
    const storageRef = ref(firebaseStorage, `post/${photo.name + uuidv4()}`);

    uploadBytes(storageRef, photo).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then((url) => {
        setPhotoUrl(url.toString());
      });
    });
  };

  const onSubmit = async (data) => {
    await addUserPost({
      attachment: photoURL,
      postBody: data.postText,
    });
    reset();
  };

  return (
    <section className="max-w-[1024px] mx-auto h-screen">
      <MobileBackButton name="Activity" />
      <div className="bg-[#FFFFFF] rounded-md pb-5 my-[10px] px-6 sticky top-0 drop-shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border-b border-[rgba(0, 0, 0, 0.2)] pt-[30px] flex">
            <img
              className="w-[40px] h-[40px] rounded-full mr-5"
              src={profilePhoto}
              alt="Not Available"
            />
            <textarea
              {...register("postText")}
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
                  onChange={handleChange}
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
              className="rounded-[50px] py-[3px] w-[65px] font-bold text-[16px] leading-[30px] text-[#FFFFFF] bg-gradient-to-t from-[#942DD9] to-[#F22876] shadow-[0.872px_9.962px_20px_rgba(12, 78, 165, 0.3)]"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      <MobileActivityPost {...{ posts, isLoading, error }} />
      <BottomNav></BottomNav>
    </section>
  );
};

export default MobileActivity;
