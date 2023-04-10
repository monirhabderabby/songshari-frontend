import React from "react";
import { useNavigate } from "react-router";

export const SupportTableRow = ({ item, index }) => {
    const { status, category, subject, uid, _id } = item || {};
    const navigate = useNavigate();

    // function declarationn
    const colorChooser = status => {
        if (status === "closed") {
            return "text-red-800 bg-red-200";
        } else if (status === "open") {
            return "text-green-800 bg-green-200";
        }
    };
    return (
        <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{uid}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${colorChooser(status)}`}>
                    {status}
                </span>
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{category}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{subject}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <button className="bg-red-100 text-red-500 p-2 rounded-[4px]" onClick={() => navigate(`/my-orders/support/${_id}`)}>
                    View <br /> detailes
                </button>
            </td>
        </tr>
    );
};
