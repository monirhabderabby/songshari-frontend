import React from 'react';

const Button = ({ btntext }) => {
    const inlineStyle = () => {
        return (
            {
                backgroundImage: 'linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%)',
                padding: '5px 45px',
                borderRadius: "5px"
            }
        )
    }
    return (
        <div>
            <button className='text-white w-full' style={inlineStyle()}>{btntext}</button>
        </div>
    );
};

export default Button;