import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Listing } from './components/Listing'
import { AddListing } from './components/AddListing'
import { ProductPage } from './components/ProductPage'

function App() {

  return (
    <>
    <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Listing/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='createListing' element={<AddListing/>} />
        <Route path='product/:id' element={<ProductPage/>} />
      </Routes>

    </Provider>

    </>
  )
}

export default App
