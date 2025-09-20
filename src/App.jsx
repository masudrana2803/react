// src/App.jsx
import React from 'react'
import './assets/react.svg'
import './App.css'


import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Services from './pages/Services'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import LayoutOne from './Layout/LayoutOne'
import LayoutTwo from './Layout/LayoutTwo'
import Products from './pages/Products'
import Buttons from './pages/Buttons'
import States from './pages/States'




const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/'element={<LayoutOne/>}>
      <Route index element={<Banner/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Products' element={<Products/>}/>

      <Route path='/Buttons' element={<Buttons/>}/>
      <Route path='/States' element={<States/>}/>

      
      {/* <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Services' element={<Services/>}/> */}
      </Route>
      {/* <Route path='/' element={<Banner/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Services' element={<Services/>}/> */}

      <Route path='/'element={<LayoutTwo/>}>
      {/* <Route index element={<Banner/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/> */}
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Products' element={<Products/>}/>

      </Route>

    </Route>






  ))

  return (
    <>
    <RouterProvider router={myRoute}/>
    {/* <Navbar/>
    <Banner/>
    <Footer/>
    <Home/>
    <About/>
    <Contacts/>
    <Services/> */}

    </>
    // <div className="bodyText">
    //   <h1>Hello</h1>
    //   <h2>I am doing react</h2>
    // </div>
  )
}

export default App
