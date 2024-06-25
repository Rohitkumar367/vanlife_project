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

            {/* We just have to remove its parent path as we did in relative path chapter, baki automatically ho jayega because the element assume path of its parent in all of his links*/}

            <nav className='host-nav'>

                {/* . represent the current path, .. represent previous path(parent path), */}
                <NavLink to="." end
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Dashboard</NavLink>

                <NavLink to="income"
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Income</NavLink>

                <NavLink to="vans"
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Vans</NavLink>

                <NavLink to="reviews"
                    style={({isActive}) => isActive ? inlineStyle : null}
                >Reviews</NavLink>

            </nav>

            <Outlet></Outlet>
        </>
    )
}

export default Hostlayout
