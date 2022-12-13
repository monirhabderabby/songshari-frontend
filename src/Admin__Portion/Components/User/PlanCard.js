import { CheckCircle } from '@mui/icons-material'
import React from 'react'

export default function PlanCard({ data }) {
    return (
        <div>
            <div className='shadow-lg rounded relative h-[700px] w-full ]'>
                <svg width="437" height="129" viewBox="0 0 437 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M354.495 101.685C383.643 149.537 413.87 80.2525 436 1L14.9514 1.00007C-39.8693 71.9703 82.2289 181.162 116.453 98.1964C129.406 66.794 149.461 57.0075 227.107 116.639C281.625 158.508 280.995 -18.9771 354.495 101.685Z" fill="url(#paint0_linear_475_4585)" stroke="black" />
                    <defs>
                        <linearGradient id="paint0_linear_475_4585" x1="408.526" y1="117.451" x2="40.1507" y2="-15.6624" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E41272" />
                            <stop offset="1" stop-color="#611F9E" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='absolute top-[60px] left-[90px] mb-4 z-[100]'>
                    <div className='flex'>
                        <div className='w-[72px] h-[72px] rounded bg-[#ECEBFF] flex justify-center items-center'>
                            <div style={{
                                borderRadius: '50px',
                                borderRightColor: '#E41272',
                                borderTopColor: '#F664BC',
                                borderBottomColor: '#E41272',
                                borderLeftColor: '#F664BC',
                                borderWidth: '18px',
                                borderStyle: 'solid',
                                height: '0px',
                                width: '0px',
                                transform: 'rotate(137deg)'
                            }}>
                            </div>
                        </div>
                        <div className='ml-4'>
                            <p className='text-2xl font-medium'><small>{data?.planName} plan</small></p>
                            <p className='text-[#E41272] text-xl font-semibold'>{data?.planName}</p>

                        </div>
                    </div>
                    <div className='mt-8 mb-4'>
                        <p> <span className='text-4xl font-bold text-[#E41272]'>৳{data?.amount}</span> <span> /monthly</span></p>
                        <p className='mt-4 text-xl text-[#E41272]'>What's included</p>
                    </div>
                    <div>
                        {
                            data?.included?.map(item => {
                                return (
                                    <p className='mb-2 hover:ml-[-20px] text-lg font-medium text-[#2F3659]'><CheckCircle style={{ color: '#2F3659' }} /> {item}</p>
                                );
                            })
                        }
                    </div>
                    <div className='flex justify-center text-white mt-4'>
                        <button className='px-10 py-4 rounded-2xl bg-[background: linear-gradient(180deg, #E22989 0%, #A72CC7 100%)]  text-lg font-semibold w-[300px]' style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}>Get started</button>
                    </div>
                </div>
                <div className='absolute bottom-[0]'>
                    <svg width="433" height="147" viewBox="0 0 433 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" d="M126.503 27.902C85.8399 -40.8626 13.601 62.0474 1 146H427.71C451.245 71.2545 371.986 -54.3172 334.837 27.9018C319.149 62.6236 288.356 114.855 249.998 27.9018C212.849 -56.3102 202.821 156.963 126.503 27.902Z" fill="url(#paint0_linear_475_4683)" stroke="black" />
                        <defs>
                            <linearGradient id="paint0_linear_475_4683" x1="29.1808" y1="29.5" x2="404.814" y2="168.671" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E41272" />
                                <stop offset="1" stop-color="#611F9E" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
