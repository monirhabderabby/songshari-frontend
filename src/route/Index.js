import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProfile from '../Pages/SingleProfile';
import Homepage from '../Pages/Homepage';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/singleProfile" element={<SingleProfile />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;