import React, { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Masthead from './components/masthead'
import Loader from './components/loader'
import About from './components/about';
import Work from './components/work';
import About__Me from './components/about_me';



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
                <Route path="about" element={<About />} />
                <Route path="work" element={<Work />} />
                <Route path="about_me" element={<About__Me />} />
            </Routes>
          </BrowserRouter>
      }

    </>

  )
}

export default App
