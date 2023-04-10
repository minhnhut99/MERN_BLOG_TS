import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login/Login'
import Global from '@/pages/global/Global'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Global />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router