import React,{useState} from "react";
import "./animatedProfile.css";
import AnimatedCard from "./animatedCard";
import { useRef } from "react";
import { useEffect } from "react";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
const BannerProfileAnimation = () => {
    const [startPoint, setStartPoint] = useState(null);
    const animCard = useRef();    
    let offSetX;
    let offSetY;
    const handleMouseMove = (e) => {
        if(!startPoint) return ;
        const {clientX,clientY} = e;
        offSetX = clientX - startPoint.x
        offSetY = clientY - startPoint.y
        console.log(offSetX, "offSetX");
        console.log(offSetY, "offSetY");

        animCard.current.style.transform = `translate(${offSetX}px, ${offSetY}px)`
        // console.log(animCard.current.style, "style")    
    }

    const handleMouseUp = (e) => {
        setStartPoint(null);
        animCard.current.removeEventListener("mousemove",handleMouseMove);
        animCard.current.style.transform = "";
    }

    useEffect(()=>{
        animCard.current.addEventListener("mousedown", e => {
            const {clientX,clientY} = e
            setStartPoint({x:clientX,y:clientY});

            // Mouse move
            animCard.current.addEventListener("mousemove",handleMouseMove(e));

            // Mouse up
            animCard.current.addEventListener("mousemove",handleMouseUp(e));
            animCard.current.addEventListener("dragstart",e=>{
                e.preventDefault()
            })

        })
    })

    const images = [
        {url:"https://via.placeholder.com/150/92c952"},
        {url: "https://via.placeholder.com/150/771796"},
        {url: "https://via.placeholder.com/150/771796"},
        {url: "https://via.placeholder.com/150/771796"},
        {url: "https://via.placeholder.com/150/771796"},
    ]
  return (
    <div id="swiper">
        {
            images?.map((item,i)=><AnimatedCard key={i} animCard={animCard} url={item.url} index={i}/>)
        }
      
      {/* <div class="card" >
        <img src="https://via.placeholder.com/150/771796" alt="" />
      </div>
      <div class="card" >
        <img src="https://via.placeholder.com/150/24f355" alt="" />
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/150/d32776" alt="" />
      </div> */}
    </div>
  );
};

export default BannerProfileAnimation;
