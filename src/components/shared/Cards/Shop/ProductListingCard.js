// configuration
import React from "react";
import { useNavigate } from "react-router";

// components
import img from "../../../../assets/images/shop/Listing/Rectangle.png";

const ProductListingCard = ({ product }) => {
    const navigate = useNavigate();
    const { name, description, price, _id } = product || {};

    // descript length cut
    let finalDescription;
    if (description?.length > 80) {
        finalDescription = description?.slice(0, 80) + "...";
    } else {
        finalDescription = description;
    }

    return (
        <div className="pt-16" onClick={() => navigate(`/shop/singleProduct/${_id}`)}>
            <div className="w-full md:w-[615px] h-[260px] lg:h-[320px] bg-[linear-gradient(104.63deg,#75204C_1.61%,_#360C41_97.81%)] rounded-[18px] px-[20px] lg:px-[35px] py-[31px] relative shadow-[2px_2px_10px_2px_rgba(0,0,0,0.12)]">
                <img loading="lazy" src={img} alt="product" className="absolute -top-[30%] lg:-top-[20%] right-[20%] w-[330px] h-[231px]" />
                <div className="text-white flex flex-col items-start justify-end h-full font-playFair">
                    <p className="text-[10px] lg:text-[14px] font-normal">BRAND</p>
                    <p className="text-[16px] lg:text-[24px] font-normal">{name}</p>
                    <p className="text-[10px] lg:text-[14px] font-normal" dangerouslySetInnerHTML={{ __html: finalDescription }}></p>
                    <p className="text-[22px] lg:text-[32px] font-bold">{price} BDT</p>
                </div>
            </div>
        </div>
    );
};

export default ProductListingCard;
