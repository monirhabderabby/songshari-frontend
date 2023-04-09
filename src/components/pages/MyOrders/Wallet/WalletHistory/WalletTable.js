import React from "react";
export const WalletTable = () => {
    const tableColumns = ["#", "Date", "Amount", "Payment Method", "Approval"];
    const rowData = [
        {
            id: 1,
            date: "24-02-2023",
            amount: 5000,
            method: "Bkash",
            approval: "Waiting",
        },
        {
            id: 2,
            date: "24-02-2023",
            amount: 5000,
            method: "Bkash",
            approval: "Waiting",
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
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item.date}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                            {item?.amount}
                                        </span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.method}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.approval}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-[10px]">
                {rowData?.map(item => {
                    return (
                        <div key={item.id} class="bg-white space-y-3 p-4 rounded-lg shadow">
                            <div class="flex items-center space-x-2 text-sm">
                                <div>
                                    <span class="text-blue-500 font-bold hover:underline">#{item?.id}</span>
                                </div>
                                <div class="text-gray-500">{item?.date}</div>
                                <div>
                                    <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                        ${item?.amount}
                                    </span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700">{item?.method}</div>
                            <div class="text-sm font-medium text-black">{item?.approval}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default WalletTable;
