import { Search } from '@mui/icons-material'
import { Switch } from 'antd'
import React from 'react'

export default function UserPlanHeader({ data }) {
    return (
        <div>
            <div className="flex justify-center">
                <div className='flex items-center mt-4'>
                    <Search className='absolute text-gray-500 pl-2 text-xl' style={{ width: 30 }} />
                    <input type="search" className='shadow drop-shwdow rounded placeholder-gray-500  text-black py-2 pr-3 pl-8  border-2 border-purple-100 focus:border-none focus:outline-none focus:ring-2 w-[80vh]' placeholder="search user name" />
                </div>
            </div>

            <div className=' mt-8 flex justify-center'>
                <div className='py-6 text-white w-[60vh] rounded bg-[#301B6B]'>
                    <div className='mb-6 ml-10 pl-10 flex items-center'>
                        <div className='mr-4'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqRw_wsr3Ns2jNI2drFdP6VaS191Gm23iqEoLKODroVa_WsKqNHlsG6pyvrC17mLyHC8&usqp=CAU" className='w-[85px] h-[85px] rounded-full' alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl'>{data?.userName}</h1>
                            <p>Age:{data?.age}</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='px-6 py-1 rounded bg-[background: linear-gradient(180deg, #E22989 0%, #A72CC7 100%)]' style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}>View Profile</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <h2 className='mr-4'>Monthly</h2>
                <Switch defaultChecked style={{ background: '#E41272' }} />
                <h2 className='ml-4'>Anually</h2>
            </div>
        </div>
    )
}
