import React, { Children } from 'react'

const Button = () => {
    return (
        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bh-blue-700'>
            {Children}
        </button>
    )
}

export default Button;