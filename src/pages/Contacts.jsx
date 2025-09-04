import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cont1 from '../Common/Cont1'

const Contacts = () => {
  return (
    <>
    <Navbar/>
    <div className='flex justify-between'>
    <Cont1 />
    <Cont1 />
    <Cont1 />
    <Cont1 />
    </div>
    {/* <div className='contact_lists'>
      <div className="contact1">
      <h2 class='text-center'>Contacts</h2>
      <p>Name:</p>
      <p>Phone:</p>
      <p>Address:</p>        
      </div>
      
      <div className="contact2">
      <h2 class='text-center'>Contacts</h2>
      <p>Name:</p>
      <p>Phone:</p>
      <p>Address:</p>
      </div>

    </div> */}
    {/* <Footer/> */}
    </>
  )
}

export default Contacts
