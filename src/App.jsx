import { useState } from 'react'
import './App.css'
import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage'
import { Finish } from './components/Finish'
import { Test } from './components/Test'


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/test" element={<Test/>}/>
                <Route path="/finish" element={<Finish/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
