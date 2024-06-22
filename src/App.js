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

      {/* We are gonna add host pages and many more pages*/}

      <BrowserRouter>
        <Routes>

          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/vans' element={<Vans/>}/>
            <Route path='/host' element={<Hostlayout/>}>

              <Route path='/host' element={<Dashboard/>}/>
              <Route path='/host/income' element={<Income/>}/>
              <Route path='/host/reviews' element={<Reviews/>}/>
              
            </Route>
            <Route path='/vans/:id' element={<VanDetail/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
