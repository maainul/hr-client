import React from 'react'

const Input = ({ handleChange, name, value, placeholder, type, classType }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classType}
            name={name}
            onChange={handleChange}
            value={value}
        />
    )
}

export default Input
