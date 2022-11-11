import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProfile from '../pages/SingleProfile';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SingleProfile />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;