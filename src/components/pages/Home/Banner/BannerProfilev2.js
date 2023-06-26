/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import "./App.css";
import styles from "./../../../../assets/css/SwapAndMatchv2.module.css"
import { SwipAndMatchCard } from "../../../shared/Cards/SwipeAndMatch/SwipAndMatchCard";
import {  useRejectSwipeAndMatchMemberMutation, useSwipeProfileLikeMutation } from "../../../../Redux/features/userInfo/withoutLoginApi";
import { useNavigate } from "react-router";
export default function BannerProfilev2({swapable, setSwapable, swipematch, auth}) {
const navigate = useNavigate();
    const [likeMember, { data: swapLikeData }] = useSwipeProfileLikeMutation();
    const [rejectMember,{data:rejectData}] = useRejectSwipeAndMatchMemberMutation();

    

    const members = swipematch?.data?.members || [];

  const [liked, setLiked] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [current, setCurrent] = useState(0);
  const [like, setLike] = useState(false);
  const [reject, setReject] = useState(false);
  const length = members?.length;
  const nextSlide = () => {
    // setTimeout(() => {
    setLike(true)
    // }, 2000)
  };

  useEffect(() => {
    if (like) {
      setCurrent(current === length - 1 ? 0 : current + 1);
      setLike(false);
    }
  }, [like])
  useEffect(() => {
    if (reject) {
      setCurrent(current === 0 ? length - 1 : current - 1);
      setReject(false);
    }
  }, [reject])
  const prevSlide = () => {
    setReject(true);
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [current]);

  useEffect(()=>{
    if(rejectData){
        nextSlide();
    }
  },[rejectData])

  useEffect(()=>{
    if(swapLikeData){
        nextSlide();
    }
  },[swapLikeData])

  useEffect(()=>{
    setLiked(false);
    setRejected(false)
  },[current])

  const addLikeToMember = () => {
    if (!auth) {
      navigate("/login");
      return;
    }
    likeMember(members[current]?._id);
    setLiked(true);
    setRejected(false)
  }
  const addRejectToMember = () => {
    if (!auth) {
      navigate("/login");
      return;
    }
    rejectMember(members[current]?._id);
    setLiked(false);
    setRejected(true);
  }


  if (!Array.isArray(members) || members.length <= 0) {
    return null;
  }
  return (
    <div className={styles.image_slider}>      
      <section className="">
        <div className={styles.left}>
          <ArrowBackIosIcon onClick={addLikeToMember} />
        </div>
        <div className={styles.right}>
          <ArrowForwardIosIcon onClick={addRejectToMember} />
        </div>
        {members?.map((data, index) => {
          return (
            <div
              className={index === current ? `${styles.currentSlide + " w-[230px] h-[350px] "+ styles.active} ` : `${styles.currentSlide}`}
              key={index}
            > 
            {/* <div className="absolute">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptatibus officia aut repudiandae! Et, beatae aliquam debitis sunt dolores reiciendis? Est quas necessitatibus fuga similique corrupti quisquam nisi, perspiciatis repudiandae!
            </div>                */}
              {/* {index === current && <SingleProfileImage {...{currentSlide}} />} */}
              {/* <SwipAndMatchCard /> */}
              {index === current && <SwipAndMatchCard {...{ data, auth, nextSlide, prevSlide,liked,setLiked,setRejected, rejected,swapable, setSwapable }} />}
              

            </div>
          );
        })}
      </section>
    </div>
  );
}