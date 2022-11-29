import React from 'react';
import aboutUsStoryImg from "../../../assets/images/AboutUs/aboutUsStory.jpg";

const AboutUsStory = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center lead-[44px] mt-20 mb-12'>
                Our Story
            </h1>
            <div className='max-w-5xl mx-auto flex items-start gap-16'>
                <div>
                    <img className='w-[584px] rounded-[30px]' src={aboutUsStoryImg} alt="Not Available" />
                </div>
                <div className='w-96 text-[#757575] leading-7'>
                    <p className='mb-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto iure accusamus, recusandae nisi quod laudantium reprehenderit. Excepturi itaque adipisci, rem eligendi corporis eum dolorem eius harum perspiciatis pariatur perferendis dignissimos ducimus quaerat et ad cumque ratione accusamus dolorum debitis saepe iure earum molestias obcaecati. Ab, vitae.
                    </p>
                    <p className='mb-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto iure accusamus, recusandae nisi quod laudantium reprehenderit. Excepturi itaque adipisci, rem eligendi corporis eum dolorem eius harum perspiciatis pariatur perferendis dignissimos ducimus quaerat et ad cumque ratione accusamus dolorum debitis saepe iure earum molestias obcaecati. Ab, vitae.
                    </p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas possimus expedita, ullam est doloribus fugit inventore ipsam harum ad!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsStory;