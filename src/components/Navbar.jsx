// src/components/Navbar.jsx
import React from 'react'
import logo from '/src/assets/images/AP-logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="navbarrow relative w-[100%]">
          <div className="logo-col">
            <div className="flex items-center">
              <h2>
                <a href="./">
                  <img src={logo} alt="Logo" className="h-10" />
                </a>
              </h2>
              <div>
                <h2 className="text-xl p-0 m-0 text-green-800 font-bold">
                  AMADER-PROYOJON
                </h2>
                <h2 className="p-0 m-0 text-[14px]">
                  Building Trust, Ensuring Growth
                </h2>
              </div>
            </div>

            <div className="navitems mt-2">
              <ul className="flex gap-6 text-red-500">
                <li className="hover:text-black duration-100 hover:text-xl">
                  <a href="Home">Home</a>
                </li>
                <li className="hover:text-black duration-100 hover:text-xl">
                  <a href="About">About</a>
                </li>
                <li className="hover:text-black duration-100 hover:text-xl">
                  <a href="Contacts">Contacts</a>
                </li>
                <li className="hover:text-black duration-100 hover:text-xl">
                  <a href="Services">Services</a>
                </li>
                <li className="hover:text-black duration-100 hover:text-xl">
                  <a href="Buttons">Buttons</a>
                </li>
                <li className="hover:text-black duration-100 hover:text-xl">
                  <a href="States">Use State</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding-top so content doesn’t hide behind navbar */}
      <div className="pt-20">
        {/* Your page content goes here */}
      </div>
    </>
  )
}

export default Navbar