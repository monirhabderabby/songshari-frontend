import React from "react";
import { useParams } from "react-router";

// Components
import gentsCourt1 from "../../../../assets/images/shop/singleProduct/gentsCourt1.jpg";
import gentsCourt2 from "../../../../assets/images/shop/singleProduct/gentsCourt2.jpg";
import gentsCourt3 from "../../../../assets/images/shop/singleProduct/gentsCourt3.jpg";
import gentsCourt4 from "../../../../assets/images/shop/singleProduct/gentsCourt4.jpg";
import reviewer from "../../../../assets/images/shop/singleProduct/reviewer.jpg";
import { OvalLoader } from "../../../../components/shared/Cards/Loader/OvalLoader/OvalLoader";
import { ServerErrorMessage } from "../../../../components/ui/error/ServerErrorMessage";
import { useGetSingleProductQuery } from "../../../../Redux/features/Shop/shopApi";
import SingleProductBasicDetails from "./SingleProductBasicDetails/SingleProductBasicDetails";
import SingleProductImages from "./SingleProductImages/SingleProductImages";
import SingleProductOtherDetails from "./SingleProductOtherDetails/SingleProductOtherDetails";

const SingleProductDetails = () => {
    const { id } = useParams();
    const { data: productData, isLoading, isError } = useGetSingleProductQuery(id);
    const { product, similarProducts } = productData || {};

    const { description } = product || {};

    const data = {
        productImages: [gentsCourt1, gentsCourt2, gentsCourt3, gentsCourt4],
        productName: "Bro's Closets - The Lawyer top for male, dark",
        rating: 3.5,
        productReviews: [
            {
                id: 1,
                reviewerProfile: reviewer,
                reviewerName: "Kristin Khan",
                review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
                date: "March 14, 2022",
                rating: 5,
            },
            {
                id: 2,
                reviewerProfile: reviewer,
                reviewerName: "Kristin Khan",
                review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
                date: "March 14, 2022",
                rating: 4.5,
            },
            {
                id: 3,
                reviewerProfile: reviewer,
                reviewerName: "Kristin Khan",
                review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
                date: "March 14, 2022",
                rating: 3,
            },
        ],
        latestPrice: 4999,
        previousPrice: 9999,
        savePercentage: 50,
        features: ["Made with full cotton", "Slim fit for any body", "Quality control by JC"],
        sizes: [
            { type: "medium", height: "134cm" },
            { type: "large", height: "160cm" },
            { type: "extra large", height: "185cm" },
        ],
        colors: ["#aaddbb", "#ac14e7", "#fdbe02", "#008080"],
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta numquam animi odit inventore ut enim placeat pariatur veniam. Deserunt architecto omnis numquam non eveniet? Nobis animi iste iure odio ut ipsum non earum deserunt numquam voluptatibus! Asperiores rerum pariatur quod perspiciatis, neque totam, ullam repudiandae, nostrum consequatur excepturi nulla.",
        comparedProducts: [
            { id: 1, img: gentsCourt1, productName: "Premium Jacket", price: 4888 },
            { id: 2, img: gentsCourt2, productName: "Premium Jacket", price: 5888 },
            { id: 3, img: gentsCourt3, productName: "Premium Jacket", price: 6888 },
            { id: 4, img: gentsCourt4, productName: "Premium Jacket", price: 7888 },
        ],
    };

    let content;
    if (isLoading) {
        content = (
            <div className="h-[20vh]">
                <OvalLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="md:h-[40vh] w-full flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && productData) {
        content = (
            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 px-[16px]">
                <div className="w-full lg:max-w-[700px]">
                    <div className="mb-20">
                        <SingleProductImages {...{ data, product }} />
                    </div>
                    <div className="hidden lg:block">
                        <SingleProductOtherDetails {...{ product, description, similarProducts }} />
                    </div>
                </div>
                <div className="w-full lg:max-w-[432px]">
                    <SingleProductBasicDetails {...{ data, product }} />
                    <div className=" lg:hidden mt-[12px]">
                        <SingleProductOtherDetails {...{ data, description }} />
                    </div>
                </div>
            </div>
        );
    }

    return content;
};

export default SingleProductDetails;
