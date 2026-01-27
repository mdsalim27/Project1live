import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RoutLeyout from './compunent/RoutLeyout'
import Home from './compunent/Home'
import Services from './compunent/Services'
import About from './About'
import Contact from './Contact'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './compunent/Product'
import ProductAll from './compunent/ProductAll'

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RoutLeyout />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/productAll' element={<ProductAll />}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
