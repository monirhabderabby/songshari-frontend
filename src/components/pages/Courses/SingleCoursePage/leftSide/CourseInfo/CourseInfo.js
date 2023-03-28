import React, { useEffect, useState } from "react";

export const CourseInfo = ({ course }) => {
    const { whatIsInThisCourse, courseDetails } = course || {};
    const [data, setData] = useState([
        {
            id: 1,
            question: "Why this course?",
            answer: whatIsInThisCourse,
        },
        {
            id: 2,
            question: "What do you get from here?",
            answer: whatIsInThisCourse,
        },
    ]);

    useEffect(() => {
        setData([
            {
                id: 1,
                question: "Why this course?",
                answer: whatIsInThisCourse,
            },
            {
                id: 2,
                question: "What do you get from here?",
                answer: courseDetails,
            },
        ]);
    }, [whatIsInThisCourse, courseDetails]);

    return (
        <div className="my-[30px]">
            {data?.map(item => {
                return (
                    <div className="mt-[30px]" key={item?.id}>
                        <div className="border-b-[1px] border-[#d0deef] pb-[10px]">
                            <h3 className="text-[24px] font-Nunito font-bold">{item?.question}</h3>
                        </div>
                        <div className="h-auto p-[5px]">
                            <p
                                className="text-[16px] font-outfit font-normal tracking-wide"
                                dangerouslySetInnerHTML={{
                                    __html: `${item.answer}`,
                                }}
                            ></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
