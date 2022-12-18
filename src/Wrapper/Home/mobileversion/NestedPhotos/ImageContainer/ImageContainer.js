import React, { useState } from 'react';
import dealing from '../../../../../assets/images/All Services/dealing.png';
import dealing1 from '../../../../../assets/images/All Services/dealing1.png';
import dealing2 from '../../../../../assets/images/All Services/dealing2.png';
import dealing3 from '../../../../../assets/images/All Services/dealing3.png';
import dealing4 from '../../../../../assets/images/All Services/dealing4.png';

const ImageContainer = () => {

    const [mainImg, setMainImg] = useState(0);

    const imgData = [
        {
            id: 1,
            img: dealing
        },
        {
            id: 2,
            img: dealing1
        },
        {
            id: 3,
            img: dealing2
        },
        {
            id: 4,
            img: dealing3
        },
        {
            id: 5,
            img: dealing4
        },
    ]

    return (
        <div>
            <div>
                <img className='w-full h-[182px]' src={imgData[mainImg]?.img} alt="Not Available" />
            </div>

            <div className='flex justify-center gap-[7px] pt-[7px] pb-[10px] px-[60px] bg-gradient-to-l from-[#9149C94D] to-[#E412724D]'>
                {
                    imgData.map((data, index) =>
                        <img key={data.id} onClick={() => setMainImg(index)} className='w-[39px] h-[29px]' src={data?.img} alt="Not Available" />
                    )
                }
            </div>
        </div>
    );
};

export default ImageContainer;