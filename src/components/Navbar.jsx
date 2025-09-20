// src/components/Navbar.jsx
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbarrow relative w-[100%]">
            <div className="logo-col">
              <h2><a href="./"><img src="src/assets/react.svg" alt="Logo" /></a></h2>
                {/* <h2><img src="src/assets/react.svg" alt="Logo" /></h2> */}
                <div className="navitems">
                    <ul className='flex gap-6 text-red-500' >
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Home">Home</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="About">About</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Contacts">Contacts</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Services">Services</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Buttons">Buttons</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="States">Use State</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
