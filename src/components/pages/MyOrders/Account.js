import React from "react";

import { Toaster } from "react-hot-toast";
import ChangeEmail from "./accountConponents/ChangeEmail";
import ChangePassword from "./accountConponents/ChangePassword";

export const Account = () => {
  
  return (
    <div className="w-full bg-white">
      <ChangeEmail />
      <div className="my-20">
        <ChangePassword />
      </div>
      <Toaster />
    </div>
  );
};
