// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import App from './App.jsx'




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
