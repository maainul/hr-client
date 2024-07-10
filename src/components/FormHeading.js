import React from 'react'

const FormHeading = ({ title }) => {
    return (
        <div className="flex justify-center">
            <h2 className="bg-accent text-primary mb-2 lg:mb-8 text-center px-10 lg:px-20 py-2  text-sm lg:text-lg font-bold rounded-sm w-fit items-center">{title}</h2>
        </div>
    )
}

export default FormHeading
