import React from "react";
import { useGetMyWalletHistoryQuery } from "../../../../../Redux/features/wallet/walletApi";
import { dateFormat } from "../../../../../assets/utilities/Date/DateFormate";
export const WalletTable = () => {
  const tableColumns = ["#", "Date", "Amount", "Payment Method", "Approval"];

  const { data } = useGetMyWalletHistoryQuery({ page: 1, limit: 10 });
  return (
    <>
      <div class="overflow-auto rounded-lg shadow hidden md:block">
        <table class="w-full">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              {tableColumns?.map((item, index) => {
                return (
                  <th
                    key={index}
                    class="w-[150px] p-3 text-sm font-semibold tracking-wide text-left"
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            {data?.data?.transactions?.map((item, i) => {
              return (
                <tr key={item._id} class="bg-white">
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span class="font-bold text-blue-500 hover:underline">
                      {i + 1}
                    </span>
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {dateFormat(item?.createdAt)}
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span class={`p-1.5 text-xs font-medium uppercase tracking-wider ${item?.status==="increase" ?"bg-green-200" : "bg-red-200"} text-green-800  rounded-lg bg-opacity-50`}>
                      {item?.amount}
                    </span>
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item?.paymentMethod}
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    approved
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-[10px]">
        {data?.data?.transactions?.map((item, i) => {
          return (
            <div key={item.id} class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <span class="text-blue-500 font-bold hover:underline">
                    #{i + 1}
                  </span>
                </div>
                <div class="text-gray-500">{dateFormat(item?.createdAt)}</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    ${item?.amount}
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">{item?.paymentMethod}</div>
              <div class="text-sm font-medium text-black">approved</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WalletTable;
