import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import {Routes, Route, Link} from "react-router-dom"
import "./server"
import VanDetail from './components/VanDetail'

const App = () => {
  return (
    <div className='app'>

      {/* Added another page that shows the van details when any van from van page is being clicked */}
      
      <header>
        <Link className='site-logo' to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vans' element={<Vans/>}/>
        <Route path='/vans/:id' element={<VanDetail/>}/>
        
      </Routes>

    </div>
  )
}

export default App
