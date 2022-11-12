import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import SingleProfile from '../pages/SingleProfile';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SingleProfile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;