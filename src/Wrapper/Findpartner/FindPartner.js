import React, { useEffect } from "react";
import FindPartners from "../../components/pages/FindPartner/FindPartners";

const FindPartner = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <FindPartners />
    </>
  );
};
export default FindPartner;
