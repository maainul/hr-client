import React from 'react'
import DashboardCards from '../../components/DashboardCards'
const MainLayout = () => {
    return (
        <>
            <div className='bg-gray-100 min-h-screen'>
                <div className='ml-72 p-8'>
                    <DashboardCards />
                </div>
            </div>
        </>
    )
}

export default MainLayout
