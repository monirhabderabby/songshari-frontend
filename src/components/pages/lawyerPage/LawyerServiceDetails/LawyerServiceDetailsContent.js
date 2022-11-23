import React from "react";
import banner from "../../../../assets/images/LawyerProfile/LawyerProfileBanner.png";
import suggest from "../../../../assets/images/LawyerProfile/LawyerProfile.png";

const LawyerServiceDetailsContent = () => {
  const suggestBox = [
    {
      img: suggest,
      id: 1,
    },
    {
      img: suggest,
      id: 2,
    },
    {
      img: suggest,
      id: 3,
    },
    {
      img: suggest,
      id: 4,
    },
    {
      img: suggest,
      id: 5,
    },
  ];
  return (
    <section>
      {/* banner  */}
      <div>
        <img src={banner} alt="banner" />
        <div
          className="flex justify-center py-[15px] items-center"
          style={{
            background:
              " linear-gradient(90.84deg, rgba(228, 18, 114, 0.3) 15.44%, rgba(145, 73, 201, 0.3) 92.53%)",
          }}
        >
          {suggestBox.map((data) => (
            <div key={data.id}>
              <img
                className="inline-block w-[93px] ml-[10px]"
                src={data.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      {/* text */}
      <div>
        <div>
          <h2 className="text-[24px] text-[#000000] mt-[16px] font-semibold mb-[25px]">
            What you deliver with this Offer
          </h2>
          <p className="text-[#757575] text-[18px] font-normal leading-10 text-justify">
            Lorem ipsum dolor sit amet consectetur. Interdum auctor mi nec ut
            risus mattis. Bibendum ullamcorper lobortis etiam blandit pulvinar
            commodo. Fermentum non varius platea urna suspendisse sed quis.
            Morbi sed sit posuere lacinia. Purus maecenas tellus quam nibh mi.
            Volutpat faucibus nisi volutpat habitasse. Sed bibendum eget nulla
            morbi purus. Amet et amet non aliquam non leo tellus at phasellus.
            Eu fames pellentesque imperdiet elit quis at sed velit.
          </p>
        </div>
        <div>
          <h2 className="text-[24px] text-[#000000] mt-[50px] font-semibold mb-[20px]">
            Get more with Offer Add-ons
          </h2>
          <p className="text-[#757575] text-[18px] font-normal leading-10 text-justify">
            Lorem ipsum dolor sit amet consectetur. Interdum auctor mi nec ut
            risus mattis. Bibendum ullamcorper lobortis etiam blandit pulvinar
            commodo. Fermentum non varius platea urna suspendisse sed quis.
            Morbi sed sit posuere lacinia. Purus maecenas tellus quam nibh mi.
            Volutpat faucibus nisi volutpat habitasse.
          </p>
        </div>

        <div
          className="flex justify-between px-[20px] mt-[60px] items-center w-[700px] h-[88px] ml-[30px]"
          style={{
            background: "linear-gradient(180deg, #E42986 0%, #A32CCB 100%)",
          }}
        >
          <div>
            <span className="text-[16px] font-semibold text-[#fff]">
              I can design more pages for extra cost (Per Page )
            </span>
            <br />
            <span className="pt-2 text-[#fff] text-[12px]">
              Additional 1 working day
            </span>
          </div>
          <div>
            <button className="w-[92px] font-bold h-[32px] text-center bg-[#ffffffee] rounded-[50px]">
              $010
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-[24px] text-[#000000] mt-[50px] font-semibold mb-[20px]">
            What do you need from the Buyer to get started?
          </h2>
          <p className="text-[#757575] text-[18px] font-normal leading-10 text-justify">
            Lorem ipsum dolor sit amet consectetur. Interdum auctor mi nec ut
            risus mattis. Bibendum ullamcorper lobortis etiam blandit pulvinar
            commodo. Fermentum non varius platea urna suspendisse sed quis.
            Morbi sed sit posuere lacinia. Purus maecenas tellus quam nibh mi.
            Volutpat faucibus nisi volutpat habitasse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LawyerServiceDetailsContent;
