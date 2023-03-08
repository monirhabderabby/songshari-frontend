// Configuration
import React, { useEffect, useState } from "react";

// Third party packages
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { HiOutlineGlobe, HiTag } from "react-icons/hi";
import { TbCreditCard, TbCurrencyTaka } from "react-icons/tb";

// Third party packages
import Rating from "@mui/material/Rating";

// Components
import { useDispatch } from "react-redux";
import isWishlisted from "../../../../../assets/utilities/isWishlisted/isWishlisted";
import { increaseWishlistCount } from "../../../../../Redux/features/Shop/shopSlice";
import SelectSizeCard from "./SelectSizeCard";

const SingleProductBasicDetails = ({ data, product }) => {
    const [wishlisted, setWishlisted] = useState(false);
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState(0);
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const { name, price, oldPrice, discount, _id } = product || {};

    // function declaration
    const handleWishList = () => {
        dispatch(increaseWishlistCount());
        setWishlisted(true);
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    useEffect(() => {
        setWishlisted(isWishlisted(_id));
    }, [_id]);

    console.log(wishlisted);
    return (
        <div>
            <h1 className="text-[#18181B] text-3xl leading-10 font-bold mb-4">{name}</h1>
            <div className="flex items-center gap-3 mb-8">
                <Rating name="productRating" value={data.rating} precision={0.5} />
                <p className="text-sm leading-5 font-medium text-[#52525B]">{data.productReviews.length} Reviews</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center text-[#18181B] text-3xl leading-10 font-bold">
                    <TbCurrencyTaka />
                    <p>{price}</p>
                </div>
                <div className="flex items-center text-[#71717A] text-xl leading-8 font-bold line-through">
                    <TbCurrencyTaka />
                    <p>{oldPrice ? oldPrice : (Number(price) * discount) / 100}</p>
                </div>
            </div>
            <div className="flex items-center gap-1 text-[#71717A] text-sm leading-5 font-medium mb-8">
                <HiTag />
                <p>Save {discount}% right now</p>
            </div>
            <div className="mb-8">
                <h2 className="mb-3 font-bold text-[#18181B]">Features:</h2>
                <ul className="list-disc ml-4">
                    {data.features.map((f, i) => (
                        <li key={i} className="text-[#52525B] leading-9 font-medium">
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-8">
                <p className="text-[#52525B] text-xs leading-4 mb-4">
                    Select Size <span className="text-[#272727] font-bold capitalize">{data.sizes[selectedSize].type}</span>
                </p>
                <div className="flex items-center gap-2">
                    {data.sizes.map((size, i) => (
                        <SelectSizeCard key={i} {...{ size, setSelectedSize, selectedSize, i }} />
                    ))}
                </div>
            </div>
            {/* Submit btn */}
            <div className="flex items-center gap-3 mb-8">
                <button
                    className="text-white w-[200px] h-[50px] rounded-md text-center font-bold"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #E22987 0%, #A82BC5 100%)",
                    }}
                >
                    Add To Cart
                </button>
                <button
                    className={`border border-[#D4D4D8] hover:border-[#b7b7bd] duration-300 ${
                        wishlisted ? "bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]" : "bg-[#FAFAFB]"
                    }  rounded-md w-[50px] h-[50px] flex justify-center items-center`}
                    onClick={handleWishList}
                >
                    {wishlisted ? <AiFillHeart className="text-[26px] text-white" /> : <AiOutlineHeart className="text-[26px]" />}
                </button>
            </div>
            <div>
                <div className="flex items-center gap-2 text-[#52525B] mb-4">
                    <HiOutlineGlobe className="text-[16px]" />
                    <p className="text-sm font-medium">Free shipping worldwide</p>
                </div>
                <div className="flex items-center gap-2 text-[#52525B] mb-4">
                    <TbCreditCard className="text-[16px]" />
                    <p className="text-sm font-medium">100% Secured Payment</p>
                </div>
                <div className="flex items-center gap-2 text-[#52525B] mb-4">
                    <BiUser className="text-[16px]" />
                    <p className="text-sm font-medium">Made by the Professionals</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProductBasicDetails;
