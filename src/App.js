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
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos' 


const App = () => {
  return (
    <div className='app'>

      {/* In this section we are gonna use useSearchParams in to filter type*/}

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout/>}>

            <Route index element={<Home/>}/>

            <Route path='about' element={<About/>}/>

            <Route path='vans' element={<Vans/>}/>

            <Route path='vans/:id' element={<VanDetail/>}/>

            <Route path='host' element={<Hostlayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='income' element={<Income/>}/>
              <Route path='vans' element={<HostVans/>}/>

              <Route path='vans/:id' element={<HostVanDetail/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path='pricing' element={<HostVanPricing/>}/>
                <Route path='photos' element={<HostVanPhotos/>}/>
              </Route>

              <Route path='reviews' element={<Reviews/>}/>
            </Route>
            
          </Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
