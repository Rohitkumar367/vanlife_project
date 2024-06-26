import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    return (
      <header>

        <Link className='site-logo' to="/">#VANLIFE</Link>

        {/* We just have to remove its parent path as we did in relative path chapter, baki automatically ho jayega because the element assume path of its parent in all of his links */}
        <nav>
          <NavLink to="host"
            className={({isActive}) => isActive ? "active-link" : null}
          >Host</NavLink>

          <NavLink to="about"
            className={({isActive}) => isActive ? "active-link" : null}
          >About</NavLink>

          <NavLink to="vans"
            className={({isActive}) => isActive ? "active-link" : null}
          >Vans</NavLink>
        </nav>

      </header>
  )
}

export default Header
