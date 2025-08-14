import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbarrow">
            <div className="logo-col">
                <h2><img src="src/assets/react.svg" alt="Logo" /></h2>
                <div className="navitems">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
