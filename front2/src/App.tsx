import React, { useState, useEffect } from 'react'
import './App.css'
import Masthead from './components/masthead'
import Loader from './components/loader'
import Logo from './components/logo'
import About from './components/about'



function App() {

  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true) 
    setTimeout( () => {
      setLoading(false)
    }, 4100)
  }, [])

  return (
    <>
      {
        loading 
          ? <Loader /> 
          : <> <Masthead/> <Logo/> <About/> </>
      }     
    </>

  )
}

export default App
