import React from 'react'

const Sidenavbar = () => {
  return (
    <>
      <nav>
        <div className="Sidenavbar-row absolute">
            {/* <div className="logo-col">
              <h2><a href="./"><img src="src/assets/react.svg" alt="Logo" /></a></h2>
            </div> */}
            
            <div className="Sidenavitems pt-20 ">
                    <ul>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Products">All Products</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="About">Location</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Contacts">Contact Us</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Services">Request service</a></li>
                        <li className='hover:text-black duration-100 hover:text-xl'><a href="Services">FAQ</a></li>

                    </ul>
                </div>
        </div>
      </nav>

    </>
  )
}

export default Sidenavbar
