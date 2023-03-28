import { Rating } from "@mui/material";
import React from "react";

export const CourseReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Monir Hossain",
            image: "https://scontent.fdac28-1.fna.fbcdn.net/v/t31.18172-8/18449415_1897582743836244_7029105599755125720_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGiZe21Ut6dxN_9bwRcZjqXPIZC6F455ek8hkLoXjnl6YjzzyRcI4iklmGc93aEdHfBTE2xnIwcEUnk4iDGwkVN&_nc_ohc=8OTjtV-ozkwAX8enjaT&_nc_ht=scontent.fdac28-1.fna&oh=00_AfBXklGfguO15klOJ6LTjc9maxGGGSSqLsvFii-iNeA8uA&oe=644875BE",
            rating: 4,
            review: "I recently took a course on digital marketing and found it to be extremely helpful in understanding the fundamentals of online advertising and promotion. The instructor was knowledgeable and engaging, and the course material was well-organized and easy to follow. Overall, I highly recommend this course to anyone looking to improve their digital marketing skills.",
        },
        {
            id: 2,
            name: "Mobasirul Seam",
            image: "https://scontent.fdac28-1.fna.fbcdn.net/v/t1.6435-9/74682770_784234812011663_5795857022180130816_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEVvv7Wz_eFlXVge1Utegti5LOqMwIqLZrks6ozAiotmqk5JhIiZz-HwjmOE8Lj33M7tYxv0A3LpUVL29Cy7exx&_nc_ohc=XfZB9TSUIsMAX8IUnOX&_nc_ht=scontent.fdac28-1.fna&oh=00_AfDSI3iN9nrBGFgtdgG5G0bwIWnUb--2Yl_BobuhBDTmjQ&oe=644857B2",
            rating: 3,
            review: "I recently took a course on digital marketing and found it to be extremely helpful in understanding the fundamentals of online advertising and promotion. The instructor was knowledgeable and engaging, and the course material was well-organized and easy to follow. Overall, I highly recommend this course to anyone looking to improve their digital marketing skills.",
        },
    ];
    return (
        <div className="my-[30px] lg:my-[50px]">
            <h2 className="text-[32px] text-gray-700 font-semibold mb-[20px] border-b-2">Reviews</h2>
            <div className="w-full flex flex-col gap-y-[30px]">
                {reviews?.map(item => {
                    return (
                        <div className="flex  gap-x-[20px]" key={item?.id}>
                            <img src={item?.image} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full" alt="profile" />
                            <div>
                                <h3 className="text-[22px] font-Inter font-semibold">{item?.name}</h3>
                                <Rating name="read-only" value={item?.rating} readOnly />
                                <p className="mt-[5px] md:mt-[10px] text-[12px] md:text-[15px] font-normal text-gray-600">{item?.review}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
