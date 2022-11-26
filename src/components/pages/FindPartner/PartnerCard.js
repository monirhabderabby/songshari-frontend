import React from "react";
import ShopPagination from "../Shop/ShopPagination";
import topProfileData from "../TopProfile/topProfileData";
import { useNavigate } from "react-router";
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";

const PartnerCard = () => {
  const navigate = useNavigate();
  const { data, isSuccess } = useGetRecentMembersQuery();
  return (
    <>
      <div className="mt-[30px]">
        <div className="grid gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isSuccess &&
            data.map((profile) => (
              <div key={profile._id}>
                <div className=" max-h-[530px]  cursor-pointer border-gray-300 Suggested-card rounded-[10px] border relative left-0 top-0 overflow-hidden">
                  <div>
                    <img
                      style={{ borderRadius: " 10px 10px 0px 0px" }}
                      src={profile.profilePhoto}
                      className="h-[374px] max-w-[380px]"
                      alt="profile"
                    />
                  </div>
                  <div className="p-[30px] text-left">
                    <h3 className="text-[30px] text-[#000]">
                      {profile?.firstName + " " + profile?.lastName}{" "}
                      <span className="text-[#87ceeb]"> 26</span>
                    </h3>
                    <h5 className="font-bold">Student</h5>
                    <h5 className="font-bold text-[20px]">Savar Dhaka</h5>
                  </div>
                  <div className="Suggested-info__cardUp">
                    <div className="Suggested-info__cardImg">
                      <img src={profile.profilePhoto} alt="card__img" />
                    </div>
                    <h4 className="text-white text-[30px] text-center overflow-hidden">
                      {profile?.firstName + " " + profile?.lastName}
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
                      <i
                        className="fas fa-user text-white"
                        aria-hidden="true"
                        onClick={() => navigate(`/profile/${profile._id}`)}
                      ></i>

                      <a href="#">
                        <i className="fas fa-comment" aria-hidden="true"></i>
                      </a>
                      <a href="#">
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
