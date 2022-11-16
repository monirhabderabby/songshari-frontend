import React from 'react';

const Button = ({ btntext }) => {
    const inlineStyle = () => {
        return (
            {
                backgroundColor: 'yellow',
                backgroundImage: 'linear-gradient(45deg, #f3ec78, #af4261)',
                padding:'5px 45px',
                borderRadius:"5px"
            }
        )
    }
    return (
        <div>
            <button style={inlineStyle()}>{btntext}</button>
        </div>
    );
};

export default Button;