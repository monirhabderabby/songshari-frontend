import React, { useState } from 'react';
import { useRef } from 'react';
import profile from "../../../assets/images/activity/profile-user-sm.png.png";
import coolicon from "../../../assets/images/activity/coolicon.png";
import { Select } from "antd";
import banner from "../../../assets/images/activity/postBanner.png";
import { Link } from "react-router-dom";
import { firebaseStorage } from '../../../firebase.init';
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from "uuid";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";


const handleChange = () => { };
const MobileActivity = () => {
  const ref = useRef(null);
    const [photoURL, setPhotoUrl] = useState("");
    const [postRefetch, setPostRefetch] = useState(0);

    const handleMessage = event => {
        event.preventDefault();
        const post_info = {
            postBody: ref.current.value
        }

        fetch(`http://localhost:4000/member/post/add`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(post_info)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
                ref.current.value = '';
                setPostRefetch(postRefetch + 1);
            })
    }

    const photoHandler = async e => {
        const photo = e.target.files[0];
        const storageRef = ref(firebaseStorage, `post/${photo.name + uuidv4()}`);

        uploadBytes(storageRef, photo).then(async snapshot => {
            await getDownloadURL(snapshot.ref).then(url => {
                setPhotoUrl(url.toString());
            });
        });
    };

  return (
    <section className=" bg-[#F8F8FF] py-[5px]">
      <div className="max-w-[390px] mx-auto">
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
            <textarea ref={ref} id="message" className='text-[#757575] w-full focus:outline-none resize-none' name='post_description' placeholder='Write somethiings here......'></textarea>
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
                  onChange={handleChange}
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
            <button className="border-[1px] border-[rgba(0,0,0,0.1)] rounded-[50px] py-[6px] px-5 font-bold text-[17px] text-[#FFFFFF] bg-gradient-to-t from-[#942DD9] to-[#F22876] shadow-[0.872px_9.962px_20px_rgba(12, 78, 165, 0.3)]" >
                        Post
                    </button>
          </div>
        </div>

        <div
          className="bg-[#FFFFFF] rounded-md pb-[5px] mb-[10px] px-6"
          style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.12)" }}
        >
          <div className="max-w-[338px] pt-[30px] pb-[10px]  mx-auto flex  items-center">
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  className="w-[40px] h-[40px] rounded-[50px]"
                  src={profile}
                  alt="Not Available"
                />
                <div className="bg-[#1CE36F] absolute left-[23px] top-[28px]  w-[15px] h-[15px] border-[3px] rounded-[7px] border-[#FFFFFF]"></div>
              </div>

              <h2 className="ml-[10px] text-[14px] font-semibold text-[#333333]">
                Albert Don
              </h2>
            </div>
            <div className="ml-[40px]">
              <p className="text-xs font-normal text-[#333333]">
                @albertdon . 19h
              </p>
            </div>
          </div>
          <p className="ml-[76px] text-xs font-normal text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nam
            vel porta felis.
          </p>
          <div className="flex  items-center my-[10px] max-w-[338px]  mx-auto">
            <i className="fa-regular fa-heart"></i>
            <button
              className="rounded-[50px] ml-[25px] text-xs text-[#333333] w-[89px] h-[30px]"
              style={{ border: " 1px solid rgba(0, 0, 0, 0.2)" }}
            >
              Comment
            </button>
          </div>
        </div>

        <div
          className="bg-[#FFFFFF] rounded-md pb-[5px] mb-[10px] px-6"
          style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.12)" }}
        >
          <div>
            <div className="max-w-[338px]   pt-[30px] pb-[10px]  mx-auto flex  items-center">
              <div className="flex relative justify-center items-center">
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px]"
                    src={profile}
                    alt="Not Available"
                  />
                  <div className="bg-[#1CE36F] absolute left-[23px] top-[28px]  w-[15px] h-[15px] border-[3px] rounded-[7px] border-[#FFFFFF]"></div>
                </div>
                <h2 className="ml-[10px] text-[14px] font-semibold text-[#333333]">
                  Albert Don
                </h2>
              </div>
              <div className="ml-[40px]">
                <p className="text-xs font-normal text-[#333333]">
                  @albertdon . 19h
                </p>
              </div>
            </div>
            <p className="ml-[76px] text-xs font-normal text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Nam vel porta felis.
            </p>
            <div className="ml-[76px] py-[10px]">
              <img src={banner} alt="Not Available" />
            </div>
            <div className="flex items-center my-[10px] max-w-[338px]  mx-auto">
              <i className="fa-regular fa-heart"></i>
              <button
                className="rounded-[50px] ml-[25px] text-xs text-[#333333] w-[89px] h-[30px]"
                style={{ border: " 1px solid rgba(0, 0, 0, 0.2)" }}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to={'/mobileActivityNextPage'} className="text-[10px] text-[#333333] font-medium">
          Next Page
        </Link>
      </div>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </section>
  );
};

export default MobileActivity;
