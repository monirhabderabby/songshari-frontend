import React from "react";

const MarriageInfo = ({ selected }) => {
  return (
    <div className="mt-12">
      <p className="font-bold text-gray-600 my-4 text-xl">Marriage Info</p>
      <table className="w-full bg-gray-100 rounded-lg table-auto border-collapse border">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Marriage Date
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {selected?.marriageDate}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Divorce Date
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {selected?.divorceDate}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Partner Death Date
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {selected?.partnerDeathDate}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Reason of Partner Death
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {selected?.partnerDeathDate}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Number of children
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {selected?.children?.length}
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Partner Death Date
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {selected?.partnerDeathDate}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MarriageInfo;
