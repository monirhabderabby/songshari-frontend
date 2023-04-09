import React from "react";
export const RefWithdrawHistoryTable = () => {
    const tableColumns = ["#", "Notes", "Points", "Date"];
    const rowData = [
        {
            id: 1,
            detailes: "Withdray request done",
            amount: 5000,
            date: "20-03-2023",
        },
    ];
    return (
        <>
            <div class="overflow-auto rounded-lg shadow hidden md:block">
                <table class="w-full">
                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            {tableColumns?.map((item, index) => {
                                return (
                                    <th key={index} class="w-[150px] p-3 text-sm font-semibold tracking-wide text-left">
                                        {item}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        {rowData?.map(item => {
                            return (
                                <tr key={item.id} class="bg-white">
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="font-bold text-blue-500 hover:underline">{item.id}</span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item.detailes}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                            {item?.amount}
                                        </span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.date}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-[10px]">
                {rowData?.map(item => {
                    return (
                        <div
                            key={item.id}
                            class="bg-white group space-y-3 p-4 rounded-lg shadow hover:bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] hover:text-white"
                        >
                            <div class="flex items-center space-x-2 text-sm">
                                <div>
                                    <span class="text-blue-500 font-bold hover:underline">#{item?.id}</span>
                                </div>
                                <div class="text-gray-500 group-hover:text-white">{item?.date}</div>
                                <div>
                                    <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 group-hover:text-white bg-green-200 rounded-lg bg-opacity-50 group-hover:bg-green-400">
                                        ${item?.amount}
                                    </span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700 group-hover:text-white">{item?.detailes}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default RefWithdrawHistoryTable;
