import React from "react";

// Components
import gentsCourt1 from "../../../../assets/images/shop/singleProduct/gentsCourt1.jpg";
import gentsCourt2 from "../../../../assets/images/shop/singleProduct/gentsCourt2.jpg";
import gentsCourt3 from "../../../../assets/images/shop/singleProduct/gentsCourt3.jpg";
import gentsCourt4 from "../../../../assets/images/shop/singleProduct/gentsCourt4.jpg";
import reviewer from "../../../../assets/images/shop/singleProduct/reviewer.jpg";
import SingleProductBasicDetails from "./SingleProductBasicDetails/SingleProductBasicDetails";
import SingleProductImages from "./SingleProductImages/SingleProductImages";

const SingleProductDetails = () => {
  const data = {
    productImages: [gentsCourt1, gentsCourt2, gentsCourt3, gentsCourt4],
    productName: "Bro's Closets - The Lawyer top for male, dark",
    productReviews: [
      {
        id: 1,
        reviewerProfile: reviewer,
        reviewerName: "Kristin Khan",
        review:
          "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
        data: "March 14, 2022",
        rating: 5,
      },
      {
        id: 2,
        reviewerProfile: reviewer,
        reviewerName: "Kristin Khan",
        review:
          "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
        data: "March 14, 2022",
        rating: 4,
      },
      {
        id: 3,
        reviewerProfile: reviewer,
        reviewerName: "Kristin Khan",
        review:
          "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
        data: "March 14, 2022",
        rating: 5,
      },
    ],
    latestPrice: 4999,
    previousPrice: 9999,
    savePercentage: 50,
    features: [
      "Made with full cotton",
      "Slim fit for any body",
      "Quality control by JC",
    ],
    sizes: [
      { type: "medium", height: "134cm" },
      { type: "large", height: "160cm" },
      { type: "extra large", height: "185cm" },
    ],
    colors: [""],
    description: "",
    comparedProducts: [
      { id: 1, img: gentsCourt1, productName: "Premium Jacket", price: 4888 },
      { id: 2, img: gentsCourt2, productName: "Premium Jacket", price: 5888 },
      { id: 3, img: gentsCourt3, productName: "Premium Jacket", price: 6888 },
      { id: 4, img: gentsCourt4, productName: "Premium Jacket", price: 7888 },
    ],
  };
  return (
    <div>
      <div className="flex justify-between items-start">
        <div className="max-w-[700px] mb-20">
          <SingleProductImages {...{ data }} />
        </div>
        <div className="max-w-[432px]">
          <SingleProductBasicDetails {...{ data }} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
