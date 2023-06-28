import React from 'react'
import Sidebar from './components/sidebar'
import TopLocation from './components/topLocation'
import ProfileView from './components/profileView'
export default function Dashboard() {
    return (
        <div>
            <div className='flex justify-around'>
                <Sidebar />
                <TopLocation />
                <ProfileView />

            </div>

        </div>
    )
}
