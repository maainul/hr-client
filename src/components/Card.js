import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ len, title, url }) => {
    return (
        <>
            <div className='dashboard_card'>
                <Link to={url}>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-accent'>{len}</h1>
                        <h2 className='text-lg text-secondary'>{title}</h2>
                        <i class="ri-arrow-down-line text-accent-secondary text-2xl hover:cursor-pointer hover:text-red-400"></i>
                    </div>
                </Link>
            </div >
        </>
    )
}


export default Card
