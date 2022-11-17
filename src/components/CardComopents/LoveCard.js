import React from 'react';
import { Link } from 'react-router-dom';
import imgcover from "../../assets/images/banner/circle.png";
import fb from "../../assets/images/banner/facebook.png";
import insta from "../../assets/images/banner/Gradient-logo-Instagram-PNG.png";
import man from "../../assets/images/banner/p1.png";
import twi from "../../assets/images/banner/tw.png";
import style from "./lovecard.module.css";

const LoveCard = () => {
    const text = "Reade more->"
    return (
        <div className={`${style.main_weading_container}`}>
            <div className='pt-6 relative '>
                <div className={`w-96 bg-base-100 rounded-xl ${style.card_hober} shadow-lg`}>
                    <div className={` relative`}>
                        <div className={`h-64`}>
                            <img className={`${style.img_body} h-full`} src="https://placeimg.com/400/225/arch" alt="image" />
                        </div>
                        <div className='absolute top-44 left-28'>
                            <div className={`${style.author} relative`}>
                                <div>
                                    <img className={`${style.coverimg}`} src={imgcover} alt="" />
                                </div>
                                <div className='absolute top-11 left-11'>
                                    <img src={man} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-10 mt-10'>
                        <div className='text-left'>
                            <h2 className='text-2xl font-bold'>Love horoscope for Cancer There will be...</h2>
                            <p className='text-1xl py-4'>December 10, 2021</p>
                        </div>
                        <div className='py-4'>
                            <hr />
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <div className={`${style.world} flex justify-between`}>
                                <a href="">
                                    <img className={`${style.commonimg}`} src={fb} alt="" />
                                </a>
                                <a className='px-2' href=""><img className={`${style.commonimg}`} src={twi} alt="" /></a>
                                <a href=""><img className={`${style.commonimg}`} src={insta} alt="" /></a>
                            </div>
                            <div className={``}>
                                <Link to='/'>{text}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoveCard;