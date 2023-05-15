import React from 'react';
import { useNavigate } from 'react-router';

const GoPremiumCard = () => {
  const navigate = useNavigate()
    return (
      <div className="max-w-[280px] h-[400px] rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
        <p className="text-white my-8 text-2xl">
          Your swap limit is finished. Please Go premium to Swap more
        </p>
        <button
          onClick={() => navigate("/packages")}
          className="bg-white py-[9px] px-[20px]  rounded-[4px]  font-medium text-[20px] leading-[20px]"
        >
          Go Premium
        </button>
      </div>
    );
}
export default GoPremiumCard;
