import React, { useState } from 'react';
import WeadingCards from '../../CardComopents/WeadingCards';
import FilterModel from '../../modals/FilterModel';
import "./comunity.css";

const Comunity = () => {
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
                            <div className='text-left'>
                                <button onClick={() => setShowModal(true)} className='filter-search'>Filter search</button>
                            </div>
                            <div className='text-right'>
                                <form action="/action_page.php">
                                    <label className='text-2xl' for="cars">Order by : </label>
                                    <select className='order-by-filter' name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <hr />
                    </div >
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        {
                            array.map(p => {
                                return (
                                    <div className='mx-auto'>
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