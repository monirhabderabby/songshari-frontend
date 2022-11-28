import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import profile from "../../../assets/images/profile/Ellipse 8.png";
import { auth } from "../../../firebase.init";

const MobileOtherUsersProfile = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }
    return (
        <>
            <div className="bg-[#D9D9D9] max-w-[337px] flex justify-center items-center flex-col  mx-auto h-[92px]">
                <img src='https://i.ibb.co/YD5hC1J/Rectangle-4471.png'></img>
            </div>
            <div style={{ boxShadow: " 0px 10px 40px rgba(0, 0, 0, 0.03)" }} className="max-w-[337px] px-[23px]  rounded-sm mx-auto bg-[#ffffff]">
                <div>
                    <div className="flex justify-start items-center">
                        <img src={user ? user.photoURL : profile} className="mt-[-20px] w-16 h-16 rounded-full" alt="" />
                        <h2 className="pl-[7px] text-sm font-semibold text-[#000000]">Marvis Ighedosa</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className='heu col-span-1'>
                        <h1 className="">21 years old</h1>
                        <img src='https://i.ibb.co/HNrqrcw/image.png' className="ml-2"></img>
                        </div>
                       
                        <div>
                        <h1 className=" ml-6">Paris,France</h1>
                        </div>
                       
                        <div>
                        <h1 className="ml-8"> <i class="fa-regular fa-heart"></i> 257</h1>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileOtherUsersProfile;
