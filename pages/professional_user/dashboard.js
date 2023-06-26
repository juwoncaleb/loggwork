import React from 'react'
import Sidebar from './components/sidebar'
import TopLocation from './components/topLocation'

export default function Dashboard() {
    return (
        <div className='flex'>
            <Sidebar />
            <TopLocation />
        </div>
    )
}
