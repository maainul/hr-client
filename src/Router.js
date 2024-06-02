import React from 'react'
import Navbar from './pages/layouts/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register'


function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<div> Home </div>} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<div> Login </div>} />
                <Route path='/department/list' element={<div> Department </div>} />
            </Routes>
        </BrowserRouter>
    )

}
export default Router
