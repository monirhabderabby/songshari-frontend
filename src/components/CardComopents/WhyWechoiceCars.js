import React from 'react';
import img1 from "../../assets/images/banner/peoplepic1.png";
import style from "./whywechoice.module.css";
const WhyWechoiceCars = () => {
    const fontFamily = () => {
        return (
            {
                fontFamily: "Georgia, 'Times New Roman', Times, serif"
            }
        )
    }
    return (
        <div style={fontFamily()} className='my-4 flex justify-center'>
            <div className={`card card-container rounded-lg w-11/12 bg-white shadow-xl py-6 ${style.meet_card}`}>
                <figure className="px-10 pt-10 flex justify-center">
                    <img className="card-img-container" src={img1} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center px-2 pt-5">
                    <h2 className="card-title text-2xl font-semibold">Dating</h2>
                </div>
                <div className='flex justify-center py-6 px-6'>
                    <p className='text-center font-bold'>Dating - Where two people who are attracted to each other spend time together.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyWechoiceCars;