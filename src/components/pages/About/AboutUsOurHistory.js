import React from 'react';
import articleImg1 from '../../../assets/images/AboutUs/aboutUsOurHistory1.jpg';
import articleImg2 from '../../../assets/images/AboutUs/aboutUsOurHistory2.jpg';
import articleImg3 from '../../../assets/images/AboutUs/aboutUsOurHistory3.jpg';

const AboutUsOurHistory = () => {
    const articlesInfo = [
        { id: 1, title: "Shongshari.com Article Title", category: "category", img: articleImg1 },
        { id: 2, title: "Shongshari.com Article Title", category: "category", img: articleImg2 },
        { id: 3, title: "Shongshari.com Article Title", category: "category", img: articleImg3 },
    ];
    return (
        <div className='max-w-5xl mx-auto mb-14'>
            <h1 className='text-3xl text-center leading-[44px] font-semibold mt-28 mb-12'>
                Our History
            </h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    articlesInfo.map(article => <div key={article.id}>
                        <div>
                            <img className='rounded-[20px]' src={article.img} alt="" />
                        </div>
                        <h3 className='text-xl leading-8 font-medium mt-6 mb-3'>
                            {article.title}
                        </h3>
                        <h5 className='text-sm font-medium leading-5 text-[#762BB0]'>{article.category}</h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AboutUsOurHistory;