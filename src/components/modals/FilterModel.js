import React from 'react';

const FilterModel = ({ visiblity, onClose }) => {

    if (!visiblity) return null;

    const inlineStyle = () => {
        return (
            {
                backgroundColor: 'yellow',
                backgroundImage: 'linear-gradient(166deg, rgb(242, 40, 118) -30%, rgb(148, 45, 217) 100%)',
                padding: '15px 65px',
                borderRadius: "5px",
                color:"white",
                borderRadius:"60px",
                fontSize:"25px"
            }
        )
    }

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white p-2 rounded w-2/5">
                    <div className='px-6 py-4'>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl font-semibold'>Filter Search</h1>
                            <button onClick={onClose} className='bg-gray-800 text-red-600 font-extrabold px-4 rounded-md'>X</button>
                        </div>
                        <div>
                            Here is input field
                        </div>
                        <div className='flex justify-center'>
                            <button style={inlineStyle()}>Join Now !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModel;