import React from 'react';
import { Link } from 'react-router-dom';

const BeginFamilyJourney = () => {
    return (
        <div className='pt-8 pb-24 w-4/5 mx-auto'>
            <div className='border flex'>
                <div className='border border-black flex-1'>
                    <h6 className='text-[#5650ce] text-2xl font-bold mb-6'>
                        Meet Your Perfect Life Partner!
                    </h6>
                    <h2 className='text-5xl font-bold mb-3 text-[#292929]'>
                        Begin Family Journey
                    </h2>
                    <p className='mr-8 mb-4 text-xl tracking-wide'>
                        Shongshari.com is the ultimate Matchmaking, Matrimony, and
                        Family Management platform in Bangladesh. We are working to
                        achieve a simple objective - to help people find happiness.
                    </p>
                    <br />
                    <p className='mr-8 mb-4 text-xl tracking-wide'>
                        Shongshari.com - a trusted matrimonial & matchmaking service,
                        has always differentiated itself from other matrimonials
                        through its innovation-led approach not only by redefining the
                        way Bangladeshi brides and grooms meet for marriage, but also
                        maintain and make their family journey smoother!
                    </p>
                    <button
                        type="submit"
                        className="px-8 pt-2 pb-1 text-2xl text-white  font-semibold rounded-md tracking-[.25em] shadow-xl shadow-[#0c4ea54d] cursor-pointer"
                        style={{ backgroundImage: 'linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)' }}
                    >
                        SEEK YOUR PARTNER
                    </button>
                </div>
                <div className='border border-black flex-1'>

                </div>
            </div>
        </div>
    );
};

export default BeginFamilyJourney;