import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbarrow">
            <div className="logo-col">
                <h2><img src="src/assets/react.svg" alt="Logo" /></h2>
                <div className="navitems">
                    <ul className='flex gap-6 text-red-500' >
                        <li className='hover:text-black duration-100'><a href="#">Home</a></li>
                        <li className='hover:text-black duration-100'><a href="#">About</a></li>
                        <li className='hover:text-black duration-100'><a href="#">Contacts</a></li>
                        <li className='hover:text-black duration-100'><a href="#">Services</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
