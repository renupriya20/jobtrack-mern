import React from 'react'

const JobCard = () => {
    return (
        <div className='bg-white rounded-xl text-gray-800'>
            <h2 className='text-xl font-bold text-gray-800'>
                Frontend Developer
            </h2>
            <p className='text-gray-600 mt-2'>
                ABC Technologies
            </p>
            <p className='text-gray-500 mt-2'>
                Noida, Uttar Pradesh
            </p>
            <p className='text-gray-500 mt-2'>
                Rs 15,000 - Rs 25,000
            </p>
            <span className='inline-block mt-4 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm'>
                Applies
            </span>
        </div>
    )
}

export default JobCard