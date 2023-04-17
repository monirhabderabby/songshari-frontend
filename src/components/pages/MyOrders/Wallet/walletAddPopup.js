import React,{useState,useEffect} from 'react';
import { useBuyPointMutation, useGetReferralPointQuery } from '../../../../Redux/features/wallet/walletApi';

const WalletAddPopup = ({setOpen}) => {
    const [amount, setAmount] = useState(1)
    const {data } = useGetReferralPointQuery();
    const [buyPoint, {data:buyPointData, isLoading, error}] = useBuyPointMutation();
    const handleSubmit = () =>{
        buyPoint({amount, desc:"Buy point"})
    }
    useEffect(()=>{
        if(buyPointData){
            console.log(buyPointData,"pilkasdflj")
            window.location.replace(buyPointData?.data)
        }
    },[buyPointData]);

    return (
        <>
      <div className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"></div>
      <div className="rounded sm:max-w-full w-[400px] space-y-4 bg-white p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-3xl font-extrabold text-gray-900">
          Enter amount of point
        </h2>

        <div>
          <div className="border flex items-center bg-gray-100 p-2 w-full rounded-xl">
            <input
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
              type="number"
              name="point"
              className="flex-1 outline-none h-[40px] bg-transparent text-lg text-gray-400"
              placeholder="enter amount of point"
            />
          </div>
          <p className='my-4 font-semibold'><span className='font-bold'>Cost:</span> DBT {amount}</p>
          <button
          onClick={handleSubmit}
            type="submit"
            className="font-bold flex-1 outline-none h-[40px] text-sm bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-full rounded-xl p-2 mt-3 text-white"
          >
            Buy point
          </button>
        </div>
        <button onClick={()=>setOpen(false)}
          className="flex-1 outline-none h-full text-sm bg-gray-200 w-full rounded-xl p-2 mt-3 text-black"
        >
          Cancel
        </button>
      </div>
    </>
    );
}

export default WalletAddPopup;
