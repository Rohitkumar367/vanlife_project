import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
// an Outlet acts as a placeholder in the parent component where the nested routes will be rendered. This is particularly useful for creating layouts with nested routing, where different child components need to be rendered based on the current route.
// It dynamically matches and renders the appropriate child component based on the current URL path.
// When the user navigates to /about, the About component will be rendered in place of the Outlet

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    )
}

export default Layout
