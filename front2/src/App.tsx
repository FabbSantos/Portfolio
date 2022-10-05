import React, { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Masthead from './components/masthead'
import Loader from './components/loader'
import Logo from './components/logo'
import About from './components/about'
import Work from './components/work';



function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4100)
  }, [])

  return (
    <>
      {
        loading
          ? <Loader />
          : <BrowserRouter>
            <Routes>
              <Route path="/" element={<Masthead />}/>
                {/* <Route index element={<Masthead />} /> */}
                {/* <Route path="contact" element={<NoPage />} /> */}
                <Route path="about" element={<About />} />
                <Route path="work" element={<Work />} />
            </Routes>
          </BrowserRouter>
      }

    </>

  )
}

export default App
