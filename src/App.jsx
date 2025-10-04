import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import UserLayout from './component/layout/UserLayout'
import Home from './Pages/Home'
import {Toaster} from "sonner"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster position="top-right"/>
        <Routes>
          <Route path='/' element={<UserLayout />} >
             <Route index element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/profile" element={<Profile/>}/>
          </Route>
          {/*admin route*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App