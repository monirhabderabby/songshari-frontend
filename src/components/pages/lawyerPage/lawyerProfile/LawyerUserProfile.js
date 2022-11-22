import React from "react";
import LawyerProfileCSS from "../../../../assets/css/LawyerProfile.module.css";

const LawyerUserProfile = () => {
  return (
    <>
      <div className={LawyerProfileCSS.LawyerUserProfileBox}>
        <div className={LawyerProfileCSS.LawyerUserProfileBoxTopBG}></div>
        <div className={LawyerProfileCSS.LawyerUserProfileContent}>
          <div className={LawyerProfileCSS.profileImg}>
            <img
              src="https://pixner.net/peyamba/peyamba/assets/images/profile/profile-user.png"
              alt=""
            />
            <div className={LawyerProfileCSS.activeOnline}></div>
          </div>
          <h5 className="text-[28px] mt-[-8px] text-[#333] font-medium">
            Albert Don
          </h5>
          <ul className="p-0 m-0">
            <li className="mr-[30px] inline-block">
              <span>21 Years Old</span>
            </li>
            <li
              className={`mr-0 relative ${LawyerProfileCSS.LawyerProfileList}  inline-block`}
            >
              <span>
                {" "}
                <i class="fa-solid fa-location-dot"></i>Paris,France
              </span>
            </li>
          </ul>
          <div className={LawyerProfileCSS.pBMetaTwo}>
            <div className={LawyerProfileCSS.left}>
              <div className={LawyerProfileCSS.icon}>
                <i class="fa-regular fa-heart"></i>
              </div>{" "}
              257
            </div>
            <div className={LawyerProfileCSS.right}>
              <a href="!#" className={LawyerProfileCSS.customButton}>
                <i className="fab fa-cloudversify"></i> Boost Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerUserProfile;
