import React from 'react'

const SideBar = () => {
    return (
        <aside className='w-64 min-h-screen bg-white shadow-md p-6'>
            <h2 className='text-xl font-bold text-blue-600 mb-8'>
                JobTack
            </h2>
            <nav className='space-y-4'>
                <a href='/dashbord' className='block text-gray-700 hover:text-blue-600'> 
                    Dashboard
                </a>
                <a href='/jobs' className='block text-gray-700 hover:text-blue-600 '>
                    My Job
                </a>
                <a href='/add-job' className='block text-gray-700 hover:text-blue-600'>
                    Add Job
                </a>
                <a href='/profile' className='block text-gray-700 hover:text-blue-600'>
                    Profile
                </a>

            </nav>
        </aside>
    )
}

export default SideBar