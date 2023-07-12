import React from "react";
import { Avatar } from "@material-ui/core";
import { Badge } from "@material-ui/core";

const avatars = [
    {
        src:""
    },
    {
        src:""
    },
    {
        src:""
    },
    {
        src:""
    }
    ,{
        src:""
    },{
        src:""
    }
]

const AvatarGroup = () => {
  return (
    <div className="flex items-center space-x-2">
      {avatars.slice(0, 3).map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          className={`w-6 h-6 ${
            index === 2 && avatars.length > 3 ? "-mr-1" : ""
          }`}
        />
      ))}
      {avatars.length > 3 && (
        <Badge
          badgeContent={`${avatars.length - 3}+`}
          color="primary"
          className="w-6 h-6 -mr-1  -mt-3"
        >
          <Avatar src="" alt="" className="w-6 h-6 bg-gray-300 text-gray-600">
            {/* {avatars.length - 3} */}
          </Avatar>
        </Badge>
      )}
    </div>
  );
};

export default AvatarGroup;
