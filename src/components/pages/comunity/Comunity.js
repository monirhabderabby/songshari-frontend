import React, { useState } from 'react';
import togol from "../../../assets/images/icons/togol.png";
import WeadingCards from '../../CardComopents/WeadingCards';
import FilterModel from '../../modals/FilterModel';
import "./comunity.css";

const Comunity = () => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    }

    const array = [1, 2, 3];
    const [showModal, setShowModal] = useState(false);

    const handelOnClose = () => setShowModal(false);
    return (
        <div className='container mx-auto px-4 md:px-0 comuniti-container'>
            <div className='mt-16'>
                <div>
                    <div className='md:px-16'>
                        <hr />
                        <div className='flex justify-between my-4'>
                            <div className='flex'>
                                <button onClick={() => setShowModal(true)} className='filter-search'>
                                    <div className='flex justify-between'>
                                        <img src={togol} alt="Not Available" />
                                        <p className='pl-1'>filter search</p>
                                    </div>
                                </button>

                            </div>
                            <div className='flex items-center justify-start md:justify-end'>
                                <p className='pr-6 hidden md:block'>Order by : </p>
                                <div className='order-by-filter'>
                                    <select
                                        type="text"
                                        id="message"
                                        name="message"
                                        onChange={handleChange}
                                        value={message}>
                                        <option value="lastactive">Last active</option>
                                        <option value="oneweekago">One wek ago</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6'>
                        {
                            array.map((p, i) => {
                                return (
                                    <div key={i} className='mx-auto'>
                                        <WeadingCards />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='md:px-16 pt-10'>
                        <div className="btn-group flex justify-center">
                            <button className="btn">1</button>
                            <button className="btn btn-active">2</button>
                            <button className="btn">3</button>
                            <button className="btn">4</button>
                        </div>
                    </div>
                </div>
            </div>
            <FilterModel onClose={handelOnClose} visiblity={showModal}></FilterModel>
        </div>
    );
};

export default Comunity;