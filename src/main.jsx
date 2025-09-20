// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Aboutme from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Services from './pages/Services.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />   
    {/* <Navbar />
    <Banner/>
    <Home/>
    <Aboutme/>
    <Contacts/>
    <Services/>
    <Footer/> */}
  </StrictMode>,
)
