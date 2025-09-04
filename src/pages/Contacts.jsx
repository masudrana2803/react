import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cont1 from '../Common/Cont1'

const Contacts = () => {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center gap-20 mt-20'>
    <Cont1 content1={":Md Masud Rana"} content2={":01680118532"} content3={":Uttara"}/>
    <Cont1 content1={":Kazi Mohammad Maayush"} content2={":01641380975"} content3={":Uttara"}/>
    <Cont1 content1={":Kazi Mohammad Ramin"} content2={":01641380976"} content3={":Uttara"}/>
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
