import React from 'react'

const JobForm = () => {
    return (
        <div className='max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                Add New Job
            </h2>
            <form className='space-y-5'>
                <div>
                    <label className='block text-gray-700 mb-2'>
                        Company Name
                    </label>
                    <input type='text' placeholder='Enter Company Name'
                        className='w-full box-decoration-clone border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div>
                    <label className='block text-gray-700 mb-2'>
                        Job Role
                    </label>
                    <input type='text' placeholder='Enter Job Role'
                        className='w-full box-decoration-clone border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div>
                    <label className='block text-gray-700 mb-2'>
                        Location
                    </label>
                    <input type='text' placeholder='Enter a Location'
                        className='w-full box-decoration-clone border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div>
                    <label className='block text-gray-700 mb-2'>
                        Application Status
                    </label>
                    <select className='w-full box-decoration-clone border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Selected</option>
                        <option>Rejected</option>
                    </select>
                </div>

                <button>Add job</button>
            </form>
        </div>
    )
}

export default JobForm
