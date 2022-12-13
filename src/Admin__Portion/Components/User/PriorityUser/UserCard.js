import React from 'react'

export default function UserCard({ item, user, setUser }) {
    return (
        <div className='py-6 text-white rounded-xl bg-[#6A1B6B]' key={item.id}>
            <div className='mb-6 px-10 flex items-center'>
                <div className='mr-4'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqRw_wsr3Ns2jNI2drFdP6VaS191Gm23iqEoLKODroVa_WsKqNHlsG6pyvrC17mLyHC8&usqp=CAU" className='w-[85px] h-[85px] rounded-full' alt="" />
                </div>
                <div>
                    <h1 className='text-xl' style={{ fontSize: '24px', fontWeight: 500 }}>{item?.name}</h1>
                    <p style={{ fontSize: '20px', fontWeight: '400px' }}>Age:{item?.age}</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='px-6 py-1 rounded shadow w-[135px] h-[37px] text-base font-medium '
                    style={item.id === user.id ? {
                        background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        color: 'white'
                    } : { background: 'white', color: '#000' }} onClick={() => setUser(item)}>{item.id === user.id ? 'selected' : 'select'}</button>
            </div>
        </div>
    )
}
