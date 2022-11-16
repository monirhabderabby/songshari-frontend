import React from "react";
import "../../../assets/css/PeopleJoinedAlready.css";
import icon1 from "../../../assets/images/icons/Messages sent-per-day (1).png";
import icon2 from "../../../assets/images/icons/Messages sent-per-day (2).png";
import icon3 from "../../../assets/images/icons/Messages sent-per-day (3).png";
import icon4 from "../../../assets/images/icons/Messages sent-per-day (4).png";

const PeopleJoinedAlready = () => {
  return (
    <section>
      <div className="People-Joined-Alreadyon">
        <div className="custom-container">
          <h1 className="text-white text-[50px] text-center">455,326,234</h1>
          <h2 className="text-[#f36] text-[24px] text-center">
            People joined already!
          </h2>
          <section className="text-gray-600 body-font">
            <div className="container px-5 pt-[20px] mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  className="p-4 sm:w-1/4 w-1/2 text-center"
                >
                  <img className=" inline-block" src={icon1} alt="" />
                  <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">
                    000 M
                  </h2>
                  <p className="leading-relaxed text-[20px] text-white">
                    Messages sent per day
                  </p>
                </div>
                <div
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1200"
                  data-aos="fade-up"
                  className="p-4 sm:w-1/4 w-1/2 text-center"
                >
                  <img className=" inline-block" src={icon2} alt="" />
                  <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">
                    000 M
                  </h2>
                  <p className="leading-relaxed text-[20px] text-white">
                    Registered users worldwide
                  </p>
                </div>
                <div
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1400"
                  data-aos="fade-up"
                  className="p-4 sm:w-1/4 w-1/2 text-center"
                >
                  <img className=" inline-block" src={icon3} alt="" />
                  <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">
                    000 M
                  </h2>
                  <p className="leading-relaxed text-[20px] text-white">
                    Monthly active users
                  </p>
                </div>
                <div
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1500"
                  data-aos="fade-up"
                  className="p-4 sm:w-1/4 w-1/2 text-center"
                >
                  <img className=" inline-block" src={icon4} alt="" />
                  <h2 className="title-font text-[55px] font-semibold tracking-widest mt-3 sm:text-4xl text-3xl text-white">
                    K
                  </h2>
                  <p className="leading-relaxed text-[20px] text-white">
                    New daily sign ups
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PeopleJoinedAlready;