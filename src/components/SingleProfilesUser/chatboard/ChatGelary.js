import React, { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import LeftArrowButton from './LeftArrowButton';
import RightArrowButton from './RightArrowButton';

const ChatGelary = () => {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        fetch('json/userImage.json')
            .then(res => res.json())
            .then(data => {
                setChats(data);
            })
    }, [])
    return (
        <div className='my-6 px-2 md:px-0 w-72 md:w-full'>
            <div>
                <h1 className="text-2xl font-semibold pb-6">You may like</h1>
            </div>
            <div className='w-72'>
                <Carousel
                    cols={2}
                    rows={2}
                    gap={6}
                    loop={true}
                    arrowRight={<RightArrowButton type="right" />}
                    arrowLeft={<LeftArrowButton type="left" />}
                >
                    {chats.map((city, i) => (
                        <Carousel.Item key={i}>
                            <img className='rounded-lg' src={city.img} alt="Not Available" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ChatGelary;