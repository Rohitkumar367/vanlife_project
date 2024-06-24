import React from 'react'
import {Outlet, NavLink } from 'react-router-dom'

const Hostlayout = () => {

    const inlineStyle  = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <> 
            <nav className='host-nav'>

                <NavLink to="/host" end
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Dashboard</NavLink>

                <NavLink to="/host/income"
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Income</NavLink>

                <NavLink to="/host/vans"
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Vans</NavLink>

                <NavLink to="/host/reviews"
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Reviews</NavLink>

            </nav>

            <Outlet></Outlet>
        </>
    )
}

export default Hostlayout
