import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="aboutTxt">
        <div className="abt">
        <h2 class='text-blue-500 text-center'>Who are we</h2>
      <p class='text-red-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique eveniet iure itaque laudantium consectetur esse praesentium perspiciatis architecto, mollitia maiores nam ipsam reiciendis modi natus sint porro aliquam autem voluptatum expedita corporis est. Fuga inventore rem eveniet. Officia tempora aperiam iusto labore inventore dicta quas accusamus facere, possimus soluta.
      </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
