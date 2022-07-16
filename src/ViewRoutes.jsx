import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<div>404 not found</div>} />
        </Routes>
    )
}

export default ViewRoutes

