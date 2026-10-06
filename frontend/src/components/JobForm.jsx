import React from 'react'

const JobForm = () => {
    return (
        <div>
            <h2>
                Add New Job
            </h2>
            <form>
                <div>
                    <label>
                        Company Name
                    </label>
                    <input type='text' placeholder='Enter Company Name' />
                </div>
                <div>
                    <label>
                        Job Role
                    </label>
                    <input type='text' placeholder='Enter Job Role'/>
                </div>
                <div>
                    <label>
                        Location
                    </label>
                    <input type='text' placeholder='Enter a Location'/>
                </div>
                <div>
                    <label>
                        Application Status
                    </label>
                    <select>
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
