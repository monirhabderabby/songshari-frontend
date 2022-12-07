import React from "react";

import icon1 from "../../../../assets/images/SecureVerified/icon01.png";
import icon2 from "../../../../assets/images/SecureVerified/icon02.png";
import icon3 from "../../../../assets/images/SecureVerified/icon03.png";
import icon4 from "../../../../assets/images/SecureVerified/icon04.png";

const SecureVerified = () => {
    const info = [
        { id: 1, text: "100% Verified", img: icon1 },
        { id: 2, text: "Most Secure", img: icon2 },
        { id: 3, text: "100% Privacy", img: icon3 },
        { id: 4, text: "Smart Matching", img: icon4 },
    ];

    return (
        <div className="custom-container pt-16 md:pt-32 lg:pt-20 md:pb-12 lg:pb-20 w-full mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-4 lg:gap-6">
                {info.map(i => (
                    <div
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        key={i.id}
                        className={"w-full h-52 md:h-44 lg:h-52 rounded-2xl px-8 pt-8 pb-6 shadow-md hover:shadow-xl hover:-translate-y-5"}
                        style={{ boxShadow: "0px 5px 20px 0px rgba(176, 171, 193, 0.4)" }}
                    >
                        <div className="mb-5 md:mb-3 lg:mb-5 h-3/5 md:h-1/2 lg:h-3/5">
                            <img className="mx-auto" src={i.img} alt="Not Available" />
                        </div>
                        <p className="text-xl md:text-lg lg:text-xl text-center whitespace-nowrap md:mt-8 lg:mt-0 mb-2">{i.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecureVerified;
