import React from "react";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import { useEffect } from "react";
import { MobileBackButton } from "../../shared/Components/MobileBackButton";
import Footer from "../../shared/Footer/Footer";
import { BottomNav } from "../../../Wrapper/Home/mobileversion/BottomNav";
import { useNavigate } from "react-router";

const HelpCenter = () => {
  const navigate = useNavigate();
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"Help Center"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"Help Center"} />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-george text-center mt-7 mb-2 text-gray-700">
          Help Center
        </h1>
        <hr className="mb-3 md:w-2/3 mx-auto" />
        <p className="text-gray-700 text-xl font-Nunito">
          Shongshari is eager to help you find your partner at the earliest. Our
          Customer Service team will be pleased to assist you anytime you have a
          query. You can contact our Customer Service team in one of the
          following ways.
        </p>

        {/* Address */}
        <div>
          <h2 className="text-2xl font-george font-medium mt-3 leading-6 pl-1">
            Address
          </h2>
          <hr className="md:w-1/3 mb-2" />
          <p className="md:w-1/3 lg:w-1/4 font-Nunito text-gray-700 pl-1">
            Shongshari Private Limited, 3169, Hayder Niketon, Mirpur Industrial
            Area, Dhaka-1234, Bangladesh
          </p>
        </div>
        {/* Helpline */}
        <div>
          <h2 className="text-2xl font-george font-medium mt-3 leading-5 pl-1">
            Helpline{" "}
            <span className="text-base font-extralight font-Nunito mb-1 leading-7">
              [Operating Days and Hours: Saturday to Thursday, 9am-6pm
              (Excluding Govt. Holidays)]
            </span>
          </h2>
          <hr className="md:w-1/3 mb-2" />
          <p className="font-Nunito text-gray-700 pl-1">
            <span className="font-bold">Phone-1: </span> +88018489389489
          </p>
          <p className="font-Nunito text-gray-700 pl-1">
            <span className="font-bold">Phone-2: </span> +88018489389489
          </p>
        </div>
        {/* Email */}
        <div>
          <h2 className="text-2xl font-george font-medium mt-3 leading-6 pl-1">
            Email
          </h2>
          <hr className="md:w-1/3 mb-2" />
          <p className="font-Nunito text-gray-700 pl-1">
            <span className="font-bold">Office: </span> itco.bd@gmail.com
          </p>
        </div>
        {/* Contact us */}
        <div className="mb-10">
          <h2 className="text-2xl font-george font-medium mt-3 leading-6 pl-1">
            Contact Us
          </h2>
          <hr className="md:w-1/3 mb-2" />
          <p className="font-Nunito text-gray-700 pl-1">
            You can easily contact us though this link.{" "}
            <span
              onClick={() => navigate("/contact")}
              className="font-bold text-blue-500 cursor-pointer"
            >
              Click Here
            </span>
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <div className="h-16"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default HelpCenter;
