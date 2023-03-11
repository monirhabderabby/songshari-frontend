// configuration
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

// Third party packages
import { CiShoppingCart } from "react-icons/ci";

const TopMonthSellerCard = ({ picture }) => {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        function handleScroll() {
            const lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (lastScrollTop > 0) {
                setScrollDirection(lastScrollTop > window.lastScrollTop ? "down" : "up");
                window.lastScrollTop = lastScrollTop;
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.querySelector(".my-element").setAttribute("data-aos", `fade-${scrollDirection}`);
        AOS.refresh();
    }, [scrollDirection]);
    return (
        <div className="bg-gray-50 mx-auto rounded-xl my-element" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos="fade-up">
            <div className="py-6 px-3">
                <img src={picture} alt="userImage" className="w-[280px] h-[188px] rounded-[12px]" />
                <div className="mt-[16px]">
                    <div className="flex justify-between">
                        <p className="text-[18px] font-normal text-[#272727]">৳500</p>
                        <CiShoppingCart className="text-[24px] text-[#CFCFCF]" />
                    </div>
                    <p className="text-[#272727] text-left w-[228px] text-[14px] font-semibold font-playFair mt-[16px]">
                        Premium Beautiful Cloth for man and woman
                    </p>
                    <div className="flex items-center mt-[16px] gap-x-[16px]">
                        <div className="flex items-center gap-x-[6px]">
                            <div className="w-[16px] h-[16px] rounded-full bg-[#CFCFCF]"></div>
                            <p className="text-[14px] text-[#CFCFCF] font-normal font-playFair">Jacket</p>
                        </div>
                        <div className="flex items-center gap-x-[6px]">
                            <div className="w-[16px] h-[16px] rounded-full bg-[#CFCFCF]"></div>
                            <p className="text-[14px] text-[#CFCFCF] font-normal font-playFair">Premium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMonthSellerCard;
