import React, { useState } from "react";

import HideSourceIcon from "@mui/icons-material/HideSource";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  useIgnoreMemberMutation,
  useUnignoreMemberMutation,
} from "../../../../../Redux/features/Ignore/ignoreApi";
import { CircularProgress } from "material-ui";
import { SuccessSnackBar } from "../../../../ui/error/snackBar/SuccessSnackBar";
import { useEffect } from "react";

const IgnoreCard = ({ item, useCase }) => {
  const [message, setMessage] = useState("");
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [ignoreMember, { data, isLoading }] = useIgnoreMemberMutation();
  const [unignore, { data: unignoreData, isLoading: unignoreLoading }] =
    useUnignoreMemberMutation();
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    if (data || unignoreData) {
      setSuccessSnackBarOpen(true);
    }
  }, [data, unignoreData]);
  return (
    <div className="bg-white shadow-lg transition-height duration-500 rounded-lg my-4">
      <div className="flex items-center px-2 py-4">
        <div className="relative mx-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-8 pb-1 h-8 flex items-center justify-center font-bold text-3xl bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {showDetails ? "-" : "+"}
          </button>
        </div>
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src={item?.profilePhoto}
            alt="User Avatar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-medium text-gray-900">{`${item?.firstName} ${item?.lastName}`}</h3>
          <p className="text-sm font-medium text-gray-500">{item?.email}</p>
        </div>
        {useCase === "ignore" && (
          <div>
            {!isLoading && !data && (
              <div className="flex-shrink-0">
                <button
                  onClick={() => {
                    ignoreMember(item?._id);
                    setMessage("Member ignored successfully");
                  }}
                  className="mr-12"
                >
                  <HideSourceIcon style={{ color: "#eb4787" }} />
                </button>
              </div>
            )}
            {isLoading && (
              <div className="flex-shrink-0">
                <button className="mr-12">
                  <CircularProgress size={25} />
                </button>
              </div>
            )}
            {data && (
              <div className="flex-shrink-0">
                <button className="mr-12">
                  <TaskAltIcon color="success" />
                  <div>Ignore</div>
                </button>
              </div>
            )}
          </div>
        )}
        {useCase === "unignore" && (
          <div>
            {!unignoreLoading && !unignoreData && (
              <div className="flex-shrink-0">
                <button
                  onClick={() => {
                    unignore(item?._id);
                    setMessage("Member unblocked successfully");
                  }}
                  className="mr-12"
                >
                  <LockOpenIcon style={{ color: "#eb4787" }} />
                </button>
              </div>
            )}
            {unignoreLoading && (
              <div className="flex-shrink-0">
                <button className="mr-12">
                  <CircularProgress size={25} />
                </button>
              </div>
            )}
            {unignoreData && (
              <div className="flex-shrink-0">
                <button
                  onClick={() => ignoreMember(item?._id)}
                  className="mr-12"
                >
                  <TaskAltIcon color="success" />
                  <div>Ignore</div>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {showDetails && (
        <div className="bg-white shadow-md rounded-lg z-10 w-full">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">
              <span className="font-medium text-gray-900">Username:</span>{" "}
              {`${item?.firstName} ${item?.lastName}`}
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <span className="font-medium text-gray-900">Date of Birth:</span>{" "}
              {item?.dateOfBirth}
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <span className="font-medium text-gray-900">Location:</span>
              {item?.hometown}
            </li>
          </ul>
        </div>
      )}
      <SuccessSnackBar
        {...{
          successSnackBarOpen,
          setSuccessSnackBarOpen,
          message,
        }}
      />
    </div>
  );
};

export default IgnoreCard;
