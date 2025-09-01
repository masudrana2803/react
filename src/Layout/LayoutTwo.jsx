import React from 'react'
import { Outlet } from 'react-router'
import Sidenavbar from '../components/Sidenavbar'
import Footer from '../components/Footer'


const LayoutTwo = () => {
  return (
    <>
    <div className="setrow">
<Sidenavbar/>
<div className="flex-1/2">
<Outlet/>
</div>
    </div>
<Footer/>

    </>
  )
}

export default LayoutTwo
