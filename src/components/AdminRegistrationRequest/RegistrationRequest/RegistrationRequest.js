import React from 'react';
import adminRuffImg from '../../../assets/images/AdminRuffImage/adminRuffImg.jpg';

const RegistrationRequest = () => {

    const requestData = [
        { id: 1, name: "John William", Age: 26, img: adminRuffImg },
        { id: 2, name: "John William", Age: 26, img: adminRuffImg },
        { id: 3, name: "John William", Age: 26, img: adminRuffImg },
        { id: 4, name: "John William", Age: 26, img: adminRuffImg },
        { id: 5, name: "John William", Age: 26, img: adminRuffImg },
        { id: 6, name: "John William", Age: 26, img: adminRuffImg },
    ];

    return (
        <div className='mt-10'>
            <h1 className='text-2xl text-[#333333] text-center lg:text-left leading-[44px] font-bold mb-10'>
                Registration Request
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    requestData.map(data => <div
                        key={data.id}
                        className="bg-[#301B6B] rounded-lg px-6 md:px-10 lg:px-6 xl:px-10 py-4 md:py-8"
                    >
                        <div className='flex justify-start items-center gap-6 lg:gap-4 xl:gap-6'>
                            <div className=''>
                                <img className='rounded-full w-[85px] h-[85px]' src={adminRuffImg} alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='text-2xl font-medium leading-8 whitespace-nowrap'>{data.name}</p>
                                <p className='text-xl leading-6'>Age : {data.Age}</p>
                            </div>
                        </div>
                        <div className='mt-4 md:mt-8'>
                            <button className='block mx-auto text-white px-4 py-2 font-medium leading-5 rounded'
                                style={{ backgroundImage: "linear-gradient(180deg, #E22989 0%, #A72CC7 100%)" }}
                            >
                                View Request
                            </button>
                        </div>
                    </div>)
                }
            </div>
            <div className='mt-8'>
                <button className='block mx-auto text-white px-4 py-2 font-medium leading-5 rounded'
                    style={{ backgroundImage: "linear-gradient(180deg, #E22989 0%, #A72CC7 100%)" }}
                >
                    Load All Request
                </button>
            </div>
        </div>
    );
};

export default RegistrationRequest;