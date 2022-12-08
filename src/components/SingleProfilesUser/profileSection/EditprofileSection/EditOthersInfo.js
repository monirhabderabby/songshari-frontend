import { Select } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUpdateOthersDetailsMutation } from '../../../../Redux/features/userInfo/userApi';

const EditOthersInfo = () => {
    const [othersInfo, setOthersInfo] = useState({});
    // update query function 
    const [updateOthersDetails, { isSuccess }] = useUpdateOthersDetailsMutation();

    const handleDoSmoke = (value) => {
        setOthersInfo({ ...othersInfo, doSmoke: value })
    }
    const handleDoDrink = (value) => {
        setOthersInfo({ ...othersInfo, doDrink: value })
    }
    const handleHavePet = (value) => {
        setOthersInfo({ ...othersInfo, havePet: value })
    }
    const handleHaveTattos = (value) => {
        setOthersInfo({ ...othersInfo, haveTattos: value })
    }
    const handleHaveVoluntaryExp = (value) => {
        setOthersInfo({ ...othersInfo, haveVoluntaryExp: value })
    }
    const handleDoTravelledOutsiteBD = (value) => {
        setOthersInfo({ ...othersInfo, travelledOutsideBangladesh: value })
    }
    const handleJoinFamily = (value) => {
        setOthersInfo({ ...othersInfo, likeJoinFamily: value })
    }
    const handleBelieveInGod = (value) => {
        setOthersInfo({ ...othersInfo, believeInGod: value })
    }
    //for navigate to user profile after update data
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { ...othersInfo }
        await updateOthersDetails(data);

    }
    if (isSuccess) {
        navigate("/userprofile")
    }

    //all data handler function
    return (
        <div className='max-w-[523px] mx-auto bg-white drop-shadow-lg px-4 py-6 mb-4 rounded'>
            <form onSubmit={handleSubmit}>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you smoke?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder="Do you somoke?"
                        onChange={handleDoSmoke}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you Drink?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder="Do you Drink?"
                        onChange={handleDoDrink}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you have pet?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder=">Do you have pet?"
                        onChange={handleHavePet}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you have tattos?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder="Do you have tattos??"
                        onChange={handleHaveTattos}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you voluntary experience?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder="Do you voluntary experience?"
                        onChange={handleHaveVoluntaryExp}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you Travel Outsite Bangladesh?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder="Do you travel outsite Bangladesh?"
                        onChange={handleDoTravelledOutsiteBD}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you Like Join Family?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder="Do you like join family?"
                        onChange={handleJoinFamily}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div className='pb-4'>
                    <h1 className='text-sm block pb-2 text-slate-600 font-medium'>Do you Believe in God?</h1>
                    <Select
                        className='w-full'
                        size='large'
                        placeholder="Do you Believe in God?"
                        onChange={handleBelieveInGod}
                        options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'no', label: 'No' }
                        ]}
                    />
                </div>
                <div>
                    <input
                        type='submit'
                        value="Save"
                        style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}
                        className="w-full text-center py-[8] py-[10px] text-[#fff]  text-lg font-medium rounded"
                    />

                </div>
            </form>
        </div>
    );
}

export default EditOthersInfo;
