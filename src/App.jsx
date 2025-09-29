import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import UserLayout from './component/layout/UserLayout'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLayout />} >
             <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App