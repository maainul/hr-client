import React from 'react'

const FormValidationErrorMsg = ({ errorMsg, label }) => {

    if (errorMsg.length === 0) return

    return (
        <>
            {
                errorMsg.find(error => error.label === label) && (
                    <div className="text-red-500 text-sm mt-1">
                        {errorMsg.find(error => error.label === label).message}
                    </div>
                )
            }
        </>
    )
}

export default FormValidationErrorMsg
