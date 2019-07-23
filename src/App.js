import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const [chuck, setChuck] = useState('SOMETHING')
  const [bool, setBool] = useState(true)

  useEffect(() => {
    const call = () => {

      Axios.get('https://api.chucknorris.io/jokes/random?category=movie')
        .then(res => setChuck(res.data.value))

    }

    if (bool) {

      call()
      setBool(false)

    }
  }, [bool])

  function reset() {
    setBool(true)
  }

  return (
    <div className="App">
      <h1>{chuck}</h1>
      <button onClick={() => reset()}>Refresh</button>
    </div>
  )
}

export default App
