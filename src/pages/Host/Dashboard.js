import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>host's Dashboard</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default Dashboard
