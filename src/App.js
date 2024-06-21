import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import {Routes, Route} from "react-router-dom"
import "./server"
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/vans' element={<Vans/>}/>
          <Route path='/vans/:id' element={<VanDetail/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
