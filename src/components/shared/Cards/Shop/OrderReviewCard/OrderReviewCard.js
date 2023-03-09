import React, { useEffect, useState } from "react";

// Third party packages
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { calculatePercentage } from "../../../../../assets/utilities/CheckoutHelperCalculation/checkoutHelperCalculation";
import { decreaseSubTotal, increaseSubTotal } from "../../../../../Redux/features/checkout/billingSummarySlice";
import { decreaseCartCount } from "../../../../../Redux/features/Shop/shopSlice";

const OrderReviewCard = ({ product, cart, setCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.totalPrice);

    const dispatch = useDispatch();
    const { name, price, photos, discount, _id } = product || {};

    const productQuantityDecreaseHandler = () => {
        dispatch(decreaseSubTotal(product?.price));
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
        }
    };
    const productQuantityIncreaseHandler = () => {
        dispatch(increaseSubTotal(product?.price));
        setQuantity(prevCount => prevCount + 1);
    };
    useEffect(() => {
        setTotalPrice(quantity * product.price);
    }, [setTotalPrice, quantity, product]);

    // remove item from order review
    const handleRemoveCart = () => {
        const updatedCart = cart?.filter(item => item._id !== _id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        dispatch(decreaseCartCount());
    };

    useEffect(() => {}, [totalPrice]);

    return (
        <div className="flex items-center gap-3 w-full pb-5 border-b border-[#E0E0E0] mb-4">
            <div className="w-28">
                <img className="w-20 h-20 rounded border" src={photos[0]?.url} alt="" />
            </div>
            <div className="w-full">
                <div className="flex justify-between items-start mb-3">
                    <p className="max-w-[156px] text-xs leading-5">{name}</p>
                    <button onClick={handleRemoveCart}>
                        <RxCross2 className="text-xs leading-6 font-medium hover:text-gray-800 duration-300" />
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        <button
                            className="shadow-[0px_2px_40px_rgba(133,133,133,0.08)] p-2 border border-[#B2BCCA] rounded-[3px] disabled:border-[rgba(0,0,0,0.26)] disabled:bg-[#bdbdbd] disabled:cursor-not-allowed"
                            onClick={() => productQuantityDecreaseHandler()}
                            disabled={quantity <= 1}
                        >
                            <AiOutlineMinus />
                        </button>
                        <p className="text-sm text-[#4F4F4F] leading-5 w-10 text-center">{quantity}</p>
                        <button
                            className="shadow-[0px_2px_40px_rgba(133,133,133,0.08)] p-2 border border-[#B2BCCA] rounded-[3px] disabled:border-[rgba(0,0,0,0.26)] disabled:bg-[#bdbdbd]"
                            onClick={() => productQuantityIncreaseHandler()}
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="leading-5 text-xs text-[#B2BCCA] line-through">{calculatePercentage(price, discount)}</p>
                        <p className="leading-5 font-semibold text-base">{totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReviewCard;
