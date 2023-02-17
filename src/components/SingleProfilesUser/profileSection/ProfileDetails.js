import React from "react";
import { useOutletContext } from "react-router";
import Accordian from "./Accordion";

const ProfileDetails = () => {
  const [data, isLoading] = useOutletContext();
  return <Accordian {...{ data, isLoading, edit: true }}></Accordian>;
};

export default ProfileDetails;
