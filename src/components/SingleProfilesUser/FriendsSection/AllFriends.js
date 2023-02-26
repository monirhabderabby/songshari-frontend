// configuration, ex: react-router
import React, { useEffect } from "react";

// Third party packages, ex: redux
import { AiOutlineWarning } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { useDispatch } from "react-redux";

// components
import { useGetAllConnectedConnectionsQuery } from "../../../Redux/features/connections/connectionApi";
import { setConnectedFriendIds } from "../../../Redux/features/connections/connectionSlice";
import { ConnectedConnectionLoader } from "../../shared/Cards/Loader/Connections/ConnectedConnectionLoader";
import { FriendCard } from "./Cards/FriendCard";

export const AllFriends = ({ responsive }) => {
  // varible declation
  const dispatch = useDispatch();
  // hook variables
  const { data, isLoading, isError, error } =
    useGetAllConnectedConnectionsQuery("");

  const { user } = data?.data || {};
  const connectedFriendIDs = user?.map((item) => item._id);

  useEffect(() => {
    if (connectedFriendIDs?.length > 0) {
      dispatch(setConnectedFriendIds(connectedFriendIDs));
    }
  }, [connectedFriendIDs, dispatch]);

  // js variables
  let content = null;

  if (isLoading) {
    content = (
      <div className="w-full grid grid-cols-1 gap-y-4 md:px-4">
        <ConnectedConnectionLoader />
        <ConnectedConnectionLoader />
        <ConnectedConnectionLoader />
      </div>
    );
  } else if (!isLoading && error?.data?.message === "No connections found") {
    content = (
      <div className="flex flex-col items-center justify-center mt-[30%]">
        <FiUsers className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          No Connection Found!
        </p>
      </div>
    );
  } else if (
    !isLoading &&
    isError &&
    error?.data?.message === "Cannot check authentication"
  ) {
    content = (
      <div className="flex flex-col items-center justify-center mt-[30%]">
        <AiOutlineWarning className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          Authentication failed! Try again.
        </p>
      </div>
    );
  } else if (!isLoading && error) {
    content = (
      <div className="flex flex-col items-center justify-center mt-[30%]">
        <AiOutlineWarning className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          server Error
        </p>
      </div>
    );
  } else if (!isLoading && data?.data?.user?.length === 0) {
    content = (
      <div className="flex flex-col items-center justify-center mt-[30%]">
        <FiUsers className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          No Friend Found!
        </p>
      </div>
    );
  } else if (!isLoading && data?.data?.user.length > 0) {
    content = (
      <div className="w-full grid grid-cols-1 gap-y-4 md:px-4">
        {data?.data?.user.map((friend) => {
          return <FriendCard key={friend?._id} {...{ friend, responsive }} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-y-4">{content}</div>
    </div>
  );
};
