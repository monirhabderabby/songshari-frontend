import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "../components/pages/Contact/Contact";
import Homepage from "../Pages/Homepage";
import Login from '../pages/Login';
import Notfound from "../Pages/notfound/NotFound";
import SignUp from '../pages/SignUp';
import SingleProfile from '../pages/SingleProfile';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<SingleProfile />} /> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    {/* <Route path="/" element={<SingleProfile />}></Route> */}
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/notfound" element={<Notfound />}></Route>

                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/singleProfile" element={<SingleProfile />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;
