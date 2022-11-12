import React, { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import Title from '../Title/Title';
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
        <div className='my-6'>
            <div>
                <Title titleText="Message box"></Title>
            </div>
            <div>
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
                            <img className='rounded-lg' src={city.img} alt="" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ChatGelary;