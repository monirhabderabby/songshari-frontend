import React from 'react'

export const UsersButton = () => {
  return (
    <div>
        <div className="max-w-[523px] m flex justify-around ml-20 mt-[44px]">
                    <button className="py-[9px] px-[20px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-[4px] text-white font-medium text-[20px] leading-[20px]">
                       Gold
                    </button>
                    <button className="py-[9px] px-[20px]  rounded-[4px]  font-medium text-[20px] leading-[20px]">
                        Diamond
                    </button>
                    <button className="py-[9px] px-[20px]  rounded-[4px]  font-medium text-[20px] leading-[20px]">
                        Premium
                    </button>
                </div>
    </div>
  )
}
