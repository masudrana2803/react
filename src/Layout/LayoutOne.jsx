import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidenavbar from '../components/Sidenavbar'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
          <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutOne
