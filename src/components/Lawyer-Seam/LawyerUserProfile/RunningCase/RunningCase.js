import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const RunningCase = () => {

    const runningCasesInfo = [
        { id: 1, category: "Married Life Case", caseDescription: "Idea of this case will be shared in this short description", progress: 70 },
        { id: 1, category: "Complex Case", caseDescription: "Idea of this case will be shared in this short description", progress: 80 },
        { id: 1, category: "Complex Case", caseDescription: "Idea of this case will be shared in this short description", progress: 50 },
    ]

    return (
        <div className='mb-12 md:mb-16 lg:mb-28'>
            <h1 className='text-3xl font-medium leading-7 mb-10'>
                Running Case
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'>
                {
                    runningCasesInfo.map(singleCase => <div
                        key={singleCase.id}
                        className="p-8 rounded-[20px]"
                        style={{ backgroundImage: "linear-gradient(180deg, #F4EBFF 0%, #FFEAFD 100%)" }}>
                        <button className='bg-[#E41272] rounded-xl px-4 py-3 text-white font-semibold leading-6 mb-3'>
                            {singleCase.category}
                        </button>
                        <p className='font-medium leading-6 mb-8'>
                            {singleCase.caseDescription}
                        </p>
                        <div className='flex items-center gap-20 mb-3'>
                            <p className='text-sm font-light leading-5'>Progress</p>
                            <p className='text-sm font-semibold leading-5'>{singleCase.progress}%</p>
                        </div>
                        <div className='w-[100%] md:w-[50%]'>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={singleCase.progress} />
                            </Box>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RunningCase;