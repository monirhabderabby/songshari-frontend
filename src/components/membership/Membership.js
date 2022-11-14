import React from 'react';
import TitleWithBar from '../comons/TitleWithBar';
import styles from "./membership.module.css";

const Membership = () => {
    return (
        <div className='container mx-auto'>
            <div className={`${styles.set_font_family}`}>
                <div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-extrabold text-red-500 pb-10'>Upgrate Your Plan</h1>
                    </div>
                    <div>
                        <TitleWithBar Color='red' fontsize='4' textData='MemberShip Plan'></TitleWithBar>
                    </div>
                    <div className='pt-10'>
                        <TitleWithBar isHidden='hidden' Color='black' fontsize='1' textData='Choice from one of our membership levels and unlock featurs you need . Benifine from shongsari at its maximum capacity by choosing the plan that suits you' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;