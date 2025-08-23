import React from 'react'; 

const GroupDetails = () => {
    return (
        <div className='min-h-screen bg-white mt-5 mx-10'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-medium text-gray-900'>Group Details</h1>
                    <p className='text-gray-500 text-sm mt-1'>Manage your group details</p>
                </div>
            </div>
        </div>
    )
}

export default GroupDetails;