import React from 'react'

const FormSectionHeading = ({ title }) => {
    return (
        <div className="bg-accent-secondary py-1 px-2 text-white rounded-md flex justify-between hover:bg-accent hover:cursor-pointer mb-2">
            <div className="font-semibold ">{title}</div>
            <i class="ri-arrow-down-s-line"></i>
        </div>
    )
}

export default FormSectionHeading
