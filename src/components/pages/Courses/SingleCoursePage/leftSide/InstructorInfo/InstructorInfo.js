import React from "react";

export const InstructorInfo = () => {
    const instructures = [
        {
            id: 1,
            name: "Tasnim Zaman",
            image: "https://bohubrihi.com/wp-content/uploads/elementor/thumbs/Tasnim-Zaman-scaled-py4iqagprbcbk9s3ujxmbxno7uhgwhgpqczk6qd6e8.jpg",
            position: "Senior Full Stack Developer at Brainstation 23",
            description:
                "Tasnim Zaman graduated from BRAC University, majoring in Marketing and HR. She has worked in marketing for most of her career years, roles spanning over Content, PR, Activation, Partnerships and Digital Marketing, in companies like STAR Cineplex, foodpanda, shopUp and bproperty. She is currently looking after the Digital side of Employer branding and engagement, under the HR division in bKash Limited.",
        },
        {
            id: 2,
            name: "Jhankar Mahmud",
            image: "https://media.licdn.com/dms/image/D5603AQEOjP3ON2knRg/profile-displayphoto-shrink_800_800/0/1677507598430?e=2147483647&v=beta&t=G-6CChYSPDCnu-Hl5VBqfgSQax6aZaCfkOnQWVm_584",
            position: "Trainer & CEO at Programming Hero",
            description:
                "Jhankar Mahbub is a Bangladeshi entrepreneur, software developer, and the CEO of Programming Hero, an online coding platform that aims to make coding education accessible and affordable to everyone. He is a well-known figure in the Bangladeshi tech industry and is recognized as one of the leading voices for tech education in the country.",
        },
    ];
    return (
        <div className="my-[30px]">
            {instructures?.map(item => {
                return (
                    <div className="w-full border-[1px] border-[#d0deef] rounded-[6px] h-auto my-[20px]">
                        <div className="h-[100px] border-b-[1px] border-[#d0deef] flex items-center px-[15px] bg-gray-100 gap-x-[15px]">
                            <img src={item?.image} alt="profile" className="w-[80px] h-[80px] rounded-full" />
                            <div className="flex flex-col items-start gap-y-[5px]">
                                <h1 className="text-[28px] font-Inter font-semibold">{item.name}</h1>
                                <p className="text-[16px] font-Inter font-normal">{item.position}</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="p-[22px]">{item?.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
