import React from 'react'
import '../../assets/css/UserCard.css';
export const NotificationCard = () => {
  return (
    <div>
         <div className="">
                <div className="">
                    <section className="card w-[385px] h-[280px] user-card rounded-[8px] py-[24px] px-[35px]">
                        <div className="mt-[28px] flex gap-x-[24px]">
                            <img className="w-[85px] h-[85px] rounded-full" src='https://i.ibb.co/BGznYnj/Ellipse-19.png' alt="profile" />
                            <div>
                                <h1 className="text-[24px] font-normal leading-[29px] text-white">Jhon William</h1>
                                <h3 className="text-[20px] font-normal leading-[29px] text-white mt-[16px]">Age: 26</h3>
                            </div>
                        </div>
                        <div className="flex justify-center mt-[44px]">
                            <button className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[4px] py-[9px] px-[14px]">
                                View Request
                            </button>
                        </div>
                    </section>
                </div>   
            </div>
    </div>
  )
}
