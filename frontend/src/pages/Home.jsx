
import React from 'react'
import Button from "../components/Button";

function Home() {
    return (
        <main className='min-h-screen bg-gray-100'>
            <section className='min-w-6xl mx-auto px-6 py-20'>

                <div className='text-center'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
                        Track Your Job Application
                    </h1>
                    <p className='mt-6 text-lg text-gray-600'>
                        Manage your job applications in one simple place.
                    </p>
                    <div className='mt-8'>
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg'>Start Tracking</button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
                    <div className='bg-white p-6 rounded-xl shadow'>
                        <h2 className='text-xl font-bold text-gray-800'>
                            Add Job
                        </h2>
                        <p className='mt-3 text-gray-600'>
                            Save Company Name, Job Roles and Locations.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
                        <h2 className='text-xl font-bold text-gray-800'>
                            Track Prograss
                        </h2>
                        <p className='mt-3 text-gray-600'>
                            Track applied, interview and selection status.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
                        <h2 className='text-xl font-bold text-gray-800'>
                            Stay Organized
                        </h2>
                        <p className='mt-3 text-gray-600'>
                            keep all your job applications in one place.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home