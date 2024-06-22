import React from 'react'
import {BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import {Routes, Route} from "react-router-dom"
import "./server"
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Hostlayout from './components/Hostlayout'
import Dashboard from './pages/Host/Dashboard'

const App = () => {
  return (
    <div className='app'>

      {/* We are gonna make our nested path relative so that we don't need mention full path name*/}

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout/>}>

            {/* index keyword is used to make the route render if no path is choosen or if the path of the parent route matches */}
            <Route index element={<Home/>}/>

            {/* If we don't use '/' at the begining then it will treats it as a relative Routes, it will be relative to parent route */}
            <Route path='about' element={<About/>}/>

            <Route path='vans' element={<Vans/>}/>

            <Route path='vans/:id' element={<VanDetail/>}/>

            <Route path='host' element={<Hostlayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='income' element={<Income/>}/>
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
            
          </Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
