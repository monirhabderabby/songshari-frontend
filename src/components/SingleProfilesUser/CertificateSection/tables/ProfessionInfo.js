import React from 'react';

const ProfessionInfo = ({selected}) => {
    return (
      <div>
        <p className="font-bold text-gray-600 my-4 text-xl">Profession Info</p>
        <table className="w-full bg-gray-100 rounded-lg table-auto border-collapse border ">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Institute
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {selected?.institute}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Position
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {selected?.position}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Duty
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {selected?.duty}
            </td>
          </tr>
        </table>
      </div>
    );
}

export default ProfessionInfo;
