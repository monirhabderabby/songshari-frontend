import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import RecentUserCard from './RecentUserCard';
import UserCard from './UserCard';
import './MarkPriorityUser.css'

export default function MarkPriorityUser() {
    const [day, setDay] = useState('');
    const [user, setUser] = useState({});
    const users = [
        { id: 1, name: 'John Willam', age: '26', priorityFor: '30 Days' },
        { id: 2, name: 'John Kestle', age: '24', priorityFor: '30 Days' },
        { id: 3, name: 'Merray Willam', age: '35', priorityFor: '30 Days' },
        { id: 4, name: 'Kibria Sheikh', age: '30', priorityFor: '30 Days' },
    ]
    const tableData = [
        { id: 1, day: '1 Day' },
        { id: 2, day: '3 Day' },
        { id: 3, day: '7 Day' },
        { id: 4, day: '10Day' },
        { id: 5, day: '12 Day' },
        { id: 6, day: '5 Day' },
        { id: 7, day: '17 Day' },
        { id: 8, day: '20 Day' },
        { id: 9, day: '25 Day' },
        { id: 10, day: '45 Day' },
        { id: 11, day: '50 Day' },
        { id: 12, day: '2 Month' },
        { id: 13, day: '3 Month' },
        { id: 14, day: '6 Month' },
        { id: 15, day: '1 Year' },
        { id: 16, day: 'Lifetime' },
    ];
    const handleDay = (e) => {
        setDay(e.target.value)
    }
    return (
        <div className='flex justify-center'>
            <div>
                <section>
                    <div className='flex justify-center'>
                        <h1 className='text-xl font-semibold'>Mark As Priority User For ({day}) Days</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className='flex items-center mt-4'>
                            <Search className='absolute text-gray-500 pl-2 text-xl' style={{ width: 30 }} />
                            <input type="search" className='shadow drop-shwdow rounded placeholder-gray-500  text-black py-2 pr-3 pl-8  border-2 border-purple-100 focus:border-none focus:outline-none focus:ring-2 w-[80vh]' placeholder="search user name" />
                        </div>
                    </div>
                </section>
                <section className='mt-8'>
                    <div className='grid grid-cols-2 gap-4'>
                        {users?.map(item => {
                            return (
                                <UserCard item={item} key={item.id} user={user} setUser={setUser} />
                            )
                        })}
                    </div>
                    <div className='flex justify-center my-4'>
                        <button className='px-4 py-1 rounded text-white' style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}>Load All</button>
                    </div>
                </section>
                <section className='my-8'>
                    <div className='mb-4'>
                        <h1 className='text-2xl font-bold'>Mark As Priority User For :</h1>
                    </div>
                    <div className='grid grid-cols-4 gap-2'>
                        {
                            tableData?.map(item => {
                                return (
                                    <button key={item.id} value={item.day} tabIndex={item.id} className="p-2 shadow-lg w-[189px] h-[65px] rounded day-btn active:text-white font-semibold hover:text-white text-base " onClick={handleDay}
                                        style={item.day === day ? { background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)", color: 'white' } : {}}
                                    >{item.day}</button>
                                )
                            })
                        }
                    </div>
                    <div className='mt-8'>
                        <label htmlFor="custom" className='font-bold text-2xl'>Custom:</label>
                        <input type="number" name='custom' className='py-2 px-4 outline outline-1 ml-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='27 Day' onChange={(e) => setDay(e.target.value + 'Day')} />
                    </div>
                    <div className='flex justify-center my-4 mt-4'>
                        <button className='px-6 py-1 rounded  text-white  w-[189px] h-[65px] font-semibold text-base]' style={{
                            background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                        }}>Save</button>
                    </div>
                </section>
                <section>
                    <div>
                        <div className='mb-4 mt-8'>
                            <h1 className='text-2xl font-bold'>Recent Priority User</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            {users?.map(user => {
                                return (
                                    <RecentUserCard user={user} key={user.id} />
                                )
                            })}
                        </div>
                        <div className='flex justify-center my-4'>
                            <button className='px-4 py-1 rounded text-white' style={{
                                background: "linear-gradient(180deg, #E41272 0%, #942DD9 100%)",
                            }}>Load All</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
