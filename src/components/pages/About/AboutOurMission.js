import React from 'react';
import aboutUsMission1 from "../../../assets/images/AboutUs/aboutUsMission1.jpg";
import aboutUsMission2 from "../../../assets/images/AboutUs/aboutUsMission2.jpg";

const AboutOurMission = () => {
    return (
        <div>
            <div className='max-w-5xl mx-auto mt-20 flex items-center gap-[70px]'>
                <div className='text-center flex-1 flex items-center justify-center'>
                    <div>
                        <h3 className='text-3xl font-semibold leading-10 mb-9'>
                            Our Mission
                        </h3>
                        <p className='text-[#757575] text-lg leading-8 text-left'>
                            Lorem ipsum dolor sit amet consectetur. Suspendisse sit duis platea dapibus urna aliquet. Massa fringilla mauris morbi tincidunt vitae in. Hac adipiscing enim orci dictum. Quis auctor fames blandit et quis ipsum dolor lacus volutpat. Euismod sed urna in aenean iaculis. Egestas feugiat nibh justo tristique quis. Feugiat dis pharetra praesent interdum nibh odio sit. Convallis nec interdum dignissim fusce. Risus quis cras cras ullamcorper blandit nisl mauris. Nibh.
                        </p>
                    </div>
                </div>
                <div className='relative flex-1 mb-12'>
                    <img className='z-0 rounded-bl-[80px] w-[476px] h-[415px]' src={aboutUsMission1} alt="Not Available" />
                    <img className='absolute -bottom-12 rounded-tr-[128px] rounded-bl-[127px] w-72 z-10' src={aboutUsMission2} alt="Not Available" />
                </div>
            </div>
        </div>
    );
};

export default AboutOurMission;