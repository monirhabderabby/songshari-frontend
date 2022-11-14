import React from 'react';

const TitleWithBar = ({ textData, fontsize, Color, isHidden }) => {
    const leftBar = () => {
        return (
            {
                backgroundImage: 'linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%)',
                width: '60px',
                height: '5px',
                borderRadius: '3px',
            }
        )
    }
    const colors = () => {
        return (
            {
                color: `${Color}`
            }
        )
    }
    return (
        <div>
            <div className='text-center'>
                <h1 style={colors()} className={`text-${fontsize}xl font-extrabold`}>{textData}</h1>
            </div>
            <div style={leftBar()} className={`text-left-bar ${isHidden}`}>

            </div>
        </div>
    );
};

export default TitleWithBar;