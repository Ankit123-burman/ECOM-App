import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import UserLayout from './component/layout/UserLayout'
import Home from './Pages/Home'
import {Toaster} from "sonner"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import CollectionPage from './Pages/CollectionPage'
import { ProductDetails } from './Products/ProductDetails'
import CheckOut from './component/Cart/CheckOut'
import OrderConformation from './Pages/OrderConformation'
import OrderDetails from './Pages/OrderDetails'
import MyOrderPage from './Pages/MyOrderPage'
import AdminLayout from './component/Admin/AdminLayout'
import AdminHome from './Pages/AdminHome'
import UserManagement from './component/Admin/UserManagement'

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
             <Route path="/checkout" element={<CheckOut/>}/>
             <Route path='/collections/:collection' element={<CollectionPage/>}/>
             <Route path='/product/:id' element={<ProductDetails/>}/>
             <Route path='order-confirmation' element={<OrderConformation/>}/>
             <Route path="order/:id" element={<OrderDetails/>}/>
             <Route path="/my-orders" element={<MyOrderPage/>}/>
            
          </Route>
          {/*admin route*/}
          <Route path="/admin" element={<AdminLayout/>}/>
           <Route index element={<AdminHome/>}/>
           <Route path='users' element={<UserManagement/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App