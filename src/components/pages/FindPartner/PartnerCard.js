import React from "react";
import ShopPagination from "../Shop/ShopPagination";
import topProfileData from "../TopProfile/topProfileData";

const PartnerCard = () => {
  return (
    <>
      <div className="mt-[30px]">
        <div className="grid gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topProfileData.map((profile) => (
            <div key={profile._id}>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className=" cursor-pointer border-gray-300 Suggested-card rounded-[10px] border relative left-0 top-0 overflow-hidden"
              >
                <div>
                  <img
                    style={{ borderRadius: " 10px 10px 0px 0px" }}
                    src={profile.img}
                    alt=""
                  />
                </div>

                <div className="p-[30px] text-left">
                  <h3 className="text-[30px] text-[#000]">
                    Topa Akter <span className="text-[#87ceeb]"> 26</span>
                  </h3>
                  <h5 className="font-bold">Student</h5>
                  <h5 className="font-bold text-[20px]">Savar Dhaka</h5>
                </div>
                <div className="Suggested-info__cardUp">
                  <div className="Suggested-info__cardImg">
                    <img src={profile.img} alt="card__img" />
                  </div>
                  <h4 className="text-white text-[30px] text-center overflow-hidden">
                    Md. Tohidul islam
                    <span style={{ color: "rgb(135, 206, 235)" }}> 27</span>
                  </h4>
                  <ul>
                    <li>
                      <p>
                        <span>Occupation</span> Private holder
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Location</span> Barishal shadar, Barishal
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Home Town</span> Dhake
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Education</span> Hon's(Department of History)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Religion</span> Muslim
                      </p>
                    </li>
                  </ul>
                  <div className="info__social">
                    <a href="!#">
                      <i className="fas fa-user" aria-hidden="true"></i>
                    </a>
                    <a href="!#">
                      <i className="fas fa-comment" aria-hidden="true"></i>
                    </a>
                    <a href="!#">
                      <i className="fas fa-heart" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[20px]">
          <ShopPagination />
        </div>
      </div>
    </>
  );
};

export default PartnerCard;
