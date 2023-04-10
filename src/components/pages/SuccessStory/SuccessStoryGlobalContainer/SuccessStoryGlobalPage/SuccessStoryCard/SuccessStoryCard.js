// Configuration
import React from "react";
import { useNavigate } from "react-router";

// Components
import { getDateFromCreatedAt } from "../../../../../../assets/utilities/GetDateFromCreatedAt/getDateFromCreatedAt";

const SuccessStoryCard = ({ story }) => {
  const navigate = useNavigate();

  const { firstName, lastName } = story?.user || {};
  return (
    <div className="rounded shadow-lg">
      <img
        src={
          story?.attachments[0]?.url ||
          "https://img.freepik.com/free-vector/doodle-lettering-happy-vectorcalligraphy_53876-172731.jpg?w=740&t=st=1681114987~exp=1681115587~hmac=36a2d7204b8b8c45cd417fa8a2ef8c1f070cf5aa3804cb3763c5c96ab34856a1"
        }
        alt="happyImage"
        className="w-full h-72"
      />
      <div className="p-4">
        <h1 className="text-xl font-Inter h-28 capitalize">{story?.header}</h1>
        <div className="text-pink-500 font-Poppins">
          <p>
            Posted By:{" "}
            <span className="text-red-500 font-medium text-lg">
              {(firstName || "") + " " + (lastName || "")}
            </span>{" "}
          </p>
          <p>
            On:{" "}
            <span className="text-red-500 font-medium text-lg">
              {getDateFromCreatedAt(story?.createdAt)}
            </span>
          </p>
        </div>
        <div className="w-full mt-2">
          <button
            onClick={() => navigate(`/happyStory/${story?._id}`)}
            className="w-full h-[44px] rounded-[4px] bg-pink-500 hover:bg-pink-600 text-white font-Inter text-[20px] font-medium duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
