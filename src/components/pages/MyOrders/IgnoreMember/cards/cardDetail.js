import React from 'react';
import { ageCalculator } from '../../../../../assets/utilities/AgeCalculation/ageCalculator';

const CardDetail = ({item}) => {
    let currentDate = new Date(item?.dateOfBirth);
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear().toString();
    return (
        <div className="bg-white shadow-md rounded-lg z-10 w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 py-2">
            <ul className="">
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">Username:</span>{" "}
                {item?.firstName && `${item?.firstName} ${item?.lastName}`}
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">Email: </span>
                <span className='underline'>{item?.email}</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">
                  Date of Birth:
                </span>{" "}
                {!isNaN(day) && `${day}/${month}/${year}`}
              </li>
              
            </ul>
            <ul className="">
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">Age:</span>{" "}
                {item?.dateOfBirth && ageCalculator(item?.dateOfBirth)}
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">
                  Sex:
                </span>{" "}
                {item?.gender?item?.gender : "Not Provided"}
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">Location:</span>
                {item?.hometown}
              </li>
            </ul>
            <ul className="">
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">Height:</span>{" "}
                {item?.physicalDetail?.height?item?.physicalDetail?.height:"Not Provided" }
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">
                  Weight:
                </span>{" "}
                {item?.physicalDetail?.weight?item?.physicalDetail?.weight:"Not Provided" }
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <span className="font-medium text-gray-900">Nationality:</span>
                {item?.nationality?item?.nationality:"Not Provided"}
              </li>
            </ul>
          </div>
        </div>
    );
}

export default CardDetail;
