import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import LayoutOne from './Layout/LayoutOne'
import LayoutTwo from './Layout/LayoutTwo'
import Banner from './components/Banner'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Buttons from './pages/Buttons'
import States from './pages/States'
import Contacts from './pages/Contacts'
import Services from './pages/Services'




const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Banner/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Buttons' element={<Buttons/>}/>
        <Route path='/States' element={<States/>}/>
      </Route>
      <Route path='/' element={<LayoutTwo/>}>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Products_alt' element={<Products/>}/>
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
