import './App.css'
import WeatherCard from "./components/WeatherCard"
import DarkMode from './components/DarkMode'
import Loader from './components/Loader'
import { useState, useEffect } from 'react'

function App() {

  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulación de carga asincrónica
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isloading &&    <Loader />}
      <DarkMode/>
      <WeatherCard/>
    </>
  )
}

export default App
