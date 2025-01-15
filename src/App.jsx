import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbBar from './components/NavBar'
import Slide from './components/Slide'
import Slider from './components/slider'
import Content from './components/Content'
import Home from './pages/Home'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import Podcast from './pages/Podcast'
import Search from './pages/Search'
import AudioPlayer from './components/AudioPlayer'
import { useAudio } from './context/audioContext'

function App() {
  const {audio} = useAudio();

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/podcast' element={<Podcast />} /> */}
          <Route path='/podcast/:id' element={<Podcast />} />
          <Route path ='/search/:query' element={<Search />} />
          <Route path='*' element={<Home />} />
        </Routes>
      {/* <Home /> */}
{    audio&&  <AudioPlayer />
}    </>
  )
}

export default App
