import React from "react";
import { useGetMyWithdrawRequestsQuery } from "../../../../../../Redux/features/referral/referralApi";
import { dateFormat } from "../../../../../../assets/utilities/Date/DateFormate";
export const RefWithdrawHistoryTable = () => {
  const tableColumns = ["#", "Notes", "Points", "Date", "Status"];
  const { data } = useGetMyWithdrawRequestsQuery({ page: "", limit: "" });
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
            {data?.data?.requests?.map((item, i) => {
              return (
                <tr key={item._id} class="bg-white">
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span class="font-bold text-blue-500 hover:underline">
                      {i + 1}
                    </span>
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.note}
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      {item?.amount}
                    </span>
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {dateFormat(item?.createdAt)}
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span
                      class={`p-1.5 text-xs font-medium uppercase tracking-wider  text-green-800 ${
                        item.status === "pending"
                          ? "bg-yellow-200"
                          : "bg-green-200"
                      } rounded-lg bg-opacity-50`}
                    >
                      {item?.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-[10px]">
        {data?.data?.requests?.map((item, i) => {
          return (
            <div
              key={item._id}
              class="bg-white group space-y-3 p-4 rounded-lg shadow hover:bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] hover:text-white"
            >
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <span class="text-blue-500 font-bold hover:underline">
                    #{i + 1}
                  </span>
                </div>
                <div class="text-gray-500 group-hover:text-white">
                  {dateFormat(item?.createdAt)}
                </div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 group-hover:text-white bg-green-200 rounded-lg bg-opacity-50 group-hover:bg-green-400">
                    ${item?.amount}
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700 group-hover:text-white">
                {item?.note}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RefWithdrawHistoryTable;
