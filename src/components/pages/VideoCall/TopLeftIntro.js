import { useSearchParams } from "react-router-dom";
import AvatarGroup from "./AvaterGroup";
import React from "react";

const TopLeftIntro = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="absolute top-4 left-2">
      <AvatarGroup />
      <div className="text-gray-600 font-bold text-lg mt-2"> You and {searchParams.get("id")}</div>
      <div></div>
    </div>
  );
};

export default TopLeftIntro;
