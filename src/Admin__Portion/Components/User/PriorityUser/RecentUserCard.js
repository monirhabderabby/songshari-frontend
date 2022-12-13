import React from 'react'

export default function RecentUserCard({ user }) {
    return (
        <div className='py-6 text-white rounded bg-[#1B6B67]' key={user.id}>
            <p className='flex justify-center mb-1'>priority for {user.priorityFor}</p>
            <div className='mb-6 px-10 flex items-center'>
                <div className='mr-4'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqRw_wsr3Ns2jNI2drFdP6VaS191Gm23iqEoLKODroVa_WsKqNHlsG6pyvrC17mLyHC8&usqp=CAU" className='w-[85px] h-[85px] rounded-full' alt="" />
                </div>
                <div>
                    <h1 className='text-xl'>{user?.name}</h1>
                    <p>Age:{user?.age}</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='px-6 py-1 rounded bg-[#E16B28] text-white' >cancel</button>
            </div>
        </div>
    )
}
