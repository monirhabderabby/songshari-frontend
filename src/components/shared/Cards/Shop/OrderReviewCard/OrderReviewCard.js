import React, { useEffect, useState } from "react";

// Third party packages
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const OrderReviewCard = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [totalPrice, setTotalPrice] = useState(product.totalPrice);
  const [prevPrice, setPrevPrice] = useState(product.prevPrice);

  const productQuantityDecreaseHandler = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const productQuantityIncreaseHandler = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    setTotalPrice(quantity * product.price);
    setPrevPrice(quantity * product.prevPrice);
  }, [setTotalPrice, setPrevPrice, quantity, product]);

  return (
    <div className="flex items-center gap-3 w-full pb-5 border-b border-[#E0E0E0] mb-4">
      <div className="w-28">
        <img className="w-20 h-20 rounded border" src={product.img} alt="" />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start mb-3">
          <p className="max-w-[156px] text-xs leading-5">{product.name}</p>
          <button>
            <RxCross2 className="text-xs leading-6 font-medium" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <button
              className="shadow-[0px_2px_40px_rgba(133,133,133,0.08)] p-2 border border-[#B2BCCA] rounded-[3px]"
              onClick={() => productQuantityDecreaseHandler()}
            >
              <AiOutlineMinus />
            </button>
            <p className="text-sm text-[#4F4F4F] leading-5 w-10 text-center">
              {quantity}
            </p>
            <button
              className="shadow-[0px_2px_40px_rgba(133,133,133,0.08)] p-2 border border-[#B2BCCA] rounded-[3px]"
              onClick={() => productQuantityIncreaseHandler()}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="text-center">
            <p className="leading-5 text-xs text-[#B2BCCA] line-through">
              {prevPrice}
            </p>
            <p className="leading-5 font-semibold text-base">{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReviewCard;
