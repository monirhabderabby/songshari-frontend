import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from '../Pages/notfound/NotFound';
import SingleProfile from '../pages/SingleProfile';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SingleProfile />}></Route>
                    <Route path="/login" element={<Notfound />}></Route>
                    <Route path="/notfound" element={<Notfound />}></Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;