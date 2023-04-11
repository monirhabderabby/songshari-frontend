import moment from "moment";
import React, { useEffect, useState } from "react";

export const AllReferedTable = ({ referral }) => {
    const [referredTo, setReferredTo] = useState(null);
    console.log(referral);
    const tableColumns = ["#", "Referred User", "Date"];
    const rowData = [
        {
            id: 1,
            reffered: "Monir Hossain",
            status: "pending",
            date: "20-03-2023",
        },
        {
            id: 2,
            reffered: "Hridoy Das",
            status: "active",
            date: "20-03-2023",
        },
    ];

    // set reffered To
    useEffect(() => {
        if (referral?.length > 0) {
            setReferredTo(referral[0]?.referredTo);
        }
    }, [referral]);

    const colorChooser = status => {
        if (status === "pending") {
            return "text-orange-800 bg-orange-200";
        } else if (status === "active") {
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
                        {referredTo !== null &&
                            referredTo?.map((item, index) => {
                                return (
                                    <tr key={item._id} class="bg-white">
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <span class="font-bold text-blue-500 hover:underline">{index + 1}</span>
                                        </td>
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{`${item?.firstName} ${item?.lastName}`}</td>
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{moment(item?.createdAt).format("LL")}</td>
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
                                    <span
                                        class={`p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 ${colorChooser(
                                            item?.status
                                        )}`}
                                    >
                                        {item?.status}
                                    </span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700 group-hover:text-white">{item?.reffered}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AllReferedTable;
