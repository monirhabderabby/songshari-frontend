import React, { useState } from 'react';
import togol from "../../../assets/images/icons/togol.png";
import WeadingCards from '../../CardComopents/WeadingCards';
import FilterModel from '../../modals/FilterModel';
import "./comunity.css";

const Comunity = () => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);

        console.log('value is:', event.target.value);
    }

    const array = [1, 2, 3];
    const [showModal, setShowModal] = useState(false);
    
    const handelOnClose = () => setShowModal(false);
    return (
        <div className='container mx-auto'>
            <div className='mt-16'>
                <div>
                    <div className='md:px-16'>
                        <hr />
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-around py-4'>
                            <div className='text-left flex'>
                                <button onClick={() => setShowModal(true)} className='filter-search'>
                                    <div className='flex pl-10'>
                                        <img src={togol} alt="" />
                                        <p className='pl-2'>Filter search</p>
                                    </div>
                                </button>

                            </div>
                            <div className='text-right'>
                                <label className='text-2xl' htmlFor="message">Order by : </label>
                                <select
                                    type="text"
                                    id="message"
                                    name="message"
                                    onChange={handleChange}
                                    value={message}
                                    className='order-by-filter'>
                                    <option value="xx">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                    </div >
                    <div className='grid grid-cols-1 md:grid-cols-3'>
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