import React from "react";

export const CourseInfo = () => {
    const data = [
        {
            id: 1,
            question: "Why this course?",
            answer: "This course is designed with the best 5 skills of professional life with complete planning so that career growth never stops. There are also detailed instructions on how to prepare for starting a job, how to apply for a job, and how to adjust to the office. Along with that, you can also learn to keep accurate accounts of your income and expenses",
        },
        {
            id: 2,
            question: "Why this course?",
            answer: "This course is designed with the best 5 skills of professional life with complete planning so that career growth never stops. There are also detailed instructions on how to prepare for starting a job, how to apply for a job, and how to adjust to the office. Along with that, you can also learn to keep accurate accounts of your income and expenses",
        },
    ];
    return (
        <div className="my-[30px]">
            {data?.map(item => {
                return (
                    <div className="mt-[30px]">
                        <div className="border-b-[1px] border-[#d0deef] pb-[10px]">
                            <h3 className="text-[24px] font-Nunito font-bold">{item?.question}</h3>
                        </div>
                        <div className="h-auto p-[5px]">
                            <p className="text-[16px] font-outfit font-normal tracking-wide">{item.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
