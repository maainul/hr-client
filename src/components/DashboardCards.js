import React from 'react'
import Card from './Card'

const DashboardCards = () => {
    return (
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default DashboardCards
