// Configuration
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

// Components
import Homepage from "../Home/Homepage";
import setCookie from "../../Helper/cookies/setCookie";

const HomePageExtra = () => {
  const { token } = useParams();

  useEffect(() => {
    if (token) {
      setCookie("token", token);
    }
  }, [token]);

  return (
    <div>
      <Homepage />
    </div>
  );
};

export default HomePageExtra;
