import React from "react";
import "../../../../App.css";
import img from "../../../../assets/images/olivia.png";
import dribble from "../../../../assets/images/Social Icons/dribble.png";
import linkedIn from "../../../../assets/images/Social Icons/linkedIn.png";
import twitter from "../../../../assets/images/Social Icons/twitter.jpg";
import { MobileBackButton } from "../../../../components/shared/Components/MobileBackButton";
import { BottomNav } from "../BottomNav";

export const MeetMov = () => {
  return (
    <div>
      <MobileBackButton name={"Our Team"} />
      <div className="w-full flex flex-col items-center font-Inter gap-y-4 pt-6">
        <p className="text-[#6941C6] text-[16px] font-semibold">
          Shongshari.com
        </p>
        <h1 className="font-semibold text-[36px] text-[#101828]">
          Meet our team
        </h1>
        <p className="text-[10px] text-[#667085] font-normal text-center">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
        <p className="shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] border-[1px] border-[#D0D5DD] py-[12px] px-[20px] mb-8">
          About us
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-8">
        <div className="mb-4">
          <img
            src={img}
            alt="profile"
            className="rounded-tl-[30px] rounded-tr-[30px]"
          />
          <div className="pt-[24px]">
            <p className="text-[#E22986] font-medium text-[18px] mb-[4px]">
              Candice Wu
            </p>
            <p className="text-[#A42BC8] font-normal  text-[18px] mb-[16px]">
              Backend Developer
            </p>
            <p className="font-normal text-[16px] text-[#667085]">
              Lead backend dev at Clearbit. Former Clearbit and Loom.
            </p>
          </div>
          <div className="flex items-center mt-[24px] gap-x-[20px]">
            <img src={twitter} alt="social" />
            <img src={linkedIn} alt="social" />
            <img src={dribble} alt="social" />
          </div>
        </div>
        <div className="mb-4">
          <img
            src={img}
            alt="profile"
            className="rounded-tl-[30px] rounded-tr-[30px]"
          />
          <div className="pt-[24px]">
            <p className="text-[#E22986] font-medium text-[18px] mb-[4px]">
              Candice Wu
            </p>
            <p className="text-[#A42BC8] font-normal  text-[18px] mb-[16px]">
              Backend Developer
            </p>
            <p className="font-normal text-[16px] text-[#667085]">
              Lead backend dev at Clearbit. Former Clearbit and Loom.
            </p>
          </div>
          <div className="flex items-center mt-[24px] gap-x-[20px]">
            <img src={twitter} alt="social" />
            <img src={linkedIn} alt="social" />
            <img src={dribble} alt="social" />
          </div>
        </div>
        <div className="mb-4">
          <img
            src={img}
            alt="profile"
            className="rounded-tl-[30px] rounded-tr-[30px]"
          />
          <div className="pt-[24px]">
            <p className="text-[#E22986] font-medium text-[18px] mb-[4px]">
              Candice Wu
            </p>
            <p className="text-[#A42BC8] font-normal  text-[18px] mb-[16px]">
              Backend Developer
            </p>
            <p className="font-normal text-[16px] text-[#667085]">
              Lead backend dev at Clearbit. Former Clearbit and Loom.
            </p>
          </div>
          <div className="flex items-center mt-[24px] gap-x-[20px]">
            <img src={twitter} alt="social" />
            <img src={linkedIn} alt="social" />
            <img src={dribble} alt="social" />
          </div>
        </div>
        <div className="mb-4">
          <img
            src={img}
            alt="profile"
            className="rounded-tl-[30px] rounded-tr-[30px]"
          />
          <div className="pt-[24px]">
            <p className="text-[#E22986] font-medium text-[18px] mb-[4px]">
              Candice Wu
            </p>
            <p className="text-[#A42BC8] font-normal  text-[18px] mb-[16px]">
              Backend Developer
            </p>
            <p className="font-normal text-[16px] text-[#667085]">
              Lead backend dev at Clearbit. Former Clearbit and Loom.
            </p>
          </div>
          <div className="flex items-center mt-[24px] gap-x-[20px]">
            <img src={twitter} alt="social" />
            <img src={linkedIn} alt="social" />
            <img src={dribble} alt="social" />
          </div>
        </div>
        <div className="">
          <img
            src={img}
            alt="profile"
            className="rounded-tl-[30px] rounded-tr-[30px]"
          />
          <div className="pt-[24px]">
            <p className="text-[#E22986] font-medium text-[18px] mb-[4px]">
              Candice Wu
            </p>
            <p className="text-[#A42BC8] font-normal  text-[18px] mb-[16px]">
              Backend Developer
            </p>
            <p className="font-normal text-[16px] text-[#667085]">
              Lead backend dev at Clearbit. Former Clearbit and Loom.
            </p>
          </div>
          <div className="flex items-center mt-[24px] gap-x-[20px]">
            <img src={twitter} alt="social" />
            <img src={linkedIn} alt="social" />
            <img src={dribble} alt="social" />
          </div>
        </div>
        <div className="">
          <img
            src={img}
            alt="profile"
            className="rounded-tl-[30px] rounded-tr-[30px]"
          />
          <div className="pt-[24px]">
            <p className="text-[#E22986] font-medium text-[18px] mb-[4px]">
              Candice Wu
            </p>
            <p className="text-[#A42BC8] font-normal  text-[18px] mb-[16px]">
              Backend Developer
            </p>
            <p className="font-normal text-[16px] text-[#667085]">
              Lead backend dev at Clearbit. Former Clearbit and Loom.
            </p>
          </div>
          <div className="flex items-center mt-[24px] gap-x-[20px]">
            <img src={twitter} alt="social" />
            <img src={linkedIn} alt="social" />
            <img src={dribble} alt="social" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>
  );
};
