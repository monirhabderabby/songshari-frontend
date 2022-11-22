import React from "react";
import LawyerProfileHeader from "./LawyerProfileHeader";

const LawyerProfileContent = () => {
  return (
    <>
      <section>
        <LawyerProfileHeader />
        {/* personal details Edit  */}

        <div
          style={{ boxShadow: "0px 5px 30px rgba(35, 57, 184, 0.2)" }}
          className={`mt-4 mx-4 rounded-[10px] py-8 bg-[#fff] table-bar px-[50px] shadow-md duration-300`}
        >
          <div className="h-[40px] flex justify-between items-center border-b-[2px] pb-[20px] border-dotted">
            <span className="text-[24px] font-semibold inline-block text-[#333333]">
              Personal Information
            </span>

            <button
              style={{
                background: "linear-gradient(180deg, #EA297F 0%, #A32CCA 100%)",
                borderRadius: "4px",
              }}
              className="w-[64px]  h-[28px] flex justify-center items-center text-[18px] font-semibold text-[#FFFFFF]"
            >
              Edit
            </button>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Name</span>

            <span className=" text-[#333333]">Albert Don</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Birthday</span>

            <span className=" text-[#333333]">1988-01-19</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">I am a</span>

            <span className=" text-[#333333]">Man</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Marital status</span>

            <span className=" text-[#333333]">Married</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Country</span>

            <span className=" text-[#333333]">France</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">City</span>

            <span className=" text-[#333333]">Paris</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Phone number</span>

            <span className=" text-[#333333]">+880 177 004-5304</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">NID/Passport Number</span>

            <span className=" text-[#333333]">0000 0000 0000 0000</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Year Of Experience</span>

            <span className=" text-[#333333]">5 Month 5 Years</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]"> BAR Registration Number</span>

            <span className=" text-[#333333]">0000 0000 0000 0000</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Licence Number</span>

            <span className=" text-[#333333]">0000 0000 0000 0000</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Year Of BAR Registration</span>

            <span className=" text-[#333333]">1999</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Chamber Location</span>

            <span className=" text-[#333333]">Dhaka, Bangladesh</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Lawyer Category</span>

            <span className=" text-[#333333]">Genarel</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Citizenship</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Zodiac Sign</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">
              Highest Educational Qualification
            </span>

            <span className=" text-[#333333]">BCS</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Height</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Weight</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Ancestry</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Skin Tone</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Monthly Income</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Siblings</span>

            <span className=" text-[#333333]">2 Brother and 0 Sister</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Linkedin</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Instagram</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Facebook</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] py-[10px] border-dotted">
            <span className=" text-[#333333]">Hobby</span>

            <span className=" text-[#333333]">Not provide</span>
          </div>
          <div className="h-[40px] flex justify-between items-center border-b-[2px] pb-[50px] pt-[15px] border-dotted">
            <span className=" text-[#333333]">
              Highest Educational Qualification
            </span>

            <span className=" text-[#333333]">BCS</span>
          </div>
          <div className="h-[40px] flex justify-between items-center py-[10px] ">
            <span className=" text-[#333333] text-[24px] font-semibold">
              Professional Information
            </span>

            <span className=" text-[#333333] text-[24px]">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
          <div className="h-[40px] flex justify-between items-center pt-[30px] pb-[10px] ">
            <span className=" text-[#333333] text-[24px] font-semibold">
              Education and Others
            </span>

            <span className=" text-[#333333] text-[24px]">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyerProfileContent;
