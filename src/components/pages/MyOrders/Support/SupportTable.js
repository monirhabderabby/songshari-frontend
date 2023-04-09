import React from "react";
export const SupportTable = () => {
    const tableColumns = ["#", "ID", "Status", "Category", "Created at", "New Reply", "Action"];
    const rowData = [
        {
            id: 1,
            ticket: 2550,
            status: "pending",
            category: "Sales",
            createdAt: "6-5-2023",
            newReply: 2,
        },
        {
            id: 2,
            ticket: 3000,
            status: "opened",
            category: "Account",
            createdAt: "24-04-2023",
            newReply: 1,
        },
    ];

    const colorChooser = status => {
        if (status === "pending") {
            return "text-orange-800 bg-orange-200";
        } else if (status === "opened") {
            return "text-green-800 bg-green-200";
        }
    };
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
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item.ticket}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span
                                            class={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${colorChooser(
                                                item?.status
                                            )}`}
                                        >
                                            {item?.status}
                                        </span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.category}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.createdAt}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.newReply}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <button className="bg-red-100 text-red-500 p-2 rounded-[4px]">
                                            View <br /> detailes
                                        </button>
                                    </td>
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
                            class="bg-white group space-y-3 p-4 rounded-lg shadow hover:bg-[linear-gradient(315deg,#eb4786_0%,#b854ab_74%)] hover:text-white"
                            key={item.id}
                        >
                            <div class="flex items-center space-x-2 text-sm">
                                <div>
                                    <span class="text-blue-500 font-bold hover:underline">#{item?.id}</span>
                                </div>
                                <div>
                                    <span
                                        class={`p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 ${colorChooser(
                                            item?.status
                                        )}`}
                                    >
                                        {item?.status}
                                    </span>
                                </div>
                            </div>
                            <div class="text-sm group-hover:text-white">
                                <span class="text-[14px] font-semibold text-gray-600">Category:</span> <span>{item?.category}</span>
                            </div>
                            <div class="text-sm group-hover:text-white">
                                <span class="text-[14px] font-semibold text-gray-600">Created At:</span> <span>{item?.createdAt}</span>
                            </div>
                            <div class="text-sm group-hover:text-white">
                                <button class="bg-red-200 w-full text-red-500 py-1 rounded-[4px]">View Detailes</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SupportTable;
