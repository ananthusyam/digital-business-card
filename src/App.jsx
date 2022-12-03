import React from 'react'
import Info from './assets/components/Info'
import About from './assets/components/About'
import Interest from './assets/components/Interest'
import Footer from './assets/components/Footer'

import './App.css'

function App() {
  return (
    <div className="container">
      <div className='app'>
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  )
}

export default App
