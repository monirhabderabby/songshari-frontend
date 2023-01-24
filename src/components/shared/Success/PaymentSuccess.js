import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  let params = [];
  for (const entry of searchParams.entries()) {
    params.push(entry);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-screen-sm min-w-screen-xsm w-full m-4 md:w-1/3 rounded-xl shadow-2xl overflow-hidden">
        <div className="py-8 bg-gradient-to-r from-[#f22876] to-[#942dd9]">
          <div className="flex justify-center items-center">
            <div className="bg-[#4bb543] h-16 flex items-center justify-center w-16 rounded-full">
              <CreditScoreIcon
                style={{ fontSize: "35px", color: "white" }}
              ></CreditScoreIcon>
            </div>
          </div>
          <h1 className="text-3xl text-[#4bb543] text-center font-bold">
            Thanks!
          </h1>
          <h1 className="text-2xl text-[#4bb543] text-center font-bold">
            Payment successful
          </h1>
        </div>
        <div className="py-5 flex justify-center items-center flex-col">
          <table class="table-auto my-4 w-4/5">
            <tbody>
              {params.map((item) => {
                console.log(item)
                return (
                  <tr className="">
                    <td  className="font-bold">{item[0][0].toUpperCase() + item[0].slice(1)} </td>
                    <td className="bg-white">{item[1][0].toUpperCase() + item[1].slice(1)} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="text-center">
            <Link to="/">
              <button className="bg-gradient-to-r from-[#f22876] to-[#942dd9] text-white px-4 py-2 rounded-3xl border-2 border-white">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
